# 动作拓展以及其他易用性功能
为 [Bondage Club](https://www.bondageprojects.elementfx.com/)制作的Mod。

- 详细功能查看以下看板:
  - [Trello](https://trello.com/b/wIleQnF7/xiaosuactivity)
- ~~当前功能:~~
  - ~~动作拓展: 增添若干自定义动作。 - [当前动作数量:28]~~
  - ~~结巴发言 => 将会在说话中添加结巴效果的命令，具体使用说明参考`/xsa jieba`~~
  - ~~导出聊天室聊天记录的命令 。- [具体帮助输入:`/xsa`]~~
  - 以上功能并不是全部功能 请查看[Trello](https://trello.com/b/wIleQnF7/xiaosuactivity)


## 安装方法:
**推荐使用Tampermonkey插件**
**测试版非必要请勿使用，编程水平有限，边学边写。测试版仅作为自己的实验室，出现bug的概率相当高!**

- Tampermonkey
  - 正式版: https://iceriny.github.io/XiaoSuActivity/main/userLoad.user.js
  - 测试版: https://iceriny.github.io/XiaoSuActivity/dev/userLoad_dev.user.js
- 书签:
```code
javascript:(()=>{fetch('https://iceriny.github.io/XiaoSuActivity/main/userLoad.user.js').then(r=>r.text()).then(r=>eval(r));})();
```

## 翻译协作说明: 
- 如果你想帮助完成你使用的语言的翻译，请提交一个PR，在`/translation/`目录下添加一个json文件，文件名格式为`XX.json`，`XX`为语言代码，例如`CN.json`。
- 你可以把现有的`CN.json`文件复制一份，然后修改文件名和其中的值，然后提交PR。
- json文件格式参考[/translation/CN.json](https://github.com/iceriny/XiaoSuActivity/blob/dev/translation/CN.json)。
- 如果你不知道你使用的语言的语言代码，请在游戏页面打开控制台(`F12`)，输入`TranslationLanguage`，然后返回的值就是你的语言代码。