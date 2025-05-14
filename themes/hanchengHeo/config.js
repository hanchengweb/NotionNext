const CONFIG = {
  HEO_HOME_POST_TWO_COLS: false, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: false, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://hancheng.blog' },
    { title: '访问文档中心获取更多帮助', url: 'https://hancheng.blog' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: true,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: true,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'AI分享',
  HEO_HERO_TITLE_2: '编程思想',
  HEO_HERO_TITLE_3: 'HANCHENG.BLOG',
  HEO_HERO_TITLE_4: '我是韩诚',
  HEO_HERO_TITLE_5: '一个专注于AI自动化工作流的前端开发',
  HEO_HERO_TITLE_LINK: 'https://hancheng.blog',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: {
    title: '必看精选',
    url: '/category/精选'
  },
  HEO_HERO_CATEGORY_2: {
    title: '热门文章',
    url: '/category/热门'
  },
  HEO_HERO_CATEGORY_3: {
    title: '实用教程',
    url: '/category/实用'
  },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/hanchengweb',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://hancheng.blog',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://hancheng.blog',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true, // 移动端悬浮目录

  // 右侧个人资料卡片
  HEO_INFO_CARD_AVATAR: '/avatar.png', // 头像
  HEO_INFO_CARD_SLOGAN: 'I am hancheng', // 座右铭
  HEO_INFO_CARD_NAME: 'hancheng',
  HEO_INFO_CARD_TITLE: 'Web开发者 / 博主',

  // 社交链接
  HEO_SOCIAL_LINKS: [
    {
      id: 1,
      title: 'GitHub',
      Svg: 'MyGithub',
      url: 'https://github.com/hanchengweb'
    },
    {
      id: 2,
      title: 'Twitter',
      Svg: 'MyTwitter',
      url: 'https://twitter.com/hanchengweb'
    }
  ],

  // 文章分类列表
  HEO_POST_LIST_CATEGORY: true,
  // 文章列表显示摘要
  HEO_POST_LIST_SUMMARY: true,
  // 文章列表显示预览图
  HEO_POST_LIST_COVER: true,
  // 文章列表默认封面图
  HEO_POST_LIST_COVER_DEFAULT: true,
  // 文章列表封面图的展示样式
  HEO_POST_LIST_PREVIEW: 'small',
  HEO_POST_LIST_COVER_HOVER_ENLARGE: true,
  HEO_HOME_POST_TWO_COLS: false,

  // 自定义字体
  FONT_STYLE: 'font-sans',

  // 博客背景图片
  HOME_BANNER_IMAGE: '/bg_image.jpg',

  // 深色主题
  BACKGROUND_DARK: '#2d3033',

  // 宽屏适配 开启后请隐藏首页左侧栏
  HEO_LAYOUT_WIDE: true,
  // 移动端隐藏左侧
  isMobile: true,

  // 首页顶部
  HEO_HERO_ENABLE: true,
  // 右下角进度
  HEO_WIDGET_PROGRESS_ENABLE: false,

  // 左侧栏宽度
  ASIDE_WIDTH: 'w-60',
  LEFT_CONTAINER_WIDTH: 'max-w-3xl',
  RIGHT_CONTAINER_WIDTH: 'max-w-3xl',

  // 主题配色 亮/暗模式
  lightTheme: {
    PRIMARY_COLOR: '#2a9d8f',
    SELECTED_COLOR: '#81948e',
    HOVER_COLOR: '#2a9d8f',
    HEADER_GRADIENT: 'linear-gradient(to top, #04120e 0%, #00825b 100%)',
    HEADER_HEIGHT: '72px',
    // 主题
    BACKGROUND_COLOR: '#f0f5f4',
    BACKGROUND_COLOR_TRANSPARENT: 'rgba(240,245,244,0.8)',
    // 文字主色调
    FONT_COLOR: '#000',
    // 次级文本色调
    FONT_COLOR_Second: '#596475',
    // LINK_ACTIVE 激活链接，首页卡片等地方
    LINK_ACTIVE: '#2a9d8f'
  },

  darkTheme: {
    PRIMARY_COLOR: '#2a9d8f',
    SELECTED_COLOR: '#C7D0CB',
    HOVER_COLOR: '#40b3a2',
    HEADER_COLOR: '#18171D',
    HEADER_GRADIENT:
      'linear-gradient(to top, #101211 0%, rgba(0,0,0,0) 100%)',
    HEADER_HEIGHT: '72px',
    FONT_COLOR: '#fff',
    FONT_COLOR_Second: '#99A9B3',
    BACKGROUND_COLOR: '#18171d',
    BACKGROUND_COLOR_TRANSPARENT: 'rgba(24,23,29,0.8)',
    LINK_ACTIVE: '#57c4b5',
    CODE_COLOR: '#fff',
    CODE_BG_COLOR: '#16a085'
  },

  // 公告
  HEO_NOTICE_ENABLED: true,
  HEO_NOTICE_TEXTS: ["本博客主题由 hancheng 开发", "这是很好的主题"],
  HEO_NOTICE_INTERVAL: 8000, // 公告切换时间

  // 首页向下滚动按钮
  HEO_HERO_SCROLL_DOWN_BUTTON: true,

  // HERO 矩形海报
  HEO_POST_HEADER_STYLE: 'boxed',

  // 随机文章
  HEO_RANDOM_ENABLED: true, // 随机单个文章
  HEO_RANDOM_CATEGORY_ENABLED: false, // 随机同类别列表

  // 测试
  POST_LIST_STYLE: 'scroll',
  LAYOUT_RANDOM_POSTS: 'none'
}
export default CONFIG
