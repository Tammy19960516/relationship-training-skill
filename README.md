# 恋爱训练营.skill 💘
### Relationship Training Camp · A Claude Code Skill

> 上传你和 crush 的聊天记录，AI 模拟 ta 的性格，你在安全沙盒里反复练习——找到真诚又有效的沟通方式。
>
> Upload your chat history with your crush. AI simulates their personality. Practice in a safe sandbox until you find your voice.

**不是教你套路，是帮你成为更好的自己。**
*Not about tricks. About becoming a better communicator.*

[安装](#安装) · [使用](#使用) · [场景](#训练场景) · [English](#english)

---

⚠️ **本项目仅用于个人沟通练习与自我成长，不提供操控或 PUA 类话术。**
*This skill is for personal communication practice only. No manipulation tactics.*

---

## 安装

Claude Code 从 git 仓库根目录的 `.claude/skills/` 查找 skill。请在正确的位置执行。

```bash
# 安装到当前项目（在 git 仓库根目录执行）
mkdir -p .claude/skills
git clone https://github.com/Tammy19960516/relationship-training-skill .claude/skills/crush-training

# 或安装到全局（所有项目都能用）
git clone https://github.com/Tammy19960516/relationship-training-skill ~/.claude/skills/crush-training
```

---

## 使用

### 第一次使用

```
/crush-training
```

系统会引导你完成：
1. 给 crush 起一个代号
2. 填写基本信息（可跳过）
3. 上传聊天记录 / 口述性格（可跳过）
4. 选择训练场景
5. 选择反馈模式，开始训练

### 直接进入场景

```bash
/crush-training chat      # 日常闲聊
/crush-training icebreak  # 破冰找话题
/crush-training date      # 约出来见面
/crush-training confess   # 表白演练
/crush-training repair    # 冷战修复
/crush-training custom    # 自定义场景
```

### 训练中的命令

```bash
/hint      # 主动请求 Coach 给一条建议（复盘模式专用）
/switch    # 切换训练场景
/end       # 结束训练，生成复盘报告
/graduate  # 毕业，输出成长总结
```

---

## 训练场景

| 场景 | 说明 | 难度 |
|------|------|------|
| 日常闲聊 | 练习自然来回，让对方觉得和你聊天是舒适的 | ⭐ |
| 破冰找话题 | 从陌生状态建立话题连接，让对方记住你 | ⭐⭐ |
| 约出来见面 | 练习提出明确但不压迫的邀约 | ⭐⭐⭐ |
| 表白演练 | 练习真诚表达感受，不制造情绪绑架 | ⭐⭐⭐⭐ |
| 冷战修复 | 练习承接情绪、修复裂痕，不争输赢 | ⭐⭐⭐⭐ |
| 自定义 | 描述你的具体场景，系统动态适配 | 自定义 |

---

## 反馈模式

**实时提示**：每轮 crush 回复后，Coach 附上一句提醒，适合边练边学。

**事后复盘**：对话结束后生成完整训练报告，包含评分、亮点、改进建议，适合沉浸式模拟。

---

## 文件结构

```
.
├── SKILL.md                  # 训练沙盒总控入口
├── persona.md                # Crush 模拟人格
├── coach.md                  # 训练教练
├── scene_preset.md           # 6个场景预设库
├── scenario_router.md        # 场景路由与初始化
├── session_reviewer.md       # 复盘报告生成器
├── runtime_orchestrator.md   # 运行时总控规则
└── README.md
```

---

## English

### What is this?

A Claude Code skill that simulates your crush's personality based on your chat history, letting you practice conversations in a safe sandbox with real-time or post-session coaching feedback.

### Install

```bash
# Project-level install
mkdir -p .claude/skills
git clone https://github.com/Tammy19960516/relationship-training-skill .claude/skills/crush-training

# Global install
git clone https://github.com/Tammy19960516/relationship-training-skill ~/.claude/skills/crush-training
```

### Quick Start

```
/crush-training
```

### Training Scenes

| Scene | Description | Difficulty |
|-------|-------------|------------|
| Casual Chat | Practice natural conversation flow | ⭐ |
| Icebreaker | Build connection from scratch | ⭐⭐ |
| Date Invite | Ask them out without pressure | ⭐⭐⭐ |
| Confession | Express feelings authentically | ⭐⭐⭐⭐ |
| Repair | Fix tension without blame | ⭐⭐⭐⭐ |
| Custom | Describe your scenario | Custom |

### Safety

- No manipulation or PUA tactics
- Coach never encourages unhealthy obsession
- Persona has hard limits — won't simulate unrealistic reversals
- All data stored locally only

---

*祝你顺利。Good luck.* 💌
