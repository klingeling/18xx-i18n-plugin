/*******************************************************************************

    locals.js - 搭配用户脚本插件`18xx 中文化插件`的页面匹配规则, 翻译忽略规则,
                词条库文件
*/
var I18N = {};

I18N.conf = {
    /**
     * 匹配 pathname 页面的正则
     *
     * 注册页面 /signup
     * 导入仓库 /new/import
     * ...
     */
    rePagePath: /^\/($|profile|about|game|tutorial|new_game|hotseat|signup|login|forgot|map|market|tiles)/,

    /**
     * 忽略区域的 class 正则
     *
     * 代码编辑器 内容 代码高亮 CodeMirror
     * 代码高亮 blob-code
     * 仓库名和用户名 repo-and-owner (已知出现在: 应用安装授权页和设置页 选定仓库)
     * 文件,目录位置栏 |js-path-segment|final-path
     * 文件列表 files js-navigation-container js-active-navigation-container
     * 评论内容等 js-comment-body
     * 评论编辑区域 comment-form-textarea
     * 文件搜索模式 js-tree-finder-virtual-filter
     * 仓库文件列表 js-navigation-open Link--primary
     * 快捷键 按键 js-modifier-key
     * 洞察-->流量-->热门内容列表 capped-list-label
     * realease 页面 描述主体 markdown-body my-3
     * f4 my-3
     * 仓库页 用户名/仓库名 标题 AppHeader-globalBar-start 新版全局导航
     * 提交的用户名 commit-author
     * 搜索页 搜索结果 search-match
     */
    reIgnoreClass: /(CodeMirror|blob-code|highlight-.*|repo-and-owner|js-path-segment|final-path|files js-navigation-container|js-comment-body|comment-form-textarea|markdown-title|js-tree-finder-virtual-filter|js-navigation-open Link--primary|js-modifier-key|capped-list-label|blob-code blob-code-inner js-file-line|pl-token|Link--primary no-underline text-bold|markdown-body my-3|f4 my-3|react-code-text|react-file-line|AppHeader-globalBar-start|commit-author|search-match)/,
    keyClass: /^18xx\.Games$|^18xx$|^\. Games$|^,$|^[A-Z]+$|^[A-Z]+\*$|^[A-Z]+\d+$|[\u4e00-\u9fa5]+|^ame$|^ntities$|^ap$|^nfo$|^iles$|^preadsheet$|^o$|^4, 3\/5$|^5, 4\/6$|^6, 7\/8$|^\$180, \$160$|^\$500, \$450$|^\$800, \$900$|^PRR \$\d+$|^NYC \$\d+$|^B&O \$\d+$|^GT \$\d+$|^IC \$\d+$|^ERIE \$\d+$|^C&O \$\d+$|^L 5$|^L 6$|^\*L 5$|^\*L 6$|^C&O\*$|^B&O\*$|^O&I$|^C&A$|^N&W$|^C&A$/,
    userCompanyClass: /^(klingeling|weatherlight|gogyes|cutebeast|MadFedor|MadFedor|CountVonBlucher|Skollvaldr|BIG4|B&O|C&O|C&WI|IC\*|GT\*|B&O\*|NYC\*|Player \d+|JonasWZ|Caesling|CommodoreVanDerWin|ventusignis|Raven|Kuchengabel|CommodoreVan\.\.\.)$|^bob$|^Cydore$|^tgoodburn$|^debeerzerker$|^Rooster$/,

    /**
     * 忽略区域的 itemprop 属性正则
     * name 列表页 仓库名
     * author 仓库页 作者名称
     * additionalName 个人主页 附加名称
     */
     reIgnoreItemprop: ['name', 'author', 'additionalName'],
     reIgnorehrefprop: ['#market'],
    /**
     * 忽略区域的 特定元素id 正则
     * offset /blob页面 符号-->引用
     */
     reIgnoreId: ['readme', 'offset', 'breadcrumb', 'file-name-id', ],

    /**
     * 忽略区域的 标签 正则
     * /i 规则不区分大小写
     */
     reIgnoreTag: ['CODE', 'SCRIPT', 'STYLE', 'LINK', 'IMG', 'MARKED-TEXT', 'PRE', 'KBD'],
    // marked-text --> 文件搜索模式/<user-name>/<repo-name>/find/<branch> 文件列表条目
    // ^script$ --> 避免勿过滤 notifications-list-subscription-form
    // ^pre$ --> 避免勿过滤

};

I18N.zh = {};

I18N.zh["title"] = { // 标题翻译
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
        [/18Chesapeake: Off the Rails/, "18切萨皮克: 狂野之路"],
        [/18Chesapeake/, "18切萨皮克"],
        [/Shikoku 1889/, "四国 1889"],
        [/Rolling Stock Stars/, "交运之星"],
        [/Rolling Stock/, "翻滚吧!股票"],
        [/1846 2p Variant/, "1846 两人游戏变体"],
        [/1846: The Race for the Midwest/, "1846: 美国中西部铁路竞速"],
        [/Uncle Lachlan's 18 Christmas Eve/, "拉克伦叔叔的 18 平安夜"],
        [/1830: Railways & Robber Barons/, "1830: 铁路与资本大鳄"],
        [/1868 Wyoming/, "1868 怀俄明"],
    ],
};

I18N.zh["pubilc"] = { // 公共区域翻译
    "static": { // 静态翻译
        "undefined": "未定义",
        "About": "关于",
        "Game": "游戏",
        "History": "历史",
        "Signup": "注册",
        "Login": "登录",
        "Game Info": "游戏信息",
        "Published by": "出版商为",
        "Rules": "规则",
        "Market": "市场",
        "Cancel": "取消",
        "Confirm End Game": "确认结束游戏",
        "Known Issues": "已知问题",
        "More info": "更多信息",
        "Hotseat Games": "热座模式游戏",
        "New Games": "新创建的游戏",
        "Your Games": "你的游戏",
        "Active Games": "进行中的游戏",
        "Finished Games": "已结束的游戏",
        "Invite only game": "仅限邀请游戏",
        "Leave": "离开",
        "Invite": "邀请",
        "Live": "实时",
        "Async": "异步",
        "Prev": "上一页",
        "Next": "下一页",
        "Email or Username": "邮箱或用户名",
        "Password": "密码",
        "Forgot Password": "忘记密码",
        "User Name": "用户名",
        "Email": "邮箱",
        "Notifications": "通知",
        "Review": "回看",
        "Auto Routing": "自动线路",
        "Join": "加入",
        "Start": "开始",
        "This game has not started yet": "这局游戏还未开始",
        "Delete": "删除",
        "Confirm": "确认",
        "Enter": "进入",
        "Archived": "已归档",
        "None": "无",
        "Learn about Notifications": "了解通知",
        "Turn/Message Notifications": "回合/消息通知方式",
        "Log ✅": "日志 ✅",
        "Chat ✅": "聊天 ✅",
        "Log ❌": "日志 ❌",
        "Chat ❌": "聊天 ❌",
        "Copy Transcript 📋": "复制到剪贴板 📋",
        "Game log transcript copied to clipboard": "游戏日志记录已复制到剪贴板",
        "You cannot make changes while browsing history. Press >| to navigate to the current game action.": "浏览历史记录时无法进行更改。按 >| 导航到当前游戏动作。",
        "Undo": "撤销",
        "Undo – shortcut: ctrl+z": "撤销 – 快捷键: ctrl+z",
        "Undo to Here": "撤销到此处",
        "Review from Here": "从此处回看",
        "Redo": "恢复",
        "Redo – shortcut: ctrl+y": "恢复 – 快捷键: ctrl+y",
        "Restart Last Turn": "重新开始上一回合",
        "Restart Turn": "重新开始回合",
        "Pass": "略过",
        "Skip": "跳过",
        "Copied invite link to clipboard; you can share this link with other players to invite them to the game": "已将邀请链接复制到剪贴板; 你可以与其他玩家共享此链接以邀请他们参加游戏",
        "Allows players to request automatic route suggestions. Using them is optional.": "允许玩家寻求自动线路的建议。使用它们是可选的。",
        "Owner: You": "所有者: 你",
        "Loading game...": "加载游戏...",
        "Order": "顺位",
        "Tokens": "车站",
        "Corporation": "股份公司",
        "Prices": "价格",
        "Players": "玩家",
        "Hide unfloated": "隐藏未上市公司",
        "Hide not floated corporations": "隐藏未上市公司",
        "Show unfloated": "展示未上市公司",
        "Show all corporations": "展示所有公司",
        "Show Delta Values": "展示变化价值",
        "Show Total Values": "展示总价值",
        //gamename
        "Shikoku 1889": "四国 1889",
        "18Chesapeake": "18切萨皮克",
        "Chesapeake Bay Region, USA": "美国切萨皮克湾区",
        "1888-N": "1888-华北",
        "North China": "华北地区",
        "18Chesapeake: The Birth of American Railroads": "18切萨皮克: 北美铁路的诞生",
        "18Chesapeake: Off the Rails": "18切萨皮克: 狂野之路",
        "Off the Rails": "狂野之路",
        "Rolling Stock Stars": "交运之星",
        "Rolling Stock": "翻滚吧!股票",
        "1846: The Race for the Midwest": "1846: 美国中西部铁路竞速",
        "1846 2p Variant": "1846 两人游戏变体",
        "Guarantee 2E and C&O": "确保 2E 和 C&O",
        "1st Edition Private Companies": "第一版私有公司",
        "Uncle Lachlan's 18 Christmas Eve": "拉克伦叔叔的 18 平安夜",
        "1830: Railways & Robber Barons": "1830: 铁路与资本大鳄",
        "Buy Multiple Brown Shares From IPO": "从 IPO 购买多张棕色股票",
        "1868 Wyoming": "1868 怀俄明",
        "Short Squeeze": "空头挤压",
        "5 Shorts": "5 股空头",
        "Modern Trains": "现代火车",
        "Volatility Expansion": "多样性扩展",


        "Show": "展示",
        "Hide": "隐藏",
        "Copy": "复制",
        "Download": "下载",
        "Clone Game": "克隆游戏",
        "Game Data": "游戏数据",
        "Help": "帮助",
        "Auto Router Settings": "自动线路设置",
        "Master Mode ❌": "主机模式 ❌",
        "Master Mode ✅": "主机模式 ✅",
        "Your player color": "你的玩家颜色",
        "Option Info": "选项信息",
        "Previous Action – hotkey: ArrowLeft": "上个行动 – 快捷键: ←",
        "Next Action – hotkey: ArrowRight": "下个行动 – 快捷键: →",
        "Start – hotkey: Home": "开始 – 快捷键: Home",
        "Current Action – hotkey: End": "当前行动 – 快捷键: End",
        "Reset zoom to 100 % – hotkey: 0": "重置缩放至 100 % – 快捷键: 0",
        "hotkey: c – esc to leave": "快捷键: c – esc 以离开",
        "Previous Round – hotkey: ArrowUp": "上个轮次 – 快捷键: ↑",
        "Next Round – hotkey: ArrowDown": "下个轮次 – 快捷键: ↓",
        "Password reset sent!": "密码重置已发送!",
        "Error rendering game card": "渲染游戏卡牌时出错",

        "plain": "素色",
        "yellow": "黄色",
        "green": "绿色",
        "brown": "棕色",
        "gray": "灰色",
        "black": "黑色",
        "red": "红色",
        "blue": "蓝色",
        "purple": "紫色",
        "orange": "橙色",
        "sepia": "深褐色",
        "gray60": "灰色60",
        "gray50": "灰色50",
        "gray40": "灰色40",
        "salmon": "鲑鱼色",
        //companyname
    },
    "regexp": [ // 正则翻译
        /**
           * 匹配时间格式
           *
           * 月 日 或 月 日, 年
           * Mar 19, 2015 – Mar 19, 2016
           * January 26 – March 19
           * March 26
           *
           * 不知道是否稳定, 暂时先试用着. 2016-03-19 20:46:45
           *
           * 更新于 2021-10-04 15:19:18
           * 增加 带介词 on 的格式,on 翻译不体现
           * on Mar 19, 2015
           * on March 26
           *
           * 更新于 2021-10-10 13:44:36
           * on 星期(简写), 月 日 年  // 个人访问令牌 有效期
           * on Tue, Nov 9 2021
           * on Tue Nov 9 2021
           * 2021-10-19 12:04:19 融合更多规则
           *
           * 4 Sep
           * 30 Dec 2020
           *
           * on 4 Sep
           * on 30 Dec 2020
           *
           * 2021-11-22 12:51:57 新增 格式
           *
           * 星期(全称), 月 日, 年 // 仓库-->洞察-->流量 图示标识
           * Sunday, November 14, 2021
           * 
           * Tue Aug 08 2023 07:07:12 
           * 
           * Tip:
           * 正则中的 ?? 前面的字符 重复0次或1次
           * 正则中的 ?: 非捕获符号(即关闭圆括号的捕获能力) 使用方法 (?: 匹配规则) -->该匹配不会被捕获 为 $数字
           */
        [/(?:on |)(?:(\d{1,2}) |)(?:(Sun(?:day)?|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?)(?:,|) |)(?:(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)??|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:,? |$))(\d{4}|)(\d{1,2}|)(?:,? (\d{4})|)(?:(?:,|) (\d{1,2}:(?:\d{1,2})(?::\d{1,2}|))|)/g, function (all, date1, week, month, year1, date2, year2, time) {
            var weekKey = {
                "Sun": "周日",
                "Mon": "周一",
                "Tue": "周二",
                "Wed": "周三",
                "Thu": "周四",
                "Fri": "周五",
                "Sat": "周六",
            };
            var monthKey = {
                "Jan": "1月",
                "Feb": "2月",
                "Mar": "3月",
                "Apr": "4月",
                "May": "5月",
                "Jun": "6月",
                "Jul": "7月",
                "Aug": "8月",
                "Sep": "9月",
                "Oct": "10月",
                "Nov": "11月",
                "Dec": "12月"
            };
            var date = date1 ? date1 : date2;
            var year = year1 ? year1 : year2;
            return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + (date ? date + '日' : '') + (week ? ', ' + weekKey[week.substring(0, 3)] : '') + (time? ', ' + time: '');
        }],
        /**
         * 相对时间格式处理
         *
         * 更新于 2021-11-21 16:47:14
         * 1. 添加 前缀词
         *    over xxx ago // 里程碑页面 最后更新时间
         *    about xxx ago // 里程碑页面 最后更新时间
         *    almost xxx ago // 里程碑页面 最后更新时间
         *    less than xxx ago // 导出帐户数据
         * 2. xxx之内的相对时间格式
         *  in 6 minutes // 拉取请求页面
         *
         * 更新于 2021-11-22 11:54:30
         * 1. 修复 Bug: 意外的扩大了匹配范围(不带前缀与后缀的时间) 干扰了带有相对时间的其他规则
         *  7 months
         */
        [/^just now|^now|^last month|^yesterday|(?:(over|about|almost|in) |)(an?|\d+)(?: |)(second|minute|hour|day|month|year)s?( ago|)/, function (all, prefix, count, unit, suffix) {
            if (all === 'now') {
                return '现在';
            }
            if (all === 'just now') {
                return '刚刚';
            }
            if (all === 'last month') {
                return '上个月';
            }
            if (all === 'yesterday') {
                return '昨天';
            }
            if (count[0] === 'a') {
                count = '1';
            } // a, an 修改为 1

            var unitKey = { second: '秒', minute: '分钟', hour: '小时', day: '天', month: '个月', year: '年' };

            if (suffix) {
                return (prefix === 'about' || prefix === 'almost' ? '大约 ' : prefix === 'less than' ? '不到 ' : '') + count + ' ' + unitKey[unit] + (prefix === 'over' ? '多之前' : '之前');
            } else {
                return count + ' ' + unitKey[unit] + (prefix === 'in' ? '之内' : '之前');
            }
        }],
        /**
         * 匹配时间格式 2
         *
         * in 5m 20s
         */
        [/^(?:(in) |)(?:(\d+)m |)(\d+)s$/, function (all, prefix, minute, second) {
            all = minute ? minute + '分' + second + '秒' : second + '秒';
            return (prefix ? all + '之内' : all);
        }],
        [/^Profile \((.*)\)$/, "简介 ($1)"],
        [/^Designed by (.+) and (.+)/, "设计师为 $1 和 $2"],
        [/^Designed by /, "设计师为 "],
        [/^Implemented by/, "实现者为"],
        [/^Players:/, "玩家:"],
        [/^Description:/, "描述:"],
        [/^Seats:/, "座位:"],
        [/^Round:/, "轮次:"],
        [/^Result:/, "结果:"],
        [/^Optional Rules:/, "可选规则:"],
        [/^Game: (.*)$/, function (all, gamename) {
            return "游戏名: " + (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename)
        }],
        [/^Owner:/, "所有者:"],
        [/^Created:/, "创建于:"],
        [/^Updated:/, "更新于:"],
        [/^Ended:/, "结束于:"],
        [/^Stock (\d+)$/, "股票轮 $1"],
        [/^Auction (\d+)$/, "竞拍轮 $1"],
        [/^Operating (\d+)$/, "运营轮 $1"],
        [/^Draft (\d+)$/, "轮抽轮 $1"],
        [/^Merger (\d+)$/, "合并轮 $1"],
        [/^Investment (\d+)$/, "投资轮 $1"],
        [/^IPO (\d+)$/, "IPO 轮 $1"],
        [/^Dividends (\d+)$/, "分红轮 $1"],
        [/^Acquisition (\d+)$/, "收购轮 $1"],
        [/^Issue (\d+)$/, "发行轮 $1"],
        [/^Closing (\d+)$/, "停业轮 $1"],
        [/Rules$/, "规则"],
        [/^Kick (.+)!$/, "把 $1 踢出去!"],
    ],
    "time-regexp": [ // 时间正则翻译专项
            /**
             * 匹配时间格式
             *
             * 月 日 或 月 日, 年
             * Mar 19, 2015 – Mar 19, 2016
             * January 26 – March 19
             * March 26
             *
             * 不知道是否稳定, 暂时先试用着. 2016-03-19 20:46:45
             *
             * 更新于 2021-10-04 15:19:18
             * 增加 带介词 on 的格式,on 翻译不体现
             * on Mar 19, 2015
             * on March 26
             *
             * 更新于 2021-10-10 13:44:36
             * on 星期(简写), 月 日 年  // 个人访问令牌 有效期
             * on Tue, Nov 9 2021
             *
             * 2021-10-19 12:04:19 融合更多规则
             *
             * 4 Sep
             * 30 Dec 2020
             *
             * on 4 Sep
             * on 30 Dec 2020
             *
             * 2021-11-22 12:51:57 新增 格式
             *
             * 星期(全称), 月 日, 年 // 仓库-->洞察-->流量 图示标识
             * Sunday, November 14, 2021
             *
             * Tip:
             * 正则中的 ?? 前面的字符 重复0次或1次
             * 正则中的 ?: 非捕获符号(即关闭圆括号的捕获能力) 使用方法 (?: 匹配规则) -->该匹配不会被捕获 为 $数字
             */
            [/(?:on |)(?:(\d{1,2}) |)(?:(Sun(?:day)?|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?)(?:,|) |)(?:(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)??|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)(?:,? |$))(\d{4}|)(\d{1,2}|)(?:,? (\d{4})|)/g, function (all, date1, week, month, year1, date2, year2) {
                var weekKey = {
                    "Sun": "周日",
                    "Mon": "周一",
                    "Tue": "周二",
                    "Wed": "周三",
                    "Thu": "周四",
                    "Fri": "周五",
                    "Sat": "周六",
                };
                var monthKey = {
                    "Jan": "1月",
                    "Feb": "2月",
                    "Mar": "3月",
                    "Apr": "4月",
                    "May": "5月",
                    "Jun": "6月",
                    "Jul": "7月",
                    "Aug": "8月",
                    "Sep": "9月",
                    "Oct": "10月",
                    "Nov": "11月",
                    "Dec": "12月"
                };
                var date = date1 ? date1 : date2;
                var year = year1 ? year1 : year2;
                return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + (date ? date + '日' : '') + (week ? ', ' + weekKey[week.substring(0, 3)] : '');
            }],
            /**
             * 相对时间格式处理
             *
             * 更新于 2021-11-21 16:47:14
             * 1. 添加 前缀词
             *    over xxx ago // 里程碑页面 最后更新时间
             *    about xxx ago // 里程碑页面 最后更新时间
             *    almost xxx ago // 里程碑页面 最后更新时间
             *    less than xxx ago // 导出帐户数据
             * 2. xxx之内的相对时间格式
             *  in 6 minutes // 拉取请求页面
             *
             * 更新于 2021-11-22 11:54:30
             * 1. 修复 Bug: 意外的扩大了匹配范围(不带前缀与后缀的时间) 干扰了带有相对时间的其他规则
             *  7 months
             */
            [/^just now|^now|^last year|^last month|^last week|^yesterday|(?:(over|about|almost|in) |)(an?|\d+)(?: |)(second|minute|hour|day|month|year|week)s?( ago|)/, function (all, prefix, count, unit, suffix) {
                if (all === 'now') {
                    return '现在';
                }
                if (all === 'just now') {
                    return '刚刚';
                }
                if (all === 'last year') {
                    return '最近 1 年';
                }
                if (all === 'last month') {
                    return '上个月';
                }
                if (all === 'last week') {
                    return '上周';
                }
                if (all === 'yesterday') {
                    return '昨天';
                }
                if (count[0] === 'a') {
                    count = '1';
                } // a, an 修改为 1

                var unitKey = { second: '秒', minute: '分钟', hour: '小时', day: '天', month: '个月', year: '年', week: '周' };

                if (suffix) {
                    return (prefix === 'about' || prefix === 'almost' ? '大约 ' : prefix === 'less than' ? '不到 ' : '') + count + ' ' + unitKey[unit] + (prefix === 'over' ? '多之前' : '之前');
                } else {
                    return count + ' ' + unitKey[unit] + (prefix === 'in' ? '之内' : '之前');
                }
            }],
            [/(\d+)(h|d|w|m)/, function (all, count, suffix) {
                var suffixKey = { h: '小时', d: '天', w: '周', m: '个月' };

                return count + ' ' + suffixKey[suffix] + '之前';
            }],
    ],
    "selector": [ // 元素筛选器规则
        // ["a[aria-label='Pull requests you created']", "拉取请求"], // 顶部条 拉取请求
        ["a[onclick='return false'] > span:nth-child(1)", "游戏("],
        ["a[onclick='return false'] > span:nth-child(2)", "G"],
        ["a[onclick='return false'] > span:nth-child(3)", ")"],
        // ["a[href='#entities']", "实体"],
        ["a[href='#entities'] > span:nth-child(1)", "实体("],
        ["a[href='#entities'] > span:nth-child(2)", "E"],
        ["a[href='#entities'] > span:nth-child(3)", ")"],
        // ["a[href='#map']", "地图"],
        ["a[href='#map'] > span:nth-child(1)", "地图("],
        ["a[href='#map'] > span:nth-child(2)", "M"],
        ["a[href='#map'] > span:nth-child(3)", ")"],
        // ["a[href='#market']", "市场"],
        ["a[href='#market'] > span:nth-child(1)", "市场("],
        ["a[href='#market'] > span:nth-child(2)", "K"],
        ["a[href='#market'] > span:nth-child(3)", ")"],
        // ["a[href='#info']", "信息"],
        ["a[href='#info'] > span:nth-child(1)", "信息("],
        ["a[href='#info'] > span:nth-child(2)", "I"],
        ["a[href='#info'] > span:nth-child(3)", ")"],
        // ["a[href='#tiles']", "板块"],
        ["a[href='#tiles'] > span:nth-child(1)", "板块("],
        ["a[href='#tiles'] > span:nth-child(2)", "T"],
        ["a[href='#tiles'] > span:nth-child(3)", ")"],
        // ["a[href='#spreadsheet']", "统计表"],
        ["a[href='#spreadsheet'] > span:nth-child(1)", "统计("],
        ["a[href='#spreadsheet'] > span:nth-child(2)", "S"],
        ["a[href='#spreadsheet'] > span:nth-child(3)", ")"],
        // ["a[href='#tools']", "工具"],
        ["a[href='#tools'] > span:nth-child(1)", "工具("],
        ["a[href='#tools'] > span:nth-child(2)", "O"],
        // ["a[href='#tools'] > span:nth-child(3)", ")"],
        // ["a[href='#auto']", "自动"],
        ["a[href='#auto'] > span:nth-child(1)", "自动("],
        ["a[href='#auto'] > span:nth-child(2)", "A"],
        // ["a[href='#auto'] > span:nth-child(3)", ")"],
    ],
};

I18N.zh["profile"] = { // 个人资料翻译
    "static": { // 静态翻译
        "Profile Settings": "个人信息设置",
        "Statistics": "统计",
        "Show Individual Statistics on Profile Page": "在简介页面上展示个人统计信息",
        "Display": "显示",
        "Red 18xx.games Logo": "红色18xx.games标志",
        "Main Background": "主背景",
        "Main Font Color": "主字体颜色",
        "Alternative Background": "备选背景",
        "Alternative Font Color": "备选字体颜色",
        "Your Turn": "你的回合",
        "Hotseat Game": "热座游戏",
        "Map & Tile Colors": "地图和板块颜色",
        "Routes, Trains & Players": "线路, 火车和玩家",
        "Color": "颜色",
        "Width": "宽度",
        "Dash": "虚线",
        "Save Changes": "保存更改",
        "Reset to Defaults": "重置为默认值",
        "Logout": "登出",
        "Delete Account and All Data": "删除账户和所有数据",
        "Type DELETE to confirm": "键入 DELETE 进行确认",
        "Your Statistics": "你的统计数据",
        "Elo Rating": "等级分",
        "Number of Plays": "游玩次数",
        "Overall": "总计",
        "* Updated daily. Only fully completed games are eligible.": "* 每日更新。只有完整完成的游戏才被统计。",
        "Your Active Games": "你进行中的游戏",
        "Your Finished Games": "你已完成的游戏",
        "color of route, train and player 1 (you)": "线路, 火车和玩家 1 (你) 的颜色",
        "width of route on map": "地图上线路的宽度",
        "dash/gap lengths of route on map, for help hover/click header": "地图上线路的线段/间隔的长度, 悬停/单击标题以获取帮助",
        "5 = dash 5, gap 5, [repeat] 15 5 7.5 5 = dash 15, gap 5, dash 7.5, gap 5, [repeat] hex width (side to side) = 174": "5 = 线段 5, 间隔 5, [重复]\n15 5 7.5 5 = 线段 15, 间隔 5, 线段 7.5, 间隔 5, [重复]\n六角格宽度(边到边) = 174",
        "Confirmation not correct": "确认信息不正确",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",

    },
    "regexp": [ // 正则翻译
        [/Route (?=\d)/, "线路 "],
        [/^color of route, train and player (\d+)$/, "线路, 火车和玩家 $1 的颜色"],
        [/^(.+)'s Active Games$/, "$1 进行中的游戏"],
        [/^(.+)'s Finished Games$/, "$1 已结束的游戏"],
        [/^(.+)'s Statistics$/, "$1 的统计信息"],
    ],
};

I18N.zh["homepage"] = { // 主页翻译
    "static": { // 静态翻译
        "1840 is now (finally) in production.": "1840 现在(终于)是正式版本了。",
        "1868 Wyoming is now in alpha.": "1868 怀俄明 现在是 alpha 版本。",
        "Learn how to get": "了解如何收到",
        "notifications": "通知",
        "by email, Slack, Discord, and Telegram.": "通过邮箱, Slack, Discord 和 Telegram。",
        "Please submit problem reports and make suggestions for improvements on": "请提交问题报告和提出改进建议于",
        ". Join the": "。加入",
        ". to chat about 18xx and the website.": ". 讨论交流18xx游戏和本网站。",
        "The": "这个",
        "has rules, maps, and other information about all the games, along with an FAQ.": "网站有关于所有游戏的规则、地图和其他信息, 以及常见问题解答。",
        "Support our publishers:": "支持我们的发行商:",
        ", and": ", 和",
        "You can support this project on": "您可以支持此项目在",
        ".": "。",
        "18xx.games is a website where you can play async or real-time 18xx games (based on the system originally devised by the brilliant Francis Tresham)! If you are new to 18xx games then Shikoku 1889, 18Chesapeake, or 18MS are good games to begin with.": "18xx.games 是一个可以异步或实时游玩18xx游戏的网站 (基于才华横溢的 Francis Tresham 最初设计的系统)! 如果您是18xx游戏的新手, 那么四国 1889, 18切萨皮克 或 18MS 都是不错的入门游戏。",
        "You can play locally with hot seat mode without an account. If you want to play multiplayer, you'll need to create an account.": "你可以在没有帐户的情况下使用热座模式进行本地游戏。如果想进行多人模式, 你需要创建一个帐户。",
        "If you look at other people's games, you can make moves to play around but it won't affect them and changes won't be saved. You can clone games in the tools tab and then play around locally.": "如果观战其他人的游戏, 你可以四处移动, 但这不会影响他们, 更改也不会保存。您可以在\"工具\"选项卡中克隆游戏, 然后在本地游玩。",
        "In multiplayer games, you'll also be able to make moves for other players, this is so people can say 'pass me this SR' and you don't need to wait. To use this feature in a game, enable \"Master Mode\" in the Tools tab. Please use it politely!": "在多人模式中, 你还可以替代其他玩家行动, 这样玩家就可以说\"我略过这个股票轮\", 而不需要花时间等待。要在游戏中使用此功能, 请在\"工具\"选项卡中启用\"主机模式\"。请礼貌地使用它!",
        "Send a message (Please keep discussions to 18xx)": "发送一条消息 (请保持讨论 18xx 游戏)",
        "CREATE A NEW GAME": "创建一局新游戏",
        "TUTORIAL": "教程",
        "Filters": "筛选",
        "Reset filters": "重置筛选",
        "(All titles)": "(所有名称)",
        //可选规则
    },
    "regexp": [ // 正则翻译
        [/^Welcome( ?.*)!$/, "欢迎$1!"],
    ],
};

I18N.zh["new_game"] = { // 创建新游戏页面翻译
    "static": { // 静态翻译
        "Create New Game": "创建新游戏",
        "If you are new to 18xx games then Shikoku 1889, 18Chesapeake or 18MS are good games to begin with.": "如果您是18xx游戏的新手, 那么四国 1889、18切萨皮克 或 18MS 都是不错的入门游戏。",
        "Multiplayer": "多人模式",
        "Hotseat": "热座模式",
        "Import hotseat game": "导入热座模式游戏",
        "Upload file": "上传文件",
        "Add a title": "添加一个标题",
        "Paste JSON game data or upload a file.": "粘贴 JSON 游戏数据或上传一个文件。",
        "Game Variants / Optional Rules": "游戏变体 / 可选规则",
        "Create": "创建",
        "Optional random seed": "可选随机种子",
        "Description": "描述",
        "Players": "玩家",
        "Player Names": "玩家名称",
        "Min Players": "最小玩家人数",
        "Max Players": "最大玩家人数",
        "Production": "正式版",
        "Beta": "Beta 版",
        "Alpha": "Alpha 版",
        "Prototype, Production": "原型规则, 正式版",
        "Prototype, Beta": "原型规则, Beta 版",
        "Prototype, Alpha": "原型规则, Alpha 版",
        "Status": "状态",
        "Location": "地点",
        "Title": "标题",
        "Game Options": "游戏选项",
        "Search by Keyword": "按关键字搜索",
        //game
        "Off the Rails: fewer trains, float at 50%, 1882-like stock market": "狂野之路: 更少的火车, 50%可上市, 类似 1882 的股票市场",
        "1888-N: North Map (3-6 players)": "1888-华北: 华北地图 (3-6 名玩家)",
        "WARNING: No option selected. Will use North map with prototype rules": "警告: 未选择任何选项。将使用带有原型规则的北方地图",
        "2p Variant: unofficial rules for two players": "两人游戏变体: 两名玩家的非官方规则",
        "1st Edition Private Companies: Exclude the 2nd Edition companies Boomtown and Little Miami": "第一版私有公司: 不包括第二版公司中的新兴城市和小迈阿密",
        "Guarantee 2E and C&O: Ensure that Boomtown, Little Miami, and Chesapeake & Ohio Railroad are not removed during setup.": "确保 2E 和 C&O: 确保新兴都市(BT), 小迈阿密(LM)和切萨皮克俄亥俄铁路公司(C&O)在初始设置时不被移除。",
        "Buy Multiple Brown Shares From IPO: Multiple brown shares may be bought from IPO as well as from pool": "从 IPO 购买多张棕色股票: 可以从 IPO 和银行池中购买多张棕色股票",
        "Short Squeeze: Corporations with > 100% player ownership move a second time at end of SR": "空头挤压: 玩家持股超过 100% 的公司在股票轮结束时股价再次移动",
        "5 Shorts: Only allow 5 shorts on 10 share corporations": "5 股空头: 只允许 10 股股票公司有 5 股空头",
        "Modern Trains: 7 & 8 trains earn $10 & $20 respectively for each station marker of the corporation": "现代火车: 7 和 8 级火车分别为公司的每个车站标记赚取 $10 和 $20",
        "Volatility Expansion: 13 additional private companies and a modified initial auction": "多样性扩展: 13 家新增的私有公司和一个修改过的初始竞拍",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
    },
    "regexp": [ // 正则翻译
    ],
};

I18N.zh["game"] = { // 游戏页面翻译
    "static": { // 静态翻译
        ...I18N.zh["pubilc"]["static"],
        "uto": ")",
        "uto ✅": ") ✅",
        "ols": ")",
        "ols 📝": ") 📝",
        "and": "和",
        "Optional rules used in this game:": "本局游戏中使用的可选规则:",
        "PRIVATE COMPANY": "私 有 公 司",
        "The Bank": "银行",
        "Bank": "银行",
        "Companies": "公司",
        "Company": "公司",
        "Income": "营收",
        "Cash": "现金",
        "Value": "价值",
        "Liquidity": "流动资产",
        "Certs": "票证",
        "Committed": "承诺",
        "Available": "可用",
        "Shares": "股票",
        "Price": "价格",
        "Shareholder": "股东",
        "Priority Deal": "优先交易",
        "Shareholder": "股东",
        "Tiles": "板块",
        "Yellow": "黄色",
        "Green": "绿色",
        "Brown": "棕色",
        "Gray": "灰色",
        "Red": "红色",
        "Yellow, Green": "黄色, 绿色",
        "Yellow, Green, Brown": "黄色, 绿色, 棕色",
        "Yellow, Green, Brown, Gray": "黄色, 绿色, 棕色, 灰色",
        "Status": "状态",
        "Trains": "火车",
        "Type": "类型",
        "Remaining": "剩余",
        "Upgrade Discount": "升级折扣",
        "Rusts": "淘汰",
        "obsoletes": "过时",
        "Phases out": "逐步淘汰",
        "Event": "事件",
        "Events": "事件",
        "Companies Close": "公司停业",
        "All companies unless otherwise noted are discarded from the game": "除非另有说明, 否则所有私有公司都将从游戏中移除",
        "Description": "描述",
        "Trains in Bank Pool": "银行里的火车",
        "No Trains in Bank Pool": "银行里没有火车",
        "Can Buy Companies": "可以购买公司",
        "Buy Companies": "购买公司",
        "All corporations can buy companies from players": "所有股份公司可以从玩家处购买公司",
        "Timeline": "时间轴",
        "At the end of each set of ORs the next available non-permanent (2, 3 or 4) train will be exported (removed, triggering phase change as if purchased)": "在每一完整的运营轮结束时, 下一辆可用的非永久性(2, 3 或 4)级火车将被出口 (从游戏中移除, 同样会触发阶段变更如同被购买一样。)",
        "Reasons for End of Game": "结束游戏的原因",
        "Reason": "原因",
        "Timing": "时机",
        "Immediately": "立即",
        "Any player is bankrupt": "任何玩家破产",
        "All but one player is bankrupt": "除一名玩家外其余玩家均破产",
        "The bank runs out of money": "银行资金用尽",
        "The final train is purchased": "最后一辆火车被购买",
        "Next end of a complete OR set": "完整运营轮结束后",
        "End of the next complete OR set after the current one": "当前轮之后的下一完整运营轮结束后",
        "Game Phases": "游戏阶段",
        "Phase": "阶段",
        "On Train": "火车类型",
        "ORs": "运营轮",
        "Train Limit": "火车上限",
        "Par value": "发行价",
        "Par Price:": "发行价:",
        "Buy": "购买",
        "Place Bid": "出价",
        "Bidders:": "出价者:",
        "Upcoming Trains": "未来的火车",
        "No Upcoming Trains": "无未来的火车",
        "Use @player command to ping a player": "使用 @player 命令 ping 一名玩家",
        "Buy IPO Share": "购买 IPO 股票",
        "Buy Market Share": "购买市场股票",
        "Buy Treasury Share": "购买金库股票",
        "Auto pass": "自动略过",
        "Pass (Buy)": "略过 (购买)",
        "Pass (Share)": "略过 (股票)",
        "Pass (Token)": "略过 (车站)",
        "Pass (Bid)": "略过 (出价)",
        "Order: ": "顺序: ",
        "Draft Round": "轮抽轮",
        "Auction Round": "竞拍轮",
        "Stock Round": "股票轮",
        "Operating Round": "运营轮",
        "Merger Round": "合并轮",
        "Bid on Companies": "私有公司竞拍",
        "Choose Corporation Par Value": "设定公司发行价",
        "Sell then Buy Shares": "卖出然后买入股票",
        "Game Over": "游戏结束",
        "Pay or Withhold Dividends": "派发或保留股息",
        "Buy/Use Companies": "购买/使用私有公司",
        "Buy or Sell Shares": "买入或者卖出股票",
        "Lay/Upgrade Track": "铺设/升级轨道",
        "Run Routes": "运营线路",
        "Lay Track": "铺设轨道",
        "Place a Token": "放置一个车站",
        "Buy Trains": "购买火车",
        "bid": "出价",
        "par": "上市",
        "buy_shares": "购买股票",
        "the IPO": " IPO ",
        "the market": "市场",
        "moves left": "左",
        "moves right": "右",
        "moves up": "上",
        "moves down": "下",
        "Hide trains from other players": "隐藏其他玩家的火车",
        "Show trains from other players": "展示其他玩家的火车",
        "Skip (Companies)": "跳过 (公司)",
        "Skip (Track)": "跳过 (轨道)",
        "Skip (Trains)": "跳过 (火车)",
        "Skip (Token)": "跳过 (车站)",
        "Skip (Share)": "跳过 (股票)",
        "Skip (Issue)": "跳过 (发行)",
        "Skip (Token/Track)": "跳过 (车站/轨道)",
        "Done (Token/Track)": "完成 (车站/轨道)",
        "Done (Trains)": "完成 (火车)",
        "Done (Track)": "完成 (轨道)",
        "Done (Share)": "完成 (股票)",
        "Player Colors ❌": "玩家颜色 ❌",
        "Simple Logos ❌": "简单标记 ❌",
        "Location Names ❌": "地点名称 ❌",
        "Hex Coordinates ❌": "六角格坐标 ❌",
        "Starting Map ❌": "起始地图 ❌",
        "Tile Names ❌": "板块名称 ❌",
        "Player Colors ✅": "玩家颜色 ✅",
        "Simple Logos ✅": "简单标记 ✅",
        "Location Names ✅": "地点名称 ✅",
        "Hex Coordinates ✅": "六角格坐标 ✅",
        "Starting Map ✅": "起始地图 ✅",
        "Tile Names ✅": "板块名称 ✅",
        "Show Last Route and Tile For:": "展示上一次线路和板块:",
        "Available Trains": "可用火车",
        "Remaining Trains": "剩余火车",
        "Train": "火车",
        "Cost": "花费",
        "Qty": "数量",
        "Sold": "出售",
        "Last Run:": "上次运行:",
        "[withheld]": "[不分红]",
        "The Depot": "公开市场",
        "Game Over": "游戏结束",
        "Bankruptcy": "破产",
        "Exchange Trains": "交换火车",
        "Exchange": "交换",
        "Dividend": "股息",
        "Treasury": "金库",
        "Per Share": "每股",
        "Stock Moves": "股票走势",
        "Select Routes": "选择线路",
        "Prior routes are autofilled.": "先前线路将自动填充。",
        "Click revenue centers, again to cycle paths.": "再次点击收入中心以循环路径。",
        "Used": "已用",
        "Revenue": "收入",
        "Route": "线路",
        "Clear Train": "清除火车",
        "Clear All": "清除所有",
        "Reset": "重置",
        "Auto": "自动",
        "Abilities:": "能力:",
        "Abilities": "能力",
        "Ability": "能力",
        "the Treasury": "金库",
        "Place a Token or Lay Track": "放置一个车站或铺设板块",
        "End of the current round": "本轮结束",
        "Corporation enters end game trigger on stock market": "公司股价达到游戏结束触发条件",
        "Company hit max stock value": "公司股价达到最大值",
        "to play around in hotseat mode": "以热座模式游玩",
        "You can move for others": "你可以为其他玩家行动",
        "Enable to move for others": "启用为其他玩家行动",
        "seconds": "秒",
        "Path timeout:": "路径超时时间:",
        "You may want to increase path timeout as more cities are connected with dense trackage, if you get suboptimal routes.": "随着更多城市与密集轨道的连接, 如果你得到了次优线路, 那么可能需要增加路径超时时间。",
        "Copied Data": "已复制数据",
        "Hotkeys & Shortcuts": "快捷键 & 快捷方式",
        "Open wiki: hotkeys & shortcuts": "打开 wiki: 快捷键 & 快捷方式",
        "Later Phase": "之后阶段",
        "OR History": "运营轮历史",
        "[withheld] ¦half-paid¦": "[不分红] ¦半分红¦",
        "Bank Broken": "银行破产",
        "Draft": "轮抽",
        "-- The bank has broken --": "-- 银行已破产 --",
        "Auto Actions": "自动操作",
        "Auto actions allow you to preprogram your moves ahead of time. On asynchronous games this can shorten a game considerably.": "自动操作可以让你提前对行动进行预编程。在异步游戏中, 这可以大大缩短游戏时间。",
        "Please note, these are not secret from other players.": "请注意, 这些对其他玩家并不是机密的。",
        "Please read this for more details when it will deactivate": "请阅读这个以了解何时停用的更多详细信息",
        "No auto actions available. You are not a player in this game.": "自动操作不可用。你不是这局游戏的玩家。",
        "Auto Buy Shares": "自动购买股票",
        "Auto Buy Shares (Enabled)": "自动购买股票 (已启用)",
        "Auto pass in Stock Round": "自动略过股票轮",
        "Auto pass in Investment Phase": "自动略过投资阶段",
        "Auto pass in Stock Round (Enabled)": "自动略过股票轮 (已启用)",
        "Auto pass in Investment Phase (Enabled)": "自动略过投资阶段 (已启用)",
        "Auto pass in Closing Round": "自动略过停业轮",
        "Auto pass in Closing Round (Enabled)": "自动略过停业轮 (已启用)",
        "Automatically pass in the Stock Round. This will deactivate itself if other players do actions that may impact you. It will only pass on your normal turn and allow you to bid etc.": "自动地略过股票轮。如果其他玩家做出可能影响你的行为, 这将使其自身失效。它只会略过你的正常回合, 并允许你出价等行动。",
        "Automatically pass in the Investment Phase. It will only pass on your normal turn and will still allow you to bid etc.": "自动地略过投资阶段。它只会略过你的正常回合, 并允许你出价等行动。",
        "Automatically pass in the close companies phase. This will persist from turn to turn. It will deactivate itself when you control a company with negative income, unless configured not do so.": "自动地略过停业轮。这将在每个回合中持续。当你控制一家收入为负的公司时, 它会自行禁用, 除非配置它不这样。",
        "Automatically buy shares in a corporation. This will deactivate itself if other players do actions that may impact you. It will also deactivate if there are multiple share sizes (5%, 10%, 20%) available for purchase.": "自动地购买公司股票。如果其他玩家做出可能影响你的行为, 这将使其自身失效。如果有多种份额大小 (5%, 10%, 20%) 可供购买, 它也将停用。",
        "Buy from Market until at": "从市场购买直到",
        "Buy from IPO until at": "从 IPO 购买直到",
        "share(s)": "股",
        "Switch to auto-pass after successful completion.": "成功完成后切换到自动略过。",
        "Enable": "启用",
        "Disable": "禁用",
        "Update": "更新",
        "Pass even if other players do actions that may impact you.": "即使其他玩家做出可能影响你的行为, 也要略过。",
        "Continue passing in future Stock Rounds as well.": "在之后的股票股票轮中继续保持自动略过。",
        "Continue passing in future Investment Phases as well.": "在之后的投资阶段中继续保持自动略过。",
        "Continue to pass even when one of your companies has negative income": "即使你的一家公司的收入为负, 也继续保持自动略过",
        "Discard Trains": "弃置火车",
        "Discard Train": "弃置火车",
        "Show companies from other players": "展示其他玩家的公司",
        "Hide companies from other players": "隐藏其他玩家的公司",
        "Private Notepad": "私人记事本",
        "Contents are autosaved and will not be seen by other players.": "内容将自动保存, 其他玩家是看不到的。",
        "Until float": "直到上市",
        "None Left": "无剩余",
        "Optional Rules Used": "使用的可选规则",
        "The Discard": "弃置区",
        "Route is not connected": "线路未被连接",
        "Submit (Invalid Route)": "提交 (无效线路)",
        "If the game is modified due to a design change, games will be pinned": "如果由于设计更改而修改游戏, 游戏将被锁定",
        "No corporations have shares available to buy, cannot program!": "没有股份公司的股票可供购买, 无法编程!",
        "Corporation Symbol": "股份公司符号",
        "Private notepad with autosave. Contents will not be seen by other players.": "带有自动保存功能的私人记事本。内容将不会被其他玩家看到。",
        "Sort": "排序",
        "Show Companies": "展示公司",
        "Hide Companies": "隐藏公司",
        "Choose": "选择",
        "-- Programmed action 'Pass in Stock Round' removed due to round change": "-- 由于轮次更改, 程序动作 \"略过股票轮\" 已移除",
        "Accept": "接受",
        "Reject": "拒绝",
        "1 right": "1 →",
        "2 right": "2 →",
        "3 right": "3 →",
        "1 left": "1 ←",
        "2 left": "2 ←",
        "3 left": "3 ←",
        "*L 7": "*限 7",
        "*L 6": "*限 6",
        "*L 5": "*限 5",
        "L 7": "限 7",
        "L 6": "限 6",
        "L 5": "限 5",
        "Declare Bankruptcy": "宣布破产",
        "": "",
        "": "",
        "": "",


        // 18Chesapeake
        "Corporation shares do not count towards cert limit": "公司股票不计入票证上限",
        "Cornelius Vanderbilt closes": "科尼利尔斯 • 范德比尔特铁路公司关闭",
        "Corporation shares can be held above 60%": "公司股票可持有超过 60%",
        "Can buy more than one share in the corporation per turn": "可以单次购买多张公司股票",
        "Send any player a notification (via email/webhooks) by tagging them in game chat: @username": "在游戏聊天中 @任何玩家, 向他们发送通知 (通过电子邮件/Webhooks): @用户名",
        "End Game": "结束游戏",
        "You may want to increase route timeout when a RR has 3 or more trains, if you get suboptimal routes.": "当一次线路运行有 3 辆或 3 辆以上火车时, 如果线路不理想, 你可能需要增加线路超时时间。",
        "Route timeout:": "线路超时时间:",
        "Withhold": "不分红",
        "Pay Out": "全分红",
        "Half Pay": "半分红",
        "Sell/Buy/Sell Shares": "卖出/买入/卖出股票",
        "End game trigger": "触发游戏结束",
        // 18Chesapeake_location
        "Pittsburgh": "匹兹堡",
        "Ohio": "俄亥俄",
        "West Virginia Coal": "西弗吉尼亚煤矿区",
        "Charleroi & Connellsville": "沙勒罗伊 & 康奈尔斯维尔",
        "Green Spring": "格林斯普林",
        "Lynchburg": "林奇堡",
        "Berlin": "柏林",
        "Leesburg": "利斯堡",
        "Charlottesville": "夏洛茨维尔",
        "Hagerstown": "黑格斯敦",
        "Fredericksburg": "弗雷德里克斯堡",
        "Harrisburg": "哈里斯堡",
        "Washington DC": "华盛顿 DC",
        "Columbia": "哥伦比亚",
        "Richmond": "里士满",
        "Strasburg": "斯特拉斯堡",
        "Baltimore": "巴尔的摩",
        "Norfolk": "诺福克",
        "Wilmington": "威明顿",
        "Delmarva Peninsula": "德尔马瓦半岛",
        "Allentown": "爱伦镇",
        "Philadelphia": "费城",
        "Camden": "肯顿",
        "Easton": "伊斯顿",
        "Trenton & Amboy": "特伦顿 & 安博伊",
        "Burlington & Princeton": "伯林顿 & 普林斯顿",
        "New York": "纽约",

        "Washington": "华盛顿",
        "Charleroi &": "沙勒罗伊 &",
        "Connellsville": "康奈尔斯维尔",
        "West Virginia": "西弗吉尼亚",
        "Coal": "煤矿区",
        "Delmarva": "德尔马瓦",
        "Peninsula": "半岛",
        "Trenton": "特伦顿",
        "& Amboy": "& 安博伊",
        "Burlington": "伯林顿",
        "& Princeton": "& 普林斯顿",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",

        // 18Chesapeake_company
        "Baltimore & Ohio Railroad": "巴尔的摩俄亥俄铁路公司",
        "Camden & Amboy Railroad": "肯顿安博伊铁路公司",
        "Chesapeake & Ohio Railroad": "切萨皮克俄亥俄铁路公司",
        "Lehigh Valley Railroad": "理海谷铁路公司",
        "Norfolk & Western Railway": "诺福克西方铁路公司",
        "Pittsburgh and Lake Erie Railroad": "匹兹堡伊利湖铁路公司",
        "Pennsylvania Railroad": "宾夕法尼亚铁路公司",
        "Strasburg Rail Road": "斯特拉斯堡铁路公司",
        "Delaware and Raritan Canal": "特拉华拉里坦运河公司(D&R)",
        "Columbia - Philadelphia Railroad": "哥伦比亚费城铁路公司(C-P)",
        "Baltimore and Susquehanna Railroad": "巴尔的摩萨斯奎哈纳铁路公司(B&S)",
        "Chesapeake and Ohio Canal": "切萨皮克俄亥俄运河公司(C&OC)",
        "Cornelius Vanderbilt": "科尼利尔斯 · 范德比尔特铁路公司(CV)",
        "No special ability. Blocks hex K3 while owned by a player.": "没有特殊能力。当拥有人为玩家时, 封阻 K3 六角格。",
        "Blocks hexes H2 and I3 while owned by a player. The owning corporation may lay two connected tiles in hexes H2 and I3. Only #8 and #9 tiles may be used. If any tiles are played in these hexes other than by using this ability, the ability is forfeit. These tiles may be placed even if the owning corporation does not have a route to the hexes. These tiles are laid during the tile laying step and are in addition to the corporation’s tile placement action.": "当拥有人为玩家时, 封阻 H2 和 I3 六角格。拥有它的股份公司可以在 H2 和 I3 六角格铺设两块彼此相连的板块。仅能使用 #8 和 #9 轨道板块。如果其中的任一六角格, 已在本特殊能力以外的情况下放置了任何板块, 则该特殊能力失效。即使拥有它的股份公司还未有线路连通至这些六角格, 这些板块依然可以被放置。这些板块的铺设需在铺设板块步骤中进行, 并且其作为额外的公司放置板块行动。",
        "Blocks hexes F4 and G5 while owned by a player. The owning corporation may lay two connected tiles in hexes F4 and G5. Only #8 and #9 tiles may be used. If any tiles are played in these hexes other than by using this ability, the ability is forfeit. These tiles may be placed even if the owning corporation does not have a route to the hexes. These tiles are laid during the tile laying step and are in addition to the corporation’s tile placement action.": "当拥有人为玩家时, 封阻 F4 和 G5 六角格。拥有它的股份公司可以在 F4 和 G5 六角格铺设两块彼此相连的板块。仅能使用 #8 和 #9 轨道板块。如果其中的任一六角格, 已在本特殊能力以外的情况下放置了任何板块, 则该特殊能力失效。即使拥有它的股份公司还未有线路连通至这些六角格, 这些板块依然可以被放置。这些板块的铺设需在铺设板块步骤中进行, 并且其作为额外的公司放置板块行动。",
        "Blocks hex D2 while owned by a player. The owning corporation may place a tile in hex D2. The corporation does not need to have a route to this hex. The tile placed counts as the corporation’s tile lay action and the corporation must pay the terrain cost. The corporation may then immediately place a station token free of charge.": "当拥有人为玩家时, 封阻 D2 六角格。拥有它的股份公司可以在 D2 六角格放置一块板块。股份公司无须有线路连通至本六角格。该板块的放置视为该股份公司的板块铺设行动, 并且该公司必须支付地形费用。然后, 公司可以立即在 D2 六角格中免费放置一个车站标记。",
        "Purchasing player immediately takes a 10% share of the B&O. This does not close the private company. This private company has no other special ability.": "购买玩家立即获得巴尔的摩俄亥俄股份公司 10% 的股票。本私有公司没有其它特殊能力。",
        //18Chesapeake_log
        "-- Event: Private companies close --": "-- 事件: 私有公司关闭 --",
        "Baltimore and Susquehanna Railroad loses the ability to lay F4,G5": "巴尔的摩萨斯奎哈纳铁路公司(B&S)失去在 F4,G5 铺设板块的能力",
        "Columbia - Philadelphia Railroad loses the ability to lay H2,I3": "哥伦比亚费城铁路公司(C-P)失去在 H2,I3 铺设板块的能力",
        "Not your turn. Turn on master mode under the Tools menu to act for others.": "不是你的回合。在 \"工具\" 菜单栏下打开 \"主机模式\" 即可为其他玩家行动。",
        "Paths must be connected": "路径必须相连接",
        "Lay Track for Baltimore and Susquehanna Railroad": "使用巴尔的摩萨斯奎哈纳铁路公司(B&S)铺设轨道",



        //1846
        //"Chi": "芝加哥",
        "Issue": "发行",
        "Draft Companies": "轮抽公司",
        "Pass (1)": "放弃 (1)",
        "Pass (2)": "放弃 (2)",
        "Pass (3)": "放弃 (3)",
        "Pass (4)": "放弃 (4)",
        "Pass (5)": "放弃 (5)",
        "Hide Player": "隐藏玩家",
        "Show Player": "展示玩家",
        "Choose this card if you don't want to purchase any of the offered companies this turn.": "如果你不想在这轮购买提供的任何公司, 请选择这张卡。",
        "Boomtown": "新兴城市(BT)",
        "The owning corporation may place a $20 marker in Cincinnati (H12), to add $20 to all of its routes run to this location.": "拥有它的铁路公司可以在辛辛那提 (H12) 放置一个 $20 的标记物, 以使其所有到达该地点的线路收益都增加 $20。",
        "Lake Shore Line": "湖滨线(LSL)",
        "The owning corporation may make an extra $0 cost tile upgrade of either Cleveland (E17) or Toledo (D14), but not both.": "拥有它的铁路公司可以在克利夫兰 (E17) 或托莱多 (D14) 进行一次额外的免费升级。",
        "Michigan Central": "密歇根中部(MC)",
        "The owning corporation may lay up to two extra $0 cost yellow tiles in the MC's reserved hexes (B10, B12). The owning corporation does not need to be connected to those hexes. If two tiles are laid, they must connect to each other.": "拥有它的铁路公司可以在为该私有公司预留的六角格内 (B10, B12) 额外免费铺设至多 2 个黄色铁路板块。拥有它的铁路公司不必与这些六角格相连。如果使用其放置了 2 个铁路板块, 则这 2 个铁路板块必须互相连接。",
        "Steamboat Company": "汽船公司(SC)",
        "At the beginning of each Operating Round, the owning player may assign the Steamboat Company to a corporation/minor and to a port location (B8, C5, D14, G19, I1). Once per Operating Round, the owning corporation may assign the Steamboat Company to a port location. Add $20 per port symbol to all routes run to the assigned location by the owning/assigned corporation/minor.": "在每个私有公司的收入阶段，汽船公司的所有者可以其港口标记物将分配给一家铁路公司/独立铁路公司, 和一个港口地点 (B8, C5, D14, G19, I1)。拥有它的铁路公司在其运营线路前, 可以将汽船公司的港口标记物分配到一个港口地点。标记物上的每个港口标记可使拥有/分配给它的铁路公司的所有线路在运营到该地点时的收益增加 $20。",
        "Chicago and Western Indiana": "芝加哥西印第安纳(C&WI)",
        "Reserves a token slot in Chicago (D6), in the city next to E7. The owning corporation may place an extra token there at no cost, with no connection needed. Once this company is purchased by a corporation, the slot that was reserved may be used by other corporations.": "在 E7 旁边的城市芝加哥 (D6) 有一个预留的车站空位。拥有它的铁路公司可以在该地免费放置一个额外的车站, 无需连接。一旦它被其他公司购买, 所预留的空位可以被其他公司放置车站。",
        "Mail Contract": "邮递契约(MAIL)",
        "Adds $10 per location visited by any one train of the owning corporation. Never closes once purchased by a corporation.": "拥有它的铁路公司的其中一辆火车到达的每个地点都可以增加 $10。一旦被铁路公司购买, 永远不会关闭。",
        "Big 4": "四大城(BIG4)",
        "Starts with $40 in treasury, a 2 train, and a token in Indianapolis (G9). In ORs, this is the second minor to operate. Splits revenue evenly with owner. Buyer pays an extra $60 (\"debt\").": "起始拥有 $40 资金、一辆 2 级火车和一个位于印第安纳波利斯 (G9) 的车站。必须半分红。购买者额外支付 $60 (\"债务\")。",
        "Michigan Southern": "密歇根南部(MS)",
        "Starts with $60 in treasury, a 2 train, and a token in Detroit (C15). In ORs, this is the first minor to operate. Splits revenue evenly with owner. Buyer pays an extra $80 (\"debt\").": "起始拥有 $60 资金、一辆 2 级火车和一个位于底特律 (C15) 的车站。必须半分红。购买者额外支付 $80 (\"债务\")。",
        "Ohio & Indiana": "俄亥俄印第安纳(O&I)",
        "The owning corporation may lay up to two extra $0 cost yellow tiles in the O&I's reserved hexes (F14, F16). The owning corporation does not need to be connected to those hexes. If two tiles are laid, they must connect to each other.": "拥有它的铁路公司可以在为该私有公司预留的六角格内 (F14, F16) 额外免费铺设至多 2 个黄色铁路板块。拥有它的铁路公司不必与这些六角格相连。如果使用其放置了 2 个铁路板块, 则这 2 个铁路板块必须互相连接。",
        "Little Miami": "小迈阿密(LM)",
        "If no track exists from Cincinnati (H12) to Dayton (G13), the owning corporation may lay/upgrade one extra $0 cost tile in each of these hexes that adds connecting track.": "如果没有从辛辛那提 (H12) 通往戴顿 (G13) 的铁路, 那么拥有它的铁路公司可以在两地各额外免费放置/升级一个板块, 以使得两地相连。",
        "Meat Packing Company": "肉类包装公司(MPC)",
        "The owning corporation may assign the Meat Packing Company to either St. Louis (I1) or Chicago (D6), to add $30 to all routes it runs to this location.": "拥有它的铁路公司可以在圣路易斯 (I1) 或芝加哥 (D6) 放置一个 $30 的标记物, 以使其所有到达该地点的线路收益都增加 $30。",
        "Tunnel Blasting Company": "隧道爆破公司(TBC)",
        "Reduces, for the owning corporation, the cost of laying all mountain tiles and tunnel/pass hexsides by $20.": "拥有它的铁路公司铺设所有山地板块和隧道/隘口六角格的费用减少 $20。",
        "* Guarantee 2E and C&O: Ensure that Boomtown, Little Miami, and Chesapeake & Ohio Railroad are not removed during setup.": "* 确保 2E 和 C&O: 确保新兴都市(BT), 小迈阿密(LM)和切萨皮克俄亥俄铁路公司(C&O)在初始设置时不被移除。",
        "* 1st Edition Private Companies: Exclude the 2nd Edition companies Boomtown and Little Miami": "* 第一版私有公司: 不包括第二版公司中的新兴城市和小迈阿密",

        "Illinois Central Railroad": "伊利诺伊中央铁路公司",
        "Free yellow tile lays on hexes E5, F6, G5, H6, J4": "免费铺设黄色板块于 E5, F6, G5, H6, J4",
        "May lay yellow tiles for free on hexes marked with an IC-icon (E5, F6, G5, H6 and J4).": "可以在标有 \"IC\" 的六角格 (E5, F6, G5, H6 和 J4) 上免费铺设黄色板块。",
        "Reserved $40 Centralia (I5) token": "预留 $40 桑塔利亚 (I5) 车站空位",
        "$40 Centralia (I5) token": "$40 车站位于桑塔利亚 (I5)",
        "$40 Erie (D20) token": "$40 车站位于伊利 (D20)",
        "$40/$100 Cincinnati (H12) token": "$40/$100 车站位于辛辛那提 (H12)",
        "$40/$60 Ft. Wayne (E11) token": "$40/$60 车站位于韦恩堡 (E11)",
        "May place $40 token in Centralia (I5) if connected. Token slot is reserved until Phase IV.": "如果相连, 可以在桑塔利亚 (I5) 以 $40 放置车站。车站空位预留至阶段 IV。",
        "Reserved $40/$100 Cincinnati (H12) token": "预留 $40/$100 辛辛那提 (H12) 车站空位",
        "Reserved $40/$60 Ft. Wayne (E11) token": "预留 $40/$60 韦恩堡 (E11) 车站空位",
        "May place token in Cincinnati (H12) for $40 if connected, $100 otherwise. Token slot is reserved until Phase IV.": "如果相连, 可以在辛辛那提 (H12) 以 $40 放置车站, 否则以 $100 放置车站。车站空位预留至阶段 IV。",
        "May place token in Ft. Wayne (E11) for $40 if connected, $60 otherwise. Token slot is reserved until Phase IV.": "如果相连, 可以在韦恩堡 (E11) 以 $40 放置车站, 否则以 $60 放置车站。车站空位预留至阶段 IV。",
        "Reserved $40 Erie (D20) token": "预留 $40 伊利 (D20) 车站空位",
        "May place $40 token in Erie (D20) if connected. Token slot is reserved until Phase IV.": "如果相连, 可以在伊利 (D20) 以 $40 放置车站。车站空位预留至阶段 IV。",
        "Receives subsidy equal to its par price": "获得等同于初始股价的资金奖励",
        "Upon being launched IC receives a subsidy equal to its par price paid by the bank into its treasury.": "IC 上市后, 银行将向其金库发放一笔等同于初始股价的资金奖励。",
        "Grand Trunk Railway": "大干线铁路公司",
        "Erie Railroad": "伊利铁路公司",
        "New York Central Railroad": "纽约中央铁路公司",

        "Chicago": "芝加哥",
        "Connections": "联线",
        "Chicago Connections": "芝加哥联线",
        "Holland": "荷兰镇",
        "South Bend": "南本德",
        "Springfield": "斯普林菲尔德",
        "St. Louis": "圣路易斯",
        "Cairo": "开罗",
        "Port Huron": "休伦港",
        "Sarnia": "萨尼亚",
        "Detroit": "底特律",
        "Windsor": "温莎",
        "Toledo": "托莱多",
        "Erie": "伊利",
        "Buffalo": "布法罗",
        "Fort Wayne": "韦恩堡",
        "Cleveland": "克利夫兰",
        "Salamanca": "萨拉曼卡",
        "Binghamton": "宾厄姆顿",
        "Homewood": "霍姆伍德",
        "Terre Haute": "泰瑞豪特",
        "Indianapolis": "印第安纳波利斯",
        "Dayton": "戴顿",
        "Columbus": "哥伦布",
        "Wheeling": "惠灵",
        "Pittsburgh": "匹兹堡",
        "Cincinnati": "辛辛那提",
        "Cumberland": "坎伯兰",
        "Centralia": "桑塔利亚",
        "Huntington": "亨廷顿",
        "Charleston": "查尔斯顿",
        "Louisville": "路易斯维尔",
        
        "Corporation closes": "股份公司关闭",
        "Dividend < 1/2 stock price": "总分红 < 1/2 股价",
        "Dividend ≥ 1/2 stock price but < stock price": "总分红 ≥ 1/2 股价但总分红 < 股价",
        "Dividend ≥ stock price": "总分红 ≥ 股价",
        "Dividend ≥ 2X stock price": "总分红 ≥ 2X 股价",
        "Dividend ≥ 3X stock price and stock price ≥ 165": "总分红 ≥ 3X 股价且股价 ≥ 165",
        "Corporation director sells any number of shares": "股份公司总裁出售任意数量的股票",
        "Corporation has any shares in the Market at end of an SR": "股票轮结束时, 股票市场上仍有股票",
        "Corporation is sold out at end of an SR": "股票轮结束时, 股票全部由玩家持有",
        "none": "无",
        "Action": "行动",
        "Share Price Change": "股价变动",
        "Skip Assign": "跳过分配",
        "Redeem": "回购",
        "-- Event: 2 trains are obsolete --": "-- 事件: 2 级火车过时 --",
        "-- Event: Obsolete trains rust --": "-- 事件: 过时火车淘汰 --",
        "-- Event: 4, 3/5 trains are obsolete --": "-- 事件: 4, 3/5 级火车过时 --",
        "-- Event: 3/5, 4 trains are obsolete --": "-- 事件: 3/5, 4 级火车过时 --",
        "-- Event: Reserved token slots removed --": "-- 事件: 预留的车站空位已移除 --",
        "In order for an N/M train to earn bonuses for an E/W route, both of the E/W locations must be counted among the N locations.": "为了让一辆 N/M 级火车在东西贯通线路上获得奖励, 东部和西部外域地点都必须计入 N 中。",
        "Boomtown is not assigned to a hex": "新兴城市未被分配给一个六角格", 
        "Meat Packing Company is not assigned to a hex": "肉类包装公司未被分配给一个六角格", 
        "Remove Markers": "移除标记", 
        "Remove Reservations": "移除预留车站", 
        "Remove Steamboat, Meat Packing, and Boomtown markers": "移除汽船, 肉类包装, 和新兴城市的标记", 
        "Remove reserved token slots for corporations": "移除为公司预留的车站空位", 
        "Route must contain token": "线路必须包含车站", 
        "Cannot use group E more than once": "不能使用 E 组地点超过一次", 
        "Cannot use group W more than once": "不能使用 W 组地点超过一次", 
        "Route has too many stops": "线路拥有太多站点", 
        "MS closes": "MS 关闭", 
        "BIG4 closes": "BIG4 关闭", 
        "(CLOSED)": "(已关闭)", 
        "IC receives a discount of $20 from IC": "IC 收到一笔来自 IC 的 $20 折扣", 
        "Steamboat Company is not assigned to any hex": "汽船公司未被分配给任何六角格", 
        "Steamboat Company is not assigned to any corporation or minor": "汽船公司未被分配给任何铁路/独立铁路公司",
        "Lay Track for Ohio & Indiana": "使用俄亥俄印第安纳(O&I)铺设轨道", 
        "Lay Track for Little Miami": "使用小迈阿密(LM)铺设轨道", 
        "Assign Steamboat Company": "分配汽船公司", 
        "Lay Track for Michigan Central": "使用密歇根中部(MC)铺设轨道", 
        "Final train was purchased": "最后一辆火车已被购买",
        "Cannot buy minor because train tight": "由于火车上限，不能购买独立铁路公司",
        "Must use new track or change city value": "必须使用新的轨道或者改变城市的价值",
        "H12 and G13 must be connected after using Little Miami": "在使用小迈阿密(LM)后, H12 和 G13 必须连接",
        "Cannot lay and upgrade a tile in the same hex with Little Miami": "不能使用小迈阿密(LM)在同一个六角格中铺设和升级一个板块",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",


        //1830
        "Schuylkill Valley": "斯古吉尔山谷(SV)",
        "Champlain & St.Lawrence": "尚普兰圣劳伦斯(CS)",
        "Delaware & Hudson": "特拉华哈德逊(DH)",
        "Mohawk & Hudson": "莫霍克哈德逊(MH)",
        "Camden & Amboy": "肯顿安博伊(CA)",
        "Baltimore & Ohio": "巴尔的摩俄亥俄(BO)",
        "Canadian Pacific Railroad": "加拿大太平洋铁路公司",
        "Boston & Maine Railroad": "波士顿缅因铁路公司",
        "New York, New Haven & Hartford Railroad": "纽约, 纽黑文哈特福德铁路公司",
        "": "",
        "Baltimore & Ohio closes": "巴尔的摩俄亥俄(BO)关闭",
        "* Buy Multiple Brown Shares From IPO: Multiple brown shares may be bought from IPO as well as from pool": "* 从 IPO 购买多张棕色股票: 可以从 IPO 和银行池中购买多张棕色股票",
        "No special abilities. Blocks G15 while owned by a player.": "没有特殊能力。当拥有人为玩家时, 封阻 G15 六角格。",
        "A corporation owning the CS may lay a tile on the CS's hex even if this hex is not connected to the corporation's track. This free tile placement is in addition to the corporation's normal tile placement. Blocks B20 while owned by a player.": "拥有它的股份公司可以在印有 CS 的六角格上铺设板块, 即使该六角格没有连接到公司的轨道。这个免费板块的铺设视为正常放置板块行动的额外补充。当拥有人为玩家时, 封阻 B20 六角格。",
        "A corporation owning the DH may place a tile and station token in the DH hex F16 for only the $120 cost of the mountain. The station does not have to be connected to the remainder of the corporation's route. The tile laid is the owning corporation's one tile placement for the turn. Blocks F16 while owned by a player.": "拥有它的股份公司可以在印有可以在 DH 的六角格 F16 上铺设板块和放置一个车站, 只需为山地支付 $120。这个车站不必连接到公司线路的其余部分。这个铺设的板块视为拥有公司在该回合放置的一个板块。当拥有人为玩家时, 封阻 F16 六角格。",
        "A player owning the MH may exchange it for a 10% share of the NYC if they do not already hold 60% of the NYC and there is NYC stock available in the Bank or the Pool. The exchange may be made during the player's turn of a stock round or between the turns of other players or corporations in either stock or operating rounds. This action closes the MH. Blocks D18 while owned by a player.": "当拥有它的玩家还没有持有 NYC 60% 的股票并且 NYC 股票可供购买时, 可以使用本私有公司交换 NYC 10% 的股票。这个交换可以发生在拥有者回合的股票轮, 或者其他玩家或股份公司的股票轮或运营轮之间。此行动完成后关闭本私有公司。当拥有人为玩家时, 封阻 D18 六角格。",
        "The initial purchaser of the CA immediately receives a 10% share of PRR stock without further payment. This action does not close the CA. The PRR corporation will not be running at this point, but the stock may be retained or sold subject to the ordinary rules of the game. Blocks H18 while owned by a player.": "本私有公司的初始购买者立即收到 PRR 10% 的股票, 无需进一步付款。此行动不会关闭本私有公司。PRR 公司此刻不会运营, 但其股票可以保留或出售, 遵守一般的游戏规则。当拥有人为玩家时, 封阻 H18 六角格。",
        "The owner of the BO private company immediately receives the President's certificate of the B&O without further payment. The BO private company may not be sold to any corporation, and does not exchange hands if the owning player loses the Presidency of the B&O. When the B&O purchases its first train the private company is closed. Blocks I13 & I15 while owned by a player.": "拥有它的玩家立即受到 B&O 的总裁股, 无需进一步付款。它不能出售给股份公司, 并且即使拥有者失去 B&O 总裁也不会使本私有公司变更所有权。当 B&O 购买第一辆火车时, 本私有公司关闭。当拥有人为玩家时, 封阻 I13 和 I15 六角格。",
        "Exchange Mohawk & Hudson for:": "将莫霍克哈德逊(MH)交换为:",
        "NYC IPO share": "NYC IPO 股票",
        "NYC Market share": "NYC 市场股票",
        "Exchange MH for IPO Share": "以 MH 交换 IPO 股票",
        "Exchange MH for Market Share": "以 MH 交换市场股票",
        
        "Lansing": "兰辛",
        "Detroit &": "底特律 &",
        "Detroit & Windsor": "底特律 & 温莎",
        "Akron &": "阿克伦 &",
        "Canton": "坎顿",
        "Akron & Canton": "阿克伦 & 坎顿",
        "Scranton": "斯克兰顿",
        "Albany": "奥尔巴尼",
        "& Newark": "& 纽瓦克",
        "New York & Newark": "纽约 & 纽瓦克",
        "Providence": "普罗维登斯",
        "London": "伦敦",
        "Reading &": "雷丁 &",
        "Reading & Allentown": "雷丁 & 爱伦镇",
        "Boston": "波士顿",
        "& Trenton": "& 特伦顿",
        "Philadelphia & Trenton": "费城 & 特伦顿",
        "Lancaster": "兰开斯特",
        "Atlantic City": "亚特兰大市",
        "Atlantic": "亚特兰大",
        "City": "市",
        "Deep South": "南部诸州",
        "Canadian": "加拿大",
        "West": "西部",
        "Canadian West": "加拿大西部",
        "Barrie": "巴里",
        "Ottawa": "渥太华",
        "Gulf": "格尔夫",
        "Maritime Provinces": "滨海诸省",
        "Maritime": "滨海",
        "Provinces": "诸省",
        "Altoona": "阿尔图纳",
        "Rochester": "罗切斯特",
        "Kingston": "金斯顿",
        "Montreal": "蒙特利尔",
        "Mansfield": "曼斯菲尔德",
        "Flint": "弗林特",
        "New Haven": "纽黑文",
        "& Hartford": "& 哈特福德",
        "New Haven & Hartford": "纽黑文 & 哈特福德",
        "Hamilton": "汉密尔顿",
        "& Toronto": "& 多伦多",
        "Hamilton & Toronto": "汉密尔顿 & 多伦多",
        "Dunkirk &": "敦刻尔克 &",
        "Dunkirk & Buffalo": "敦刻尔克 & 布法罗",
        "Place Home Token": "放置初始车站",
        "ERIE must choose city for token": "ERIE 必须为放置车站选择城市",
        "Place teleport token": "放置远程空降车站",
        "Show Others": "展示其他",
        "Hide Others": "隐藏其他",
        "Show companies of other players": "展示其他玩家的公司",
        "Hide companies of other players": "隐藏其他玩家的公司",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",



        //1817
        "New Corporation Size": "新股份公司规模",
        "Loans": "贷款",
        "Shorts": "空头",
        "Buying Power": "购买力",
        "Interest Due": "到期利息",
        "Size": "规模",
        "Loan Table": "贷款表",
        "Interest per Loan": "每笔贷款利息",
        "Future Interest per Loan": "将来每笔贷款利息",
        "Unstarted corporations": "未启用股份公司",
        "Loan Value": "贷款价值",
        "Choose Subsidiaries": "选择子公司",
        "Seed Money": "种子资金",
        "EMPTY SLOT": "空 槽 位",
        "Take Loan": "拿取贷款",
        "Take Loans": "拿取贷款",
        "Payoff Loan": "偿还贷款",
        "Payoff Loans": "偿还贷款",
        "Offer for Sale": "提供出售",
        "Pass (Offer for Sale)": "略过 (提供出售)",
        "Pass (Subsidiaries)": "略过 (子公司)",
        "Bid Power": "竞拍力",
        "2 shares to start": "2 股以启用",
        "5 shares to start": "5 股以启用",
        "10 shares to start": "10 股以启用",
        "Montréal": "蒙特利尔",
        "Prov.": "诸省",
        "Maritime Prov.": "滨海诸省",
        "Atlanta": "亚特兰大",
        "Raleigh-Durham": "罗利-达勒姆",
        "Blacksburg": "布莱克斯堡",
        "Toronto": "多伦多",
        "* Short Squeeze: Corporations with > 100% player ownership move a second time at end of SR": "* 空头挤压: 玩家持股超过 100% 的公司在股票轮结束时股价再次移动",
        "* 5 Shorts: Only allow 5 shorts on 10 share corporations": "* 5 股空头: 只允许 10 股股票公司有 5 股空头",
        "* Modern Trains: 7 & 8 trains earn $10 & $20 respectively for each station marker of the corporation": "* 现代火车: 7 和 8 级火车分别为公司的每个车站标记赚取 $10 和 $20",
        "* Volatility Expansion: 13 additional private companies and a modified initial auction": "* 多样性扩展: 13 家新增的私有公司和一个修改过的初始竞拍",
        "1817 has not been tested thoroughly with more than seven players.": "1817 还没有经过超过 7 名玩家的彻底测试。",
        "Signal End Game": "游戏结束信号", "Game Ends 3 ORs after purchase/export of first 8 train": "游戏结束于第一辆 8 级火车购买/出口后的三组运营轮",
        "Final phase was reached": "最后阶段已到达",
        "Convert or Merge Corporation": "转换或合并股份公司",
        "Acquire Corporations": "收购股份公司",
        "Cannot gain new shorts": "无法获得新的空头股票",
        "Short selling is not permitted, existing shorts remain": "不允许再卖空，现有空头股票仍然存在",
        "At the end of each OR the next available train will be exported (removed, triggering phase change as if purchased)": "在每个运营轮结束时, 下一辆可用的火车将被出口 (从游戏中移除, 同样会触发阶段变更如同被购买一样)",
        "The final phase is entered": "最后阶段已进入",
        "Liquidation": "清算",
        "Acquisition (Pay $40 dividend to move right, $80 to double jump)": "收购 (分红 $40 右移一格, $80 移动两格)",
        "Acq.": "收购",
        "Minimum Price for a 2($55), 5($70) and 10($120) share corporation taking maximum loans to ensure it avoids acquisition": "2($55), 5($70) 和 10($120) 股股份公司的最低股价, 以确保其避免收购",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",

        "P1 - Minor Coal Mine": "P1 - 小型煤矿(MINC)",
        "P2 - Ohio Bridge Company": "P2 - 俄亥俄桥梁公司(OBC)",
        "P3 - Mountain Engineers": "P3 - 山地工程师(ME)",
        "P4 - Pittsburgh Steel Mill": "P4 - 匹兹堡钢铁厂(PSM)",
        "P5 - Coal Mine": "P5 - 煤矿(CM)",
        "P6 - Minor Mail Contract": "P6 - 小型邮递契约(MINM)",
        "P7 - Train Station": "P7 - 火车车站(TS)",
        "P8 - Union Bridge Company": "P8 - 联合桥梁公司(UBC)",
        "P9 - Mail Contract": "P9 - 邮递契约(MAIL)",
        "P10 - Major Coal Mine": "P10 - 大型煤矿(MAJC)",
        "P11 - Major Mail Contract": "P11 - 大型邮递契约(MAJM)",
        
        "P12 - Loan Shark": "P12 - 高利贷",
        "P13 - Ponzi Scheme": "P13 - 庞氏骗局",
        "P14 - Inventor": "P14 - 发明家",
        "P15 - Scrapper": "P15 - 废品回收",
        "P16 - Buffalo Rail Center": "P16 - 布法罗铁路中心",
        "P17 - Toledo Industry": "P17 - 托莱多工业",
        "P18 - Express Track": "P18 - 快速轨道",
        "P19 - Efficient Track": "P19 - 高效轨道",
        "P20 - Golden Parachute": "P20 - 金降落伞",
        "P21 - Station Subsidy": "P21 - 车站补贴",
        "P22 - Country Ranch": "P22 - 乡村牧场",
        "P23 - Rural Ranch": "P23 - 农村牧场",
        "P24 - Indianapolis Market": "P24 - 印第安纳波利斯市场",
        
        "Comes with ONE coal mine marker. Owning corporation may place a marker to build a yellow \"coal mine\" tile on a mountain hex next to any revenue center (a city or offboard hex). Placing this tile ignores the $15 mountain terrain cost. This yellow tile must either connect to the adjacent revenue center directly or be placed in such a way that an adjacent city tile could conceivably be upgraded to connect to it. Coal mines add a $10 bonus to any route passing through it. Train routes may not start or end at a coal mine.": "附带一个煤矿标记。拥有它的股份公司可以在任何收入中心(一个城市或板外区域)相邻的山地六角格上建造黄色\"煤矿\"板块时放置一个标记。放置此板块会忽略 $15 的山地地形成本。此黄色板块必须直接连接到相邻的收入中心, 或者相邻的城市在升级后可以相连。煤矿对任何经过它的线路都会增加 $10 的奖励。火车线路不得在煤矿开始或结束。",
        "Comes with one $10 bridge token that may be placed by the owning corp in Louisville, Cincinnati, or Charleston, max one token per city, regardless of connectivity. Allows owning corp to skip $10 river fee when placing yellow tiles.": "附带一个 $10 桥梁标记, 可由拥有它的股份公司在路易斯维尔, 辛辛那提, 或查尔斯顿放置, 每个城市最多一个标记, 无需考虑是否连接。允许拥有它的股份公司在放置黄色板块时跳过支付 $10 的河流花费。",
        "Owning corp receives $20 after laying a yellow tile in a mountain hex. Any fees must be paid first.": "拥有它的股份公司在山地六角格里铺设一块黄色板块后得到 $20。任何需要的费用都必须先支付。",
        "Owning corp may place a special yellow tile (#X00) on Pittsburgh (F13) during tile-laying, regardless of connectivity. The hex is not reserved, and the power is lost if another corp builds there first.": "拥有它的股份公司可以在板块铺设期间在匹兹堡 (F13) 放置一块特殊的黄色板块 (#X00) 而无需考虑是否连接。这个六角格没有被保留, 并且如另一公司先在此处放置了板块, 则本私有公司能力失效。",
        "Comes with TWO coal mine markers. Owning corporation may place a marker to build a yellow \"coal mine\" tile on a mountain hex next to any revenue center (a city or offboard hex). Placing this tile ignores the $15 mountain terrain cost. This yellow tile must either connect to the adjacent revenue center directly or be placed in such a way that an adjacent city tile could conceivably be upgraded to connect to it. Coal mines add a $10 bonus to any route passing through it. Train routes may not start or end at a coal mine.": "附带两个煤矿标记。拥有它的股份公司可以在任何收入中心(一个城市或板外区域)相邻的山地六角格上建造黄色\"煤矿\"板块时放置一个标记。放置此板块会忽略 $15 的山地地形成本。此黄色板块必须直接连接到相邻的收入中心, 或者相邻的城市在升级后可以相连。煤矿对任何经过它的线路都会增加 $10 的奖励。火车线路不得在煤矿开始或结束。",
        "Pays owning corp $10 at the start of each operating round, as long as the corp has at least one train.": "在每个运营轮开始时, 若拥有它的股份公司至少有一辆火车, 就向其支付 $10",
        "Provides an additional station marker for the owning corp, awarded at time of purchase": "为拥有它的股份公司提供一个额外的车站标记, 在它被购买时授予",
        "Comes with two $10 bridge token that may be placed by the owning corp in Louisville, Cincinnati, or Charleston, max one token per city, regardless of connectivity. Allows owning corp to skip $10 river fee when placing yellow tiles.": "附带两个 $10 桥梁标记, 可由拥有它的股份公司在路易斯维尔, 辛辛那提, 或查尔斯顿放置, 每个城市最多一个标记, 无需考虑是否连接。允许拥有它的股份公司在放置黄色板块时跳过支付 $10 的河流花费。",
        "Pays owning corp $15 at the start of each operating round, as long as the corp has at least one train.": "在每个运营轮开始时, 若拥有它的股份公司至少有一辆火车, 就向其支付 $15",
        "Comes with THREE coal mine markers. Owning corporation may place a marker to build a yellow \"coal mine\" tile on a mountain hex next to any revenue center (a city or offboard hex). Placing this tile ignores the $15 mountain terrain cost. This yellow tile must either connect to the adjacent revenue center directly or be placed in such a way that an adjacent city tile could conceivably be upgraded to connect to it. Coal mines add a $10 bonus to any route passing through it. Train routes may not start or end at a coal mine.": "附带三个煤矿标记。拥有它的股份公司可以在任何收入中心(一个城市或板外区域)相邻的山地六角格上建造黄色\"煤矿\"板块时放置一个标记。放置此板块会忽略 $15 的山地地形成本。此黄色板块必须直接连接到相邻的收入中心, 或者相邻的城市在升级后可以相连。煤矿对任何经过它的线路都会增加 $10 的奖励。火车线路不得在煤矿开始或结束。",
        "Pays owning corp $20 at the start of each operating round, as long as the corp has at least one train.": "在每个运营轮开始时, 若拥有它的股份公司至少有一辆火车, 就向其支付 $20",

        "Owning corp receives $60 along with this private company. The owning corp must pay $10 during the \"Pay Loan Interest\" phase of each operating round. Failure to pay the $10 results in liquidation. The loan shark remains in force for the entire game, unless the bank purchases the owning corp's assets through liquidation.": "拥有它的股份公司连同本私有公司获得 $60。拥有公司必须在每个运营轮的\"支付贷款利息\"阶段支付 $10。如果不支付 $10, 将导致清算。高利贷在整个游戏中保持有效, 除非银行通过清算购买拥有公司的资产。",
        "This private company does nothing.": "本私有公司什么都不做。",
        "The bank pays the owning corp when the first type of each train is purchased or exported (2: $20, 2+: $0, 3: $30, 4: $40, 5: $50, 6: $60, 7: $70, 8: $80).": "当每类火车的第一辆被购买或者出口时, 银行向拥有它的股份公司支付费用 (2: $20, 2+: $0, 3: $30, 4: $40, 5: $50, 6: $60, 7: $70, 8: $80)。",
        "Owning corp receives compensation for each train it owns that become obsolete and are eliminated (2: $30, 2+: $30, 3: $75, 4: $150).": "拥有它的股份公司对其拥有的每辆过时并被淘汰的火车获得补偿 (2: $30, 2+: $30, 3: $75, 4: $150)。",
        "Owning corp may place a special yellow tile (#X00) on Buffalo (C14) during tile-laying, regardless of connectivity. The hex is not reserved, and the power is lost if another corp builds there first.": "拥有它的股份公司可以在板块铺设期间在布法罗 (C14) 放置一块特殊的黄色板块 (#X00) 而无需考虑是否连接。这个六角格没有被预留, 并且如果另一公司先在那里放置板块, 本私有公司的能力就会失去。",
        "Owning corp may place a special yellow tile (#X00) on Toledo (D7) during tile-laying, regardless of connectivity. The hex is not reserved, and the power is lost if another corp builds there first.": "拥有它的股份公司可以在板块铺设期间在托莱多 (D7) 放置一块特殊的黄色板块 (#X00) 而无需考虑是否连接。这个六角格没有被预留, 并且如果另一公司先在那里放置板块, 本私有公司的能力就会失去。",
        "Owning corp must pay $10 to perform the first tile operation each operating round. The corp may perform a second tile operation for free. The corp may skip all tile operations to avoid the $10 fee. If combined with Efficient Track (P19), both first and second track operations are free.": "拥有它的股份公司在每个运营轮必须花费 $10 执行第一次板块行动, 公司可以免费执行第二次板块行动。该公司可以跳过所有的板块行动, 以避免 $10 的费用。如果与高效轨道 (P19) 结合使用, 第一次和第二次的板块行动都是免费的。",
        "Owning corp may perform a second tile operation for $10, instead of the normal $20. If combined with Express Track (P18), both first and second track operations are free.": "拥有它的股份公司可以花费 $10 执行第二次板块行动, 而不是正常的 $20。如果与快速轨道 (P18) 结合使用, 第一次和第二次的板块行动都是免费的。",
        "The President of the corp owning this private company is paid $100 from the bank when the Golden Parachute ownership is transferred to a corp with a different player as president, or discarded to the bank.": "当金降落伞的所有权被转移到一个由另一个玩家担任总裁的股份公司或被弃至银行时, 拥有本私有公司的股份公司总裁从银行获得 $100。",
        "Owning corp receives $50 every time it converts (not merges) to a 5-share or 10-share corp.": "拥有它的股份公司每次转换 (而不是合并) 为 5股或10股公司时, 将收到 $50。",
        "Comes with one ranch token. When placing a yellow track tile towards an adjacent revenue center, a ranch token may also be placed, provided the tile is neither adjacent to a B-City or Chicago or Atlanta nor in or East of a mountain in that hex row. The ranch token increases the value of any route through the hex by $10. The yellow tile underlying the ranch token may not be upgraded. May not start or end a route at a ranch token.": "附带一个牧场标记。当向相邻的收入中心放置黄色轨道板块时, 也可以放置牧场标记, 前提是该板块既不相邻一座B-城, 芝加哥或亚特兰大，也不在山地六角格行的上或东面格。牧场标记对任何经过它的线路都会增加 $10 的奖励。牧场标记下面的黄色板块无法升级。火车线路不得在牧场标记处开始或结束。",
        "Comes with two ranch tokens. When placing a yellow track tile towards an adjacent revenue center, a ranch token may also be placed, provided the tile is neither adjacent to a B-City or Chicago or Atlanta nor in or East of a mountain in that hex row. The ranch token increases the value of any route through the hex by $10. The yellow tile underlying the ranch token may not be upgraded. May not start or end a route at a ranch token.": "附带两个牧场标记。当向相邻的收入中心放置黄色轨道板块时, 也可以放置牧场标记, 前提是该板块既不相邻一座B-城, 芝加哥或亚特兰大，也不在山地六角格行的上或东面格。牧场标记对任何经过它的线路都会增加 $10 的奖励。牧场标记下面的黄色板块无法升级。火车线路不得在牧场标记处开始或结束。",
        "Owning corp may place a special (#X00) yellow tile on Indianapolis (F3) during tile-laying, regardless of connectivity. The hex is not reserved, and the power is lost if another corp builds there first.": "拥有它的股份公司可以在板块铺设期间在印第安纳波利斯 (F3) 放置一块特殊的黄色板块 (#X00) 而无需考虑是否连接。这个六角格没有被预留, 并且如果另一公司先在那里放置板块, 本私有公司的能力就会失去。",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",

        //1888-N
        "* 1888-N: North Map (3-6 players)": "* 1888-华北: 华北地图 (3-6 名玩家)",
        "Baotou": "包头",
        "Hohhot": "呼和浩特",
        "Datong": "大同",
        "Taiyuan": "太原",
        "Cangzhi": "长治",
        "Xi'an": "西安",
        "Xinxiang & Jiaozuo": "新乡 & 焦作",
        "Heng Shan": "恒山",
        "Shijiazhuang": "石家庄",
        "Anyang & Hebi": "安阳 & 鹤壁",
        "Zhangijakou & Xuanhua": "张家口 & 宣化",
        "Handan": "邯郸",
        "Boading": "保定",
        "Beijing": "北京",
        "Jining": "济宁",
        "Jinan": "济南",
        "Tianjin": "天津",
        "Zibo": "淄博",
        "Tangshan": "唐山",
        "Dongying": "东营",
        "Qinhuangdao": "秦皇岛",
        "Weifang": "潍坊",
        "Qingdao": "青岛",
        "Chaoyang & Jinzhou": "朝阳 & 锦州",
        "Yingkou": "营口",
        "Yantai": "烟台",
        "harbor": "港口",
        "Dalian": "大连",
        "Shenyang & Anshan": "沈阳 & 鞍山",
        "Changchun": "长春",
        "Fushun & Benxi": "抚顺 & 本溪",
        "Dandong": "丹东",
        "Chengde": "承德",
        "Xuzhou": "徐州",
        "Great Wall of China": "长城",
        "Forbidden City": "紫禁城",
        "Yanda Railway Ferry": "烟大铁路轮渡",
        "Terracotta Army": "兵马俑",
        "Kaiping Tramway": "开平铁路",
        "": "",

        "Xinxiang": "新乡",
        "& Jiaozuo": "& 焦作",
        "Anyang": "安阳",
        "& Hebi": "& 鹤壁",
        "Zhangijakou": "张家口",
        "& Xuanhua": "& 宣化",
        "Chaoyang": "朝阳",
        "& Jinzhou": "& 锦州",
        "Shenyang": "沈阳",
        "& Anshan": "& 鞍山",
        "Fushun": "抚顺",
        "& Benxi": "& 本溪",

        // Rolling Stock Stars
        "Doppler AG": "多普勒股份集团",
        "Junkyard Scrappers": "废料回收场集团",
        "Overseas Trading": "海外贸易集团",
        "Prussian Railway": "普鲁士铁路集团",
        "Synergistic": "协同集团",
        "Stars, Inc.": "星运企业集团",
        "Stock Masters": "股市达集团",
        "Vintage Machinery": "古典机械集团",

        "Bergisch-Märkische Eisenbahn-Gesellschaft": "贝尔吉施 - 梅基施铁路公司",
        "Berlin-Stettiner Eisenbahn-Gesellschaft" : "柏林 - 什切青铁路公司",
        "Köln-Mindener Eisenbahn-Gesellschaft" : "科隆 - 明登铁路公司",
        "Altona-Kieler Eisenbahn-Gesellschaft" : "阿尔托纳 - 基尔铁路公司",
        "Berlin-Potsdam-Magdeburger Eisenbahn" : "柏林 - 波茨坦 - 马格德堡铁路",
        "Magdeburg-Halberstädter Eisenbahngesellschaft" : "马格德堡 - 哈尔伯施塔特铁路公司",
        "Königlich Württembergische Staats-Eisenbahnen" : "皇家符腾堡国家铁路",
        "Königlich Bayerische Staatseisenbahnen" : "皇家巴伐利亚国家铁路",
        "Großherzoglich Badische Staatseisenbahnen" : "巴登大公国家铁路",
        "Großherzoglich Hessische Staatseisenbahnen" : "黑森州大公国家铁路",
        "Großherzoglich Oldenburgische Staatseisenbahnen" : "奥尔登堡大公国家铁路",
        "Königlich Sächsische Staatseisenbahnen" : "皇家萨克森国家铁路",
        "Großherzoglich Mecklenburgische Friedrich-Franz-Eisenbahn" : "梅克伦堡弗里德里希·弗朗茨大公铁路",
        "Preußische Staatseisenbahnen" : "普鲁士国家铁路",
        "Danske Statsbaner" : "丹麦国家铁路公司",
        "k.k. Österreichische Staatsbahnen" : "奥地利国家铁路",
        "Nederlandse Spoorwegen" : "荷兰铁路公司",
        "Schweizerische Bundesbahnen – Chemins de fer fédéraux suisses – Ferrovie federali svizzere" : "瑞士联邦铁路",
        "Nationale Maatschappij der Belgische Spoorwegen – Société Nationale des Chemins de fer Belges" : "比利时国家铁路公司",
        "Polskie Koleje Państwowe" : "波兰国家铁路公司",
        "Société nationale des chemins de fer français" : "法国国营铁路公司",
        "Deutsche Reichsbahn" : "德国国营铁路",
        "Советские железные дороги (Sovetskie železnye dorogi)" : "苏维埃铁路",
        "Statens Järnvägar" : "瑞典国家铁路",
        "Ferrovie dello Stato" : "意大利国家铁路",
        "Red Nacional de los Ferrocarriles Españoles" : "西班牙国家铁路公司",
        "British Rail" : "英国铁路公司",
        "Baltic Sea Rail" : "波海高速铁路",
        "Eurotunnel" : "欧洲隧道",
        "Hamburger Hafen" : "汉堡港",
        "Haven van Antwerpen" : "安特卫普港",
        "Haven van Rotterdam" : "鹿特丹港",
        "Madrid-Barajas Airport" : "马德里巴拉哈斯机场",
        "Flughafen Frankfurt" : "法兰克福机场",
        "London Heathrow Airport" : "伦敦希思罗机场",
        "Aéroport Paris-Charles-de-Gaulle" : "巴黎夏尔·戴高乐机场",
        // ★ 公司
        "★ Bergisch-Märkische Eisenbahn-Gesellschaft": "★ 贝尔吉施 - 梅基施铁路公司",
        "★ Berlin-Stettiner Eisenbahn-Gesellschaft" : "★ 柏林 - 什切青铁路公司",
        "★ Köln-Mindener Eisenbahn-Gesellschaft" : "★ 科隆 - 明登铁路公司",
        "★ Altona-Kieler Eisenbahn-Gesellschaft" : "★ 阿尔托纳 - 基尔铁路公司",
        "★ Berlin-Potsdam-Magdeburger Eisenbahn" : "★ 柏林 - 波茨坦 - 马格德堡铁路",
        "★ Magdeburg-Halberstädter Eisenbahngesellschaft" : "★ 马格德堡 - 哈尔伯施塔特铁路公司",
        "★★ Königlich Württembergische Staats-Eisenbahnen" : "★★ 皇家符腾堡国家铁路",
        "★★ Königlich Bayerische Staatseisenbahnen" : "★★ 皇家巴伐利亚国家铁路",
        "★★ Großherzoglich Badische Staatseisenbahnen" : "★★ 巴登大公国家铁路",
        "★★ Großherzoglich Hessische Staatseisenbahnen" : "★★ 黑森州大公国家铁路",
        "★★ Großherzoglich Oldenburgische Staatseisenbahnen" : "★★ 奥尔登堡大公国家铁路",
        "★★ Königlich Sächsische Staatseisenbahnen" : "★★ 皇家萨克森国家铁路",
        "★★ Großherzoglich Mecklenburgische Friedrich-Franz-Eisenbahn" : "★★ 梅克伦堡弗里德里希·弗朗茨大公铁路",
        "★★ Preußische Staatseisenbahnen" : "★★ 普鲁士国家铁路",
        "★★★ Danske Statsbaner" : "★★★ 丹麦国家铁路公司",
        "★★★ k.k. Österreichische Staatsbahnen" : "★★★ 奥地利国家铁路",
        "★★★ Nederlandse Spoorwegen" : "★★★ 荷兰铁路公司",
        "★★★ Schweizerische Bundesbahnen – Chemins de fer fédéraux suisses – Ferrovie federali svizzere" : "★★★ 瑞士联邦铁路",
        "★★★ Nationale Maatschappij der Belgische Spoorwegen – Société Nationale des Chemins de fer Belges" : "★★★ 比利时国家铁路公司",
        "★★★ Polskie Koleje Państwowe" : "★★★ 波兰国家铁路公司",
        "★★★ Société nationale des chemins de fer français" : "★★★ 法国国营铁路公司",
        "★★★ Deutsche Reichsbahn" : "★★★ 德国国营铁路",
        "★★★★ Советские железные дороги (Sovetskie železnye dorogi)" : "★★★★ 苏维埃铁路",
        "★★★★ Statens Järnvägar" : "★★★★ 瑞典国家铁路",
        "★★★★ Ferrovie dello Stato" : "★★★★ 意大利国家铁路",
        "★★★★ Red Nacional de los Ferrocarriles Españoles" : "★★★★ 西班牙国家铁路公司",
        "★★★★ British Rail" : "★★★★ 英国铁路公司",
        "★★★★ Baltic Sea Rail" : "★★★★ 波海高速铁路",
        "★★★★ Eurotunnel" : "★★★★ 欧洲隧道",
        "★★★★★ Hamburger Hafen" : "★★★★★ 汉堡港",
        "★★★★★ Haven van Antwerpen" : "★★★★★ 安特卫普港",
        "★★★★★ Haven van Rotterdam" : "★★★★★ 鹿特丹港",
        "★★★★★ adrid-Barajas Airport" : "★★★★★ 马德里巴拉哈斯机场",
        "★★★★★ Flughafen Frankfurt" : "★★★★★ 法兰克福机场",
        "★★★★★ London Heathrow Airport" : "★★★★★ 伦敦希思罗机场",
        "★★★★★ Aéroport Paris-Charles-de-Gaulle" : "★★★★★ 巴黎夏尔·戴高乐机场",
        "Range": "范围",
        "Foreign Investor": "境外投资商",
        "Corporation closes": "集团停业",
        "Offering": "提供",
        "Remaining Deck": "牌库剩余",
        "Current Cost of Ownership": "当前运营成本",
        "Target Stars by Share Price": "按股价划分的目标星级",
        "Max stock price in phase 1 or 7 or end card flipped in phase 7": "在阶段1或阶段7达到最大股价, 或者在阶段7开始时终局卡牌已经翻面",
        "Level": "等级",
        "Target": "目标",
        "Unissued": "未发行",
        "No cost of ownership": "无运营成本",
        "Investment": "投资",
        "Investment Round": "投资轮",
        "New cost of ownership: None": "新的运营成本: 无",
        "New cost of ownership: Red = $1": "新的运营成本: 红色 = $1",
        "New cost of ownership: Red = $2": "新的运营成本: 红色 = $2",
        "New cost of ownership: Red, Orange = $3": "新的运营成本: 红色, 橙色 = $3",
        "New cost of ownership: Red, Orange = $4": "新的运营成本: 红色, 橙色 = $4",
        "New cost of ownership: Red, Orange, Yellow = $6": "新的运营成本: 红色, 橙色, 黄色 = $6",
        "New cost of ownership: Red, Orange, Yellow = $7": "新的运营成本: 红色, 橙色, 黄色 = $7",
        "New cost of ownership: Red, Orange, Yellow, Green = $10": "新的运营成本: 红色, 橙色, 黄色, 绿色 = $10",
        "New cost of ownership: Red, Orange, Yellow, Green = $16": "新的运营成本: 红色, 橙色, 黄色, 绿色 = $16",
	    "(Market)": "(市场)",
        "Wrap-Up": "重整",
        "Acquisition": "收购",
        "Acquisition Round": "收购轮",
        "Propose, accept or reject acquisition offers": "提议, 接受或拒绝收购要约",
        "Closing": "停业",
        "Closing Round": "停业轮",
        "Close Companies": "公司停业",
        "Dividends Round": "股息轮",
        "Dividends": "股息",
        "Select Dividends": "选择股息",
        "End Card": "终局卡牌",
        "Issue Round": "发行轮",
        "Issue Share": "增发新股",
        "Issue Shares": "增发新股",
        "IPO Round": "IPO 轮",
        "Choose a Corporation to IPO": "选择一家公司进行 IPO",
        "End card flipped : Game Ends on next phase 7": "终局卡牌已经翻面 : 游戏在下一阶段 7 结束",
        "End card flipped": "终局卡牌已经翻面",
        "No corporations can acquire a company": "没有股份公司可以收购一家公司",
        "No corporations can pay dividends": "没有股份公司可以支付股息",
        "Available to Form": "可供转化",
        "Pay Dividends": "支付股息",
        "Pay Dividend": "支付股息",
        "Div": "股息",
        "Target Price": "目标价格",
        "New Price": "新的价格",
        "No corporations can issue": "没有股份公司可以发行股票",
        "Corporation hit max stock value": "股份公司股价达到最大值",
        "Game ends: Max Stock price has been reached": "游戏结束: 最高股价已达到",
        "Game ends: Game end card reached": "游戏结束: 游戏终局卡牌已经翻面",
        "Corp:": "公司:",
        "Price:": "价格:",
        "Offer": "报价",
        "Company Deck is empty": "公司牌库已空",
        "Some companies have negative income": "部分公司收入为负",
        "No companies eligible to convert": "没有符合转型的公司",
        "": "",
        "": "",
        "": "",

        "+$1 Per Company": "每家公司 +$1",
        "+$1 Per Two Synergy Markers": "每两个协同效应指示物 +$1",
        "Advantage Buying From Foreign Inv.": "从境外投资商买入时获得优势",
        "Cost of Ownership Reduced Up to $10": "运营成本减少最多 $10",
        "No Price Change When Issuing a Share": "增发新股时股价不变",
        "Bonus When Closing Companies": "公司停业奖励",
        "Double Income for Best Company": "面值最高的一家公司营收翻倍",
        "Receives +$1 for each company it owns": "每拥有一家公司可获得 +$1",
        "Always has first priority trading with the Foreign Investor (as if its share price is higher than any other), and only pays face value rather than the maximum allowed price.": "在与境外投资商的交易中永远拥有最高优先权(视为股价比任何其他集团都高), 且无需支付价格区间的上限, 只需支付面值即可。",
        "Always adds 2 addtional ★s to its ★ count": "在计算 ★ 级时, 永远增加两个 ★ 级",
        "Cost of ownership is reduced by up to $10 (but not below $0)": "运营成本降低最多 $10 (但不能低于 $0)",
        "When issuing a share, its share price does not change": "当增发新股时, 股价不发生变化",
        "When it closes a company, it receives twice the printed income of that company as a scrapping bonus": "每当废料回收场集团的公司停业时, 集团立即获得该公司印刷营收两倍的资金, 作为废品回收的奖励",
        "Receives +$1 for every two synergy markers it owns (rounded down)": "每拥有两个协同效应指示物 (向下取整), 获得 +$1",
        "Doubles printed income of its best company": "旗下面值最高的一家公司, 其营收翻倍",
        "Stars": "星级",
        "Company Revenue:": "公司营收:",
        "Synergies:": "协同效应:",
        "Cost of Ownership:": "运营成本:",
        "Ability Income:": "能力收入:",
        "(Empty)": "(空)",
        "Game will end on next turn": "游戏将在下一回合结束",

        "": "",
        "": "",



    },
    "regexp": [ // 正则翻译
        [],
        [/^(.*): Phase (.*) - (.* Round) (.*) - (.*) - (.*) : Game Ends at conclusion of this (.+R) (.*)$/, function (all, gamename, phase_number, round, round_number, des, des1, oar, des2) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            round_number = round_number.replace(/of (\d)/, "共 $1 个");
            var des_zh = (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des);
            var des1_zh = (I18N.zh["game"]["static"][des1] ? I18N.zh["game"]["static"][des1] : des1);
            if (oar === "OR") {
                oar = "运营轮";
            } else if (oar === "AR") {
                oar = "收购轮";
            }
            return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " " + round_number + " - " + des_zh + " - " + des1_zh + ": 游戏在本" + oar + " " + des2 + " 完成后结束";
        }],
        [/^(.*): Phase (.*) - (.* Round) (.*) - (.*) - (.*) : Game Ends at conclusion of (.+R) (.*)$/, function (all, gamename, phase_number, round, round_number, des, des1, oar, des2) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            round_number = round_number.replace(/of (\d)/, "共 $1 个");
            var des_zh = (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des);
            var des1_zh = (I18N.zh["game"]["static"][des1] ? I18N.zh["game"]["static"][des1] : des1);
            if (oar === "OR") {
                oar = "运营轮";
            } else if (oar === "AR") {
                oar = "收购轮";
            }
            return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " " + round_number + " - " + des_zh + " - " + des1_zh + ": 游戏在" + oar + " " + des2 + " 完成后结束";
        }],
        [/^(.*): Phase (.*) - (.* Round) (.*) - (.*) - (.*)$/, function (all, gamename, phase_number, round, round_number, des, des1) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            round_number = round_number.replace(/of (\d)/, "共 $1 个");
            if (des === "Lay Track for Columbia" && des1 === "Philadelphia Railroad") {
                return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " " + round_number + " - " + "使用哥伦比亚费城铁路公司(C-P)铺设轨道";
	    }
            return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " " + round_number + " - " + (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des) + " - " + (I18N.zh["game"]["static"][des1] ? I18N.zh["game"]["static"][des1] : des1);
        }],
        [/^(.*): Phase (.*) - (.* Round) (.*) - (.*)$/, function (all, gamename, phase_number, round, round_number, des) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            round_number = round_number.replace(/of (\d)/, "共 $1 个");
            return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " " + round_number + " - " + (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des);
        }],
        [/^(.*): Phase (.*) - (.* Round) - (.*)$/, function (all, gamename, phase_number, round, des) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            return hotseat + gamename_zh + ": 阶段 " + phase_number + " - " + round_zh + " - " + (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des);
        }],
        [/^(.*) bids (.+\d+) for (.*), bank will provide (.+\d+)$/, function (all, username, number, company, money) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 为 " + company_zh + " 出价 " + number + ", 银行将提供 " + money;
        }],
        [/^(.*) bids (.+\d+) for (.*)$/, function (all, username, number, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 为 " + company_zh + " 出价 " + number;
        }],
        [/^(.*) auctions (.*) for (.+\d+)$/, function (all, username, company, number) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 以 " + number + " 开始竞拍 " + company_zh;
        }],
        // username buys a 10% share of PRR from the IPO for $95
        [/^(.*) buys a (.*) share of (.*) from (.*) for (.+\d+)$/, function (all, username, share, company, market, money) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            var market_zh = (I18N.zh["game"]["static"][market] ? I18N.zh["game"]["static"][market] : market);
            return username + " 花费了 " + money + " 从" + market_zh + "购买了 " + company_zh + " 的 " + share + " 股票";
        }],
        // username sells a 10% share of C&O and receives $69
        [/^(.*) sells a (.*) share of (.*) and receives (.+\d+)$/, function (all, username, share, company, money) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 出售了 " + company_zh + " 的 " + share + " 的股票, 收到了 " + money;
        }],
        // username sells 3 shares of PRR and receives $201
        [/^(.*) sells (.*) shares of (.*) and receives (.+\d+)$/, function (all, username, share, company, money) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 出售了 " + company_zh + " 的 " + share + " 股股票, 收到了 " + money;
        }],
        // PLE buys a 3 train for $180 from The Depot
        [/^(.*) buys a (.*) train for (.+\d+) from (.*)$/, function (all, username, train, number, where) {
            var where_zh = (I18N.zh["game"]["static"][where] ? I18N.zh["game"]["static"][where] : where);
            return username + " 花费了 " + number + " 从 " + where_zh + " 购买了一辆 " + train + " 级火车";
        }],
        [/^(.*) buys (.*) from (.*) for (.+\d+)$/, function (all, company, private, username, number) {
            var private_zh = (I18N.zh["game"]["static"][private] ? I18N.zh["game"]["static"][private] : private);
            return company + " 从 " + username + " 购买 " + private_zh + " 花费了 " + number;
        }],
        [/^(.*) wins bid and buys (.*) for (.+\d+)$/, function (all, username, company, number) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 赢得竞拍并花费了 " + number + " 购买 " + company_zh;
        }],
        [/^(.*) buys (.*)(?:(?<!.*(?: from | wins bid and ).*)) for (.+\d+)$/, function (all, username, company, number) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 花费了 " + number + " 购买 " + company_zh;
        }],
        [/^-- Phase (.*) \(Operating Rounds: (\d+) \| Train Limit: (\d+) \| Available Tiles: (.*)\) --$/, function (all, $1, $2, $3, $4) {
            return "-- 阶段 " + $1 + " (运营轮: " + $2 + " | 火车上限: " + $3 + " | 可用板块: " + I18N.zh["game"]["static"][$4] + ") --";
        }],
        [/^(.*) minimum bid decreases from (.*) to (.*)$/, function (all, company, before, after) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return company_zh + " 的最低出价从 " + before + " 降至 " + after;
        }],
        [/^(.*) collects (.*) from (.*)$/, function (all, username, money, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 从 " + company_zh + " 收到 " + money;
        }],
        [/^• Action\((.*)\) via Master Mode by: (.*)$/, function (all, action, username) {
            var action_zh = (I18N.zh["game"]["static"][action] ? I18N.zh["game"]["static"][action] : action)
            return "• 行动(" + action_zh + ") 通过主机模式执行由: " + username;
            // return "• " + username + " 通过主机模式执行行动(" + action_zh + ")";
        }],
        [/^(.*)'s share price (.*) from (.+\d+) to (.+\d+)$/, function (all, company, direction, before, after) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            var direction_zh = (I18N.zh["game"]["static"][direction] ? I18N.zh["game"]["static"][direction] : direction)
            return company_zh + " 的股价从 " + before + " 向" + direction_zh + "移至 " + after;
        }],
        // SRR spends $40 and lays tile #X4 with rotation 1 on H6 (Baltimore)
        [/^(.*) spends (.+\d+) and lays tile (.*) with rotation (\d+) on ([A-Z]+[0-9]+) \((.*)\)$/, function (all, company, money, tile, rotation, coordinate, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return company + " 花费 " + money + " 铺设带有旋转 " + rotation + " 的板块 " + tile + " 在 " + coordinate + " (" + location_zh + ")";
        }],
        // SRR spends $40 and lays tile #X4 with rotation 1 on H6
        [/^(.*) spends (.+\d+) and lays tile (.*) with rotation (\d+) on ([A-Z]+[0-9]+)$/, function (all, company, money, tile, rotation, coordinate) {
            return company + " 花费 " + money + " 铺设带有旋转 " + rotation + " 的板块 " + tile + " 在 " + coordinate;
        }],
        // PRR lays tile #14 with rotation 1 on F2 (Harrisburg)
        [/^(.*) lays tile (.*) with rotation (\d+) on ([A-Z]+[0-9]+) \((.*)\)$/, function (all, company, tile, rotation, coordinate, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return company + " 铺设带有旋转 " + rotation + " 的板块 " + tile + " 在 " + coordinate + " (" + location_zh + ")";
        }],
        // lays tile #7 with rotation 4 on B10
        [/^(.*) lays tile (.*) with rotation (\d+) on ([A-Z]+[0-9]+)$/, function (all, company, tile, rotation, coordinate, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return company + " 铺设带有旋转 " + rotation + " 的板块 " + tile + " 在 " + coordinate;
        }],
        // PRR runs a 3 train for $120: C17-C15-D6-C5 + E/W + Mail Contract
        [/^(.*) runs a (.*) train for (.+\d+): (.*)$/, function (all, company, train, money, route) {
            var company = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            route = route.replace(/E\/W/, "东西贯通")
                .replace(/Mail Contract/, "邮递契约")
                .replace(/Port/, "港口")
                .replace(/Boomtown/, "新兴城市")
                .replace(/Meat-Packing/, "肉类包装")
                .replace(/dest/, "目的地");
            return company + " 运行一辆 " + train + " 级火车得到 " + money + ": " + route;
        }],
        // C&O pays out $700 = $70 per share ($420 to aaa, $140 to bbb, $140 to ccc)
        [/^(.*) pays out (.\d*) = (.\d*) per share \((.*)\)$/, function (all, company, total_money, money, people) {
            var company = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            people = people.replace(/ to /g, " 给 ");
            return company + " 分红 " + total_money + " = " + money + " 每股 (" + people + ")";
        }],
        [/^(.*) is currently a prototype game, the design is not final, and so may change at any time\.$/, function (all, gamename) {
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            return gamename_zh + " 目前是一款原型游戏, 设计尚未最终确定, 因此可能随时更改。";
        }],
        // [/^-- Stock Round (.*) --$/, "-- 股票轮 $1 --"],
        [/^-- Stock Round (.*) --$/, function (all, round) {
            round = round.replace(/of (\d)/, "共 $1 个");
            return "-- 股票轮 " + round + " --";
        }],
        // [/^-- Operating Round (.*) --$/, "-- 运营轮 $1 --"],
        [/^-- Operating Round (.*) --$/, function (all, round) {
            round = round.replace(/of (\d)/, "共 $1 个");
            return "-- 运营轮 " + round + " --";
        }],
        [/^-- Acquisition Round (.*) --$/, function (all, round) {
            round = round.replace(/of (\d)/, "共 $1 个");
            return "-- 收购轮 " + round + " --";
        }],
        [/^-- Merger and Conversion Round (.*) --$/, function (all, round) {
            round = round.replace(/of (\d)/, "共 $1 个");
            return "-- 合并与转换轮 " + round + " --";
        }],
        [/^-- Event: A (.*) train exports --$/, "-- 事件: 一辆 $1 级火车出口 --"],
        // [/^-- Event: (.*) trains rust \((.*)\) --$/, "-- 事件: $1 级火车淘汰 ($2) --"],
        [/^-- Event: (.*) trains rust \((.*)\) --$/,  function (all, level, description) {
            description = description.replace(/The Depot/, "公开市场").replace(/The Bank/, "银行");
            return "-- 事件: " + level + " 级火车淘汰 (" + description + ") --";
        }],
        // Baltimore and Susquehanna Railroad, 2 ability uses left, click to toggle description
        [/^(.+), (ability already used|ability still usable|(\d+) ability uses? left), click to toggle description$/, function (all, company, description, number){
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            if (description === "ability already used") {
                return company_zh + ", 能力已使用, 点击以切换描述"
            } else if (description === "ability still usable") {
                return company_zh + ", 能力仍然可用, 点击以切换描述"
            } else {
                return company_zh + ", 剩余 " + number + " 个能力可使用, 点击以切换描述"
            };
        }],
        [/^(.+), click to toggle description$/, function (all, company, description, number){
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return company_zh + ", 点击以切换描述"
        }],
        // "-- Enabled programmed action 'Pass in Stock Round, unconditionally'": "-- 已启用程序行动 \"无条件地略过股票轮\"",
        // "-- Enabled programmed action 'Pass in Stock Round, unconditionally, indefinitely'": "-- 已启用程序行动 \"无条件, 无限期地略过股票轮\"",
        // "-- Enabled programmed action 'Pass in Stock Round, indefinitely'": "-- 已启用程序行动 \"无限期地略过股票轮\"",
        // "-- Disabled programmed action 'Pass in Stock Round, unconditionally' due to 'user'": "-- 由于 \"玩家\" 原因, 已禁用程序行动 \"无条件地略过股票轮\"",
        // "-- Disabled programmed action 'Pass in Stock Round, unconditionally, indefinitely' due to 'user'": "-- 由于 \"玩家\" 原因, 已禁用程序行动 \"无条件, 无限期地略过股票轮\"",
        // "-- Disabled programmed action 'Pass in Stock Round, indefinitely' due to 'user'": "-- 由于 \"玩家\" 原因, 已禁用程序行动 \"无限期地略过股票轮\"",
        [/^-- (Enabled|Disabled) programmed action 'Pass in Stock Round(, unconditionally|, indefinitely|, unconditionally, indefinitely|)'(?: due to '(user|(?:Corporation (.+) parred))'|)$/, function (all, able, description, reason, company) {
            if (description === ", unconditionally") {
                description = "无条件地"
            } else if (description === ", indefinitely") {
                description = "无限期地"
            } else if (description === ", unconditionally, indefinitely") {
                description = "无条件, 无限期地"
            } else {
                description = ""
            };

            if (reason === "user") {
                reason = " 由于 \"用户设置\", "
            } else if (!reason) {
                reason = ""
            } else {
                reason = " 由于 \"公司 " + company + " 发行\", "
            };
            return "--" + reason + " 已" + (able === "Enabled" ? "启用": "禁用") + "程序行动 \"" + description + "略过股票轮\""
        }],
        [/^-- (Enabled|Disabled) programmed action 'Pass in Closing Round(, unconditionally|, indefinitely|, unconditionally, indefinitely|)'(?: due to '(user|(?:Corporation (.+) parred))'|)$/, function (all, able, description, reason, company) {
            if (description === ", unconditionally") {
                description = "无条件地"
            } else if (description === ", indefinitely") {
                description = "无限期地"
            } else if (description === ", unconditionally, indefinitely") {
                description = "无条件, 无限期地"
            } else {
                description = ""
            };

            if (reason === "user") {
                reason = " 由于 \"用户设置\", "
            } else if (!reason) {
                reason = ""
            } else {
                reason = " 由于 \"公司 " + company + " 发行\", "
            };
            return "--" + reason + " 已" + (able === "Enabled" ? "启用": "禁用") + "程序行动 \"" + description + "略过停业轮\""
        }],
        // -- Enabled programmed action 'Buy LV from IPO until floated'
        // -- Enabled programmed action 'Buy LV from IPO until floated, then auto pass'
        // -- Enabled programmed action 'Buy LV from IPO until 2 shares'
        [/^-- (Enabled|Disabled) programmed action 'Buy (.+) from (.+) until (\d+ shares|floated)(, then auto pass|)'( due to 'user'|)$/, function (all, able, company, where, num, autopass ,reason) {
            autopass = (autopass? ", 然后自动结束": "");
            num = (num === "floated"? "公司上市": "拥有 " + num[0] + " 股");
            if (where === "market") {
                where = "市场"
            };
            return "--"+ (reason ? " 由于 \"用户设置\", ": "")  +" 已" + (able === "Enabled" ? "启用": "禁用") + "程序行动 \"从" + where + "购买 " + company + " 股票直到" + num + autopass + "\""
        }],


        [/(.*)-(.*) \(dest\)$$/,"$1-$2 (目的地)"],
        [/Submit (.+\d+)$/, "提交 $1"],
        [/ operates /, " 运营 "],
        [/ has no valid actions and passes$/, " 没有有效行动因此略过"],
        [/ passes$/, " 略过"],
        [/Value: (.*\d*)/, "价值: $1"],
        [/Price: (.*\d*)/, "价格: $1"],
        [/Revenue: (.*\d*)/, "收入: $1"],
        [/Certs\//, "票证 / "],
        [/\bto float/, "上市"],
        [/ floats$/, " 上市"],
        [/^rusts (.*)/, "淘汰 $1"],
        [/^obsoletes (.*)/, "过时 $1"],
        [/(\d+)% President's Share/, "$1% 总裁股"],
        [/^Order:/, "顺位:"],
        [/^-- Game over: (.*) --$/, "-- 游戏结束: $1 --"],
        [/^(.*) passes bidding$/, "$1 放弃出价"],
        [/^(.*) passes lay\/upgrade track$/, "$1 放弃铺设/升级轨道"],
        [/^(.*) receives a (.*) share of (.*)$/, "$1 收到 $3 $2 的股票"],
        [/^(.*) pars (.*) at (.*)$/, "$1 将 $2 以 $3 发行上市"],
        [/^(.*) becomes the president of (.*)$/, "$1 成为 $2 总裁"],
        [/^Pass \(on (.*)\)$/, "放弃 (在 $1 上)"],
        [/^Zoom to (\d+) % – hotkey: -$/, "缩小至 $1 % – 快捷键: -"],
        [/^Zoom to (\d+) % – hotkey: \+$/, "放大至 $1 % – 快捷键: +"],
        [/ has priority deal$/, " 拥有优先交易卡"],
        [/ passes place a token$/, " 放弃放置一个车站"],
        [/ places a second token on ([A-Z]+[0-9]+) \((.*)\)$/, function (all, coo, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return " 放置了第二个车站在 " + coo + " (" + location_zh + ")";
        }],
        [/ places a token on ([A-Z]+[0-9]+) \((.*)\)$/, function (all, coo, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return " 放置了一个车站在 " + coo + " (" + location_zh + ")";
        }],
        [/ places a token on ([A-Z]+[0-9]+) \((.*)\) for (.\d*)$/, function (all, coo, location, money) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return " 放置了一个车站在 " + coo + " (" + location_zh + ") 花费 " + money;
        }],
        [/ places a token on ([A-Z]+[0-9]+) for (.\d*)$/, " 放置了一个车站在 $1 花费 $2"],
        [/ places a token on ([A-Z]+[0-9]+)$/, " 放置了一个车站在 $1"],
        [/ places a second token on ([A-Z]+[0-9]+)$/, " 放置了第二个车站在 $1"],
        [/ skips place a token$/, " 跳过放置车站"],
        [/ skips run routes$/, " 跳过运行线路"],
        [/ does not run$/, " 没有运行"],
        [/ passes buy trains$/, " 放弃购买火车"],
        [/ skips buy trains$/, " 跳过购买火车"],
        [/ passes buy companies$/, " 放弃购买公司"],
        [/ skips buy companies$/, " 跳过购买公司"],
        [/ passes lay track$/, " 放弃铺设轨道"],
        [/ skips lay track$/, " 跳过铺设轨道"],
        [/ must buy an available train$/, " 必须购买一辆可用的火车"],
        [/ has (.*\d+)\.$/, " 拥有 $1 。"],
        [/ has (.*\d+) in cash\.$/, " 拥有 $1 现金。"],
        [/ declines to sell shares$/, " 决定不出售股票"],
        [/^Game ended manually by (.*)/, "游戏被 $1 手动结束"],
        [/^(.*) has (.*\d+) in sellable shares\.$/, "$1 拥有 $2 可售股票。"],
        [/^(.*) must sell shares to raise at least (.+\d+)\.$/, "$1 必须出售股票才能筹集至少 $2。"],
        [/^(.*) must contribute (.+\d+) for (.*) to afford a train from the Depot\.$/, "$1 必须为 $3 出资 $2 才能从公开市场购买一辆火车。"],
        [/ passes place a token or lay track$/, " 放弃放置一个车站或铺设轨道"],
        [/ removes a (.*) share of (.*) from the game$/, " 将 $2 $1 的股票移除游戏"],
        [/^Sell (\d*) \((.\d*)\)$/, "出售 $1 ($2)"],
        [/ withholds (.\d*)$/, " 保留 $1"],
        [/ discards (.*)$/, " 弃置 $1"],
        [/^(.*): • confirmed receiving consent from (.*)$/, "$1: • 已确认收到 $2 的同意"],
        [/^token location: ([A-Z]+\d+)$/, "车站位于: $1"],
        [/^token location: (.+)$/, "标记位于: $1"],
        [/^token cost: (.*\d+)$/, "车站代价: $1"],
        [/^Foreign Investor receives (.*\d+)$/, "境外投资商 收到 $1"],
        [/^(.+) receives (.+\d+), a (.+) train, and a token on ([A-Z]+\d+)/, "$1 收到 $2, 一辆 $3 级火车, 和一个位于 $4 的车站标记"],
        [/(?<!and) receives (.+\d+)$/, " 收到 $1"],
        [/^Go to run (.+) of (.+)$/, "跳转到 $2 在 $1 的运行"],
        [/^(.+) does not have enough liquidity to contribute towards (.+) buying a train from the Depot\. (.+) must buy a train from another corporation, or (.+) must declare bankruptcy\./, "$1 没有足够的流动资产来帮助 $2 从公开市场购买一辆火车。 $3 必须从其他股份公司购买一辆火车, 或者 $4 必须宣布破产。"],
        [/^-- (.+) goes bankrupt and sells remaining shares --$/, "-- $1 破产并出售剩余股票 --"],






        //18Chesapeake
        [/Cornelius Vanderbilt comes with the president's share of (.{1,3})/, "科尼利尔斯 · 范德比尔特铁路公司拥有 $1 股份公司的总裁股"],
        [/Purchasing player takes a president's share \(20%\) of (.{1,3}) and immediately sets its par value\. This private closes when the associated corporation buys its first train\. It cannot be bought by a corporation\./, "购买玩家拿取 $1 股份公司中的总裁股(20%)并立即设定该股份公司的发行价。当关联股份公司购买第一辆火车时, 本私有公司关闭。它不能被股份公司购买。"],
        [/^(.*) wins the auction for (.*) with the only bid of (.+\d+)$/, function (all, username, company, number) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 以 " + number + " 的唯一出价赢得 " + company_zh + " 的竞拍";
        }],
        [/^(.*) wins the auction for (.*) with a bid of (.+\d+)$/, function (all, username, company, number) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 以 " + number + " 的出价赢得 " + company_zh + " 的竞拍";
        }],
        [/^(.*) goes up for auction$/, function (all, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return "开始竞拍 " + company_zh;
        }],
        [/^(.*) passes on (.*)$/, function (all, username, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return username + " 放弃 " + company_zh;
        }],
        [/^Columbia - Philadelphia Railroad \((.*)\)$/, "哥伦比亚费城铁路公司 ($1)"],
        [/^Chesapeake and Ohio Canal \((.*)\)$/, "切萨皮克俄亥俄运河公司 ($1)"],
        [/^Baltimore and Susquehanna .* \((.*)\)$/, "巴尔的摩萨斯奎哈纳铁路公司 ($1)"],
        [/^(.+)'s remaining shares are transferred to the Market$/, "$1 的剩余股票转移到市场"],
        [/^(.+) exchanges a (4|5|6) for a D train for (\$700|\$800) from The Depot$/, "$1 花费了 $3 和一辆 $2 级火车从公开市场交换了一辆 D 级火车"],






        //1846
        [/IC receives a (\$\d+) subsidy/, "IC 获得一笔 $1 的补贴"],
        [/ chooses a company$/, " 选择了一个公司"],
        [/^Privates in the game: (.+)$/, function (all, company) {
            var company_list = company.split(', ');
            var company_zh_list = [];
            company_list.forEach(a => {
                company_zh_list.push(I18N.zh["game"]["static"][a] ? I18N.zh["game"]["static"][a] : a);
            });
            var company_zh = company_zh_list.join(', ');
            return "本局游戏的私有公司: " + company_zh;
        }],
        [/^Corporations in the game: (.+)$/, "本局游戏的股份公司: $1"],
        [/^Removing (.+)$/, function (all, company) {
            var company_list = company.split(', ');
            var company_zh_list = [];
            company_list.forEach(a => {
                company_zh_list.push(I18N.zh["game"]["static"][a] ? I18N.zh["game"]["static"][a] : a);
            });
            var company_zh = company_zh_list.join(', ');
            return "移除 " + company_zh;
        }],
        [/^(.+) price decreases from (.\d+) to (.\d+)$/, function (all, company, before, after) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return company_zh + "的价格从 " + before + " 降至 " + after;
        }],
        [/^(.+) chooses (.+)$/, function (all, user, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return user + " 选择了 " + company_zh;
        }],
        [/^\(??[A-Z]+\d+\)??-\(??[A-Z]+\d+\)??(?:-\(??[A-Z]+\d+\)??)* \+ .+$/, function(all) {
            all = all.replace(/E\/W/, "东西贯通")
                .replace(/Mail Contract/, "邮递契约")
                .replace(/Port/, "港口")
                .replace(/Boomtown/, "新兴城市")
                .replace(/Meat-Packing/, "肉类包装")
                .replace(/dest/, "目的地");
            return all;
        }],
        [/^(.+) chose Pass \((\d)\)/, "$1 选择了 放弃 ($2)"],
        [/^(.+) may assign Steamboat Company to a new hex and\/or corporation or minor\./, "$1 可以将汽船公司(SC)分配给一个新的六角格 和/或 铁路/独立铁路公司。"],
        [/^(.+) may assign Steamboat Company to a new corporation or minor\./, "$1 可以将汽船公司(SC)分配给一个新的铁路/独立铁路公司。"],
        [/^(.+) may assign Steamboat Company to a new hex\./, "$1 可以将汽船公司(SC)分配给一个新的六角格。"],
        [/^Steamboat Company is still assigned to (.+)$/, "汽船公司(SC)仍被分配给 $1"],
        [/^Steamboat Company is assigned to (.+)$/, "汽船公司(SC)被分配给 $1"],
        [/^Steamboat Company is unassigned from (.+)$/, "汽船公司(SC)被从 $1 取消分配"],
        [/^Boomtown is assigned to (.+)$/, "新兴城市(BT)被分配给 $1"],
        [/^Meat Packing Company is assigned to (.+)$/, "肉类包装公司(MPC)被分配给 $1"],
        [/^Currently assigned to (.+) and (.+)\.$/, "当前被分配给 $1 和 $2。"],
        [/^Currently assigned to (.+)\.$/, "当前被分配给 $1。"],
        [/^(.+) skips buy\/use companies$/, "$1 跳过购买/使用公司"],
        [/^(.+) passes buy\/use companies$/, "$1 放弃购买/使用公司"],
        [/^(.+) issues (\d+) shares of (.+) and receives (.*\d+)$/, "$1 发行 $2 股 $3 的股票并获得 $4"],
        [/^(.+) issues a (.+) share of (.+) and receives (.*\d+)$/, "$1 发行 $3 $2 的股票并获得 $4"],
        [/^(.+) redeems a (.+) share from the market for (.*\d+)$/, "$1 从市场回购 $2 的股票并获得 $4"],
        [/^(.+) skips place a token or lay track$/, "$1 跳过放置车站或者铺设轨道"],
        [/^(.+)'s share price moves right from (.*\d+) to (.*\d+) \((\d+) steps\)$/, "$1 的股价从 $2 向右移至 $3 ($4 格)"],
        [/^(.+) runs for (.*\d+) and pays half$/, "$1 运行获得了 $2 并半分红"],
        [/^-- Event: (.+)'s Steamboat Company marker removed from ([A-Z]+\d+) --$/, "-- 事件: $1 的汽船公司标志从 $2 上移除 --"],
        [/^-- Event: Player-owned Steamboat Company token removed from ([A-Z]+\d+) --$/, "-- 事件: 玩家拥有的汽船公司标志从 $1 上移除 --"],
        [/^(.+) will place a token on ([A-Z]+\d+) when it is upgraded to green$/, "$1 将在 $2 升级为绿色时放置一个车站标记"],
        [/^Little Miami \((.+)\)$/, "小迈阿密 ($1)"],
        [/^Boomtown \((.+)\)$/, "新兴城市 ($1)"],
        [/^Chicago and Western Indiana \((.+)\)$/, "芝加哥西印第安纳 ($1)"],
        [/^Lake Shore Line \((.+)\)$/, "湖滨线 ($1)"],
        [/^Meat Packing Company \((.+)\)$/, "肉类包装公司 ($1)"],
        [/^Michigan Central \((.+)\)$/, "密歇根中部 ($1)"],
        [/^Ohio & Indiana \((.+)\)$/, "俄亥俄印第安纳 ($1)"],
        [/^Steamboat Company \((.+)\)$/, "汽船公司 ($1)"],
        [/^(.+) receives a discount of (\$\d+) from Little Miami$/, "$1 收到一笔来自小迈阿密(LM)的 $2 折扣"],
        [/^(.+) receives a discount of (\$\d+) from Tunnel Blasting Company$/, "$1 收到一笔来自隧道爆破公司(TBC)的 $2 折扣"],
        [/^One of the N locations must include a (.+) token\.$/, "N 个地点中的一个必须包含 $1 的车站。"],
        [/^(.+) places a token on ([A-Z]+\d+) \((.+)\) as the city is green$/, function (all, company, coordinate, location) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return company + " 放置了一个车站标记在 " + coordinate + " (" + location_zh + ") 当这个城市为绿色时";
        }],
        [/^-- Event: (.+)'s Meat Packing Company marker removed from ([A-Z]+\d+) --$/,"-- 事件: $1 在 $2 上的肉类包装公司标记被移除 --"],
        [/^-- Event: (.+)'s Boomtown marker removed from ([A-Z]+\d+) --$/,"-- 事件: $1 在 $2 上的新兴城市标记被移除 --"],
        [/^N\/M trains \((.+)\) may visit M locations, but only earn revenue from the best combination of N locations\.$/, "N/M 级火车 ($1) 可以经过 M 个地点，但只能从 N 个地点的最佳组合中获得收入。"],
        [/^(.+) declines to buy shares$/, "$1 决定不购买股票"],
        [/^(.+) passes laying additional track with Michigan Central$/, "$1 结束使用密歇根中部(MC)铺设额外的轨道"],
        [/^DR (\d+)$/, "轮抽轮 $1"],
        [/^AR (\d+\.\d+)$/, "收购轮 $1"],
        [/^MR (\d+\.\d+)$/, "合并轮 $1"],
        [/^ISR (\d+)$/, "竞拍轮 $1"],
        [/^SR (\d+)$/, "股票轮 $1"],
        [/^OR (\d+\.\d+)$/, "运营轮 $1"],
        [/^OR (\d+)$/, "运营轮 $1"],
        [/^Chicago and Western Indiana can only place token on D6 city 3, not on city (\d+)$/, "芝加哥西印第安纳(C&WI)只能在 D6 城市 3 的空位中放置车站, 不能在城市 $1 中"],
        [/^Cannot place token on ([A-Z]+\d+)$/, "不能在 $1 放置车站"],
        [/^Cannot place token on ([A-Z]+\d+) because it is not connected$/, "无法在 $1 放置车站, 因为它没有连接"],
        [/^(.+) declines to place token$/, "$1 决定不放置车站"],




        //1817
        // "Interest if 2 more loans repaid": "如再偿还 2 笔贷款后的利息",
        [/^Interest if (\d+) more loans? repaid$/, "如再偿还 $1 笔贷款后的利息"],
        // "Interest if 4 more loans taken": "如再贷款 4 笔贷款后的利息",
        [/^Interest if (\d+) more loans? taken$/, "如再贷款 $1 笔贷款后的利息"],
        // 6 is too many stops for 5 train
        [/^(\d+) is too many stops for (.+) train$/, "$1 个站点对于 $2 级火车来说太多了"],
        [/ contributes (.*\d+.*)/, " 出资 $1"],
        [/Click confirm if (.+) has already consented to this action\./, "如果 $1 已同意此操作, 请点击 \"确认\"。"],
        [/^(.+) has (.+\d+) and cannot spend (.+\d+)$/, "$1 拥有 $2, 不能花费 $3"],
        [/^(.+) may not spend (.+\d+) on (.+)'s (.+) train; may only spend between (.+\d+) and (.+\d+)\.$/, "$1 不能在 $3 的 $4 级火车上花费 $2; 只可以花费 $5 至 $6。"],
        [/^Seed Money for initial auction is (.+\d+)$/, "为初始竞拍提供的种子资金是 $1"],
        [/^(.+) wins the auction for (.+) with a bid of (.+\d+) spending (.+\d+) seed money, (.+\d+) seed money remains$/, function (all, user, company, money, bank, remain) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return user + " 以 " + money + " 的出价赢得 " + company_zh + " 的竞拍, 花费了 " + bank + " 种子资金, 种子资金还剩余 " + remain;
        }],
        [/^(.+) must choose city for home token$/, "$1 必须为初始车站选择一个城市"],
        [/^(.+) wins bid on (.+) for (.+\d+)$/, "$1 以 $3 赢得 $2 的竞拍"],
        [/^(P\d+ - .+) used for forming (.+) contributing (.+\d+) value$/, function (all, private, cor, value) {
            var private_zh = (I18N.zh["game"]["static"][private] ? I18N.zh["game"]["static"][private] : private);
            return private_zh + " 用于组成 " + cor + ", 提供了 " + value + " 价值";
        }],
        [/^(.+) starts with (.+\d+) and (\d+) shares?$/, "$1 以 $2 和 $3 股股票启用"],
        [/^(.+) cannot be bought at (.+\d+), skipping$/, "$1 不能以 $2 被收购, 跳过"],

        //1888-N
        // Dest: Jinan (G9) +20
        [/^Dest: (.*) \((.*)\) \+(\d+)$/, function (all, location, coo, money) {
            var location_zh = (I18N.zh["game"]["static"][location] ? I18N.zh["game"]["static"][location] : location);
            return "目的地: " + location_zh + " (" + coo + ") +" + money;
        }],

        // Rolling Stock Stars
        [/^Max Div: (\$\d+)$/, "每股派息上限: $1"],
        [/ revealed from deck$/, " 被从牌堆中翻出"],
        //          [/-- Turn (\d+), Phase (\d+) - (\w+) --/, "-- 回合 $1, 阶段 $2 - $3 --"],
        [/-- Turn (\d+), Phase (\d+) - (.+) --/, function (all, turn, phase, desc) {
            var desc_zh = (I18N.zh["game"]["static"][desc] ? I18N.zh["game"]["static"][desc] : desc);
            return "-- 回合 " + turn + ", 阶段 " + phase + " - " + desc_zh + " --"
        }],
        [/^(.+) cannot bid (.+\d+) and is out of the auction for (.+)/, function (all, user, money, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return user + " 由于无法出价 " + money + ", 退出对 " + company_zh + " 的竞拍"; 
        }],
        // Rolling Stock Stars: Turn 1, Phase 9 - Select Dividends - End card flipped : Game Ends on next phase 7
        [/^(.*): Turn (.+), Phase (.+) - (.* Round) - (.+) - (.+)$/, function (all, gamename, turn_number, phase_number, round, des, des1) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            return hotseat + gamename_zh + ": 回合 " + turn_number + ", 阶段 " + phase_number + " - " + round_zh + " - " + (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des) + " - " + (I18N.zh["game"]["static"][des1] ? I18N.zh["game"]["static"][des1] : des1);
        }],
        // Rolling Stock Stars: Turn 1, Phase 9 - IPO Round - Choose a Corporation to IPO
        [/^(.*): Turn (.+), Phase (.+) - (.* Round) - (.+)$/, function (all, gamename, turn_number, phase_number, round, des) {
            var hotseat = (gamename.match(/^\[HOTSEAT\] /) ? "[热座模式] " : "") ;
            gamename = gamename.replace((/^\[HOTSEAT\] /), "");
            var gamename_zh = (I18N.zh["pubilc"]["static"][gamename] ? I18N.zh["pubilc"]["static"][gamename] : gamename);
            var round_zh = (I18N.zh["game"]["static"][round] ? I18N.zh["game"]["static"][round] : round);
            return hotseat + gamename_zh + ": 回合 " + turn_number + ", 阶段 " + phase_number + " - " + round_zh + " - " + (I18N.zh["game"]["static"][des] ? I18N.zh["game"]["static"][des] : des);
        }],
        [/^Player order: (.+, .+)$/, "玩家顺位: $1"],
        [/ passes close companies$/, " 略过公司停业"],
        [/^Dividend per share\. Range: From (.*\d+) to (.*\d+)\. Issued shares: (\d+)\. Stars on share price: (\d+.*)$/, "每股股票的股息。 股息范围: 从 $1 到 $2。 已发行的股票: $3。 股价上的星级: $4"],
        [/^(.+) share price increases to (.+\d+)$/, "$1 股价上涨至 $2"],
        [/^(.+) share price decreases to (.+\d+)$/, "$1 股价下跌至 $2"],
        // JS (in receivership) pays $0 per share
        [/^(.+) \(in receivership\) pays (.+\d+) per share$/, "$1 (破产管理中) 每股支付 $2"],
        [/^(.+) pays (.+\d+) per share$/, "$1 每股支付 $2"],
        [/^The Market has (\d+) share(?:s|) of (.+) and receives (.+\d+)$/, "市场持有 $2 的 $1 股股票, 收到 $3"],
        [/^(.+) has (\d+) share(?:s|) of (.+) and receives (.+\d+)$/, "$1 持有 $3 的 $2 股股票, 收到 $4"],
        [/ receives (.+\d+) as a scrapping bonus$/, " 收到 $1 作为废品回收的奖励"],
        [/^(.+ \(.+\)) closes$/, "$1 停业"],
        [/^Pass (\(.+\))$/, "略过 $1"],
        [/^Close (.+)$/, "停业 $1"],
        [/^(.+) acts for (.+)$/, "$1 代理 $2"],
        [/ skips issue share$/, " 跳过增发新股"],
        [/ passes issue share$/, " 略过增发新股"],
        [/ controls no corporations and must pass$/, " 没有控制任何集团因此必须略过"],
        [/ has no more legal actions and must pass$/, " 没有更多合法行动因此必须略过"],
        [/^(.+) acquires (.+) from Foreign Investor for (.+\d+)$/, "$1 花费 $3 从境外投资商收购 $2"],
        [/^(.+) acquires (.+) from (.+) for (.+\d+)$/, "$1 花费 $4 从 $3 收购 $2"],
        [/^(.+) offers to purchase (.+) from (.+) for (.+\d+)$/, "$1 报价 $4 从 $3 购买 $2"],
        [/ accepts offer for (.+) by (.+)$/, " 接受 $2 对 $1 的报价"],
        [/ rejects offer for (.+) by (.+)$/, " 拒绝 $2 对 $1 的报价"],
        // London Heathrow Airport passes choose a corporation to ipo
        [/^(.+) passes choose a corporation to ipo$/, function (all, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return company_zh + " 放弃转型为一个集团进行 IPO"
        }],
        [/^(.+) converts to a corporation: (.+)$/, function (all, private, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return private + " 转型为一个集团: " + company_zh;
        }],
        [/^(.+) share price is set to (.+\d+)$/, "$1 股价定为 $2"],
        [/^(.+) pays difference of (.+\d+) to (.+) and receives (\d+) share(?:s|)/, "$1 向 $3 支付 $2 的差价, 并获得 $4 股股票"],
        [/ issues (\d+) share(?:s|) and receives (.+\d+)$/, " 发行 $1 股股票, 并获得 $2"],
        [/ passes propose, accept or reject acquisition offers$/, " 放弃提议, 接受或拒绝收购要约"],
        [/^Buy Market Share \((.+\d+)\)/, "购买市场股票 ($1)"],
        [/ pays (.+\d+) due to net loss/, " 因净亏损支付 $1"],
        [/^(.+) cannot pay net loss of (.+\d+)/, "$1 无法支付 $2 的净损失"],
        [/^President's share sold to pool\. (.+) enters receivership$/, "总裁股被出售至市场池。$1 进入破产管理"],
        [/^(.+) bankrupts$/, "$1 破产"],
        [/^Will (.+ \(.+\)) purchase (.+) \(Foreign Investor\) for (.+\d+)\?$/, "$1 会以 $3 的价格收购 $2 (境外投资商) 吗？"],
        [/^(.+) has the right to intervene$/, "$1 有权干预"],
        [/^(.+) proposes to purchase (.+) from the Foreign Investor for (.+\d+)$/, "$1 计划以 $3 的价格从境外投资商购买 $2"],
        [/^(.+) refuses to intervene on purchase of WT$/, "$1 拒绝干预 $2 的收购"],
        [/^([A-Z&-]+) closes$/, " $1 停业"],

        // 1830
        [/^Mohawk & Hudson \((.+)\)$/, "莫霍克哈德逊 ($1)"],
        [/^(.+) exchanges Mohawk & Hudson from the IPO for a 10% share of NYC$/, "$1 将莫霍克哈德逊(MH)从 IPO 中交换为 NYC 10% 的股票"],
        [/^(.+) exchanges Mohawk & Hudson from the market for a 10% share of NYC$/, "$1 将莫霍克哈德逊(MH)从市场中交换为 NYC 10% 的股票"],
        [/^Champlain & St.Lawrence \((.+)\)$/, "尚普兰圣劳伦斯 ($1)"],
        [/^Delaware & Hudson \((.+)\)$/, "特拉华哈德逊 ($1)"],
        [/^(.+) removed$/, function (all, company) {
            var company_zh = (I18N.zh["game"]["static"][company] ? I18N.zh["game"]["static"][company] : company);
            return company_zh + " 被移除";
        }],
    ],
};

I18N.zh["hotseat"] = { // 热座模式翻译
    "static": { // 静态翻译
        ...I18N.zh["game"]["static"],
        "Hotseat Description": "热座模式描述",
        "Edit hotseat description": "编辑热座模式描述",
        "Add a title": "添加一个标题",
    },
    "regexp": [ // 正则翻译
        ...I18N.zh["game"]["regexp"],
    ],
};

I18N.zh["tutorial"] = { // 教程翻译
    "static": { // 静态翻译
        ...I18N.zh["game"]["static"],
        ...I18N.zh["hotseat"]["static"],
    },
    "regexp": [ // 正则翻译
        ...I18N.zh["game"]["regexp"],
        ...I18N.zh["hotseat"]["regexp"],
    ],
};

I18N.zh["about"] = { // 关于页面翻译
    "static": { // 静态翻译
        "About 18xx.Games": "关于 18xx.Games",
        "Conduct Expectations": "行为期望",
        "Be nice. Treat people with respect.": "友善一点。尊重他人。",
        "Privacy Policy": "隐私政策",
        "Email Addresses": "电子邮件地址",
        "IP Addresses": "IP 地址",
        "Local Storage": "本地存储",
        "Special thanks to all the contributors.": "特别感谢所有的贡献者。",
        "18xx.Games is created and maintained by Toby Mao. It is an open source project, and you can find the code on": "18xx.游戏由 Toby Mao 创建和维护。这是一个开源项目, 您可以找到代码在",
        ". All games are used with express written consent from their respective rights holders. You can find more information about the games on the": "上。所有游戏的使用均需获得各自权利持有人的明确书面同意。您可以找到有关游戏的更多信息在",
        ".": " 上。",
        "Current version:": "当前版本:",
        "deployed at": "部署于",
        "View all recent commits": "查看最近的所有提交",
        "Upon your request and expression of consent, we collect the following data for the purpose of providing services to you. It is removed upon your request to terminate these services.": "应您的要求和表示同意, 我们收集以下数据用于为您提供服务。如果您请求终止这些服务, 则会将其删除。",
        "are collected in order to send notifications. These notifications can be disabled in the": "是为了发送通知而收集的。发送通知可以在",
        "profile": "简介",
        "page. Emails are not publicly available and not shared to any 3rd party except when email notifications are enabled. Emails are sent using the": "页面被禁止。除非启用了电子邮件通知, 否则电子邮件不会公开提供, 也不会共享给任何第三方。发送电子邮件使用了",
        "service.": "服务。",
        "are collected when you use the site in order to prevent malicious behavior. These are not publicly available and not shared to any 3rd party.": "会在使用网站时被收集, 以防止恶意行为。这些信息不公开, 也不共享给任何第三方。",
        "is collected when you play a game and is needed for the game to function. Game Data is publicly available through the website interface and API. In-game messages are only visible to the players in the game (whether via the website or the API).": "是在进行游戏时收集的, 是游戏运行所需的。游戏数据可通过网站界面和 API 公开获取。即时消息仅对游戏中的玩家可见 (无论是通过网站还是 API)。",
        "is used to store local data like hot seat games and master mode. This can only be accessed by your device.": "本地存储用于存储本地数据, 如热座模式游戏和主机模式。这只能由您的设备访问。",
        "For questions or requests please file an issue on": "如有问题或请求请提交问题在",
        "This website will always be open-source and free to play. If you'd like support this project, you can become a patron on": "这个网站将始终是开源的, 并且可以免费游玩。如果你想支持这个项目, 你可以成为一位赞助人在",
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["signup"] = { // 注册翻译
    "static": { // 静态翻译
        "Create Account": "创建账户",
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["login"] = { // 登录翻译
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["forgot"] = { // 忘记页面翻译
    "static": { // 静态翻译
        "Reset Password": "重置密码",
        "Could not find email": "找不到电子邮箱",
        "You've recently requested a password reset!": "您最近已经请求过重置密码!"
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["map"] = { // 地图页面翻译
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["forgot"] = { // 忘记页面翻译
    "static": { // 静态翻译
        "Reset Password": "重置密码",
        "Could not find email": "找不到电子邮箱",
        "You've recently requested a password reset!": "您最近已经请求过重置密码!"
    },
    "regexp": [ // 正则翻译
    ],
};
I18N.zh["map"] = { // 地图页面翻译 
    "static": { // 静态翻译
        ...I18N.zh["game"]["static"], 
    }, 
    "regexp": [ // 正则翻译
        ...I18N.zh["game"]["regexp"],
    ],
};
I18N.zh["market"] = { // 市场页面翻译
    "static": { // 静态翻译
        ...I18N.zh["game"]["static"],
    },
    "regexp": [ // 正则翻译
        ...I18N.zh["game"]["regexp"],
    ],
};
I18N.zh["tiles"] = { // 板块页面翻译
    "static": { // 静态翻译
        ...I18N.zh["game"]["static"],
        "Generic Map Hexes and Common Track Tiles": "一般地图六角格和通用轨道板块",
    },
    "regexp": [ // 正则翻译
        ...I18N.zh["game"]["regexp"],
        [/^(.+) Tile Manifest$/, "$1 板块清单"],
        [/^(.+) Map Hexes$/, "$1 地图六角格"],
    ],
};

