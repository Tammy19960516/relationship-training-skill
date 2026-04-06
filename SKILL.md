# SKILL.md — 舔狗训练营 · 训练沙盒总控
# Crush Training Camp · Sandbox Master Control

## Language Rule
**Always respond in the same language the user is using.**
- User writes in Chinese → respond in Chinese
- User writes in English → respond in English
- User switches language mid-session → switch immediately

## Skill 信息 / Skill Info

```
触发词 / Trigger：/crush-training
版本 / Version：v1.0
架构 / Architecture：multi-agent（Persona + Coach + Orchestrator）
平台 / Platform：Claude Code
```

---

## 这是什么

一个恋爱沟通训练系统。

你上传和 crush 的聊天记录，系统构建 ta 的模拟人格。然后你在沙盒里练习对话——从日常闲聊到表白演练——Coach 全程观察，给你真实的反馈。

**不是教你套路。是帮你找到真诚且有效的沟通方式。**

---

## 模块地图

```
SKILL.md（本文件）
├── persona.md          # Crush 模拟人格
├── coach.md            # 训练教练（观察 + 反馈）
├── scene_preset.md     # 6个场景预设库
├── scenario_router.md  # 场景路由与初始化
├── session_reviewer.md # 训练复盘报告生成器
├── runtime_orchestrator.md  # 运行时总控规则
└── memory.md           # 记忆存储模块（持久化档案）
```

---

## 快速开始

```bash
# 新建 crush 档案并开始训练
/crush-training

# 直接进入指定场景（需已有档案）
/crush-training chat      # 日常闲聊
/crush-training icebreak  # 破冰
/crush-training date      # 约出来
/crush-training confess   # 表白演练
/crush-training repair    # 冷战修复
/crush-training custom    # 自定义场景
```

---

## 完整用户旅程

### 第一次使用

```
/crush-training
  ↓
[Step 1] 基础信息录入
  → 花名/代号（必填）
  → 基本信息（可跳过）
  → 性格标签（可跳过）
  ↓
[Step 2] 上传原材料（可跳过）
  → 聊天记录 / 截图 / 口述
  ↓
[Step 3] 系统构建 Crush Persona
  ↓
[Step 4] Persona 预览确认
  ↓
[Step 5] 选择训练场景
  ↓
[Step 6] 选择反馈模式
  → A：实时提示
  → B：事后复盘
  ↓
开始训练
```

### 训练中

```
用户说话 → Persona 回复 → （Coach 提示）→ 循环

/hint          # 主动请求 Coach 提示（复盘模式专用）
/switch {场景}  # 切换训练场景
/end           # 结束训练，生成复盘报告
```

### 训练后

```
复盘报告自动生成
  → 总体评分（5个维度）
  → 本次亮点
  → 改进建议 + 改写示例
  → 关键转折点分析
  → 下次训练建议
```

---

## 文件结构

```
exes/
  └── {slug}/
      ├── SKILL.md           # 完整版入口（本文件）
      ├── persona.md         # Crush 人格文件
      ├── coach.md           # Coach 配置
      ├── meta.json          # 元信息
      ├── sessions/          # 训练记录存档
      │   └── {date}-{scene}.md
      ├── versions/          # 历史版本
      └── materials/         # 原始上传材料
          ├── chats/
          └── social/
```

---

## 安全边界

1. 仅用于个人沟通练习，不提供操控类话术
2. Coach 不给 PUA 建议，不鼓励不健康执念
3. Persona 有硬性禁止项，不突破现实关系边界
4. 所有数据仅本地存储

---

## 结束训练

```bash
/graduate   # 毕业，输出成长总结，关闭训练沙盒
```
