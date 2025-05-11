# ModuKit 模块化工具箱

ModuKit是一个功能强大的模块化工具箱框架，它允许用户通过简单的配置来管理和使用各种工具模块。无论是命令行模式还是图形界面模式，ModuKit都能为您提供流畅的使用体验。

## 特性

- 🎯 模块化设计：每个功能都是独立的模块，易于扩展和维护
- 🌐 跨平台支持：支持Windows、Linux和macOS
- 🖥️ 双模式运行：支持命令行(CLI)和图形界面(GUI)两种模式
- 🔧 配置灵活：通过配置文件轻松自定义应用行为
- 📦 模块管理：支持动态加载和管理模块
- 🔔 系统通知：支持跨平台系统通知
- 🎨 现代化界面：美观的用户界面设计

## 安装

### 系统要求

- Python 3.8 或更高版本
- 支持的操作系统：Windows、Linux、macOS

### 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/modukit.git
cd modukit
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

## 快速开始

### 命令行模式（默认）

直接运行以下命令启动命令行模式：

```bash
python modukit/index.py
```

在命令行模式下，您可以使用以下命令：

- `help` - 显示帮助信息
- `status` - 显示系统状态
- `modules` - 列出所有可用模块
- `open` - 在浏览器中打开Web界面
- `exit` - 退出程序

### 图形界面模式

使用 `--gui` 参数启动图形界面模式：

```bash
python modukit/index.py --gui
```

图形界面模式会打开一个独立的应用程序窗口，提供更直观的操作体验。

### 调试模式

如果需要查看详细的运行日志，可以使用 `--debug` 参数：

```bash
python modukit/index.py --debug
```

## 配置说明

ModuKit的配置文件位于 `modukit/config/default.ini`，您可以根据需要修改以下配置项：

### 窗口设置

```ini
[window]
title = ModuKit - 模块化工具箱
width = 1024
height = 768
resizable = true
fullscreen = false
```

### 服务器设置

```ini
[server]
host = 127.0.0.1
port = 5000
debug = false
```

### 模块设置

```ini
[modules]
enabled = true
auto_load = true
```

## 模块开发

### 模块结构

每个模块都应该包含以下文件：

```
module_name/
├── __init__.py
├── module.py
└── README.md
```

### 创建新模块

1. 在 `modukit/modules` 目录下创建新的模块目录
2. 实现必要的接口
3. 在配置文件中启用模块

## 常见问题

### 1. 无法启动GUI模式

如果GUI模式启动失败，程序会自动回退到命令行模式。请确保：

- 已正确安装所有依赖
- 系统支持GUI显示
- 配置文件中的窗口设置正确

### 2. 模块加载失败

检查：

- 模块目录结构是否正确
- 模块依赖是否已安装
- 配置文件中的模块设置是否正确

## 技术支持

如果您遇到任何问题，请：

1. 查看日志文件
2. 检查配置文件
3. 提交Issue到GitHub仓库

## 贡献指南

我们欢迎任何形式的贡献，包括但不限于：

- 提交Bug报告
- 提出新功能建议
- 提交代码改进
- 完善文档

## 许可证

ModuKit采用MIT许可证。详见 [LICENSE](LICENSE) 文件。 