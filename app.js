const cases = {
  ideal: {
    title: "企业无人前台 + 智能称重领用柜",
    summary:
      "把企业前台和行政服务里的高频线下动作拆成系统流程，通过智能柜承接物品交接，通过 SaaS 后台管理权限、记录、通知和异常处理。",
    blocks: [
      {
        title: "项目价值",
        points: [
          "把访客储物、员工交接、资产流转、耗材领用统一到可追踪流程",
          "减少人工登记、提醒和核对动作",
          "将客户定制场景沉淀成可复用模块"
        ]
      },
      {
        title: "我的职责",
        points: [
          "梳理员工、访客、管理员、快递员和系统之间的操作关系",
          "设计业务模块、权限规则、通知规则和后台管理能力",
          "推动软件、硬件、实施团队对齐需求并完成上线验收"
        ]
      },
      {
        title: "复杂问题",
        points: [
          "不同物品交接场景下的状态流和责任归属不同",
          "称重识别、多拿、放回、费用归属和补货管理需要同时考虑",
          "部分动作适合系统自动化，部分动作必须保留管理员介入"
        ]
      }
    ]
  },
  locker: {
    title: "行李综合服务平台：无忧存",
    summary:
      "连接用户、人工寄存点、商户门店、智能寄存柜、平台运营和客服团队，让分散的寄存服务形成统一入口和统一履约规则。",
    blocks: [
      {
        title: "项目价值",
        points: [
          "把分散供给整合为统一服务入口",
          "兼容人工寄存和智能柜两种履约路径",
          "建立商户、平台、设备、用户之间的订单责任边界"
        ]
      },
      {
        title: "我的职责",
        points: [
          "规划用户端、商户端、平台后台和设备侧之间的产品边界",
          "设计商户入驻、点位管理、价格配置、容量管理、订单接收和结算流程",
          "拆解预约、待寄存、寄存中、待取件、已完成、超时、异常等订单状态"
        ]
      },
      {
        title: "复杂问题",
        points: [
          "人工寄存和智能柜流程不同，但用户需要统一体验",
          "商户营业时间、容量和履约能力会实时变化",
          "柜机订单需要和设备状态同步，避免支付后无柜可用"
        ]
      }
    ]
  },
  anker: {
    title: "安克创新储物柜及耗材管理项目",
    summary:
      "以短周期交付和多方协同为核心的交付案例。",
    blocks: [
      {
        title: "项目价值",
        points: [
          "在有限周期内完成设备、系统、现场协同交付",
          "把客户流程、硬件能力、软件配置和实施资源压到同一张计划表",
          "用过程管理降低延期、返工和验收不确定性"
        ]
      },
      {
        title: "我的职责",
        points: [
          "拆分需求范围、交付批次、联调节点和验收口径",
          "协调产品、硬件、软件、实施和客户侧资源",
          "识别现场风险，跟进问题闭环和版本交付"
        ]
      },
      {
        title: "复杂问题",
        points: [
          "交付周期短，需求、设备和现场条件变化会互相影响",
          "硬件到货、系统配置、安装联调和客户验收存在串行依赖",
          "需要用节点管理和风险预案替代临场救火"
        ]
      }
    ]
  },
  "game-task": {
    title: "微信游戏圈任务系统",
    prototypeUrl: "https://58q15c.axshare.com/",
    summary:
      "围绕微信游戏内容社区的内容供给问题，把任务发布、作者投稿、审核反馈和奖励校验整理成一套可持续运营的任务系统。",
    blocks: [
      {
        title: "项目价值",
        points: [
          "把临时征稿、作者激励和内容审核沉淀成标准任务流程",
          "让运营团队可以围绕不同游戏、周期和内容目标发布任务",
          "通过奖励规则和审核状态管理，稳定作者参与预期"
        ]
      },
      {
        title: "我的职责",
        points: [
          "梳理 C 端作者、B 端项目组和 ADM 审核后台之间的协作关系",
          "设计任务查看、投稿、审核反馈、通知提醒和奖励领取路径",
          "定义游戏项目、征稿主题、内容标准、奖励规则和异常处理口径"
        ]
      },
      {
        title: "复杂问题",
        points: [
          "作者侧需要低门槛参与，运营侧又要保证任务目标、内容质量和审核效率",
          "奖励规则既要容易被作者理解，也要能被后台核验和追踪",
          "重复投稿、内容不达标、异常奖励等情况需要提前设计兜底流程"
        ]
      }
    ]
  }
};

const projects = [
  {
    id: "ideal-frontdesk",
    title: "理想汽车 - 无人前台",
    type: "企业 SaaS / 智慧行政 / 智能柜",
    tags: ["saas", "iot", "delivery"],
    summary:
      "面向大型企业办公场景，用无人前台和智能柜承接访客储物、员工物品交接、资产上下发、借还、失物招领和快递派发等高频线下动作。",
    points: [
      "梳理访客、员工、管理员、快递员、资产负责人和系统运营人员的角色关系",
      "设计柜门、物品、订单、人员权限、消息通知、超时规则和异常记录",
      "推动后台、移动端、设备端和现场交付团队对齐需求",
      "参与客户现场部署、验收问题跟进和后续方案复用"
    ]
  },
  {
    id: "weighing-cabinet",
    title: "智能称重领用柜",
    type: "办公物资 / 称重识别 / SaaS 后台",
    tags: ["saas", "iot"],
    summary:
      "面向企业行政、IT、后勤和办公物资管理场景，把人工登记、线下领用和月底盘点转成可权限控制、可自动识别、可费用归属的领用流程。",
    points: [
      "设计物品档案、柜门货道、重量识别、领用订单、费用归属、库存预警和补货记录",
      "梳理员工、部门负责人、行政管理员、财务、仓库和设备运维人员的操作关系",
      "对齐设备端称重数据、后台库存数据和用户领用记录",
      "处理多拿、少拿、放回、重量接近、设备离线等异常情况"
    ]
  },
  {
    id: "wuyoucun",
    title: "行李综合服务平台 - 无忧存",
    type: "平台产品 / 人工寄存 / 智能柜",
    tags: ["platform", "iot", "delivery"],
    summary:
      "连接用户、人工寄存点、商户门店、智能寄存柜、平台运营和客服团队，让用户按位置、营业时间、价格、容量和服务类型选择寄存方式。",
    points: [
      "规划用户端、商户端、平台后台和设备侧之间的产品边界",
      "设计商户入驻、服务点管理、价格配置、容量管理、订单接收、行李存取和结算流程",
      "将人工寄存点、商户门店和智能寄存柜整理为统一服务供给模型",
      "拆解预约、待寄存、寄存中、待取件、已完成、已取消、超时、异常等状态"
    ]
  },
  {
    id: "anker-delivery",
    title: "安克创新储物柜及耗材管理项目",
    type: "交付管理 / 智能柜 / 企业办公",
    tags: ["delivery", "iot", "saas"],
    summary:
      "围绕高压交付、现场协同和验收管理展开，重点在于把需求范围、设备批次、系统配置、安装联调和问题闭环压到可执行节奏中。",
    points: [
      "拆分交付范围、批次计划、联调节点和验收口径",
      "协调产品、硬件、软件、实施和客户侧资源",
      "识别延期、返工、现场条件变化和客户验收风险",
      "用过程管理降低短周期交付中的不确定性"
    ]
  },
  {
    id: "game-task",
    title: "微信游戏圈任务系统",
    type: "C 端社区 / B 端后台 / ADM",
    tags: ["platform", "operation"],
    prototypeUrl: "https://58q15c.axshare.com/",
    summary:
      "围绕微信游戏内容社区的供给不足问题，设计任务发布、作者激励、内容审核和运营管理能力。",
    points: [
      "定义游戏项目、征稿主题、作者范围、内容标准、奖励规则和审核状态",
      "拆分 C 端作者参与路径，覆盖任务查看、投稿、反馈、通知和奖励领取",
      "设计 B 端项目组后台，支持按游戏、周期和内容目标发布任务",
      "梳理 ADM 后台审核流程，处理内容达标、异常投稿、重复内容和奖励校验"
    ]
  },
  {
    id: "video-topic",
    title: "视频号定向热点征集",
    type: "内容增长 / 作者激励 / 运营后台",
    tags: ["operation", "platform"],
    prototypeUrl: "https://ot8a0y.axshare.com/",
    summary:
      "面向微信视频号游戏垂类的内容增长需求，设计定向征集机制，帮助运营团队快速组织优质作者围绕指定热点生产内容。",
    points: [
      "将热点内容拆成目标游戏、内容方向、发布时间、达标标准和激励金额",
      "设计指定作者参与机制，提升激励资源使用效率",
      "规划作者侧任务信息展示、投稿入口、审核进度和结果反馈",
      "处理 C 端内容消费、B 端稳定供给和作者收益预期之间的关系"
    ]
  },
  {
    id: "spring-campaign",
    title: "微信游戏圈春节摇心愿活动",
    type: "活动产品 / 内容任务 / 多项目联动",
    tags: ["operation", "delivery"],
    summary:
      "结合春节节点、游戏资源和社区内容任务，设计活动参与链路，提升微信游戏圈的用户活跃和内容生产。",
    points: [
      "围绕春节场景拆解用户参与、资源发放、内容投稿、任务审核和奖励反馈",
      "联动多个游戏项目，将游戏内资源或现金激励接入社区活动",
      "将任务系统和视频号征集能力接入活动流程，降低临时开发成本",
      "提前设计审核、异常内容处理和奖励核对流程"
    ]
  },
  {
    id: "industrial-iot",
    title: "工业物联网设备管理系统",
    type: "设备接入 / 监控大屏 / 工单管理",
    tags: ["iot", "saas"],
    prototypeUrl: "https://p162fu.axshare.com/",
    summary:
      "面向传统制造业工厂的设备运营需求，规划设备接入、监控大屏、告警、维修和工单管理能力。",
    points: [
      "梳理设备从接入、运行、告警、维修到复盘的完整管理流程",
      "设计设备管理、数据监控、告警记录、维修记录和工单管理模块",
      "组织用户反馈和需求评审，将现场问题转化为版本迭代任务",
      "跟踪新旧版本上线后的使用数据，识别高频操作路径"
    ]
  },
  {
    id: "metro-service",
    title: "地铁便民拾物招领与寄存服务柜",
    type: "公共服务 / 柜体服务 / 地铁场景",
    tags: ["iot", "delivery"],
    prototypeUrl: "https://utix05.axshare.com/",
    summary:
      "面向地铁站内便民服务场景，设计失物招领、寄存、雨伞借还和便民物品借领等多种柜体服务。",
    points: [
      "接入地铁中控 iBOM，确保柜体服务融入站内运营管理系统",
      "规划失物投递、管理员取件、乘客查询和失物领取流程",
      "设计寄存、雨伞借还、老花镜借用、纸巾领取等服务的柜门分配规则",
      "处理柜门占用、超时未取、物品归属不清和设备离线等异常"
    ]
  },
  {
    id: "ai-photo",
    title: "AI 打卡机",
    type: "景区消费 / AI 生成 / 自助设备",
    tags: ["iot", "platform"],
    summary:
      "面向景区拍照消费场景，设计拍摄、AI 生成、照片确认、支付和实体出片流程。",
    points: [
      "梳理游客拍照、AI 生成、预览选择、支付和打印出片路径",
      "设计照片生成状态反馈，减少用户等待过程中的不确定感",
      "处理拍摄失败、生成失败、打印失败、耗材不足和未支付等异常",
      "规划设备端与后台之间的订单、照片、支付和耗材状态同步"
    ]
  },
  {
    id: "ai-consumables",
    title: "AI 打卡机设备耗材管理系统",
    type: "耗材管理 / 仓库管理 / 供应链补充",
    tags: ["iot", "saas"],
    summary:
      "围绕 AI 打卡机高耗材的运营问题，设计耗材余量监控、景区仓库管理和供应链补充流程。",
    points: [
      "监控设备端耗材余量，并同步到后台和景区仓库管理视图",
      "设计耗材预警规则，让运营人员可以提前安排补充",
      "接入供应链管理流程，支持耗材申领、调拨、入库和补货记录",
      "处理设备耗材与仓库库存不一致、网络延迟、人工补货未登记等异常"
    ]
  },
  {
    id: "xiao-tie-locker",
    title: "小铁智能寄存柜",
    type: "景区寄存 / 预约 / 存转寄",
    tags: ["iot", "platform"],
    summary:
      "面向景区游客行李寄存场景，设计寄存、取件、存转寄和预约等多种服务路径。",
    points: [
      "梳理游客扫码寄存、柜门分配、支付、取件和超时处理流程",
      "支持预约寄存和存转寄场景，覆盖游客行程变化带来的服务需求",
      "设计柜门状态、订单状态和支付状态的统一管理规则",
      "处理高峰无空柜、误关门、超时未取、设备离线和订单异常"
    ]
  },
  {
    id: "express-system",
    title: "企业内部一站式快递系统 - 默克",
    type: "企业服务 / 快递对接 / 费控",
    tags: ["saas"],
    summary:
      "面向企业内部寄取件管理场景，设计快递服务商对接、员工下单、费控限制和取件通知能力。",
    points: [
      "对接顺丰、中通、邮政、EMS 等快递服务商，支持员工在企业内部系统完成寄件下单",
      "接入企业费控系统，控制员工可用服务、费用范围和审批规则",
      "设计收件通知流程，让员工在快递到达后及时完成取件",
      "处理下单失败、费用超限、服务商返回异常和收件人信息错误等问题"
    ]
  },
  {
    id: "mold-cabinet",
    title: "工业磨具资产管理柜 - 沃尔核材",
    type: "工单接入 / 模具领取 / 寿命管理",
    tags: ["iot", "saas", "delivery"],
    summary:
      "面向工业产线模具管理场景，设计工单接入、模具领取、寿命管理、报修和维修流程。",
    points: [
      "接入客户 EMS 工单系统，识别产线员工在不同工序下需要使用的模具",
      "根据工单和员工权限控制柜门开启，减少模具错领和越权领用",
      "设计模具寿命管理能力，根据产量和使用记录预估维护或更换时间",
      "处理模具缺失、寿命超限、维修未完成和工单变更等问题"
    ]
  },
  {
    id: "rfid-assets",
    title: "资产管理柜（RFID）",
    type: "企业资产 / RFID / 借还追踪",
    tags: ["iot", "saas"],
    summary:
      "面向企业文件、贵重工具和可循环资产管理场景，设计 RFID 借还、权限和资产状态追踪能力。",
    points: [
      "通过 RFID 识别用户拿取、归还和借用的具体资产",
      "接入权限管理系统，控制不同员工可领取或借用的资产范围",
      "设计借还记录、逾期提醒、资产状态和异常取还处理流程",
      "处理 RFID 识别失败、多件资产同时取出、资产标签损坏和未授权开门等问题"
    ]
  },
  {
    id: "office-space",
    title: "办公空间设备管理系统",
    type: "会议室 / 工位 / 储物资源",
    tags: ["saas", "iot"],
    summary:
      "围绕会议室、工位和储物柜等办公空间资源，设计预约、联动控制和使用效率管理能力。",
    points: [
      "规划会议室预约流程，覆盖门禁、会议屏、空调、空气设备和人在检测",
      "设计工位预约流程，支持灵活办公场景下的座位分配和使用记录",
      "将储物柜接入工位预约流程，让员工预约工位后同步获得储物资源",
      "处理会议室占用、预约未到、设备联动失败和工位释放等异常"
    ]
  },
  {
    id: "legal-ticket",
    title: "法务工单协同项目",
    type: "工单协同 / 企业内控 / 流程留痕",
    tags: ["saas"],
    prototypeUrl: "https://cllcth.axshare.com/",
    summary:
      "围绕企业法务协同场景，规划工单提交、分派、处理、反馈和记录留存流程。",
    points: [
      "梳理业务部门提交法务需求、法务人员接单、补充材料和处理反馈路径",
      "设计工单分类、优先级、处理状态和责任人分派规则",
      "规划材料上传、沟通记录和处理结果留存能力",
      "处理材料缺失、需求反复、责任人不清和超时处理问题"
    ]
  },
  {
    id: "lanya-site",
    title: "蓝亚官网",
    type: "官网 / 信息架构 / 早期产品项目",
    tags: ["early"],
    prototypeUrl: "https://nazm3b.axshare.com/",
    summary:
      "围绕公司业务定位和项目展示需求，完成官网信息梳理、页面原型、交互对接和长期维护。",
    points: [
      "梳理公司过往项目和业务方向，明确官网需要呈现的产品服务结构",
      "输出官网页面原型，与设计同事确认交互和 UI 细节",
      "对接后台研发工程师，确认内容管理和接口方案",
      "完整经历从业务梳理到页面上线的过程"
    ]
  },
  {
    id: "panda-travel",
    title: "Panda 旅行网",
    type: "实习开发 / Web 系统 / 前后端协作",
    tags: ["early"],
    prototypeUrl: "https://k7xc9u.axshare.com/",
    summary:
      "学生实习阶段参与的旅游网站前后端开发项目，覆盖景点、酒店、购票、用户中心等模块。",
    points: [
      "参与旅游资讯、热门景点、游玩攻略和旅游服务信息模块开发",
      "支持景点、路线、游客来源和旅游收入等数据统计能力",
      "参与 Java + MySQL 后端开发和 Vue.js 前端页面实现",
      "建立对 Web 系统、数据库和前后端协作的基础理解"
    ]
  }
];

const tagNames = {
  saas: "B 端 SaaS",
  iot: "IoT",
  platform: "平台产品",
  operation: "运营平台",
  delivery: "交付管理",
  early: "早期项目"
};

const reflection = {
  title: "我不是一开始就会做产品的人",
  paragraphs: [
    "我不是一开始就会做产品的人。",
    "以前我很容易急着给答案。看到问题，就想马上纠正；看到混乱，就想立刻建立规则；看到别人走弯路，也会忍不住把自己的判断塞过去。后来经历过一些失败沟通，我慢慢意识到，判断得快，不代表理解得深；替别人规划路径，也不一定真的解决了对方的问题。",
    "这个变化，后来影响了我做产品的方式。",
    "一个需求被提出来，我会先停一停，会先把问题往前追一层：这件事为什么发生，现场里有哪些人，他们各自在意什么、承担什么，规则如果不清楚，最后会让谁付出成本。很多产品问题表面上是流程、权限、状态、异常处理，背后其实是预期没有对齐，责任边界没有说清楚。",
    "我也会把奥卡姆剃刀的思路用到需求判断里：如无必要，勿增实体。",
    "放在产品里，它对我的提醒很具体：不要轻易给系统增加新的入口、状态、角色和规则。一个需求如果只能在会议里讲通，却找不到至少三个真实发生的场景，我通常不会急着推进。很多需求听起来都有道理，但落到现场，可能只是一次抱怨、一个临时想法，或者某个声音被放大了。系统每多一个东西，后面都会有人理解它、维护它、解释它，并在异常发生时为它兜底。",
    "所以我会比较在意现场。工作人员一句话怎么说，用户会不会觉得被冒犯；后台少一个状态，客服后面能不能解释清楚，会不会让运营和客服靠经验补锅；权限没有划清，出了问题谁来负责；异常流程没有设计，最后会不会变成客户、实施、研发之间反复沟通。这些细节不一定显眼，但会影响产品能不能稳定地被使用。",
    "当然，想得多也会带来另一种问题。",
    "做产品久了，会更容易看到风险：合规、体验、漏洞、客服压力、运营成本、研发维护成本。看到风险是必要的，但如果每个风险都按最高优先级处理，系统会变重，节奏会变慢，业务也可能错过窗口。公司在不同阶段有不同压力，产品判断也需要放在具体阶段里看。",
    "所以我现在更在意取舍。一个方案不能只问“这样做对不对”，还要问“现在值不值”。哪些问题必须由系统解决，哪些可以先通过运营流程兜底，哪些需要客服承担解释成本，哪些风险要业务负责人一起判断，哪些成本不能转嫁给用户，这些都应该被摊开讨论。",
    "我不把谨慎包装成完美主义，也不把快看成天然正确。有时候谨慎确实会让我显得想得多，甚至有点畏首畏尾。但在产品工作里，大多数选择都不是单纯的对错题。更常见的是，在有限时间、有限资源和不完整信息里，判断当下应该用什么换什么。",
    "过去几年，我做过企业 SaaS、智能柜、行李寄存平台、内容任务系统和软硬件交付项目。项目类型不同，但我反复在处理的事情很接近：把一团现场里的混乱，整理成人、流程、规则、状态和责任。",
    "如果概括我的产品方法，大概是：",
    "先找到真实场景，再判断是否值得做；\n先理解人和现场，再设计系统；\n先把代价摊开，再决定用什么换什么；\n最后再进入方案、原型和交付。",
    "我希望自己成为一个在真实约束里还能保持判断的人。能推进事情，也知道什么时候该克制；能看到风险，也不把风险当成停下来的理由。"
  ]
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const dialog = document.querySelector("[data-case-dialog]");
const dialogContent = document.querySelector("[data-dialog-content]");
const closeCaseButton = document.querySelector("[data-close-case]");
const qrDialog = document.querySelector("[data-qr-dialog]");
const closeQrButtons = document.querySelectorAll("[data-close-qr]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectList = document.querySelector("[data-project-list]");
const toast = document.querySelector("[data-toast]");

let activeFilter = "all";
let toastTimer;
let modalLockCount = 0;
let lockedScrollY = 0;
let previousScrollBehavior = "";

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

function lockPageScroll() {
  if (modalLockCount === 0) {
    lockedScrollY = window.scrollY || document.documentElement.scrollTop;
    previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  modalLockCount += 1;
}

function unlockPageScroll() {
  modalLockCount = Math.max(0, modalLockCount - 1);
  if (modalLockCount > 0) return;

  const scrollY = lockedScrollY;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  syncHeader();
}

function openModal(modal) {
  if (modal.open) return;

  lockPageScroll();
  modal.dataset.locked = "true";

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function releaseModalLock(modal) {
  if (modal.dataset.locked !== "true") return;

  delete modal.dataset.locked;
  unlockPageScroll();
}

function closeModal(modal) {
  if (typeof modal.close === "function" && modal.open) {
    modal.close();
  } else {
    modal.removeAttribute("open");
    releaseModalLock(modal);
  }
}

function openDialog(item, kicker = "Case Detail", detailClass = "") {
  dialogContent.innerHTML = `
    <p class="section-kicker">${kicker}</p>
    <h2 id="dialog-title">${item.title}</h2>
    <p class="dialog-summary">${item.summary}</p>
    <div class="detail-grid ${detailClass}">
      ${item.blocks
        .map(
          (block, index) => `
            <section class="detail-block">
              <h3><span class="detail-index">${String(index + 1).padStart(2, "0")}</span>${block.title}</h3>
              <ul>
                ${block.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </section>
          `
        )
        .join("")}
    </div>
    <button class="dialog-close-action" type="button" data-inline-close-case>关闭</button>
  `;

  dialogContent.querySelector("[data-inline-close-case]")?.addEventListener("click", closeCase);
  dialog.scrollTop = 0;
  dialogContent.scrollTop = 0;
  openModal(dialog);
}

function openCase(caseId) {
  const item = cases[caseId];
  if (!item) return;

  const blocks = item.blocks.map((block) => ({
    ...block,
    points: [...block.points]
  }));

  if (item.prototypeUrl) {
    blocks.push({
      title: "可查看材料",
      points: [
        `<a class="inline-resource-link" href="${item.prototypeUrl}" target="_blank" rel="noreferrer">查看 Axure 原型</a>`
      ]
    });
  }

  openDialog({ ...item, blocks }, "Case Detail", "detail-grid--case");
}

function openProject(projectId) {
  const item = projects.find((project) => project.id === projectId);
  if (!item) return;

  const blocks = [
    {
      title: "项目类型",
      points: [item.type, item.tags.map((tag) => tagNames[tag]).join(" / ")]
    },
    {
      title: "核心工作",
      points: item.points
    }
  ];

  if (item.prototypeUrl) {
    blocks.push({
      title: "可查看材料",
      points: [
        `<a class="inline-resource-link" href="${item.prototypeUrl}" target="_blank" rel="noreferrer">查看 Axure 原型</a>`
      ]
    });
  }

  openDialog(
    {
      title: item.title,
      summary: item.summary,
      blocks
    },
    "Project Detail"
  );
}

function openReflection() {
  dialogContent.innerHTML = `
    <p class="section-kicker">Product Thinking</p>
    <h2 id="dialog-title">${reflection.title}</h2>
    <div class="reflection-dialog-body">
      ${reflection.paragraphs
        .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
        .join("")}
    </div>
    <button class="dialog-close-action" type="button" data-inline-close-case>关闭</button>
  `;

  dialogContent.querySelector("[data-inline-close-case]")?.addEventListener("click", closeCase);
  dialog.scrollTop = 0;
  dialogContent.scrollTop = 0;
  openModal(dialog);
}

function closeCase() {
  closeModal(dialog);
}

function openQr() {
  openModal(qrDialog);
}

function closeQr() {
  closeModal(qrDialog);
}

function renderProjects() {
  const filtered =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

  projectList.innerHTML = filtered
    .map(
      (project) => `
        <article class="project-item" data-project-id="${project.id}">
          <div class="project-item-top">
            <span>${project.type}</span>
            <strong>${project.tags.map((tag) => tagNames[tag]).slice(0, 2).join(" / ")}</strong>
          </div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-actions">
            <button class="text-link" type="button" data-open-project="${project.id}">查看项目详情</button>
            ${
              project.prototypeUrl
                ? `<a class="text-link" href="${project.prototypeUrl}" target="_blank" rel="noreferrer">查看原型</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.openProject));
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制：" + text);
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    showToast("已复制：" + text);
  }
}

document.querySelectorAll("[data-open-case]").forEach((button) => {
  button.addEventListener("click", () => openCase(button.dataset.openCase));
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

document.querySelectorAll("[data-open-qr]").forEach((button) => {
  button.addEventListener("click", openQr);
});

document.querySelector("[data-open-reflection]")?.addEventListener("click", openReflection);

closeCaseButton.addEventListener("click", closeCase);
closeQrButtons.forEach((button) => {
  button.addEventListener("click", closeQr);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeCase();
});

qrDialog.addEventListener("click", (event) => {
  if (event.target === qrDialog) closeQr();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCase();
});

qrDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeQr();
});

dialog.addEventListener("close", () => releaseModalLock(dialog));
qrDialog.addEventListener("close", () => releaseModalLock(qrDialog));

menuButton.addEventListener("click", () => {
  header.classList.toggle("open");
});

nav.addEventListener("click", () => {
  header.classList.remove("open");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

window.addEventListener("scroll", syncHeader, { passive: true });
renderProjects();
syncHeader();

const initialHash = decodeURIComponent(window.location.hash.slice(1));

if (initialHash === "wechat") {
  openQr();
} else if (initialHash.startsWith("case-")) {
  openCase(initialHash.replace("case-", ""));
} else if (initialHash === "thinking-full") {
  openReflection();
} else if (initialHash) {
  requestAnimationFrame(() => {
    document.getElementById(initialHash)?.scrollIntoView();
    syncHeader();
  });
}
