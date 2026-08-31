/* ============================================================
   i18n.js — Bilingual dictionary + language switching
   Default: Chinese (zh) · Toggle: English (en)
   ============================================================ */

(function () {
  "use strict";

  var LS_KEY = "diatta_lang";

  var I18N_DICT = {
    zh: {
      /* ---- site / nav / footer ---- */
      "site.subtitle": "克雷平·迪亚塔 · 球迷站",
      "nav.home": "首页",
      "nav.bio": "生平",
      "nav.career": "俱乐部",
      "nav.national": "国家队",
      "nav.stats": "数据",
      "nav.honors": "荣誉",
      "nav.gallery": "图库",
      "nav.about": "关于",
      "nav.skip": "跳到主要内容",
      "lang.toggleLabel": "切换语言为英文",
      "footer.disclaimer": "本网站为球迷非官方粉丝站，与球员本人、俱乐部无任何关联。",
      "footer.data": "数据截至 2026 年 8 月，来自公开资料（维基百科、Transfermarkt、FootyStats），仅供参考。",
      "footer.about": "关于本站",
      "footer.credits": "图片版权归原作者所有，署名详见图库页。",

      /* ---- page titles ---- */
      "page.title.home": "Krépin Diatta · 首页",
      "page.title.bio": "生平 · Krépin Diatta",
      "page.title.career": "俱乐部生涯 · Krépin Diatta",
      "page.title.national": "国家队 · Krépin Diatta",
      "page.title.stats": "数据统计 · Krépin Diatta",
      "page.title.honors": "荣誉 · Krépin Diatta",
      "page.title.gallery": "图库 · Krépin Diatta",
      "page.title.about": "关于本站 · Krépin Diatta",

      /* ---- home hero ---- */
      "home.hero.kicker": "塞内加尔 · 摩纳哥 · 边锋",
      "home.hero.role": "右边锋 · 27 号",
      "home.hero.tagline": "从达喀尔的街头到世界杯的舞台——一位为塞内加尔而战的边路飞翼。",
      "home.hero.cta1": "了解他的故事",
      "home.hero.cta2": "浏览图库",
      "home.sticker.tl": "边锋",
      "home.sticker.br": "塞内加尔",

      /* ---- home quick facts ---- */
      "home.facts.title": "快速档案",
      "home.facts.born": "出生",
      "home.facts.born.v": "1999年2月25日 · 达喀尔",
      "home.facts.height": "身高",
      "home.facts.height.v": "175 cm",
      "home.facts.position": "位置",
      "home.facts.position.v": "边锋（左右均可）",
      "home.facts.club": "现效力",
      "home.facts.club.v": "AS 摩纳哥（法国）",
      "home.facts.nat": "国家队",
      "home.facts.nat.v": "塞内加尔 · 15 号",
      "home.facts.debut": "国家队首秀",
      "home.facts.debut.v": "2019 年",
      "home.facts.since": "效力摩纳哥",
      "home.facts.since.v": "2021 年 1 月起",

      /* ---- home about ---- */
      "home.about.title": "关于克雷平",
      "home.about.p1": "克雷平·迪亚塔（Krépin Diatta），1999 年 2 月 25 日出生于塞内加尔首都达喀尔，司职边锋，现效力于法甲劲旅摩纳哥并代表塞内加尔国家队出战。他以速度、盘带和不知疲倦的奔跑著称，是塞内加尔“黄金一代”的重要成员。",
      "home.about.p2": "他曾随布鲁日两夺比利时联赛冠军，随塞内加尔杀入 2019 年非洲杯决赛，并先后出战 2022 与 2026 两届世界杯。",

      /* ---- home clubs ---- */
      "home.clubs.title": "俱乐部足迹",
      "home.clubs.sarpsborg": "萨尔普斯堡 08",
      "home.clubs.sarpsborg.d": "挪威 · 2017",
      "home.clubs.brugge": "布鲁日",
      "home.clubs.brugge.d": "比利时 · 2018–2021",
      "home.clubs.monaco": "摩纳哥",
      "home.clubs.monaco.d": "法国 · 2021–今",

      /* ---- home national ---- */
      "home.nat.title": "国家队",
      "home.nat.desc": "2019 年至今 · 约 65 次出场 · 2 粒进球 · 2019 非洲杯亚军",
      "home.nat.cta": "国家队页面",

      /* ---- home stats ---- */
      "home.stats.title": "生涯一览",
      "home.stats.apps": "出场",
      "home.stats.goals": "进球",
      "home.stats.assists": "助攻",
      "home.stats.caps": "国家队出场",

      /* ---- home honors + cta ---- */
      "home.honor.title": "荣誉一览",
      "home.honor.cta": "查看全部荣誉",
      "home.cta.bio": "生平与成长",
      "home.cta.career": "俱乐部生涯",
      "home.cta.stats": "数据统计",
      "home.cta.honors": "荣誉奖项",

      /* ---- bio page ---- */
      "bio.hero.kicker": "生平",
      "bio.hero.title": "从达喀尔出发",
      "bio.hero.tag": "1999 年出生于塞内加尔首都达喀尔",
      "bio.intro.title": "早年生活",
      "bio.intro.p1": "克雷平·迪亚塔于 1999 年 2 月 25 日出生在塞内加尔首都达喀尔。他从小在足球氛围浓厚的社区中长大，很快在达喀尔的 Oslo 足球学院崭露头角，被视为塞内加尔最有潜力的边路新星之一。",
      "bio.intro.p2": "2017 年，他远赴挪威加盟萨尔普斯堡 08，首次登陆欧洲赛场。凭借在挪超的出色表现，他很快吸引了欧洲大俱乐部的关注。",
      "bio.facts.title": "个人档案",
      "bio.facts.born": "出生日期",
      "bio.facts.born.v": "1999-02-25",
      "bio.facts.place": "出生地",
      "bio.facts.place.v": "塞内加尔 · 达喀尔",
      "bio.facts.height": "身高",
      "bio.facts.height.v": "175 cm",
      "bio.facts.weight": "体重",
      "bio.facts.weight.v": "68 kg",
      "bio.facts.position": "位置",
      "bio.facts.position.v": "边锋 / 右翼卫",
      "bio.facts.foot": "惯用脚",
      "bio.facts.foot.v": "右脚",
      "bio.facts.shirt": "号码",
      "bio.facts.shirt.v": "布鲁日 11 · 摩纳哥 27 · 塞内加尔 15",
      "bio.facts.caps": "国家队出场",
      "bio.facts.caps.v": "约 65 场",
      "bio.facts.wc": "世界杯",
      "bio.facts.wc.v": "2022 · 2026",
      "bio.facts.clubs": "俱乐部经历",
      "bio.facts.clubs.v": "萨尔普斯堡 08 → 布鲁日 → 摩纳哥",
      "bio.style.title": "技术特点",
      "bio.style.p": "迪亚塔是一名典型的现代边锋：爆发力强、直线突破犀利，同时愿意回防参与防守。他既能下底传中，也能内切射门，在攻防两端都极具价值。",
      "bio.style.l1": "速度与爆发力",
      "bio.style.l2": "一对一盘带突破",
      "bio.style.l3": "左右两路均可胜任",
      "bio.style.l4": "积极的防守贡献",
      "bio.style.l5": "远射与传中威胁",
      "bio.monaco.title": "摩纳哥岁月",
      "bio.monaco.p": "2021 年 1 月，迪亚塔以约 2000 万欧元转会费从布鲁日加盟摩纳哥，签约至 2025 年。此后他成为摩纳哥边路轮换的重要棋子，随队征战法甲与欧冠。2021 年他曾遭遇重伤，经过长期康复后于 2022 年重返赛场，状态逐步回升。",

      /* ---- career page ---- */
      "career.hero.kicker": "俱乐部生涯",
      "career.hero.title": "欧洲足迹",
      "career.hero.tag": "从挪威到比利时，再到法甲与欧冠",
      "career.summary.title": "俱乐部一览",
      "career.summary.note": "出场与进球为各项赛事约数，不同数据源统计口径略有差异。",
      "career.timeline.title": "时间线",
      "career.t1.period": "2017",
      "career.t1.club": "萨尔普斯堡 08（挪威）",
      "career.t1.body": "登陆欧洲的第一站。在挪威顶级联赛迅速崭露头角，约 26 场打进 8 球，成为当季挪超最亮眼的年轻边锋之一。",
      "career.t2.period": "2018–2021",
      "career.t2.club": "布鲁日（比利时）",
      "career.t2.body": "2018 年 1 月加盟比利时豪门，身披 11 号。随队两夺比甲冠军（2017-18、2019-20）并赢得 2018 年比利时超级杯，期间约 82 场打进 20 球。",
      "career.t3.period": "2021–今",
      "career.t3.club": "摩纳哥（法国）",
      "career.t3.body": "2021 年 1 月以约 2000 万欧元转会费加盟法甲摩纳哥，身披 27 号。经历重伤与漫长康复后回归，成为球队边路的重要轮换，随队征战法甲、法国杯与欧战。",

      /* ---- national page ---- */
      "national.hero.kicker": "国家队",
      "national.hero.title": "为塞内加尔而战",
      "national.hero.tag": "2019 年至今 · 15 号 · 约 65 次出场",
      "national.intro.title": "国家队生涯",
      "national.intro.p": "迪亚塔自 2019 年起代表塞内加尔国家队出战，身披 15 号，至今累计约 65 次出场、2 粒进球。他是球队边路的重要选择，随队经历了非洲杯与世界杯的多次大赛。",
      "national.timeline.title": "大赛足迹",
      "national.t1.period": "2019",
      "national.t1.title": "首秀与非洲杯决赛",
      "national.t1.body": "2019 年完成国家队首秀，同年随塞内加尔杀入非洲杯决赛（0-1 不敌阿尔及利亚，获得亚军）。",
      "national.t2.period": "2022",
      "national.t2.title": "卡塔尔世界杯",
      "national.t2.body": "入选 2022 卡塔尔世界杯阵容，随队从小组赛出线并闯入 16 强。",
      "national.t3.period": "2023/24",
      "national.t3.title": "科特迪瓦非洲杯",
      "national.t3.body": "入选塞内加尔 2023 非洲杯（2024 年 1 月在科特迪瓦举行）阵容。",
      "national.t4.period": "2026",
      "national.t4.title": "非洲杯冠军",
      "national.t4.body": "随塞内加尔夺得 2026 年非洲杯冠军。",
      "national.t5.period": "2026",
      "national.t5.title": "美加墨世界杯",
      "national.t5.body": "随塞内加尔晋级并出战 2026 美加墨世界杯。",
      "national.numbers.title": "国家队数据",
      "national.caps": "出场",
      "national.caps.v": "约 65 场",
      "national.goals": "进球",
      "national.goals.v": "2",
      "national.shirt": "号码",
      "national.shirt.v": "15",
      "national.debut": "首秀",
      "national.debut.v": "2019 年",
      "national.wc": "世界杯",
      "national.wc.v": "2022 · 2026",

      /* ---- stats page ---- */
      "stats.hero.kicker": "数据统计",
      "stats.hero.title": "生涯数字",
      "stats.hero.tag": "数据截至 2026 年 8 月",
      "stats.note": "数据来源：FootyStats / Transfermarkt / WhoScored。各来源统计口径不同（联赛或各项赛事），请以官方数据为准。",
      "stats.apps": "总出场",
      "stats.apps.v": "307+",
      "stats.goals": "总进球",
      "stats.goals.v": "34+",
      "stats.assists": "总助攻",
      "stats.assists.v": "5+",
      "stats.caps": "国家队出场",
      "stats.caps.v": "65+",
      "stats.club.title": "俱乐部数据（各项赛事，约）",
      "stats.th.club": "俱乐部",
      "stats.th.period": "时期",
      "stats.th.apps": "出场",
      "stats.th.goals": "进球",
      "stats.th.assists": "助攻",
      "stats.sarpsborg": "萨尔普斯堡 08",
      "stats.brugge": "布鲁日",
      "stats.monaco": "摩纳哥",
      "stats.nat.title": "国家队数据",
      "stats.nat.debut": "首秀",
      "stats.nat.debut.v": "2019 年",
      "stats.nat.caps": "出场",
      "stats.nat.caps.v": "约 65 场",
      "stats.nat.goals": "进球",
      "stats.nat.goals.v": "2",
      "stats.nat.number": "号码",
      "stats.nat.number.v": "15",
      "stats.monaco.title": "摩纳哥 2025/26 赛季（数据收录时）",
      "stats.th.comp": "赛事",
      "stats.th.app": "出场（首发）",
      "stats.th.mins": "分钟",
      "stats.ligue1": "法甲",
      "stats.ucl": "欧冠",

      /* ---- honors page ---- */
      "honors.hero.kicker": "荣誉",
      "honors.hero.title": "奖杯与荣耀",
      "honors.hero.tag": "随布鲁日两夺比甲冠军 · 塞内加尔 2026 非洲杯冠军",
      "honors.club.title": "俱乐部",
      "honors.club1": "比利时甲级联赛冠军 2017–18",
      "honors.club1.who": "布鲁日",
      "honors.club2": "比利时甲级联赛冠军 2019–20",
      "honors.club2.who": "布鲁日",
      "honors.club3": "比利时超级杯 2018",
      "honors.club3.who": "布鲁日",
      "honors.nat.title": "国家队",
      "honors.nat1": "非洲杯亚军 2019",
      "honors.nat1.who": "塞内加尔",
      "honors.nat2": "非洲杯冠军 2026",
      "honors.nat2.who": "塞内加尔",
      "honors.close.title": "近在咫尺",
      "honors.close1": "法国杯亚军 2021",
      "honors.close1.who": "摩纳哥",
      "honors.note": "据公开资料整理；如有遗漏或更新，欢迎指正。",

      /* ---- gallery page ---- */
      "gallery.hero.kicker": "图库",
      "gallery.hero.title": "精彩瞬间",
      "gallery.hero.tag": "图片来源：Wikimedia Commons · 点击图片可放大",
      "gallery.alt.monaco": "迪亚塔在摩纳哥比赛中",
      "gallery.alt.monaco2": "迪亚塔在摩纳哥对阵圣埃蒂安的比赛",
      "gallery.alt.sen1": "迪亚塔身披塞内加尔球衣",
      "gallery.alt.sen2": "迪亚塔（塞内加尔国家队）",
      "gallery.alt.wc1": "迪亚塔在 2026 世界杯法国对阵塞内加尔比赛中",
      "gallery.alt.wc2": "迪亚塔在 2026 世界杯赛场（特写）",
      "gallery.alt.afcon": "迪亚塔在非洲杯塞内加尔对阵几内亚比赛中",
      "gallery.alt.wc3": "迪亚塔在 2026 世界杯赛场",
      "gallery.cap.monaco": "效力摩纳哥期间（2022 年 11 月）",
      "gallery.cap.monaco2": "摩纳哥 vs 圣埃蒂安（2024/25 赛季）",
      "gallery.cap.sen1": "身披塞内加尔球衣（2019）",
      "gallery.cap.sen2": "塞内加尔国家队（2019）",
      "gallery.cap.wc1": "2026 世界杯：法国 vs 塞内加尔",
      "gallery.cap.wc2": "2026 世界杯（特写）",
      "gallery.cap.afcon": "非洲杯：几内亚 0-2 塞内加尔（2024）",
      "gallery.cap.wc3": "2026 世界杯赛场瞬间",
      "gallery.credit.by": "作者：",
      "gallery.credit.license": "许可：",
      "gallery.lb.close": "关闭",
      "gallery.lb.prev": "上一张",
      "gallery.lb.next": "下一张",
      "gallery.lb.counter": "第 {n} 张，共 {total} 张",
      "gallery.placeholder": "图片暂不可用",

      /* ---- about page ---- */
      "about.hero.kicker": "关于",
      "about.hero.title": "关于本站",
      "about.hero.tag": "一个由球迷制作的 Krépin Diatta 非官方网站",
      "about.statement.title": "非官方声明",
      "about.statement.p": "本站是一个由球迷制作的非官方网站，旨在分享和推广塞内加尔球员克雷平·迪亚塔的职业生涯信息。本站与球员本人、AS 摩纳哥、塞内加尔足协或任何相关机构无关。",
      "about.sources.title": "数据来源",
      "about.sources.p": "本站的统计数据与生平信息整理自以下公开来源，并标注“数据截至 2026 年 8 月”：",
      "about.links.title": "相关链接",
      "about.links.p": "以下为官方与权威信息渠道：",
      "about.links.monaco": "AS 摩纳哥官网",
      "about.links.fsf": "塞内加尔足协",
      "about.links.tm": "Transfermarkt 球员页",
      "about.links.fbref": "FBref 球员页",
      "about.links.wiki": "维基百科词条",
      "about.credits.title": "图库与版权",
      "about.credits.p": "图库图片来自 Wikimedia Commons，各图的作者与许可信息已在图库页逐张标注。本站仅展示并署名，不主张任何图片版权。",
      "about.contact.title": "联系与更新",
      "about.contact.p": "如果你发现数据有误或有更好的素材，欢迎提出建议。本网站由球迷维护，会尽可能及时更新。"
    },

    en: {
      /* ---- site / nav / footer ---- */
      "site.subtitle": "Krépin Diatta · Fan Site",
      "nav.home": "Home",
      "nav.bio": "Bio",
      "nav.career": "Career",
      "nav.national": "National",
      "nav.stats": "Stats",
      "nav.honors": "Honours",
      "nav.gallery": "Gallery",
      "nav.about": "About",
      "nav.skip": "Skip to main content",
      "lang.toggleLabel": "Switch language to Chinese",
      "footer.disclaimer": "This is an unofficial fan site; not affiliated with the player or any club.",
      "footer.data": "Stats as of August 2026 from public sources (Wikipedia, Transfermarkt, FootyStats); for reference only.",
      "footer.about": "About this site",
      "footer.credits": "Image copyrights belong to their respective owners; see credits on the Gallery page.",

      /* ---- page titles ---- */
      "page.title.home": "Krépin Diatta · Home",
      "page.title.bio": "Biography · Krépin Diatta",
      "page.title.career": "Club Career · Krépin Diatta",
      "page.title.national": "National Team · Krépin Diatta",
      "page.title.stats": "Stats · Krépin Diatta",
      "page.title.honors": "Honours · Krépin Diatta",
      "page.title.gallery": "Gallery · Krépin Diatta",
      "page.title.about": "About · Krépin Diatta",

      /* ---- home hero ---- */
      "home.hero.kicker": "SENEGAL · AS MONACO · WINGER",
      "home.hero.role": "Right Winger · #27",
      "home.hero.tagline": "From the streets of Dakar to the World Cup stage — a flying winger playing for Senegal.",
      "home.hero.cta1": "His story",
      "home.hero.cta2": "View gallery",
      "home.sticker.tl": "Winger",
      "home.sticker.br": "SENEGAL",

      /* ---- home quick facts ---- */
      "home.facts.title": "Quick Facts",
      "home.facts.born": "Born",
      "home.facts.born.v": "25 Feb 1999 · Dakar",
      "home.facts.height": "Height",
      "home.facts.height.v": "175 cm",
      "home.facts.position": "Position",
      "home.facts.position.v": "Winger (either flank)",
      "home.facts.club": "Club",
      "home.facts.club.v": "AS Monaco (France)",
      "home.facts.nat": "National team",
      "home.facts.nat.v": "Senegal · #15",
      "home.facts.debut": "NT debut",
      "home.facts.debut.v": "2019",
      "home.facts.since": "At Monaco since",
      "home.facts.since.v": "Jan 2021",

      /* ---- home about ---- */
      "home.about.title": "About Krépin",
      "home.about.p1": "Krépin Diatta (born 25 February 1999 in Dakar, Senegal) is a Senegalese professional footballer who plays as a winger for Ligue 1 side AS Monaco and the Senegal national team. Known for his pace, dribbling and tireless running, he is a key member of Senegal's \"golden generation\".",
      "home.about.p2": "He won two Belgian league titles with Club Brugge, reached the 2019 AFCON final with Senegal, and played at the 2022 and 2026 World Cups.",

      /* ---- home clubs ---- */
      "home.clubs.title": "Club Journey",
      "home.clubs.sarpsborg": "Sarpsborg 08",
      "home.clubs.sarpsborg.d": "Norway · 2017",
      "home.clubs.brugge": "Club Brugge",
      "home.clubs.brugge.d": "Belgium · 2018–2021",
      "home.clubs.monaco": "AS Monaco",
      "home.clubs.monaco.d": "France · 2021–present",

      /* ---- home national ---- */
      "home.nat.title": "National Team",
      "home.nat.desc": "Since 2019 · ~65 caps · 2 goals · AFCON 2019 runners-up",
      "home.nat.cta": "National team page",

      /* ---- home stats ---- */
      "home.stats.title": "Career Snapshot",
      "home.stats.apps": "Appearances",
      "home.stats.goals": "Goals",
      "home.stats.assists": "Assists",
      "home.stats.caps": "NT caps",

      /* ---- home honors + cta ---- */
      "home.honor.title": "Honours",
      "home.honor.cta": "All honours",
      "home.cta.bio": "Biography",
      "home.cta.career": "Club career",
      "home.cta.stats": "Stats",
      "home.cta.honors": "Honours",

      /* ---- bio page ---- */
      "bio.hero.kicker": "Biography",
      "bio.hero.title": "From Dakar",
      "bio.hero.tag": "Born in 1999 in Dakar, Senegal's capital",
      "bio.intro.title": "Early Life",
      "bio.intro.p1": "Krépin Diatta was born on 25 February 1999 in Dakar, Senegal's capital. Growing up in a football-mad neighbourhood, he soon stood out at the Oslo Football Academy in Dakar, emerging as one of Senegal's most promising young wingers.",
      "bio.intro.p2": "In 2017 he moved to Europe, joining Sarpsborg 08 in Norway. His impressive displays in the Eliteserien quickly attracted attention from bigger European clubs.",
      "bio.facts.title": "Profile",
      "bio.facts.born": "Date of birth",
      "bio.facts.born.v": "1999-02-25",
      "bio.facts.place": "Place of birth",
      "bio.facts.place.v": "Dakar, Senegal",
      "bio.facts.height": "Height",
      "bio.facts.height.v": "175 cm",
      "bio.facts.weight": "Weight",
      "bio.facts.weight.v": "68 kg",
      "bio.facts.position": "Position",
      "bio.facts.position.v": "Winger / right wing-back",
      "bio.facts.foot": "Preferred foot",
      "bio.facts.foot.v": "Right",
      "bio.facts.shirt": "Shirt numbers",
      "bio.facts.shirt.v": "Brugge 11 · Monaco 27 · Senegal 15",
      "bio.facts.caps": "NT caps",
      "bio.facts.caps.v": "~65",
      "bio.facts.wc": "World Cup",
      "bio.facts.wc.v": "2022 · 2026",
      "bio.facts.clubs": "Clubs",
      "bio.facts.clubs.v": "Sarpsborg 08 → Club Brugge → Monaco",
      "bio.style.title": "Playing Style",
      "bio.style.p": "Diatta is a classic modern winger: explosive, direct and willing to track back. He can hug the touchline and deliver crosses or cut inside to shoot, making him valuable in both phases of play.",
      "bio.style.l1": "Speed & explosiveness",
      "bio.style.l2": "1v1 dribbling",
      "bio.style.l3": "Comfortable on either flank",
      "bio.style.l4": "Strong defensive work rate",
      "bio.style.l5": "Threat from range & crosses",
      "bio.monaco.title": "At Monaco",
      "bio.monaco.p": "In January 2021, Diatta joined AS Monaco from Club Brugge for a reported €20m fee, signing a deal until 2025. He has since been a key rotation option on Monaco's flanks, competing in Ligue 1 and the Champions League. After a serious injury in 2021, he worked his way back and returned to action in 2022, gradually regaining his form.",

      /* ---- career page ---- */
      "career.hero.kicker": "Club Career",
      "career.hero.title": "European Journey",
      "career.hero.tag": "From Norway to Belgium, then Ligue 1 and the Champions League",
      "career.summary.title": "Clubs at a glance",
      "career.summary.note": "Appearances and goals are approximate across all competitions; sources differ slightly.",
      "career.timeline.title": "Timeline",
      "career.t1.period": "2017",
      "career.t1.club": "Sarpsborg 08 (Norway)",
      "career.t1.body": "First step in Europe. Quickly made his mark in the Norwegian top flight with ~26 appearances and 8 goals, one of the season's brightest young wingers.",
      "career.t2.period": "2018–2021",
      "career.t2.club": "Club Brugge (Belgium)",
      "career.t2.body": "Joined the Belgian giants in January 2018 wearing #11. Won two Belgian Pro League titles (2017-18, 2019-20) and the 2018 Belgian Super Cup, with ~82 appearances and 20 goals.",
      "career.t3.period": "2021–present",
      "career.t3.club": "AS Monaco (France)",
      "career.t3.body": "Moved to Ligue 1 side AS Monaco in January 2021 for ~€20m, wearing #27. After a serious injury and a long recovery, he returned as an important rotation option on the wing, competing in Ligue 1, the Coupe de France and Europe.",

      /* ---- national page ---- */
      "national.hero.kicker": "National Team",
      "national.hero.title": "Fighting for Senegal",
      "national.hero.tag": "Since 2019 · #15 · ~65 caps",
      "national.intro.title": "International Career",
      "national.intro.p": "Diatta has represented Senegal since 2019, wearing #15, with ~65 caps and 2 goals. A regular option on the wing, he has played in multiple AFCONs and World Cups.",
      "national.timeline.title": "Tournaments",
      "national.t1.period": "2019",
      "national.t1.title": "Debut & AFCON final",
      "national.t1.body": "Made his senior debut in 2019 and reached the AFCON final the same year (lost 0-1 to Algeria, finishing runners-up).",
      "national.t2.period": "2022",
      "national.t2.title": "World Cup Qatar",
      "national.t2.body": "Part of Senegal's squad at the 2022 World Cup in Qatar, helping the team reach the Round of 16.",
      "national.t3.period": "2023/24",
      "national.t3.title": "AFCON in Côte d'Ivoire",
      "national.t3.body": "Named in Senegal's squad for the 2023 AFCON, held in January 2024 in Côte d'Ivoire.",
      "national.t4.period": "2026",
      "national.t4.title": "AFCON Champions",
      "national.t4.body": "Won the 2026 Africa Cup of Nations with Senegal.",
      "national.t5.period": "2026",
      "national.t5.title": "World Cup 2026",
      "national.t5.body": "Qualified for and played at the 2026 World Cup in USA/Canada/Mexico.",
      "national.numbers.title": "National Team Numbers",
      "national.caps": "Caps",
      "national.caps.v": "~65",
      "national.goals": "Goals",
      "national.goals.v": "2",
      "national.shirt": "Shirt",
      "national.shirt.v": "15",
      "national.debut": "Debut",
      "national.debut.v": "2019",
      "national.wc": "World Cup",
      "national.wc.v": "2022 · 2026",

      /* ---- stats page ---- */
      "stats.hero.kicker": "Stats",
      "stats.hero.title": "Career Numbers",
      "stats.hero.tag": "Stats as of August 2026",
      "stats.note": "Sources: FootyStats / Transfermarkt / WhoScored. Definitions (league-only vs all competitions) vary by source; refer to official data.",
      "stats.apps": "Total appearances",
      "stats.apps.v": "307+",
      "stats.goals": "Total goals",
      "stats.goals.v": "34+",
      "stats.assists": "Total assists",
      "stats.assists.v": "5+",
      "stats.caps": "NT caps",
      "stats.caps.v": "65+",
      "stats.club.title": "Club stats (all competitions, approx)",
      "stats.th.club": "Club",
      "stats.th.period": "Period",
      "stats.th.apps": "Apps",
      "stats.th.goals": "Goals",
      "stats.th.assists": "Assists",
      "stats.sarpsborg": "Sarpsborg 08",
      "stats.brugge": "Club Brugge",
      "stats.monaco": "AS Monaco",
      "stats.nat.title": "National Team Stats",
      "stats.nat.debut": "Debut",
      "stats.nat.debut.v": "2019",
      "stats.nat.caps": "Caps",
      "stats.nat.caps.v": "~65",
      "stats.nat.goals": "Goals",
      "stats.nat.goals.v": "2",
      "stats.nat.number": "Shirt",
      "stats.nat.number.v": "15",
      "stats.monaco.title": "Monaco 2025/26 season (as recorded)",
      "stats.th.comp": "Competition",
      "stats.th.app": "Apps (starts)",
      "stats.th.mins": "Mins",
      "stats.ligue1": "Ligue 1",
      "stats.ucl": "Champions League",

      /* ---- honors page ---- */
      "honors.hero.kicker": "Honours",
      "honors.hero.title": "Trophies & Glory",
      "honors.hero.tag": "Two Belgian titles with Brugge · AFCON champions 2026",
      "honors.club.title": "Club",
      "honors.club1": "Belgian Pro League champion 2017–18",
      "honors.club1.who": "Club Brugge",
      "honors.club2": "Belgian Pro League champion 2019–20",
      "honors.club2.who": "Club Brugge",
      "honors.club3": "Belgian Super Cup 2018",
      "honors.club3.who": "Club Brugge",
      "honors.nat.title": "National Team",
      "honors.nat1": "AFCON runners-up 2019",
      "honors.nat1.who": "Senegal",
      "honors.nat2": "AFCON champion 2026",
      "honors.nat2.who": "Senegal",
      "honors.close.title": "Close Calls",
      "honors.close1": "Coupe de France runners-up 2021",
      "honors.close1.who": "AS Monaco",
      "honors.note": "Compiled from public sources; corrections welcome.",

      /* ---- gallery page ---- */
      "gallery.hero.kicker": "Gallery",
      "gallery.hero.title": "Moments",
      "gallery.hero.tag": "Images: Wikimedia Commons · Click to enlarge",
      "gallery.alt.monaco": "Diatta in action for Monaco",
      "gallery.alt.monaco2": "Diatta in Monaco's match vs Saint-Étienne",
      "gallery.alt.sen1": "Diatta in Senegal colours",
      "gallery.alt.sen2": "Diatta (Senegal national team)",
      "gallery.alt.wc1": "Diatta at the 2026 World Cup, France v Senegal",
      "gallery.alt.wc2": "Diatta at the 2026 World Cup (close-up)",
      "gallery.alt.afcon": "Diatta at AFCON, Senegal v Guinea",
      "gallery.alt.wc3": "Diatta at the 2026 World Cup",
      "gallery.cap.monaco": "With AS Monaco (Nov 2022)",
      "gallery.cap.monaco2": "Monaco v Saint-Étienne (2024/25)",
      "gallery.cap.sen1": "In Senegal colours (2019)",
      "gallery.cap.sen2": "Senegal national team (2019)",
      "gallery.cap.wc1": "2026 World Cup: France v Senegal",
      "gallery.cap.wc2": "2026 World Cup (close-up)",
      "gallery.cap.afcon": "AFCON: Guinea 0-2 Senegal (2024)",
      "gallery.cap.wc3": "2026 World Cup action",
      "gallery.credit.by": "Photo: ",
      "gallery.credit.license": "License: ",
      "gallery.lb.close": "Close",
      "gallery.lb.prev": "Previous",
      "gallery.lb.next": "Next",
      "gallery.lb.counter": "Image {n} of {total}",
      "gallery.placeholder": "Image unavailable",

      /* ---- about page ---- */
      "about.hero.kicker": "About",
      "about.hero.title": "About This Site",
      "about.hero.tag": "An unofficial Krépin Diatta fan site",
      "about.statement.title": "Disclaimer",
      "about.statement.p": "This is an unofficial fan site created to share and promote the career of Senegalese footballer Krépin Diatta. It is not affiliated with the player, AS Monaco, the Senegalese FA or any related organisation.",
      "about.sources.title": "Data Sources",
      "about.sources.p": "The stats and biographical information on this site are compiled from the following public sources, marked \"stats as of August 2026\":",
      "about.links.title": "Related Links",
      "about.links.p": "Official and authoritative channels:",
      "about.links.monaco": "AS Monaco official site",
      "about.links.fsf": "Senegalese Football Federation",
      "about.links.tm": "Transfermarkt profile",
      "about.links.fbref": "FBref profile",
      "about.links.wiki": "Wikipedia article",
      "about.credits.title": "Gallery & Copyright",
      "about.credits.p": "Gallery images come from Wikimedia Commons; authorship and licences are credited on the Gallery page. This site only displays and credits them, claiming no copyright.",
      "about.contact.title": "Contact & Updates",
      "about.contact.p": "If you spot an error or have better material, suggestions are welcome. This site is maintained by fans and updated when possible."
    }
  };

  function getInitialLang() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get("lang");
    if (q === "en" || q === "zh") return q;
    try {
      var saved = localStorage.getItem(LS_KEY);
      if (saved === "en" || saved === "zh") return saved;
    } catch (e) { /* storage unavailable */ }
    return "zh";
  }

  var currentLang = getInitialLang();

  function t(key) {
    var dict = I18N_DICT[currentLang];
    return dict && dict[key] !== undefined ? dict[key] : key;
  }

  function formatCounter(str, n, total) {
    return str.replace("{n}", n).replace("{total}", total);
  }

  function applyLang() {
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute("data-lang", currentLang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      htmlNodes[j].innerHTML = t(htmlNodes[j].getAttribute("data-i18n-html"));
    }
    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var k = 0; k < altNodes.length; k++) {
      altNodes[k].setAttribute("alt", t(altNodes[k].getAttribute("data-i18n-alt")));
    }
    var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (var m = 0; m < phNodes.length; m++) {
      phNodes[m].setAttribute("placeholder", t(phNodes[m].getAttribute("data-i18n-placeholder")));
    }

    // language toggle button
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      var target = currentLang === "zh" ? "en" : "zh";
      toggle.textContent = target === "en" ? "EN" : "中文";
      toggle.setAttribute("aria-label", t("lang.toggleLabel"));
    }

    document.documentElement.classList.add("i18n-ready");

    // dispatch for other modules (e.g. lightbox captions)
    document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: currentLang } }));
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "zh") return;
    currentLang = lang;
    try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }
    applyLang();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang();

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        setLang(currentLang === "zh" ? "en" : "zh");
      });
    }
  });

  // expose helpers for other scripts
  window.I18N = {
    dict: I18N_DICT,
    t: t,
    getLang: function () { return currentLang; },
    setLang: setLang,
    formatCounter: formatCounter
  };
})();