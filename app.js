const cases = {
  ideal: {
    title: "理想全国职场无人前台 + 智能办公用品领用柜",
    summary:
      "理想职场行政服务原本依赖前台、员工服务中心和管理员线下处理。我从售前方案阶段介入，主导产品方案与业务规则设计，将办公用品领用、物品暂存、交接、借还、拾物招领等流程，拆解为 H5、柜机终端、PC 后台和智能柜协同的自助服务系统，并推进北京职场一期上线交付。",
    snapshot: {
      conclusion: "把分散在线下人工处理的职场行政服务，重构成 H5、设备终端、PC 后台和智能柜协同的自助闭环。",
      role: "售前方案阶段介入，主导产品方案、业务规则、核心流程、后台配置和异常状态设计。",
      complexity: "复杂点不在“开柜”，而在多角色权限、设备状态、库存口径、通知提醒、线下兜底和上线交付要同时成立。",
      result: "北京职场一期已上线交付，并沉淀为智能办公用品领用柜、称重柜、履带机和格口柜等后续方案的可复用能力。"
    },
    metrics: [
      {
        value: "已上线",
        label: "北京职场一期完成交付"
      },
      {
        value: "多端",
        label: "H5、柜机终端、PC 后台、智能柜协同"
      },
      {
        value: "8 类",
        label: "核心库存与异常口径沉淀"
      }
    ],
    narrative: [
      {
        title: "不是做一组柜子，而是重构职场服务方式",
        text:
          "这个项目的关键不是把行政服务搬到智能柜上，而是把员工、访客、管理员、设备、库存和通知放进同一套可追踪的软件流程里。正常流程要足够顺，异常场景也要能被系统接住。"
      },
      {
        title: "把现场动作拆成软件对象",
        text:
          "办公用品、柜门、仓库、员工、访客、管理员、楼宇、楼层、权限、库存、订单和通知都需要被建模。只有对象和状态拆清楚，设备端、H5 和后台才能稳定协同。"
      },
      {
        title: "从客户项目沉淀为可复用能力",
        text:
          "项目交付后沉淀出多端入口、设备状态、库存/容量口径、权限模型、规则配置和异常场景表，可迁移到智能家居、储能/新能源设备、企业智能设备和智能柜等软硬件一体场景。"
      }
    ],
    highlights: [
      {
        title: "主流程",
        text: "办公用品领用覆盖 H5 申请、审批/积分、可领库存、指定柜机、现场鉴权、设备出货、库存扣减和通知闭环。"
      },
      {
        title: "资源规则",
        text: "暂存和交接流程重点处理柜门规格、占用、续期、到期提醒、超时释放和管理员兜底。"
      },
      {
        title: "状态一致性",
        text: "库存被拆为总库存、在柜、非在柜、可领、预占、冻结、盘点校准等口径，避免系统数据和现场实物脱节。"
      },
      {
        title: "权限边界",
        text: "权限覆盖企业、组织部门、角色、楼宇、楼层、设备组、柜门和仓库，本质是多角色、多空间、多设备的权限模型，可迁移到家庭成员权限、园区/门店设备权限和企业设备管理。"
      }
    ],
    transfer: {
      title: "IoT 场景迁移",
      intro: "这个案例的核心价值不是“柜子”，而是多端控制设备、状态同步、权限规则和异常兜底。它可以被智能家居招聘方理解，也能被储能/新能源设备和企业智能设备团队理解。",
      rows: [
        ["成员 / 角色权限", "员工、访客、管理员、楼宇/楼层管理员", "家庭成员、访客、儿童/老人权限，也可迁移到园区、门店和企业设备权限"],
        ["设备状态同步", "柜门占用、设备在线、出货结果、超时释放", "门锁、传感器、网关、储能设备在线状态、告警状态和控制结果同步"],
        ["场景自动化", "审批通过后通知、到期提醒、超时释放、管理员待办", "离家/回家联动、设备告警提醒、能耗/储能策略触发、异常自动通知"],
        ["异常兜底", "无权限、库存不足、柜机离线、出货失败、通知失败", "设备离线、控制失败、传感器异常、自动化失败、现场人工兜底"]
      ]
    },
    evidence: [
      {
        title: "现场设备",
        kind: "现场交付",
        note: "证明项目不是方案停留，已进入真实办公现场。",
        src: "./assets/cases/ideal-evidence/ideal-site-cabinet.jpg",
        alt: "理想职场智能柜现场图"
      },
      {
        title: "H5 多业务入口",
        kind: "多端体验",
        note: "员工从统一入口进入领用、暂存、交接、门禁等服务。",
        src: "./assets/cases/ideal-evidence/ideal-h5-services.jpg",
        alt: "智慧行政 H5 多业务入口截图"
      },
      {
        title: "后台设备管理",
        kind: "后台运营",
        note: "设备在线状态、楼层、业务类型和柜门信息进入后台管理。",
        src: "./assets/cases/ideal-evidence/ideal-admin-device.jpg",
        alt: "PC 后台设备管理截图"
      },
      {
        title: "后台规则配置",
        kind: "后台运营",
        note: "通过规则配置控制工区、可用时间、节假日和业务限制。",
        src: "./assets/cases/ideal-evidence/ideal-admin-rules.jpg",
        alt: "PC 后台规则配置截图"
      },
      {
        title: "办公用品领取流程",
        kind: "流程设计",
        note: "串联申请、审批/积分、预占库存、现场鉴权、设备出货、库存扣减和异常处理。",
        src: "./assets/cases/ideal-evidence/ideal-supplies-flow.jpg",
        alt: "办公用品领取流程图"
      },
      {
        title: "权限 / 组织 / 设备关系",
        kind: "对象建模",
        note: "把企业、组织、员工、访客、角色、楼宇、设备、仓库和柜门关系拆清。",
        src: "./assets/cases/ideal-evidence/ideal-permission-map.jpg",
        alt: "权限组织设备关系图"
      },
      {
        title: "库存口径规则",
        kind: "规则设计",
        note: "定义总库存、在柜、非在柜、可领、预占、冻结、盘点校准等口径。",
        src: "./assets/cases/ideal-evidence/ideal-inventory-rules.jpg",
        alt: "库存口径规则表"
      },
      {
        title: "异常场景表",
        kind: "异常兜底",
        note: "覆盖无权限、库存不足、审批失败、柜机离线、出货失败、柜门异常和通知失败。",
        src: "./assets/cases/ideal-evidence/ideal-exception-table.jpg",
        alt: "异常场景表"
      }
    ],
    blocks: [
      {
        title: "业务背景",
        points: [
          "用户侧是办公用品领取、物品暂存、借还、拾物招领等高频行政服务",
          "现场侧涉及柜机、库存、权限、楼层、人员和管理员兜底",
          "系统侧需要打通申请、审批/积分、开柜/出货、库存扣减、通知、异常处理和后台配置"
        ]
      },
      {
        title: "我的职责",
        points: [
          "从售前方案阶段介入，主导产品设计和业务规则规划",
          "设计办公用品领用、物品暂存、交接、借还、拾物招领等核心流程",
          "定义库存口径、权限配置、消息通知、后台配置和异常状态",
          "协同研发、硬件、实施和客户侧完成方案确认、评审收敛和上线推进"
        ]
      },
      {
        title: "关键规则",
        points: [
          "库存口径拆分为总库存、在柜库存、非在柜库存、可领库存、预占库存、线下出库、异常/冻结库存、盘点/校准库存",
          "权限关系覆盖企业、组织部门、员工、访客、管理员账号、角色、数据权限、操作权限、楼宇/楼层、设备组、柜门和仓库",
          "异常兜底覆盖无权限、库存不足、审批未通过、积分不足、超时未领取、柜机离线、出货失败、柜门异常、库存盘点不一致和通知失败"
        ]
      },
      {
        title: "交付结果",
        points: [
          "北京职场一期完成上线交付，并进入运营阶段",
          "支撑员工通过 H5、柜机终端和智能柜完成办公用品领用、暂存、交接、借还、拾物招领等流程",
          "沉淀出多端入口、后台配置、库存/容量规则、权限模型和异常表，可复用到后续智能办公用品领用柜、称重柜、履带机、格口方案，也可迁移到智能家居、储能/新能源设备和企业智能设备管理场景"
        ]
      }
    ]
  },
  locker: {
    title: "小铁 & 无忧存 C 端合并",
    summary:
      "用户只感知“寄存服务”，但系统侧原本拆成多个小程序、多个入口、多个订单和多套运营口径。我负责一期 C 端感知合并方案，在保留柜机扫码、开柜、续费、结束寄存等现场交易链路的前提下，让用户能在小铁 3 内完成找点、下单、查订单和求助。当前项目处于开发中，待上线后补充数据验证。",
    status: "开发中",
    snapshot: {
      conclusion: "把多入口、多订单、多运营口径的寄存服务，先统一成用户可理解的一套 C 端服务入口。",
      role: "负责需求调研、互跳链路梳理、一期方案设计、PRD 输出、评审收敛、跨团队沟通和验收待办拆解。",
      complexity: "复杂点是既要让用户感知合并，又不能误伤柜机扫码、开柜、续费、支付回跳等已在线现场交易链路。",
      result: "项目处于开发中；一期采用 C 端感知合并、底层系统分治、入口分流保护和配置化灰度回退。"
    },
    metrics: [
      {
        value: "开发中",
        label: "方案已进入研发推进，暂不写上线结果"
      },
      {
        value: "分治",
        label: "C 端感知合并，底层订单/支付/财务保留分治"
      },
      {
        value: "保护旧链路",
        label: "柜机扫码、开柜、续费、支付回跳优先不受影响"
      }
    ],
    narrative: [
      {
        title: "用户只想寄存，系统却被拆成多套入口",
        text:
          "合并前，用户面对的是同一个寄存需求，但系统侧有多个小程序、多个入口、多个订单和多套运营口径。问题不只是页面跳转多，而是用户找点、下单、查单、求助都被业务边界切碎。"
      },
      {
        title: "一期不做大一统，是产品判断",
        text:
          "柜机、人工寄存和配送在订单、支付、履约、设备、商户、财务和后台管理上差异很大。直接统一底层会拉长周期，也可能误伤现场扫码、开柜、寄送、支付等交易链路。"
      },
      {
        title: "先统一用户感知，再保护真实履约差异",
        text:
          "一期选择先做 C 端感知合并：自然入口进入小铁 3 聚合首页，用户能找点、下单、查单和求助；带业务参数的线下交易入口继续进入原流程，避免为了统一牺牲现场稳定性。"
      }
    ],
    highlights: [
      {
        title: "入口分流",
        text: "微信搜索、最近使用、公众号菜单、无参数分享卡片等自然入口进聚合首页；柜机码、柜门码、寄送码、支付码、订单详情链接等带参入口保留原业务流程。"
      },
      {
        title: "范围控制",
        text: "一期做聚合首页、地图/列表、人工网点详情、下单、支付成功、订单入口、客服入口和优惠券前端合并；不做后台大一统。"
      },
      {
        title: "订单分治",
        text: "列表层可以统一展示，但详情和操作按来源分发：柜机订单进柜机详情，人工订单进人工详情，配送订单进配送详情或承接页。"
      },
      {
        title: "灰度回退",
        text: "聚合首页异常可回退原首页，人工寄存异常可隐藏入口，订单入口异常可回退原订单页，入口分流异常时优先保护带参扫码链路。"
      }
    ],
    transfer: {
      title: "平台化整合抓手",
      intro: "这个案例不应被理解为页面合并，而是一次在既有业务边界下做平台化整合的产品判断：前端统一感知，底层保留分治，优先保护现场交易链路。",
      rows: [
        ["入口分流", "自然入口进聚合首页，带业务参数入口保留原流程", "避免线下扫码交易被误导，优先保护开柜、寄送、支付等现场动作"],
        ["订单来源分治", "柜机、人工寄存、配送订单列表可统一展示，详情和操作按来源分发", "不强行统一订单模型，降低一期上线风险"],
        ["旧链路保护", "柜机扫码、开柜、续费、结束寄存、支付回跳不被新首页改坏", "以交易稳定性作为平台整合的底线"],
        ["灰度与指标", "按入口、渠道、城市、版本或配置开关放量，关注扫码异常率、订单分发正确率和支付成功率", "用数据判断用户是否更容易找到服务，同时验证旧链路稳定"]
      ]
    },
    boards: [
      {
        title: "入口分流规则",
        intro: "核心风险是入口误判。尤其线下扫码入口直接关联现场交易，不能被错误导入聚合首页。",
        columns: ["入口类型", "典型来源", "一期处理"],
        rows: [
          ["自然入口", "微信搜索、最近使用、公众号菜单、无业务参数分享卡片、普通运营链接", "进入小铁 3 聚合首页"],
          ["线下/业务入口", "柜机码、柜门码、寄送码、支付码、渠道二维码、订单详情链接、第三方带参跳转", "保留原业务流程"],
          ["未识别入口", "无法判断业务类型或缺少明确参数", "默认进聚合首页，同时保留订单和客服入口"]
        ]
      },
      {
        title: "一期范围与非范围",
        intro: "用范围控制换上线确定性，避免把平台合并做成跨系统大重构。",
        columns: ["做什么", "不做什么", "原因"],
        rows: [
          ["聚合首页、点位地图/列表、人工网点详情、人工寄存下单、支付成功页", "后台大一统、统一订单模型、统一支付账户", "优先解决用户感知割裂，不触碰高风险底层模型"],
          ["订单入口、个人中心部分入口、优惠券前端合并、小铁 3 客服入口", "商户体系合并、财务结算合并、旧会员体系迁移", "保留已有履约和财务边界，降低跨团队改造成本"],
          ["寄存柜点位承接、配送入口承接", "替换柜机扫码、开柜、续费、结束寄存、寄送扫码、支付回跳", "保护现场交易链路，避免影响已在线业务"]
        ]
      },
      {
        title: "验收与上线后指标",
        intro: "这个项目的验收不是“页面能打开”，而是新体验可用，同时旧柜机交易稳定。",
        columns: ["验证对象", "验收口径", "上线后关注"],
        rows: [
          ["入口分流", "无参数入口进聚合首页；带参数入口进原流程", "扫码异常率、入口误判反馈"],
          ["新链路", "首页、地图/列表、详情、下单、支付成功、订单入口、求助路径可用", "地图/列表点击率、详情转化、下单转化、支付成功率"],
          ["旧流程", "扫码、开柜、续费、结束寄存、寄送扫码、支付回跳不受影响", "支付成功率、柜机订单异常、客服咨询类型变化"]
        ]
      }
    ],
    blocks: [
      {
        title: "真实问题",
        points: [
          "用户侧看到的是一个寄存服务需求，系统侧却拆成多个小程序、多个入口、多个订单和多套运营口径",
          "用户选择困难、订单查询分散、跨端跳转割裂，运营和客服解释成本上升",
          "柜机、人工寄存、配送在订单、支付、履约、设备、商户、财务和后台管理上差异较大"
        ]
      },
      {
        title: "一期判断",
        points: [
          "先做 C 端感知合并，不做后台大一统",
          "自然入口进入小铁 3 聚合首页，带业务参数的线下/交易入口保留原流程",
          "订单列表可以统一展示，但详情和操作仍按柜机、人工寄存、配送来源分治"
        ]
      },
      {
        title: "范围边界",
        points: [
          "一期包含聚合首页、点位地图/列表、人工网点详情、人工寄存下单与支付成功页、人工订单详情、订单入口、个人中心入口、客服入口和优惠券前端合并",
          "一期不统一订单模型、支付账户、商户体系和财务结算",
          "不替换小铁柜机现场扫码、开柜、续费、结束寄存、寄送扫码、支付回跳等高风险链路"
        ]
      },
      {
        title: "验收与验证",
        points: [
          "入口分流必须正确：无业务参数入口进聚合首页，柜机码、柜门码、寄送码、支付码、订单链接等带参入口进原业务流程",
          "新链路必须走通：聚合首页、地图/列表、详情、下单、支付成功、订单入口和求助路径可用",
          "旧流程不能受影响：柜机扫码、开柜、续费、结束寄存、寄送扫码和支付回跳优先保护",
          "上线后重点看找点转化、下单转化、支付成功率、订单分发正确率、扫码异常率和客服咨询类型变化"
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
  "mold-cabinet": {
    title: "沃尔核材模具资产管理柜",
    summary:
      "面向工业产线模具管理场景，接入工单、权限、RFID 识别、借还记录、模具寿命和维修闭环，降低错领、漏还和不可追溯风险。",
    blocks: [
      {
        title: "项目价值",
        points: [
          "把模具领取、归还、维修、寿命和工单约束纳入系统流程",
          "通过员工权限和工单关系控制可领取模具范围",
          "让高价值生产资料从人工登记转向可追踪、可复盘的设备管理"
        ]
      },
      {
        title: "我的职责",
        points: [
          "梳理工单、员工、模具、柜门、维修和报废之间的业务关系",
          "设计模具领取、借还、寿命记录、维修反馈和异常处理流程",
          "推动客户规则、设备能力和后台配置在方案中对齐"
        ]
      },
      {
        title: "复杂问题",
        points: [
          "同一格口可能管理多个模具，RFID 识别、权限和借还记录必须一致",
          "模具寿命需要和产量、使用记录、维修记录关联",
          "工单变更、模具缺失、寿命超限和维修未完成都需要提前设计兜底"
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
    title: "理想全国职场无人前台 + 智能办公用品领用柜",
    type: "主案例 / 已上线 / 智能柜软件系统",
    tags: ["primary", "hardware"],
    summary:
      "面向大型企业职场行政场景，将办公用品领用、物品暂存、交接、借还、拾物招领等流程拆解为 H5、柜机终端、PC 后台和智能柜协同的自助服务系统。",
    points: [
      "从售前方案阶段介入，主导产品设计和业务规则规划",
      "设计办公用品领用、物品暂存、交接、借还、拾物招领等核心流程",
      "定义库存口径、权限配置、消息通知、后台配置和异常状态",
      "协同研发、硬件、实施和客户侧完成方案确认、评审收敛和上线推进"
    ]
  },
  {
    id: "wuyoucun-merge",
    title: "小铁 & 无忧存 C 端合并",
    type: "主案例 / 开发中 / C 端设备服务整合",
    tags: ["primary", "hardware"],
    summary:
      "在保留柜机扫码、开柜、续费、结束寄存等现场交易链路的前提下，统一用户在小铁 3 内找点、下单、查订单和求助的体验。",
    points: [
      "梳理微信搜索、最近使用、公众号菜单、柜机码、柜门码、寄送码、支付码、订单链接和第三方带参跳转等入口",
      "设计自然入口进聚合首页、带业务参数入口保留原流程的分流规则",
      "规划聚合首页、地图/列表、人工网点详情、下单、支付成功、订单入口和客服入口",
      "定义新链路验收、旧柜机交易链路保护、灰度回退和上线后指标验证"
    ]
  },
  {
    id: "weighing-cabinet",
    title: "智能称重领用柜",
    type: "办公物资 / 称重识别 / SaaS 后台",
    tags: ["hardware"],
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
    type: "硬件 / IoT 补充 / 平台产品 / 人工寄存与智能柜",
    tags: ["hardware"],
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
    title: "安克储物柜及耗材管理项目",
    type: "硬件 / IoT 补充 / 交付管理 / 企业办公",
    tags: ["hardware"],
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
    type: "其他产品经历 / C 端社区 / B 端后台",
    tags: ["other"],
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
    id: "decoration-acceptance-ai",
    title: "装修验收助手",
    type: "AI 能力证明 / Vibe Coding / C 端工具 Demo",
    tags: ["ai", "other"],
    summary:
      "面向普通装修业主的验收流程助手，用 AI 辅助把“不会验、不会记录、不会跟进整改”的现场问题快速产品化，形成可运行的 App/小程序形态 Demo。",
    points: [
      "将装修验收抽象为项目、阶段、验收项、问题工单、整改记录和报告摘要，预留未来 SaaS 化模型",
      "覆盖建材入场、水电隐蔽、防水/闭水、竣工基础、智能家居安装等默认验收流程",
      "为每个验收项设计风险说明、怎么验、留证建议、常见问题和通过/不通过/不适用状态",
      "通过 AI 辅助完成需求拆解、信息架构、交互流程和静态 Demo 实现，验证从想法到可体验原型的效率"
    ]
  },
  {
    id: "video-topic",
    title: "视频号定向热点征集",
    type: "其他产品经历 / 内容增长 / 作者激励",
    tags: ["other"],
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
    type: "其他产品经历 / 活动产品 / 多项目联动",
    tags: ["other"],
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
    tags: ["hardware"],
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
    tags: ["hardware"],
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
    tags: ["hardware", "ai"],
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
    tags: ["hardware"],
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
    tags: ["hardware"],
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
    tags: ["hardware"],
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
    type: "硬件 / IoT 补充 / 工单接入 / 模具领取",
    tags: ["hardware"],
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
    type: "硬件 / IoT 补充 / RFID / 借还追踪",
    tags: ["hardware"],
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
    tags: ["hardware"],
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
    type: "其他产品经历 / 工单协同 / 企业内控",
    tags: ["other"],
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
    type: "其他产品经历 / 官网 / 信息架构",
    tags: ["other"],
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
    type: "其他产品经历 / Web 系统 / 前后端协作",
    tags: ["other"],
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
  primary: "主案例",
  hardware: "硬件 / IoT 补充",
  ai: "AI 能力证明",
  other: "其他产品经历"
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
    "过去几年，我做过智能柜、行李寄存平台、内容任务系统和软硬件交付项目。项目类型不同，但我反复在处理的事情很接近：把一团现场里的混乱，整理成人、流程、规则、状态和责任，并转成可上线的软件产品方案。",
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
const evidenceDialog = document.querySelector("[data-evidence-dialog]");
const evidenceDialogContent = document.querySelector("[data-evidence-dialog-content]");
const closeEvidenceButton = document.querySelector("[data-close-evidence]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectList = document.querySelector("[data-project-list]");
const toast = document.querySelector("[data-toast]");
const sourceParam = new URLSearchParams(window.location.search).get("source") || "direct";

let activeFilter = "primary";
let toastTimer;
let modalLockCount = 0;
let lockedScrollY = 0;
let previousScrollBehavior = "";

function trackEvent(eventName, data = {}) {
  if (typeof window.umami?.track !== "function") return;

  window.umami.track(eventName, {
    source: sourceParam,
    ...data
  });
}

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
  const snapshotMarkup = item.snapshot
    ? `
      <section class="case-snapshot" aria-label="30 秒判断">
        <div class="case-snapshot-head">
          <span>30 秒判断</span>
          <strong>${item.snapshot.conclusion}</strong>
        </div>
        <div class="snapshot-grid">
          <article>
            <span>我的角色</span>
            <p>${item.snapshot.role}</p>
          </article>
          <article>
            <span>复杂点</span>
            <p>${item.snapshot.complexity}</p>
          </article>
          <article>
            <span>结果 / 阶段</span>
            <p>${item.snapshot.result}</p>
          </article>
        </div>
      </section>
    `
    : "";

  const narrativeMarkup = item.narrative?.length
    ? `
      <section class="case-narrative" aria-label="案例叙事">
        ${item.narrative
          .map(
            (section) => `
              <article>
                <h3>${section.title}</h3>
                <p>${section.text}</p>
              </article>
            `
          )
          .join("")}
      </section>
    `
    : "";

  const highlightsMarkup = item.highlights?.length
    ? `
      <section class="case-highlights" aria-label="产品设计抓手">
        <h3>产品设计抓手</h3>
        <div class="highlight-grid">
          ${item.highlights
            .map(
              (highlight) => `
                <article class="highlight-card">
                  <strong>${highlight.title}</strong>
                  <p>${highlight.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const transferMarkup = item.transfer?.rows?.length
    ? `
      <section class="case-transfer" aria-label="${item.transfer.title}">
        <div class="case-transfer-heading">
          <span>Transfer</span>
          <h3>${item.transfer.title}</h3>
          <p>${item.transfer.intro}</p>
        </div>
        <div class="transfer-grid">
          ${item.transfer.rows
            .map(
              (row) => `
                <article class="transfer-card">
                  <strong>${row[0]}</strong>
                  <p>${row[1]}</p>
                  <span>${row[2]}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const metricsMarkup = item.metrics?.length
    ? `
      <div class="case-metrics" aria-label="案例关键事实">
        ${item.metrics
          .map(
            (metric) => `
              <div class="case-metric">
                <strong>${metric.value}</strong>
                <span>${metric.label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    `
    : "";

  const evidenceMarkup = item.evidence?.length
    ? `
      <section class="evidence-section" aria-label="案例证据材料">
        <h3>可展示证据</h3>
        <div class="evidence-grid">
          ${item.evidence
            .map(
              (asset, index) => `
                <figure class="evidence-card">
                  <button class="evidence-preview" type="button" data-evidence-index="${index}" aria-label="查看${asset.title}大图">
                    <img src="${asset.src}" alt="${asset.alt}" loading="eager" decoding="async" />
                  </button>
                  <figcaption>
                    <span>${asset.kind || "证据材料"}</span>
                    <strong>${asset.title}</strong>
                    <small>${asset.note || ""}</small>
                  </figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const evidenceRailMarkup = item.evidence?.length
    ? `
      <section class="evidence-rail" aria-label="关键证据预览">
        <div class="evidence-rail-heading">
          <span>Evidence</span>
          <strong>${item.evidence.length} 份关键证据</strong>
          <p>先看现场、入口、后台和规则，再进入完整拆解。</p>
        </div>
        <div class="evidence-rail-list">
          ${item.evidence
            .slice(0, 4)
            .map(
              (asset, index) => `
                <button class="evidence-rail-item" type="button" data-evidence-index="${index}">
                  <img src="${asset.src}" alt="${asset.alt}" loading="eager" decoding="async" />
                  <span>${asset.title}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  const boardsMarkup = item.boards?.length
    ? `
      <section class="case-boards" aria-label="方案证据">
        <h3>方案证据</h3>
        ${item.boards
          .map(
            (board) => `
              <article class="case-board">
                <div class="case-board-heading">
                  <h4>${board.title}</h4>
                  <p>${board.intro}</p>
                </div>
                <div class="case-board-table" role="table" aria-label="${board.title}">
                  <div class="case-board-row case-board-head" role="row">
                    ${board.columns.map((column) => `<strong role="columnheader">${column}</strong>`).join("")}
                  </div>
                  ${board.rows
                    .map(
                      (row) => `
                        <div class="case-board-row" role="row">
                          ${row.map((cell) => `<span role="cell">${cell}</span>`).join("")}
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `
    : "";

  dialogContent.innerHTML = `
    <p class="section-kicker">${kicker}</p>
    <h2 id="dialog-title">${item.title}</h2>
    <p class="dialog-summary">${item.summary}</p>
    ${snapshotMarkup}
    ${metricsMarkup}
    ${evidenceRailMarkup}
    ${narrativeMarkup}
    ${highlightsMarkup}
    ${transferMarkup}
    ${boardsMarkup}
    ${evidenceMarkup}
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
  dialogContent.querySelectorAll("[data-evidence-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const asset = item.evidence?.[Number(button.dataset.evidenceIndex)];
      if (asset) openEvidence(asset);
    });
  });
  dialog.scrollTop = 0;
  dialogContent.scrollTop = 0;
  openModal(dialog);
}

function openCase(caseId) {
  const item = cases[caseId];
  if (!item) return;

  trackEvent("case_detail_open", {
    case_id: caseId,
    case_title: item.title
  });

  openDialog(item, "Case Detail", "detail-grid--case");
}

function openProject(projectId) {
  const item = projects.find((project) => project.id === projectId);
  if (!item) return;

  trackEvent("project_detail_open", {
    project_id: projectId,
    project_title: item.title,
    project_tags: item.tags.join(",")
  });

  openDialog(
    {
      title: item.title,
      summary: item.summary,
      blocks: [
        {
          title: "项目类型",
          points: [item.type, item.tags.map((tag) => tagNames[tag]).join(" / ")]
        },
        {
          title: "核心工作",
          points: item.points
        }
      ]
    },
    "Project Detail"
  );
}

function openReflection() {
  trackEvent("reflection_open");

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
  trackEvent("wechat_qr_open");
  openModal(qrDialog);
}

function closeQr() {
  closeModal(qrDialog);
}

function openEvidence(asset) {
  evidenceDialogContent.innerHTML = `
    <p class="section-kicker">${asset.kind || "Evidence"}</p>
    <h2 id="evidence-dialog-title">${asset.title}</h2>
    <p>${asset.note || ""}</p>
    <img src="${asset.src}" alt="${asset.alt}" />
  `;
  trackEvent("case_evidence_open", {
    evidence_title: asset.title
  });
  evidenceDialog.scrollTop = 0;
  evidenceDialogContent.scrollTop = 0;
  openModal(evidenceDialog);
}

function closeEvidence() {
  closeModal(evidenceDialog);
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
                ? `<a class="text-link" href="${project.prototypeUrl}" target="_blank" rel="noreferrer" data-track-event="prototype_open" data-track-project-id="${project.id}" data-track-project-title="${project.title}" data-track-area="project-bank">查看原型</a>`
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
  button.addEventListener("click", () => {
    trackEvent("contact_copy", {
      copy_kind: button.dataset.copyKind || "unknown"
    });
    copyText(button.dataset.copy);
  });
});

document.querySelectorAll("[data-open-qr]").forEach((button) => {
  button.addEventListener("click", openQr);
});

document.querySelector("[data-open-reflection]")?.addEventListener("click", openReflection);

closeCaseButton.addEventListener("click", closeCase);
closeQrButtons.forEach((button) => {
  button.addEventListener("click", closeQr);
});
closeEvidenceButton.addEventListener("click", closeEvidence);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeCase();
});

qrDialog.addEventListener("click", (event) => {
  if (event.target === qrDialog) closeQr();
});

evidenceDialog.addEventListener("click", (event) => {
  if (event.target === evidenceDialog) closeEvidence();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCase();
});

qrDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeQr();
});

evidenceDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeEvidence();
});

dialog.addEventListener("close", () => releaseModalLock(dialog));
qrDialog.addEventListener("close", () => releaseModalLock(qrDialog));
evidenceDialog.addEventListener("close", () => releaseModalLock(evidenceDialog));

menuButton.addEventListener("click", () => {
  header.classList.toggle("open");
});

nav.addEventListener("click", () => {
  header.classList.remove("open");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    trackEvent("project_filter_click", {
      filter: activeFilter
    });
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-track-event]");
  if (!target) return;

  trackEvent(target.dataset.trackEvent, {
    area: target.dataset.trackArea || "",
    project_id: target.dataset.trackProjectId || "",
    project_title: target.dataset.trackProjectTitle || ""
  });
});

window.addEventListener("scroll", syncHeader, { passive: true });
renderProjects();
syncHeader();

window.addEventListener(
  "load",
  () => {
    trackEvent("portfolio_entry", {
      path: window.location.pathname,
      hash: window.location.hash || ""
    });
  },
  { once: true }
);

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
