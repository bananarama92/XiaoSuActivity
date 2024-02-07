import { conDebug, hookFunction, SendChat, MSGType, copyAndDownloadHtmlElement, timeRange } from "utils";
import { BaseModule, _module } from "Modules/BaseModule";

export class ChatroomModule extends BaseModule implements _module {

    public Load(): void {
        // hookFunction("ChatRoomSync", 30, (args, next) => {
        //     conDebug({
        //         name: 'ChatRoomSyncTest',
        //         type: MSGType.DebugLog,
        //         content: args
        //     });
        //     // SendChat("我是! 小酥的小白鼠! 吱吱吱吱~~~");
        //     return next(args);
        // });
        this.stammer("小 酥 必须 时刻 提醒自己 是 莹的私有物", 0.9)

        ChatroomModule.Loaded = true;
    }
    public init(): void {
        this.moduleName = "ChatroomModule";
        this.priority = 30;
    }


    ExportChat(time_limit: timeRange | null = null): void {
        const exportName: string | undefined = `${ChatRoomData?.Name}_${new Date().toLocaleString()}`;

        const mainElement: HTMLElement | null = document.getElementById('TextAreaChatLog')

        copyAndDownloadHtmlElement(mainElement, exportName, time_limit)
    }

    /**
     * 根据空格 自动处理结巴效果
     * @param message 传入的信息
     * @returns 处理后的文本
     */
    stammer(message: string, stammeringProbability: number = 0.5): string {
        const stringArray: string[] = message.split(' ');
        let result = '';

        // 遍历单词数组
        for (let i = 0; i < stringArray.length; i++) {
            // 将当前单词加入结果字符串
            const currentWord: string = stringArray[i];
            result += currentWord;

            // 随机决定是否添加结巴效果
            if (Math.random() < stammeringProbability) { // 假设添加结巴效果的概率为50%
                result += this.addStammerEffect(currentWord);
            }

            // 添加-分隔符，除了最后一个单词外
            if (i < stringArray.length - 1 && Math.random() < stammeringProbability) {
                result += '-';
            }
        }

        // 调试日志输出处理后的结果
        conDebug({
            name: 'stammer',
            type: MSGType.DebugLog,
            content: result
        });

        return result;
    }
    // 添加结巴效果的辅助方法
    private addStammerEffect(word: string, depth: number = 0): string {
        // 设置最大递归深度
        const maxDepth = 3;
        // 如果递归深度达到最大值，返回原单词
        if (depth >= maxDepth) {
            return word;
        }
        // 在这里实现添加结巴效果的逻辑，可以是随机的字符、重复的部分、乱序等等
        const randomNumber: number = Math.random();
        let result: string = randomNumber < 0.5 ? '...' : `-${word}`;

        if (Math.random() < 0.2) {
            result = this.addStammerEffect(result, depth + 1);
        }
        return result;
    }
}