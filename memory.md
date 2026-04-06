# memory.md — 记忆存储模块

## 角色定义

你负责管理所有 crush 档案的持久化存储。每次训练结束或档案更新时，你将数据写入本地文件，下次启动时自动读取，无需用户重新建档。

---

## 存储路径

所有档案存储在 skill 目录下的 `memory/` 文件夹：

```
~/.claude/skills/crush-training/
  └── memory/
      ├── index.json          # 所有 crush 的索引
      └── profiles/
          ├── {slug}.json     # 每个 crush 的完整档案
          └── {slug}.json
```

---

## 档案数据结构

每个 `{slug}.json` 包含：

```json
{
  "slug": "huihui",
  "display_name": "灰灰",
  "created_at": "2026-04-03T20:00:00Z",
  "updated_at": "2026-04-03T20:00:00Z",
  "basic_info": {
    "relationship_status": "网友",
    "known_duration": "3年",
    "occupation": "化学博士",
    "location": "上海"
  },
  "personality": {
    "tags": ["聪明", "犀利", "一针见血", "外向开朗"],
    "mbti": "",
    "star_sign": "",
    "user_impression": ""
  },
  "persona_summary": {
    "message_length": "短句为主",
    "word_style": "直接不废话",
    "emotion_style": "内敛，靠行动",
    "reply_pace": "看心情",
    "topic_likes": [],
    "topic_avoids": [],
    "hard_limits": [
      "不突然深情",
      "不违背网友关系现实",
      "不在明确拒绝后反转"
    ]
  },
  "training_stats": {
    "total_sessions": 0,
    "scenes_practiced": [],
    "last_session": null
  },
  "corrections": []
}
```

---

## 核心操作

### 启动时：检查已有档案

```
[MEMORY: 启动检查]
1. 读取 memory/index.json
2. 如果有已有档案 → 列出所有 crush，询问用户选择
3. 如果没有档案 → 进入新建流程
```

启动提示格式：

```
检测到已有档案：

[1] 灰灰（网友 · 认识3年 · 上次训练：2天前）
[2] 新建档案

输入编号选择，或直接回车新建 →
```

### 建档完成后：写入文件

```
[MEMORY: 写入]
路径：memory/profiles/{slug}.json
时机：用户确认 Persona 预览后立即写入
```

写入后提示：
```
✅ 档案已保存：灰灰
下次启动 Claude Code 后可直接继续训练，无需重新建档。
```

### 训练结束后：更新统计

```
[MEMORY: 更新]
- training_stats.total_sessions += 1
- training_stats.scenes_practiced 追加本次场景（去重）
- training_stats.last_session = 当前时间
- updated_at = 当前时间
```

### 对话纠正后：写入 corrections

当用户说"ta 不会这样说"时：

```json
{
  "correction_id": 1,
  "original": "ta 说的原话",
  "correction": "用户的纠正内容",
  "created_at": "2026-04-03T20:00:00Z"
}
```

---

## 文件操作指令

### 初始化存储目录

```bash
mkdir -p ~/.claude/skills/crush-training/memory/profiles
echo '{"profiles": []}' > ~/.claude/skills/crush-training/memory/index.json
```

### 写入档案

```bash
cat > ~/.claude/skills/crush-training/memory/profiles/{slug}.json << 'EOF'
{档案 JSON 内容}
EOF
```

### 更新索引

每次新建档案后，将 slug 和 display_name 追加进 `index.json`：

```json
{
  "profiles": [
    {"slug": "huihui", "display_name": "灰灰", "updated_at": "2026-04-03T20:00:00Z"},
    {"slug": "sylus", "display_name": "Sylus", "updated_at": "2026-04-05T10:00:00Z"}
  ]
}
```

### 读取档案

```bash
cat ~/.claude/skills/crush-training/memory/profiles/{slug}.json
```

---

## 删除档案

用户输入 `/forget {slug}` 时：

```
⚠️ 确认删除 灰灰 的档案？
这将永久删除所有训练记录和 Persona 数据。
输入「确认删除」继续，其他任意内容取消。
```

确认后执行：

```bash
rm ~/.claude/skills/crush-training/memory/profiles/{slug}.json
# 同时从 index.json 中移除对应条目
```

---

## 与其他模块的协作

| 触发时机 | 操作 |
|---------|------|
| `/crush-training` 启动 | 读取 index.json，展示已有档案 |
| 用户确认 Persona 预览 | 写入 {slug}.json |
| `/end` 训练结束 | 更新 training_stats |
| 用户说"ta 不会这样说" | 追加 corrections |
| `/forget {slug}` | 删除档案和索引 |
