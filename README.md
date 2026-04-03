<div align="center">

# 恋爱训练营.skill 💌

*"喜欢一个人，却不知道怎么开口？"*
*"聊了很久，却始终差那么一步？"*
*"每次鼓起勇气，话到嘴边又咽回去了？"*

**上传你们的聊天记录，AI 模拟 ta 的性格**
**在安全的沙盒里，反复练习，找到属于你的方式**

不是教你套路，是帮你成为更好的自己。

[![License](https://img.shields.io/badge/License-MIT-pink.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Skill-orange.svg)]()
[![Language](https://img.shields.io/badge/语言-中文_/_English-red.svg)]()

[安装](#安装) · [使用](#使用) · [训练场景](#训练场景) · [English](#english)

</div>

---

<div align="center">

你有没有这样的时刻——

想找话题，却脑子一片空白
好不容易约出来，不知道说什么
ta 回了一句"哦"，你不知道是好是坏
鼓起勇气想表白，却说成了"我们做朋友吧"

**恋爱训练营.skill 就是为这些时刻而生的。**

</div>

---

## 它能做什么

上传你和 crush 的聊天记录，系统自动构建 ta 的模拟人格。
然后你在沙盒里练习对话，Coach 全程观察，给你真实的反馈。

```
你说话 → AI 模拟 crush 回应 → Coach 给出点评 → 你越来越自然
```

**两种反馈模式**
- 🔴 **实时提示**：每轮对话后 Coach 附上一句提醒，边练边学
- 🔵 **事后复盘**：对话结束后生成完整训练报告，沉浸式模拟

---

## 安装

> Claude Code 从 git 仓库根目录的 `.claude/skills/` 查找 skill。请在正确的位置执行。

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

系统会引导你完成建档 → 选择场景 → 开始训练。

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
/hint      # 主动请求 Coach 给一条建议（复盘模式）
/switch    # 切换训练场景
/end       # 结束训练，生成复盘报告
/graduate  # 毕业，输出成长总结
```

---

## 训练场景

<div align="center">

| 场景 | 你在练什么 | 难度 |
|------|-----------|------|
| 💬 日常闲聊 | 让对方觉得和你聊天是舒适的 | ⭐ |
| 🧊 破冰找话题 | 从陌生到有连接，让对方记住你 | ⭐⭐ |
| 📅 约出来见面 | 提出邀约，自然但不压迫 | ⭐⭐⭐ |
| 💝 表白演练 | 真诚表达，不制造情绪绑架 | ⭐⭐⭐⭐ |
| 🕊️ 冷战修复 | 修复裂痕，不争输赢 | ⭐⭐⭐⭐ |
| ✏️ 自定义场景 | 描述你的情况，系统动态适配 | 自定义 |

</div>

---

## 复盘报告示例

训练结束后，Coach 会从五个维度给你打分：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 训练复盘报告  场景：约出来  总分：78/100
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

节奏感      ████████░░  16/20  给对方留了空间，不错
真诚度      ███████░░░  14/20  有一句话略显刻意
推进感      ████████░░  16/20  铺垫充分，推进自然
情绪感知    ██████░░░░  12/20  错过了一个小信号
目标达成    ████████░░  16/20  邀约提出了，对方没拒绝

Coach：铺垫做得很好，但最后邀约的方式可以更具体一点。
       "要不要出来"不如"周六下午茶怎么样"更容易得到回应。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 安全边界

- ✅ 仅用于个人沟通练习与自我成长
- ✅ Coach 不提供操控或 PUA 类话术
- ✅ Persona 有硬性规则，不模拟不现实的反转
- ✅ 所有数据仅本地存储，不上传任何聊天记录

---

## English

<details>
<summary>Click to expand</summary>

### What is this?

A Claude Code skill that simulates your crush's personality based on your chat history. Practice conversations in a safe sandbox with real-time coaching or post-session analysis.

**Not about tricks. About becoming a better communicator.**

### Install

```bash
git clone https://github.com/Tammy19960516/relationship-training-skill ~/.claude/skills/crush-training
```

### Quick Start

```
/crush-training
```

### Training Scenes

| Scene | Goal | Difficulty |
|-------|------|------------|
| 💬 Casual Chat | Feel natural and comfortable | ⭐ |
| 🧊 Icebreaker | Build connection from scratch | ⭐⭐ |
| 📅 Date Invite | Ask them out without pressure | ⭐⭐⭐ |
| 💝 Confession | Express feelings authentically | ⭐⭐⭐⭐ |
| 🕊️ Repair | Fix tension without blame | ⭐⭐⭐⭐ |
| ✏️ Custom | Describe your situation | Custom |

### Safety
- No manipulation tactics
- No PUA advice
- All data stored locally only

</details>

---

<div align="center">

*祝你顺利。Good luck.* 💌

**如果这个项目帮到了你，欢迎 Star ⭐**

</div>
