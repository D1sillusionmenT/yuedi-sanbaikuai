const SAVE_KEY = "three-hundred-game-v1";
const COLLECTION_KEY = "three-hundred-achievements-v1";
const DAYS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const DAY_MOTIFS = [
  { icon: "💻", line: "消息比开机声先到" },
  { icon: "🎂", line: "日程里还有朋友" },
  { icon: "📩", line: "一份新委托出现了" },
  { icon: "🌧️", line: "雨落在宿舍门口" },
  { icon: "🧾", line: "账单与交付等着核对" },
  { icon: "📱", line: "展示已经开始" },
  { icon: "⏳", line: "最后一天，时间继续走" }
];
const ENDING_ICONS = {
  "结束了？": "🌙", "极限过载": "🔋", "最佳小队": "🤝",
  "午夜钟鸣": "🕛", "停止响应": "💤"
};
const ENDING_CODES = { "结束了？": "A", "极限过载": "B", "最佳小队": "C", "午夜钟鸣": "D", "停止响应": "E" };
const TASK_RULESET = "task-progress-v1";
const TASK_PREPARATIONS = [
  { id: "scope", label: "共同讨论任务范围", points: 4 },
  { id: "monday", label: "交付与测试清单初稿", points: 4 },
  { id: "tuesday", label: "按范围修订验收清单", points: 4 },
  { id: "swap", label: "交换分工的演示材料", points: 3 },
  { id: "outline", label: "周六展示提纲", points: 2 },
  { id: "steps", label: "空结果复现步骤", points: 4 },
  { id: "qa", label: "补一次验收检查", points: 4 }
];
const FATIGUE_RULES = { lowBattery: 70, fullSleepRecovery: 16, restRecovery: 8 };
const ACHIEVEMENTS = [
  { name: "低电量", icon: "🪫", condition: `本局疲劳第一次达到或超过${FATIGUE_RULES.lowBattery}%。`, insight: "劳动力包括人用于生产使用价值的体力和智力。", source: "《资本论》第一卷·第四章 货币转化为资本", url: "https://www.marxists.org/chinese/marx/capital/04.htm" },
  { name: "后台堆积", icon: "📚", condition: "本局疲劳第一次达到或超过75%。", insight: "劳动时间的延长，会碰到劳动者身体承受能力的界限。", source: "《资本论》第一卷·第八章 工作日", url: "https://www.marxists.org/chinese/marx/capital/08.htm" },
  { name: "请保存工作", icon: "💾", condition: "本局疲劳第一次达到或超过90%。", insight: "劳动者还需要留出满足精神生活与社会交往的时间。", source: "《资本论》第一卷·第八章 工作日", url: "https://www.marxists.org/chinese/marx/capital/08.htm" },
  { name: "重新上线", icon: "🌿", condition: "本局曾达到75%疲劳，随后在未中断的情况下恢复到50%以下。", insight: "劳动能力的持续发挥，需要休息和生活资料来恢复消耗。", source: "《资本论》第一卷·第八章 工作日", url: "https://www.marxists.org/chinese/marx/capital/08.htm" },
  { name: "友军支援", icon: "🤝", condition: "实际履行至少一项借用设备、交换分工或生活互助；仅看过提议不算。", insight: "有计划的共同劳动，能够形成个人单干所没有的生产力。", source: "《资本论》第一卷·第十一章 协作", url: "https://www.marxists.org/chinese/marx/capital/11.htm" },
  { name: "专业人士", icon: "🛠️", condition: "本人完成并交付100元完整委托或40元较小委托；此时可以仍待验收付款。", insight: "有目的的劳动，把预先设想的目标落实为能够满足需要的成果。", source: "《资本论》第一卷·第五章 劳动过程和价值增殖过程", url: "https://www.marxists.org/chinese/marx/capital/05.htm" },
  { name: "补给到位", icon: "🧾", condition: "本人网页委托或另约的活动介绍稿验收后，实际收到至少一笔报酬；预支生活费不算。", insight: "商品价值的实现，需要完成商品向货币的转化。", source: "《资本论》第一卷·第三章 货币或商品流通", url: "https://www.marxists.org/chinese/marx/capital/03.htm" },
  { name: "最后一击", icon: "⏳", condition: "采用周日21:00和22:50的两个电脑时段，在23:50完成核对上传并满足本局完整交付条件，且未因疲劳中断；旧版已收藏徽章保留。", insight: "有目的的劳动，还需要相应的劳动资料来实现目标。", source: "《资本论》第一卷·第五章 劳动过程和价值增殖过程", url: "https://www.marxists.org/chinese/marx/capital/05.htm" },
  { name: "穿透迷雾", icon: "🔎", condition: "周五依次读完商户用途、制作者工作和验收状态三个记录；本人接单或程越接单均可。", insight: "彼此独立的私人劳动通过交换取得社会联系，这种联系表现为劳动产品之间的价值关系。商品拜物教根源于商品生产的这种社会形式。", source: "《资本论》第一卷·第一章第四节 商品的拜物教性质及其秘密", url: "https://www.marxists.org/chinese/marx/capital/01.htm" },
  { name: "下周见", icon: "📅", description: "这周的问题解决了，下周的你收到了消息。", condition: "本局向家人预支下周生活费100元，并实际到账；只查看预支说明不算。", insight: "人们首先需要满足基本生活需要，才能从事其他活动。预支改变了两周生活费的使用时间，也使后续安排受到新的条件约束。", source: "《德意志意识形态》第一卷·费尔巴哈", url: "https://www.marxists.org/chinese/marx/marxist.org-chinese-marx-1846.htm" }
];
const DEFAULT_STATE = () => ({
  version: 2, ruleset: TASK_RULESET, task: { preparations: [], demonstrated: false },
  stage: "intro", day: 0, time: "", cash: 300, fatigue: 20,
  maxFatigue: 20, dayPeaks: [20, 0, 0, 0, 0, 0, 0], foodSpent: 0,
  paidMeals: {}, ledger: [], journal: [], achievements: [], collabs: [],
  device: null, mondayHour: null, gift: null, birthday: null,
  commission: null, commissionHours: 0, commissionDelivered: false,
  commissionPaid: false, extraCopy: false, copyDelivered: false,
  courseHours: 0, swapConfirmed: false, mobileChoice: null, mobileHours: 0,
  saturdayPersonal: null, saturdayCoord: null, sunPlan: null,
  finalFix: false, uploaded: false, uploadTime: null, advanceUsed: false,
  earnings: 0, personal: [], hiddenReads: [false, false, false],
  ending: null, pendingMeal: null, theoryPage: 0, notice: ""
});

const SAVE_STAGES = new Set(["intro", "monDevice", "monEvening", "tueGift", "tueDinner", "wedCommission", "wedSwap", "thuCopy", "thuDinner", "friDinner", "friMobile", "satPersonal", "satCoord", "sunDevice", "sunPersonal", "sunExecute", "funds", "ending", "theory"]);
let storageNotice = "";
function validSave(value) {
  if (!value || ![1, 2].includes(value.version) || !SAVE_STAGES.has(value.stage)) return false;
  const initial = DEFAULT_STATE();
  for (const [key, fallback] of Object.entries(initial)) {
    if (value[key] === undefined) continue;
    if (typeof fallback === "number" && (!Number.isFinite(value[key]) || value[key] < 0)) return false;
    if (typeof fallback === "string" && typeof value[key] !== "string") return false;
    if (typeof fallback === "boolean" && typeof value[key] !== "boolean") return false;
    if (Array.isArray(fallback) && !Array.isArray(value[key])) return false;
  }
  if (value.day !== undefined && (!Number.isInteger(value.day) || value.day > 6)) return false;
  if (value.fatigue > 100 || value.courseHours > 4 || value.mobileHours > 3) return false;
  const dayRecord = item => item && Number.isInteger(item.day) && item.day >= 0 && item.day < 7;
  if (value.achievements?.some(name => typeof name !== "string")) return false;
  if (value.personal?.some(text => typeof text !== "string")) return false;
  if (value.ledger?.some(item => !dayRecord(item) || typeof item.label !== "string" || !Number.isFinite(item.delta))) return false;
  if (value.journal?.some(item => !dayRecord(item) || typeof item.text !== "string" || typeof item.kind !== "string" || typeof item.time !== "string")) return false;
  if (value.collabs?.some(item => !dayRecord(item) || typeof item.id !== "string" || typeof item.text !== "string")) return false;
  if (value.dayPeaks && (value.dayPeaks.length !== 7 || value.dayPeaks.some(n => !Number.isFinite(n) || n < 0 || n > 100))) return false;
  if (value.hiddenReads && (value.hiddenReads.length !== 3 || value.hiddenReads.some(n => typeof n !== "boolean"))) return false;
  if (value.paidMeals !== undefined && (!value.paidMeals || typeof value.paidMeals !== "object" || Array.isArray(value.paidMeals) || Object.values(value.paidMeals).some(n => !Number.isFinite(n) || n <= 0))) return false;
  if (value.task !== undefined && (!value.task || !Array.isArray(value.task.preparations) || value.task.preparations.some(item => !dayRecord(item) || !TASK_PREPARATIONS.some(prep => prep.id === item.id)))) return false;
  if (value.task?.demonstrated !== undefined && typeof value.task.demonstrated !== "boolean") return false;
  if (["ending", "theory"].includes(value.stage) && !ENDING_CODES[value.ending]) return false;
  if (value.stage === "funds" && (!value.pendingMeal || !dayRecord(value.pendingMeal) || !Number.isFinite(value.pendingMeal.amount) || !["friAfterDinner", "satAfterBreakfast", "satAfterLunch", "satAfterDinner", "sunAfterBreakfast", "sunAfterLunch", "sunAfterDinner", "thuAfterDinner"].includes(value.pendingMeal.resume))) return false;
  return true;
}

function loadState() {
  let raw = null;
  try {
    raw = localStorage.getItem(SAVE_KEY);
    if (raw === null) return DEFAULT_STATE();
    const value = JSON.parse(raw);
    if (validSave(value)) {
      const initial = DEFAULT_STATE();
      if (value.stage === "intro") return { ...initial, achievements: value.achievements || [] };
      const state = { ...initial, ...value, version: 2,
        ruleset: value.version === 1 ? "legacy" : value.ruleset || "legacy",
        task: { ...initial.task, ...value.task, preparations: Array.isArray(value.task?.preparations) ? value.task.preparations : [],
          demonstrated: value.task?.demonstrated ?? (value.journal || []).some(item => item.kind === "反馈" && item.day === 5) }
      };
      if (state.fatigue >= 100) { state.stage = "ending"; state.ending = "停止响应"; }
      return state;
    }
  } catch (_) { /* Invalid JSON and unavailable browser storage both recover below. */ }
  if (raw !== null) {
    try {
      localStorage.setItem(`${SAVE_KEY}-recovery`, raw);
      storageNotice = "本局存档无法读取，已备份原数据并返回首页；以往成就收藏仍会保留。";
    } catch (_) { storageNotice = "本局存档无法读取。浏览器也未允许保存备份；请先检查浏览器的存储设置。"; }
  } else storageNotice = "浏览器未允许本地存储，本次仍可游玩；关闭页面后，进度与成就可能无法保留。";
  return DEFAULT_STATE();
}
let s = loadState();
function readCollection() {
  try {
    const value = JSON.parse(localStorage.getItem(COLLECTION_KEY) || "[]");
    return Array.isArray(value) ? value.filter(name => typeof name === "string") : [];
  } catch (_) { return []; }
}
const achievementCollection = new Set([...readCollection(), ...s.achievements]);
function saveCollection() {
  try { localStorage.setItem(COLLECTION_KEY, JSON.stringify([...achievementCollection])); } catch (_) {}
}
function collectedAchievements() { return ACHIEVEMENTS.filter(item => achievementCollection.has(item.name)); }
const $ = (id) => document.getElementById(id);
const money = (n) => `¥${n}`;
const clamp = (n) => Math.max(0, Math.min(100, n));
const reserve = () => {
  let total = 0;
  for (let d = 0; d < 7; d++) {
    for (const [kind, price] of [["早餐", 4], ["午餐", 7], ["晚餐", 7]]) {
      if (!s.paidMeals[`${d}-${kind}`]) total += price;
    }
  }
  return total;
};
function save() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }
  catch (_) { storageNotice = "当前进度未能保存。请保留此页面；关闭后，最近的进度与成就可能丢失。"; }
  $("storage-notice").textContent = storageNotice;
  $("storage-notice").classList.toggle("hidden", !storageNotice);
}
function note(text) { s.notice = text; }
function log(text, kind = "事件", day = s.day, time = s.time) {
  s.journal.push({ text, kind, day, time });
}
function usesTaskRules() { return s.ruleset === TASK_RULESET; }
function preparationProgress() {
  if (!usesTaskRules()) return 10;
  return Math.min(10, s.task.preparations.reduce((total, record) => total + (TASK_PREPARATIONS.find(item => item.id === record.id)?.points || 0), 0));
}
function finishPreparation(id, time = s.time) {
  if (!usesTaskRules() || s.task.preparations.some(item => item.id === id)) return;
  const item = TASK_PREPARATIONS.find(record => record.id === id);
  if (!item) return;
  const clock = time.match(/\d{1,2}:\d{2}/g);
  const completedAt = clock?.length ? clock[clock.length - 1] : time;
  s.task.preparations.push({ id, day: s.day, time: completedAt });
  log(`完成${item.label}；准备与核验 ${preparationProgress()}/10。`, "任务进度", s.day, completedAt);
}
function taskProgress() {
  const mobileNeed = s.mobileChoice === "self" ? 3 : 1;
  const rows = [
    { id: "basics", label: "基础功能", value: Math.min(4, s.courseHours) * 10, max: 40 },
    { id: "mobile", label: "手机核心操作", value: s.mobileChoice ? Math.round(Math.min(mobileNeed, s.mobileHours) / mobileNeed * 20) : 0, max: 20 },
    { id: "demo", label: "展示与反馈", value: s.task.demonstrated ? 10 : 0, max: 10 },
    { id: "preparation", label: "准备与核验", value: preparationProgress(), max: 10 },
    { id: "fix", label: "最终问题修正", value: s.finalFix ? 10 : 0, max: 10 },
    { id: "upload", label: "核对与上传", value: s.uploaded ? 10 : 0, max: 10 }
  ];
  return { rows, total: rows.reduce((total, row) => total + row.value, 0) };
}
function deliveryComplete() {
  return s.finalFix && s.uploaded && s.courseHours >= 4 && s.mobileHours >= (s.mobileChoice === "self" ? 3 : 1) && (!usesTaskRules() || taskProgress().total === 100);
}
function teamQualified() {
  if (!usesTaskRules()) return s.collabs.length >= 2 && s.collabs.some(item => item.course);
  const work = s.collabs.filter(item => item.id !== "monday-device");
  return work.length >= 2 && new Set(work.map(item => item.day)).size >= 2 && work.some(item => item.course);
}
function overloadQualified() {
  const peak = usesTaskRules() ? 70 : 75;
  const final = usesTaskRules() ? 65 : 75;
  return s.dayPeaks[5] >= peak && s.dayPeaks[6] >= peak && s.fatigue >= final;
}
function entry(label, delta, day = s.day, time = s.time) {
  s.ledger.push({ label, delta, day, time });
}
function unlock(name) {
  if (!s.achievements.includes(name)) s.achievements.push(name);
  achievementCollection.add(name);
  saveCollection();
}
function spend(amount, label, kind = "其他") {
  if (s.cash < amount) { note(`当前余额不足以支付 ${money(amount)}。已确认的下周生活费预支可在状态面板办理。`); return false; }
  s.cash -= amount;
  entry(label, -amount);
  if (kind === "餐费") s.foodSpent += amount;
  return true;
}
function earn(amount, label) { s.cash += amount; s.earnings += amount; entry(label, amount); }
function payMeal(day, kind, amount, resume) {
  const key = `${day}-${kind}`;
  if (s.paidMeals[key]) return true;
  if (s.cash < amount) {
    s.pendingMeal = { day, kind, amount, resume };
    s.stage = "funds";
    note(`需要先支付${DAYS[day]}${kind} ${money(amount)}，当前余额 ${money(s.cash)}。`);
    return false;
  }
  spend(amount, `${DAYS[day]}${kind}`, "餐费");
  s.paidMeals[key] = amount;
  return true;
}
function fatigue(delta, reason, time = s.time) {
  const old = s.fatigue;
  s.fatigue = clamp(old + delta);
  s.maxFatigue = Math.max(s.maxFatigue, s.fatigue);
  s.dayPeaks[s.day] = Math.max(s.dayPeaks[s.day], s.fatigue);
  log(`${reason}：疲劳 ${old}% → ${s.fatigue}%`, "疲劳", s.day, time);
  // Completion records use the end of the actual work/rest interval.
  const clock = time.match(/\d{1,2}:\d{2}/g);
  if (clock?.length) s.time = clock[clock.length - 1];
  if (s.fatigue >= FATIGUE_RULES.lowBattery && !s.achievements.includes("低电量")) unlock("低电量");
  if (old < 75 && s.fatigue >= 75) unlock("后台堆积");
  if (old < 90 && s.fatigue >= 90) unlock("请保存工作");
  if (s.maxFatigue >= 75 && old >= 50 && s.fatigue < 50 && s.fatigue < 100) unlock("重新上线");
  if (s.fatigue >= 100) {
    s.ending = "停止响应";
    s.stage = "ending";
    log("消息还在抵达，你已经没有余力回应。本周计划在此中断。", "结局", s.day, time);
    return false;
  }
  return true;
}
function collaborate(id, text, course = false) {
  if (s.collabs.some(item => item.id === id)) return;
  s.collabs.push({ id, text, course, day: s.day });
  log(text, "协作");
  unlock("友军支援");
}
function work(hours, reason, time) {
  for (let i = 0; i < hours; i++) if (!fatigue(6, reason, time)) return false;
  return true;
}
function sleep() { s.time = "23:00"; return fatigue(-FATIGUE_RULES.fullSleepRecovery, "完整睡眠", "23:00"); }
function setStage(stage, day, time) {
  s.stage = stage; s.day = day; s.time = time; s.notice = "";
}
function advanceCash() {
  if (s.advanceUsed || s.day < 3 || s.stage === "intro" || s.stage === "ending" || s.stage === "theory") return;
  s.advanceUsed = true; s.cash += 100;
  entry("家人提前转来下周生活费（下次少100元）", 100);
  log("向家人说明情况后，100元实际到账；下次生活费相应少100元。", "转账");
  unlock("下周见");
  if (s.stage === "funds" && s.pendingMeal) resumeMeal(); else { note("预支已到账。下次生活费减少100元；成就「下周见」已解锁。"); render(); }
}
function resumeMeal() {
  const pending = s.pendingMeal;
  if (!pending) return;
  s.pendingMeal = null;
  if (!payMeal(pending.day, pending.kind, pending.amount, pending.resume)) { render(); return; }
  const next = {
    friAfterDinner, satAfterBreakfast, satAfterLunch, satAfterDinner,
    sunAfterBreakfast, sunAfterLunch, sunAfterDinner, thuAfterDinner
  }[pending.resume];
  if (next) next();
  render();
}

function startMonday() {
  s.day = 0; s.time = "08:10";
  payMeal(0, "早餐", 4, "");
  s.time = "12:20";
  payMeal(0, "午餐", 7, "");
  fatigue(10, "上午课程与起居", "12:20");
  log("维修点报价150元，包含本次故障处理、部件、检测和复测；预计周二下午交付。尚未购买。", "报价");
  setStage("monDevice", 0, "12:20");
}
function chooseMondayDevice(id) {
  s.device = id;
  if (id === "repair") {
    s.time = "13:10";
    if (!spend(150, "电脑维修：本次故障处理与复测")) return;
    log("确认维修150元；今晚临时借室友电脑20:00—23:00，周二取机。", "服务");
  } else if (id === "borrow") log("与室友确认周一和周四20:00—23:00两个借用时段。", "约定");
  else log("预约公共设备：周一、周三、周五各两小时，往返与归还另占一小时。", "约定");
  if (id === "public") {
    s.time = "14:30"; if (!fatigue(2, "前往并领取公共设备", "14:30")) return;
    s.time = "15:00"; if (!work(2, "恢复环境并完成课程基础功能", "15:00—17:00")) return;
    s.courseHours = 2;
    if (!fatigue(2, "归还设备并返回", "17:00")) return;
    s.time = "18:10"; if (!payMeal(0, "晚餐", 7, "")) return;
  } else {
    s.time = "18:10"; if (!payMeal(0, "晚餐", 7, "")) return;
    s.time = "20:00"; if (!work(2, "借用电脑恢复环境并推进基础功能", "20:00—22:00")) return;
    s.courseHours = 2;
    collaborate("monday-device", "室友借出周一电脑时段；你使用并按约归还，课程基础功能推进两小时。", true);
  }
  setStage("monEvening", 0, "22:00");
}
function chooseMondayHour(id) {
  s.mondayHour = id;
  if (id === "checklist") { if (!fatigue(6, "整理交付范围和测试清单", "22:00—23:00")) return; log("把初版清单发给队友，明天讨论时继续核对。", "项目"); finishPreparation("monday", "22:00—23:00"); }
  if (id === "sketch") { if (!fatigue(6, "画时间轴与页面草图", "22:00—23:00")) return; s.personal.push("周一留下时间轴草图"); }
  if (id === "rest") { log("向队友说明设备情况并约好明天讨论。", "沟通"); if (!fatigue(-FATIGUE_RULES.restRecovery, "今晚明确休息一小时", "22:00—23:00")) return; }
  if (!sleep()) return;
  startTuesday();
}
function startTuesday() {
  s.day = 1; s.time = "08:00";
  if (!payMeal(1, "早餐", 4, "")) return;
  s.time = "12:20"; if (!payMeal(1, "午餐", 7, "")) return;
  if (!fatigue(10, "当天课程与起居", "12:20")) return;
  if (!fatigue(6, "与队友讨论本周项目范围", "12:30—13:30")) return;
  finishPreparation("scope", "12:30—13:30");
  s.time = "16:00";
  if (s.device === "repair" && !fatigue(4, "取回完成复测的电脑", "16:00—17:00")) return;
  setStage("tueGift", 1, "17:00");
}
function chooseGift(id) {
  s.gift = id; s.time = "17:00";
  if (id === "keyboard") {
    if (!spend(42, "四人合购键盘：个人出资")) return;
    log("小林负责取货；合购订单已下，赠与阿辰要等他实际收到。", "购买");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "饭前休息一小时", "17:00—18:00")) return;
  } else if (id === "card") {
    if (!spend(8, "照片卡材料与打印")) return;
    if (!fatigue(6, "整理合照、排版和领取照片卡", "17:00—18:00")) return;
    log("照片卡已做好；购买打印服务与把心意交给朋友是两件事。", "准备");
  } else {
    if (!fatigue(6, "整理课程验收清单", "17:00—18:00")) return;
    finishPreparation("tuesday", "17:00—18:00");
    log("给阿辰发去生日祝福，今晚是否见面仍待决定。", "沟通");
  }
  setStage("tueDinner", 1, "18:00");
}
function chooseTuesdayDinner(id) {
  s.birthday = id; s.time = "18:00";
  if (!payMeal(1, "晚餐", id === "full" ? 18 : 7, "")) return;
  if (id === "full") { s.personal.push("参加阿辰的完整生日晚餐"); log("一起吃饭、聊天到20:00；饭钱18元替代普通晚饭7元。", "交往"); }
  if (id === "short") { s.personal.push("生日短聚"); log("提前说明要先离开，19:00前与阿辰见面。", "交往"); if (!fatigue(-FATIGUE_RULES.restRecovery, "短聚后休息一小时", "19:00—20:00")) return; }
  if (id === "alone") { log("说明今晚不参加聚餐，照常吃晚饭。", "沟通"); if (!fatigue(6, "晚饭后画个人时间轴草图", "19:00—20:00")) return; s.personal.push("周二继续个人草图"); }
  if (s.gift === "keyboard") log("小林把合购键盘交给阿辰；他认出自己试过的那款。", "赠与");
  if (s.gift === "card") log(id === "alone" ? "照片卡请同学转交，阿辰收到后才有回应。" : "把照片卡交给阿辰，卡上的旧照片引出了具体往事。", "赠与");
  if (!sleep()) return;
  startWednesday();
}
function startWednesday() {
  s.day = 2; s.time = "08:05";
  if (!payMeal(2, "早餐", 4, "")) return;
  s.time = "12:20"; if (!payMeal(2, "午餐", 7, "")) return;
  if (!fatigue(10, "当天课程与起居", "12:20")) return;
  setStage("wedCommission", 2, "12:20");
}
function chooseCommission(id) {
  s.commission = id;
  log(id === "full" ? "与商户确认100元完整方案：手机入口布局、活动信息和一次范围内调整；周五验收后付款。" : id === "small" ? "与商户确认40元较小方案：只更新现有文字和链接，群消息另附直达入口。" : "向程越说明这次不接；他确认由自己承担这份工作。", "委托");
  if (id === "full" && s.device === "borrow") { setStage("wedSwap", 2, "12:40"); return; }
  finishWednesday();
}
function chooseSwap(id) {
  if (id === "confirm") { s.swapConfirmed = true; log("队友确认：周三替你做一小时课程代码；你做演示材料，周四再完成剩余代码。", "分工"); }
  if (id === "small") { s.commission = "small"; log("改为40元较小范围，保留室友电脑用于课程代码。", "委托"); }
  if (id === "decline") { s.commission = "decline"; log("取消本人接单，程越确认由自己完成商户页面。", "委托"); }
  finishWednesday();
}
function commissionHour(reason, time) {
  if (!fatigue(6, reason, time)) return false;
  s.commissionHours++;
  return true;
}
function courseHour(reason, time) {
  if (!fatigue(6, reason, time)) return false;
  s.courseHours = Math.min(4, s.courseHours + 1);
  return true;
}
function mobileHour(reason, time) {
  if (!fatigue(6, reason, time)) return false;
  s.mobileHours = Math.min(3, s.mobileHours + 1);
  return true;
}
function deliverCommission(time) {
  if (s.commissionDelivered || s.commission === "decline") return;
  s.commissionDelivered = true;
  log(`本人按${s.commission === "full" ? "100元完整" : "40元较小"}范围交付商户网页；仍待周五验收与付款。`, "交付", s.day, time);
  unlock("专业人士");
}
function finishWednesday() {
  s.time = "13:00";
  if (s.commission === "full") { if (!commissionHour("手机整理商户资料与工作范围", "13:00—14:00")) return; }
  else if (!fatigue(-FATIGUE_RULES.restRecovery, "未登记委托准备，明确休息一小时", "13:00—14:00")) return;
  if (s.device === "public") {
    s.time = "14:30"; if (!fatigue(2, "前往公共设备", "14:30")) return;
    if (s.commission === "full") {
      if (!courseHour("完成一小时课程基础功能", "15:00—16:00")) return;
      if (!commissionHour("制作委托初稿", "16:00—17:00")) return;
    } else if (s.commission === "small") {
      if (!commissionHour("更新商户文字与链接并核对", "15:00—16:00")) return;
      deliverCommission("16:00");
      if (!courseHour("完成一小时课程基础功能", "16:00—17:00")) return;
    } else if (!work(2, "完成课程基础功能", "15:00—17:00")) return;
    else s.courseHours = 4;
    if (!fatigue(2, "归还公共设备", "17:00")) return;
  } else if (s.device === "repair" && s.commission === "small") {
    if (!commissionHour("更新商户文字与链接并核对", "15:00—16:00")) return;
    deliverCommission("16:00");
  }
  s.time = "18:10"; if (!payMeal(2, "晚餐", 7, "")) return;
  if (s.device === "repair") {
    if (!courseHour("完成课程基础功能", "20:00—21:00")) return;
    if (!courseHour("完成课程基础功能", "21:00—22:00")) return;
  }
  if (s.device === "borrow" && s.commission === "full") {
    if (!fatigue(6, "按约整理队友的演示材料", "20:00—21:00")) return;
    finishPreparation("swap", "20:00—21:00");
    s.courseHours = 3;
    log("队友实际完成一小时课程功能；你已发出演示材料，周四仍须完成自己的一小时代码。", "分工");
  }
  if (!fatigue(-FATIGUE_RULES.restRecovery, "夜间明确休息一小时", "22:00—23:00")) return;
  if (!sleep()) return;
  startThursday();
}
function startThursday() {
  s.day = 3; s.time = "08:00";
  if (!payMeal(3, "早餐", 4, "")) return;
  s.time = "12:20"; if (!payMeal(3, "午餐", 7, "")) return;
  if (!fatigue(10, "当天课程与起居", "12:20")) return;
  if (s.commission === "decline") {
    log("程越说，原约定的按钮调整由他负责；新增活动介绍由他另行约30元。", "同学经历");
    setStage("thuDinner", 3, "17:25");
  } else setStage("thuCopy", 3, "12:20");
}
function chooseCopy(id) {
  s.extraCopy = id === "accept";
  log(s.extraCopy ? "与商户另约30元活动介绍稿，周五13:30交；与原网页分别验收付款。" : "原网页范围不变；商户自行写介绍稿。", "委托");
  setStage("thuDinner", 3, "17:25");
}
function chooseThursdayDinner(id) {
  s.thursdayDinner = id;
  s.time = "17:25";
  if (!payMeal(3, "晚餐", id === "delivery" ? 16 : 7, "thuAfterDinner")) return;
  thuAfterDinner();
}
function thuAfterDinner() {
  const id = s.thursdayDinner;
  if (id === "delivery") {
    log("订单：餐食7元、配送9元。店员出餐后由送餐者接单并送达。", "餐饮");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "在宿舍等餐并明确休息一小时", "17:30—18:30")) return;
  }
  if (id === "pickup") { log("店员装袋，你按取餐号自取；未购买配送服务。", "餐饮"); if (!fatigue(4, "雨中取餐并返回", "17:30—18:30")) return; }
  if (id === "roommate") {
    log("室友帮你带回已付款的晚饭；你答应稍后帮他整理展示截图。", "餐饮");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "等待晚饭时明确休息一小时", "17:30—18:30")) return;
    if (!fatigue(3, "帮室友整理半小时截图", "19:00—19:30")) return;
    collaborate("thursday-meal", "室友带回你的晚饭；你实际帮他完成半小时展示截图整理。", false);
  }
  s.time = "20:00";
  if (s.device === "repair" && s.commission === "full") {
    if (!commissionHour("制作商户页面初稿", "20:00—21:00")) return;
    if (!commissionHour("完成范围内调整、核对和交付", "21:00—22:00")) return;
    deliverCommission("22:00");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "22点后休息一小时", "22:00—23:00")) return;
  } else if (s.device === "borrow" && s.commission === "full") {
    if (!commissionHour("制作商户页面初稿", "20:00—21:00")) return;
    if (!commissionHour("完成范围内调整、核对和交付", "21:00—22:00")) return;
    deliverCommission("22:00");
    if (!courseHour("完成交换分工后剩余的课程代码", "22:00—23:00")) return;
    if (s.swapConfirmed) collaborate("wednesday-swap", "你完成演示材料与一小时课程代码；队友实际完成交换约定的一小时课程功能。", true);
  } else if (s.device === "borrow" && s.commission === "small") {
    if (!commissionHour("完成较小版文字与链接更新", "20:00—21:00")) return;
    deliverCommission("21:00");
    if (!courseHour("完成课程基础功能", "21:00—22:00")) return;
    if (!courseHour("完成课程基础功能", "22:00—23:00")) return;
  } else if (s.device === "borrow" && s.commission === "decline") {
    if (!courseHour("完成课程基础功能", "20:00—21:00")) return;
    if (!courseHour("完成课程基础功能", "21:00—22:00")) return;
    if (!fatigue(-FATIGUE_RULES.restRecovery, "22点后休息一小时", "22:00—23:00")) return;
  } else {
    if (!fatigue(6, "用手机整理周六展示提纲", "20:00—21:00")) return;
    finishPreparation("outline", "20:00—21:00");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "21点后明确休息一小时", "21:00—22:00")) return;
  }
  if (!sleep()) return;
  startFriday();
}

function startFriday() {
  s.day = 4; s.time = "08:10";
  if (!payMeal(4, "早餐", 4, "")) return;
  s.time = "12:00"; if (!payMeal(4, "午餐", 7, "")) return;
  if (!fatigue(10, "当天课程与起居", "12:00")) return;
  s.time = "12:30";
  if (s.extraCopy) {
    if (!fatigue(6, "写活动介绍并核对三项内容", "12:30—13:30")) return;
    s.copyDelivered = true;
    log("30元介绍稿已单独交付，仍待17:30验收与18:00付款。", "交付");
  } else if (!fatigue(-FATIGUE_RULES.restRecovery, "午间明确休息一小时", "12:30—13:30")) return;
  if (s.device === "public") {
    if (!fatigue(2, "前往并领取公共设备", "14:30")) return;
    if (s.commission === "full") {
      if (!commissionHour("完成商户入口调整、核对并提交", "15:00—16:00")) return;
      deliverCommission("16:00");
      if (!courseHour("完成剩余课程基础功能", "16:00—17:00")) return;
    } else if (s.commission === "small") {
      if (!courseHour("完成剩余课程基础功能", "15:00—16:00")) return;
      if (!fatigue(6, "核对活动内容并保存展示截图", "16:00—17:00")) return;
    } else {
      if (!work(2, "核对课程活动内容与展示文件", "15:00—17:00")) return;
    }
    if (!fatigue(2, "归还公共设备", "17:00")) return;
  }
  setStage("friDinner", 4, "17:30");
}
function friAfterDinner() {
  s.time = "17:30";
  if (s.commission !== "decline" && s.commissionDelivered) {
    log(`商户验收本人${s.commission === "full" ? "完整" : "较小"}网页，范围按先前约定确认。`, "验收");
  }
  if (s.copyDelivered) log("商户单独验收30元活动介绍稿。", "验收");
  s.time = "18:00";
  if (s.commission !== "decline" && s.commissionDelivered && !s.commissionPaid) {
    earn(s.commission === "full" ? 100 : 40, "本人技术委托验收后到账");
    s.commissionPaid = true; unlock("补给到位");
  }
  if (s.copyDelivered) { earn(30, "本人活动介绍稿单独到账"); s.copyPaid = true; unlock("补给到位"); }
  if (s.commission === "decline") log("程越说他已交付并收款；这是他的劳动和收入，不进入你的余额。", "同学经历");
  log("队友在窄屏手机上发现活动列表与筛选区难以操作；今晚18:00—19:00共用电脑处理。", "反馈");
  setStage("friMobile", 4, "18:00");
}
function chooseMobile(id) {
  s.mobileChoice = id; s.time = "18:00";
  if (id === "component") {
    if (!spend(29, "移动布局组件：列明功能和使用许可")) return;
    log("组件提供既有布局和使用说明；你仍须把页面内容与数据接入。", "购买");
  } else log(id === "self" ? "决定用既有代码自行修改手机布局，共需三小时电脑工作。" : "决定先做一小时基本重排，让手机上能完成核心查找与筛选。", "项目");
  if (!mobileHour("与队友共用电脑处理手机端问题", "18:00—19:00")) return;
  if (id === "self" && s.device === "repair") {
    if (!mobileHour("在本人电脑继续修改手机布局", "19:00—20:00")) return;
    if (!mobileHour("在本人电脑继续修改手机布局", "20:00—21:00")) return;
    log("自行修改三小时完成，手机端可查找和筛选活动。", "项目");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "21点后休息一小时", "21:00—22:00")) return;
  } else {
    if (id === "self") log("已做1/3小时。队友确认周六09:00—11:00让出电脑，自己改用手机准备展示。", "约定");
    else log(id === "component" ? "组件接入一小时后，手机核心操作可用；个人时间轴仍未做。" : "一小时基本重排完成，手机核心操作可用；扩展布局暂缓。", "项目");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "晚间明确休息一小时", "19:00—20:00")) return;
  }
  if (!sleep()) return;
  startSaturday();
}
function startSaturday() {
  s.day = 5; s.time = "08:00";
  if (!payMeal(5, "早餐", 4, "satAfterBreakfast")) return;
  satAfterBreakfast();
}
function satAfterBreakfast() {
  s.time = "09:00";
  if (s.mobileChoice === "self" && s.mobileHours < 3) {
    if (!mobileHour("使用队友借出的电脑继续手机布局", "09:00—10:00")) return;
    if (!mobileHour("使用队友借出的电脑继续手机布局", "10:00—11:00")) return;
    collaborate("saturday-device", "队友周六09:00—11:00让出电脑并用手机准备展示；你完成剩余两小时手机布局。", true);
  }
  s.time = "12:00";
  if (!payMeal(5, "午餐", 7, "satAfterLunch")) return;
  satAfterLunch();
}
function satAfterLunch() {
  s.time = "12:00";
  if (!fatigue(10, "当天课程与起居", "12:00")) return;
  s.time = "14:00";
  if (!fatigue(6, "和队友展示活动网页并让同学实际操作", "14:00—15:00")) return;
  s.task.demonstrated = true;
  log("一位同学筛选后遇到空结果，不知道是没有活动还是页面未加载。最终版仍需一小时修正、一小时核对上传。", "反馈", 5, "15:10");
  setStage("satPersonal", 5, "16:00");
}
function chooseSaturdayPersonal(id) {
  s.saturdayPersonal = id;
  if (id === "walk") {
    if (!fatigue(4, "与朋友摄影散步两小时", "16:00—18:00")) return;
    s.personal.push("周六与朋友摄影散步");
    log("拍下街角和傍晚光线；这段生活不自动成为课程代码。", "生活");
  }
  if (id === "sketch") {
    if (!work(2, "整理自己的时间轴作品集草案", "16:00—18:00")) return;
    s.personal.push("周六推进个人时间轴草案");
  }
  if (id === "rest") {
    if (!fatigue(-FATIGUE_RULES.restRecovery, "明确休息", "16:00—17:00")) return;
    if (!fatigue(-FATIGUE_RULES.restRecovery, "继续休息", "17:00—18:00")) return;
    s.personal.push("周六留下两小时休息");
  }
  s.time = "18:00";
  if (!payMeal(5, "晚餐", 7, "satAfterDinner")) return;
  satAfterDinner();
}
function satAfterDinner() { setStage("satCoord", 5, "19:00"); }
function chooseSaturdayCoord(id) {
  s.saturdayCoord = id; s.time = "19:00";
  if (id === "self") {
    log("确认周日20:00—22:00自己完成修正与上传；队友确认设备时间。", "日程");
    if (!fatigue(-FATIGUE_RULES.restRecovery, "协调后明确休息一小时", "19:00—20:00")) return;
  }
  if (id === "team") {
    log("约定：你今晚发空结果触发步骤；队友周日18:00修正，你20:00核对上传。", "分工");
    if (!fatigue(6, "整理并发出空结果复现步骤", "19:00—20:00")) return;
    finishPreparation("steps", "19:00—20:00");
  }
  if (id === "defer") {
    if (!fatigue(6, "继续个人作品集说明", "19:00—20:00")) return;
    s.personal.push("周六晚继续个人作品集");
    log(s.device === "repair" ? "本人电脑仍可用，周日两小时课程收尾尚待执行。" : "队友暂只确认周日21:00—22:00一小时，另一小时仍缺设备。", "日程");
  }
  if (!sleep()) return;
  startSunday();
}
function startSunday() {
  s.day = 6; s.time = "08:20";
  if (!payMeal(6, "早餐", 4, "sunAfterBreakfast")) return;
  sunAfterBreakfast();
}
function sunAfterBreakfast() {
  s.time = "12:00";
  if (!payMeal(6, "午餐", 7, "sunAfterLunch")) return;
  sunAfterLunch();
}
function sunAfterLunch() {
  s.time = "12:00";
  if (!fatigue(10, "当天课程与起居", "12:00")) return;
  if (s.saturdayCoord === "team") s.sunPlan = "team";
  else if (s.saturdayCoord === "self" || s.device === "repair") s.sunPlan = "self";
  else { setStage("sunDevice", 6, "12:30"); return; }
  setStage("sunPersonal", 6, "17:00");
}
function chooseSundayDevice(id) {
  s.sunPlan = id;
  if (id === "roommate") {
    log("室友确认19:00—20:00借出电脑；你先在16:00—17:00整理并发回他的截图。", "约定");
    if (!fatigue(6, "完成室友截图整理并发还", "16:00—17:00")) return;
  }
  if (id === "late") log("队友确认21:00—22:00和22:50—23:50两个时段；距离截止仅剩九分钟。", "日程");
  if (id === "none") log("目前只有队友21:00—22:00一小时设备，最终版两项待办无法都完成。", "日程");
  setStage("sunPersonal", 6, "17:00");
}
function chooseSundayPersonal(id) {
  s.time = "17:00";
  if (id === "qa") {
    if (!usesTaskRules() || preparationProgress() >= 10) return;
    if (!fatigue(6, "补一次验收检查", "17:00—18:00")) return;
    finishPreparation("qa", "17:00—18:00");
  } else if (id === "portfolio") {
    if (!fatigue(6, "整理自己的摄影或时间轴记录", "17:00—18:00")) return;
    s.personal.push("周日整理个人作品集说明");
  } else if (!fatigue(-FATIGUE_RULES.restRecovery, "截止前明确休息一小时", "17:00—18:00")) return;
  s.time = "18:00";
  if (!payMeal(6, "晚餐", 7, "sunAfterDinner")) return;
  sunAfterDinner();
}
function sunAfterDinner() {
  if (s.sunPlan === "team") {
    s.time = "19:00";
    s.finalFix = true;
    collaborate("sunday-team", "队友18:00—19:00实际修好空结果提示；你此前提供了复现步骤，随后负责最终核对上传。", true);
  }
  setStage("sunExecute", 6, "19:00");
}
function chooseSundayExecute(id) {
  if (id === "pause") {
    log("暂停今晚课程收尾，并向队友说明当前状态；尚未完成的工作没有自动交付。", "沟通");
    conclude();
    return;
  }
  if (s.sunPlan === "team") {
    if (!fatigue(6, "核对最终文件并上传", "20:00—21:00")) return;
    s.uploaded = true; s.uploadTime = "周日21:00";
  } else if (s.sunPlan === "roommate") {
    if (!fatigue(6, "用室友电脑修正空结果提示", "19:00—20:00")) return;
    s.finalFix = true;
    collaborate("sunday-roommate", "你履行截图整理约定，室友19:00—20:00实际借出电脑供课程修正。", true);
    if (!fatigue(-FATIGUE_RULES.restRecovery, "两段电脑工作间休息一小时", "20:00—21:00")) return;
    if (!fatigue(6, "用队友电脑核对最终文件并上传", "21:00—22:00")) return;
    s.uploaded = true; s.uploadTime = "周日22:00";
  } else if (s.sunPlan === "late") {
    if (!fatigue(6, "修正空结果提示", "21:00—22:00")) return;
    s.finalFix = true;
    if (!fatigue(8, "晚间追加核对和整理最终文件", "22:50—23:50")) return;
    s.uploaded = true; s.uploadTime = "周日23:50";
    if (deliveryComplete()) unlock("最后一击");
  } else if (s.sunPlan === "none") {
    if (!fatigue(6, "用仅有的一小时修正空结果提示", "21:00—22:00")) return;
    s.finalFix = true;
    log("文件核对与上传仍欠一小时电脑时段。", "项目");
  } else {
    if (!fatigue(6, "修正空结果提示", "20:00—21:00")) return;
    s.finalFix = true;
    if (!fatigue(6, "核对最终文件并上传", "21:00—22:00")) return;
    s.uploaded = true; s.uploadTime = "周日22:00";
  }
  conclude();
}
function conclude() {
  if (s.ending === "停止响应") return;
  s.time = "23:59";
  if (!deliveryComplete()) s.ending = "午夜钟鸣";
  else if (overloadQualified()) s.ending = "极限过载";
  else if (teamQualified()) s.ending = "最佳小队";
  else s.ending = "结束了？";
  s.stage = "ending";
  log(s.uploaded ? `文件在${s.uploadTime}上传；${deliveryComplete() ? "满足本局完整交付条件" : "必要验收项仍未齐全"}。` : "23:59截止时，最终版未完整提交。", "结局");
}

const deviceName = () => ({ repair: "已维修的本人电脑", borrow: "室友约定借用", public: "公共设备预约" }[s.device] || "尚未选择");
const commissionName = () => ({ full: "100元完整委托", small: "40元较小委托", decline: "程越承接，本人未接" }[s.commission] || "尚未决定");
const projected = (delta) => {
  const result = clamp(s.fatigue + delta);
  return `疲劳 ${s.fatigue}% → ${result}%${result >= 100 ? "；会立即触发停止响应" : ""}`;
};
function finalWorkPrediction() {
  const changes = s.sunPlan === "team" || s.sunPlan === "none" ? [6] : s.sunPlan === "late" ? [6, 8] : s.sunPlan === "roommate" ? [6, -FATIGUE_RULES.restRecovery, 6] : [6, 6];
  let current = s.fatigue;
  const values = [current];
  for (const change of changes) {
    current = clamp(current + change); values.push(current);
    if (current === 100) break;
  }
  return `疲劳 ${values.map(value => `${value}%`).join(" → ")}${current === 100 ? "；途中达到100%会立即中断" : ""}`;
}
function scene() {
  switch (s.stage) {
    case "monDevice": return {
      day: "第一天 · 周一", title: "打不开的早晨", time: "12:20 · 宿舍与消息",
      body: ["按下开机键，屏幕没有亮。再试一次，还是没有反应。幸好昨晚的版本已存进仓库，代码没有消失，但周六就要展示。", "维修点发来150元报价。你翻看日程，今天必须把活动列表和筛选的基础部分继续推进。"],
      messages: [["维修点", "本次故障处理、所需部件、检测与复测合计150元。确认后开工，预计周二下午交付。范围外问题先另行确认。"], ["室友", "今晚和周四20:00—23:00可以借你电脑，别改我的项目环境。"], ["同学", "公共设备周一、周三、周五各可用两小时；每次往返、领取和归还多占一小时。"]],
      choices: [
        ["repair", "确认维修，今晚暂借室友电脑", "付150元；今晚做2小时课程工作，周二取机。", s.cash < 150],
        ["borrow", "与室友约好两次借用", "不支付维修费；周一和周四按约定时段用电脑。"],
        ["public", "使用已确认的公共设备", "不支付维修费；今天2小时工作，另有1小时往返与归还。"]
      ]
    };
    case "monEvening": return {
      day: "第一天 · 周一", title: "今晚还剩一小时", time: "22:00 · 宿舍",
      body: [`活动页面重新跑起来了。今天三餐已实际支付18元，基础功能推进2小时；${s.device === "repair" ? "维修点明天交机" : s.device === "borrow" ? "下一次室友借用时段是周四" : "下次公共设备预约在周三"}。`, "队友说：“明天讨论前带一下方案就行，范围一起定。不要把全部功能都赶在今晚。”"],
      choices: [
        ["checklist", "整理交付范围与测试清单", `1小时手机或电脑准备；${projected(6)}${usesTaskRules() ? "；准备核验最多+4点" : ""}`],
        ["sketch", "留下自己想做的时间轴草图", `1小时个人构想；${projected(6)}`],
        ["rest", "告诉队友设备情况，今晚休息", `沟通后明确休息1小时；${projected(-FATIGUE_RULES.restRecovery)}`]
      ]
    };
    case "tueGift": return {
      day: "第二天 · 周二", title: "心意怎么表达", time: "17:00 · 生日群",
      body: ["阿辰今天过生日。项目小组刚把本周最低交付范围定下来，手机上的生日群又跳出新消息。去年那张拍糊的合照，你一直没有删。", s.device === "repair" ? "下午你取回修好的电脑，周末的设备时间宽松了一些。" : "今天没有额外电脑时段，你仍可用手机准备礼物或课程清单。"],
      messages: [["小林", "阿辰试过那款键盘，168元，四个人每人42元。有人不方便就先不下单。"], ["阿辰", "晚上想和大家吃个饭，最近老是凑不齐人。礼物别谁一个人扛。"]],
      choices: [
        ["keyboard", "参加键盘合购，饭前休息", `出资42元；${projected(-FATIGUE_RULES.restRecovery)}。礼物送出与购买分开记录。`, s.cash < 42],
        ["card", "做一张照片卡", `材料与打印8元，准备1小时；${projected(6)}`, s.cash < 8],
        ["none", "发祝福，把一小时用来准备项目", `礼物支出0元，课程验收清单1小时；${projected(6)}${usesTaskRules() ? "；准备核验最多+4点" : ""}`]
      ]
    };
    case "tueDinner": return {
      day: "第二天 · 周二", title: "要不要坐到最后", time: "18:00 · 食堂",
      body: ["群里发来一张空桌照片。小林说各自确认再点，不提前算你的那份。礼物和吃饭分开统计。", "18元生日餐会替代普通7元晚饭；不会扣两顿。"],
      choices: [
        ["full", "参加整场晚餐", "晚餐18元；聊天到20:00；本段疲劳不变。", s.cash < 18],
        ["short", "吃普通餐，见一面后先走", `晚餐7元，之后休息1小时；${projected(-FATIGUE_RULES.restRecovery)}`, s.cash < 7],
        ["alone", "今晚不参加，饭后画草图", `晚餐7元，个人创作1小时；${projected(6)}`, s.cash < 7]
      ]
    };
    case "wedCommission": return {
      day: "第三天 · 周三", title: "报价之外", time: "12:20 · 兼职消息",
      body: ["程越转来一份小活。商户周末要发活动信息，群里总有人问“报名入口在哪”。对方想让手机上能直接找到入口，但没有时间重做整站。", `你现在用的是${deviceName()}。商户周五17:00前要文件，17:30按约验收，18:00才付款。预计收入现在不能花。`],
      messages: [["商户 · 完整方案", "100元：更新活动信息和手机报名入口布局，预计3小时，包含一次约定范围内的位置调整。"], ["商户 · 较小方案", "40元：只更新现有文字和链接，布局不动。我发群消息时另附直达入口。"]],
      choices: [
        ["full", "接下100元完整方案", `今天先做1小时手机准备，另排2小时电脑工作；${projected(6)} 起步。`],
        ["small", "协商成40元较小方案", "只做1小时电脑更新；今天先留出1小时休息。"],
        ["decline", "说明课程与设备安排，这次不接", "程越自己承接；他的工作与报酬不会记到你的账本。"]
      ]
    };
    case "wedSwap": return {
      day: "第三天 · 周三", title: "时段排不下", time: "12:40 · 项目群",
      body: ["室友电脑只在周四20:00—23:00可用。完整委托占两小时，而你的课程代码还差两小时。队友提出交换分工：他帮你完成一小时课程功能，你今晚用手机做他原本负责的演示材料；周四最后一小时你完成剩余代码。", "这需要双方确认并履行。只看过提议，不算已经得到帮助。"],
      choices: [
        ["confirm", "确认交换分工，保留完整委托", "今晚做1小时演示材料；周四完成委托2小时和课程代码1小时。"],
        ["small", "把委托缩小为40元方案", "周四做1小时委托和2小时课程代码。"],
        ["decline", "这次不接委托", "周四先完成课程功能，由程越承接商户任务。"]
      ]
    };
    case "thuCopy": return {
      day: "第四天 · 周四", title: "原来的约定之外", time: "12:20 · 商户消息",
      body: [s.commission === "full" ? "商户问能否把报名按钮移到活动说明上方。你翻到周三约定：这属于已包含的一次入口位置调整，不另收费。" : "商户确认40元版本只更新文字和链接，手机布局依旧；他发群时另附直达入口。", "接着，他又问能否写一段活动介绍。这是一份新的文字成果，手机上约需一小时，周五13:30交，须单独验收。"],
      choices: [
        ["decline", "按原范围交网页，不接介绍稿", "商户自己写；原委托依原条件结算。"],
        ["accept", "单独约30元写介绍稿", "周五12:30—13:30写作；原网页与介绍稿分别验收付款。"]
      ]
    };
    case "thuDinner": return {
      day: "第四天 · 周四", title: "雨里的那顿饭", time: "17:25 · 宿舍门口",
      body: ["雨下大了，晚饭仍要吃。页面上同一份普通餐是7元，配送另收9元；另一种办法是自己去取。室友正要去同一档口，也发来消息。", "订单价格、提供服务的人和你自己的时间安排都摆在眼前。"],
      messages: [["食堂档口", "现点现做，大约18:05备好。自取请看取餐号；配送单会在送餐者取走后更新状态。"], ["室友", "我正好下去。帮你带回来可以，晚点帮我排两张展示截图，半小时就够。"]],
      choices: [
        ["delivery", "付费配送，留在宿舍等", `餐食7元＋配送9元＝16元；休息1小时，${projected(-FATIGUE_RULES.restRecovery)}`, s.cash < 16],
        ["pickup", "自己去取", `晚餐7元；额外往返1小时，${projected(4)}`, s.cash < 7],
        ["roommate", "请室友带回，帮他整理截图", `晚餐7元；休息1小时后做半小时截图，疲劳净变化−5。`, s.cash < 7]
      ]
    };
    case "friDinner": return {
      day: "第五天 · 周五", title: "付款还没到账", time: "17:30 · 验收之前",
      body: [s.commission === "decline" ? "程越按自己的约定交了商户页面。你看到的是他的进度，不是你的待收款。" : "你按确认范围交了网页；商户在17:30查看。介绍稿若另约，也单独验收。", "现在要先付7元晚饭。即使商户18:00会转账，也不能用尚未到账的钱支付17:30的餐费。"],
      choices: [
        ["pay", "支付晚饭，等待验收和到账", `实际付款7元；当前余额 ${money(s.cash)}。`, s.cash < 7],
        ...(!s.advanceUsed ? [["advance", "先预支下周生活费100元", "家人实际转账后，下次生活费减少100元；不是劳动收入。"]] : [])
      ]
    };
    case "friMobile": return {
      day: "第五天 · 周五", title: "能运行，能用吗", time: "18:00 · 项目测试",
      body: ["商户的验收与付款已经处理完。回到课程项目，队友在一部窄屏手机上试用：活动列表挤成一行，筛选区挡住了文字。基础功能仍在，但明天给同学展示前得改到能操作。", "他发来一份29元组件说明；你也可以自己改，或先保住核心操作。"],
      messages: [["移动布局组件 · 29元", "提供列明的活动列表与筛选布局、使用说明和问题反馈。本课程项目可按说明接入；页面内容与数据仍需自己适配，约1小时。额外定制另议。"], ["本人或程越的委托记录", s.commission === "decline" ? "程越已交付并收到自己的报酬；你能读到他的工作便签，但钱不在你的余额里。" : `${commissionName()}已按约验收；你做过的准备、调整与付款节点仍可回看。`]],
      choices: [
        ["component", "买组件，再花一小时适配", `现在支付29元；电脑工作1小时，${projected(6)}。`, s.cash < 29],
        ["self", "自己改三小时", `不花钱；${s.device === "repair" ? "今晚19:00—21:00继续两小时" : "队友确认明早09:00—11:00让出电脑"}。总疲劳+18。`],
        ["basic", "先做一小时基本重排", `不花钱；手机核心操作可用，个人扩展暂缓。${projected(6)}`],
        ...(!s.advanceUsed && s.cash < 29 ? [["advance", "先办理已说明的生活费预支", "实际到账100元，下次少100元。"]] : [])
      ],
      extra: `<div class="divider"></div><p class="section-label">可选：同一份委托的三个记录</p><div class="record-grid">${["商户为什么要这个页面", "制作者具体做了什么", "17:30如何验收"].map((label, i) => `<button class="choice" type="button" data-record="${i}" ${i > 0 && !s.hiddenReads[i - 1] ? "disabled" : ""}><span class="choice-title">${s.hiddenReads[i] ? "✓ " : ""}${label}</span><span class="choice-detail">阅读不消耗时间、金钱或疲劳。</span></button>`).join("")}</div>`
    };
    case "satPersonal": return {
      day: "第六天 · 周六", title: "属于自己的下午", time: "16:00 · 展示结束",
      body: ["活动网页在手机上已经能查找和筛选。展示后，有同学遇到空结果：“是不是真的没有活动，还是没加载出来？”最终版还需要一小时修提示、一小时核对上传。", "16:00—18:00原本留给你的个人活动。阿辰和摄影社同学在校门附近等人，你的时间轴草图也还在手机里。"],
      choices: [
        ["walk", "去摄影散步", `免费，和朋友走两小时；${projected(4)}`],
        ["sketch", "留在宿舍推进时间轴草图", `个人创作2小时；${projected(12)}`],
        ["rest", "把两小时留给休息", `不新增照片或草图；${projected(-2 * FATIGUE_RULES.restRecovery)}`]
      ]
    };
    case "satCoord": return {
      day: "第六天 · 周六", title: "明晚谁用电脑", time: "19:00 · 项目群",
      body: ["晚饭已经付过。队友问：“空结果提示谁来修？最后谁上传？现在定，我好排自己的事。”", "周日23:59是本故事设定的最终提交时间。展示过，不等于最终版已经交上去。"],
      choices: [
        ["self", "自己做两项，确认周日20:00—22:00", `队友确认设备；今晚休息1小时，${projected(-FATIGUE_RULES.restRecovery)}。`],
        ["team", "与队友分工，今晚发检查要点", `今晚手机整理1小时，${projected(6)}${usesTaskRules() ? "；准备核验最多+4点" : ""}；队友明晚修正，你负责上传。`],
        ["defer", "今晚继续自己的作品集，明天再问", `个人创作1小时，${projected(6)}；${s.device === "repair" ? "本人电脑仍可用" : "目前只确认明晚1小时电脑"}。`]
      ]
    };
    case "sunDevice": return {
      day: "第七天 · 周日", title: "还缺一小时", time: "12:30 · 消息列表",
      body: ["昨天留下的两项最终版工作合计要两小时。队友目前只确认21:00—22:00借你电脑一小时；另一小时需要明确安排。", "室友愿意19:00—20:00借电脑，前提是你16:00—17:00先帮他整理截图。队友还有22:50—23:50的晚间时段，但离23:59只剩九分钟。"],
      choices: [
        ["roommate", "帮室友整理截图，确认19点电脑", `16点手机工作1小时，${projected(6)}；晚上19点修正、21点上传。`],
        ["late", "确认22:50的最后一小时", "确认21点修正、22:50核对两个时段。17点仍可安排休息或其他活动，实际疲劳在执行前显示。"],
        ["none", "暂不补第二小时设备", "目前仅够修正或上传其中一项；截止风险已知。"]
      ]
    };
    case "sunPersonal": return {
      day: "第七天 · 周日", title: "还留给自己一小时", time: "17:00 · 日历提醒",
      body: [`今晚安排：${s.sunPlan === "team" ? "队友18点修正，你20点核对上传" : s.sunPlan === "self" ? "你20点至22点完成修正与上传" : s.sunPlan === "roommate" ? "室友19点借电脑，队友21点再借一小时" : s.sunPlan === "late" ? "你21点修正，22:50做最后核对" : "目前只确认21点一小时，仍欠上传时段"}。`, usesTaskRules() ? `这一小时可以留给自己的作品集、明确休息，或补一次验收检查。准备核验当前 ${preparationProgress()}/10；检查最多补4点，也不会替你完成晚上的修正与上传。` : "这一小时可以整理自己的摄影或时间轴记录，也可以明确休息。两种安排都不会替你完成晚上的课程任务。"],
      choices: [
        ["portfolio", "整理自己的作品集说明", `手机专注1小时；${projected(6)}`],
        ["rest", "明确休息一小时", `${projected(-FATIGUE_RULES.restRecovery)}`],
        ...(usesTaskRules() && preparationProgress() < 10 ? [["qa", "补一次验收检查", `17:00—18:00手机核验；${projected(6)}；核验 ${preparationProgress()}/10 → ${Math.min(10, preparationProgress() + 4)}/10${preparationProgress() + 4 < 10 ? "，补完仍有缺项" : ""}。`]] : [])
      ]
    };
    case "sunExecute": {
      const verification = usesTaskRules() && preparationProgress() < 10 ? `准备核验仍缺${10 - preparationProgress()}点，本段不会补验收材料。` : "";
      return {
        day: "第七天 · 周日", title: "日历的最后一格", time: "19:00 · 距截止只剩数小时",
        body: [`晚饭已付。${s.sunPlan === "team" ? "队友已经在18:00—19:00实际修好空结果提示，文件和截图发进群。" : "空结果提示还需要你用电脑修。"}`, "屏幕上同时有课程待办、已确认设备时段和当前疲劳。你可以按计划执行，也可以先停止今晚的工作并告知队友。"],
        choices: [
        ["work", "按已确认的时段完成", `${finalWorkPrediction()}；${s.sunPlan === "none" ? "只有一小时，无法完整提交" : "完成后才会出现上传回执"}。${verification}`],
          ["pause", "暂停这一晚，先休息并告知队友", "不再增加工作；若最终版仍未交，23:59结算未完成。"]
        ]
      };
    }
    case "funds": return {
      day: `${DAYS[s.day]} · 账本`, title: "这笔饭钱要先有来源", time: s.time,
      body: [`${s.notice} 这顿饭需要实际余额，预计收入不能提前计入。`, "家人此前说明可以把下周生活费100元提前转来一次，下次相应少100元。预留只是提醒，没有从余额里扣过。"],
      choices: s.advanceUsed ? [] : [["advance", "说明情况，确认预支100元", "转账实际到账后再支付这顿饭；下周生活费相应减少100元。"]]
    };
    default: return null;
  }
}

function choiceMarkup([id, title, detail, disabled = false]) {
  return `<button class="choice${disabled ? " disabled" : ""}" type="button" data-choice="${id}" ${disabled ? "disabled" : ""}>
    <span class="choice-title">${title}</span><span class="choice-detail${detail.includes("100%") ? " choice-risk" : ""}">${detail}</span>
  </button>`;
}
function messageMarkup([source, body]) {
  return `<div class="message"><span class="message-source">${source}</span><p>${body}</p></div>`;
}
function taskHint() {
  if (!usesTaskRules()) return "本局沿用开局时的完成条件；新的准备核验要求从下一局启用。";
  const missing = 10 - preparationProgress();
  if (s.ending) {
    const rows = taskProgress().rows.filter(row => row.value < row.max);
    return rows.length ? `${s.uploaded ? "文件已上传；" : "截至本局结束；"}仍缺：${rows.map(row => row.label).join("、")}。` : "六项必要内容均已完成。";
  }
  if (s.day === 6 && missing > 0) return `准备核验还缺${missing}点。${s.stage === "sunExecute" ? "晚上的修正与上传不会新增核验材料。" : `周日17点可补一次检查，最多补4点${missing > 4 ? "，补后仍不足10点" : ""}。`}`;
  if (s.day === 5 && missing > 0) return `准备核验还缺${missing}点。${s.stage === "satPersonal" || s.stage === "satCoord" ? "今晚可整理复现步骤（最多+4），" : ""}周日17点可补一次检查（最多+4）；都占用实际时段。`;
  if (s.day === 4 && missing > 0) return `准备核验 ${preparationProgress()}/10。周六复现步骤与周日补检查各最多补4点，安排时要同时考虑时间、设备与疲劳。`;
  return "完整交付需要六项必要内容；清单、范围讨论和实际分工会留下可核对的成果。";
}
function renderTaskPanel(expanded = false) {
  const task = taskProgress();
  const items = s.task.preparations.map(record => {
    const item = TASK_PREPARATIONS.find(entry => entry.id === record.id);
    return item ? `<li>${DAYS[record.day]} · ${item.label}</li>` : "";
  }).join("");
  return `<section class="task-panel" aria-label="任务进度与验收清单">
    <div class="task-header"><h2 class="task-title"><span aria-hidden="true">📋</span> 任务进度</h2><strong class="task-value">${task.total}%</strong></div>
    <div class="task-track" role="progressbar" aria-label="任务进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${task.total}"><div class="task-fill" style="width:${task.total}%"></div></div>
    <p class="task-hint">${taskHint()}</p>
    <details class="task-checklist" ${expanded ? "open" : ""}><summary>查看验收清单 <span>${task.rows.filter(row => row.value === row.max).length}/6 项齐全</span></summary>
      <ul class="task-grid">${task.rows.map(row => `<li class="task-row${row.value === row.max ? " complete" : ""}"><span><span aria-hidden="true">${row.value === row.max ? "✓" : "○"}</span> ${row.label}${row.id === "preparation" && !usesTaskRules() ? "<small>沿用本局原交付条件</small>" : ""}</span><b>${row.value}/${row.max}</b></li>`).join("")}</ul>
      ${usesTaskRules() ? `<p class="task-caption">准备核验累计上限10。已完成材料：</p><ul class="task-materials">${items || "<li>暂未完成准备材料。</li>"}</ul>` : ""}
      <p class="task-caption">${usesTaskRules() ? "进度达到100%、必要内容齐全并按时上传，才算完整交付。" : "本局按开始时的交付条件结算。"}</p>
    </details>
  </section>`;
}
function openTaskProgress() { openDialog("任务进度与验收清单", renderTaskPanel(true)); }
function renderIntro() {
  return `<section class="hero"><div class="hero-content">
    <div class="hero-heading"><p class="eyebrow">七天 · 一次选择接着一次选择</p>
      <h1>月底还剩三百块</h1>
      <p class="hero-lead">还有七天，你会怎样安排这一周？</p></div>
    <div class="hero-bottom">
      <div class="hero-stats" aria-label="本周初始状态">
        <div class="hero-stat"><span class="hero-stat-icon" aria-hidden="true">👛</span><span class="hero-stat-label">余额</span><strong>¥300</strong></div>
        <div class="hero-stat"><span class="hero-stat-icon" aria-hidden="true">🔋</span><span class="hero-stat-label">疲劳</span><strong>20%</strong></div>
        <div class="hero-stat"><span class="hero-stat-icon" aria-hidden="true">🗓️</span><span class="hero-stat-label">最终提交</span><strong>周日 23:59</strong></div>
      </div>
      <button class="primary-button hero-start" type="button" data-action="replay">开始这一周</button>
      <button class="subtle-button hero-collection" type="button" data-action="collection"><span aria-hidden="true">🏅</span> 查看以往成就 <span class="collection-count">${collectedAchievements().length} / ${ACHIEVEMENTS.length}</span></button>
      <div class="teaser"><div class="teaser-art" aria-hidden="true"></div><div class="teaser-copy"><strong>周一 08:10 · 宿舍</strong><p>电脑没有亮。项目群的消息却已经到了。</p><small>阅读约 15–25 分钟</small></div></div>
      <p class="hero-task-note">课程任务需要功能、验收材料与最终上传。开始后可随时查看进度和缺项。</p>
      ${marxNote("theory-whisper hero-whisper", 0)}
    </div>
  </div></section>`;
}
const MARX_NOTES = [
  { text: "人的活动以现实的物质生活条件为前提。", source: "《德意志意识形态》第一卷·费尔巴哈", url: "https://www.marxists.org/chinese/marx/marxist.org-chinese-marx-1846.htm" },
  { text: "商品的使用价值，是它满足某种需要的属性。", source: "《资本论》第一卷·第一章 商品", url: "https://www.marxists.org/chinese/marx/capital/01.htm" },
  { text: "商品交换需要通过商品占有者之间的社会关系来实现。", source: "《资本论》第一卷·第二章 交换过程", url: "https://www.marxists.org/chinese/marx/capital/02.htm" },
  { text: "劳动过程离不开有目的的活动、劳动对象和劳动资料。", source: "《资本论》第一卷·第五章 劳动过程和价值增殖过程", url: "https://www.marxists.org/chinese/marx/capital/05.htm" },
  { text: "商品的价格表达与实际取得货币，是不同的环节。", source: "《资本论》第一卷·第三章 货币或商品流通", url: "https://www.marxists.org/chinese/marx/capital/03.htm" },
  { text: "每个人的自由发展与一切人的自由发展相联系。", source: "《共产党宣言》二·无产者和共产党人", url: "https://www.marxists.org/chinese/marx-engels2/02/01.htm" },
  { text: "认识是否符合实际，需要通过实践加以检验。", source: "《关于费尔巴哈的提纲》第二条", url: "https://www.marxists.org/chinese/marx-engels2/01/15.htm" }
];
function knowledgeSource(item) {
  return `<cite class="knowledge-source">— <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.source}</a></cite>`;
}
function marxNote(className = "theory-whisper", day = s.day) {
  const item = MARX_NOTES[day] || MARX_NOTES[0];
  return `<p class="${className}"><span>观察角</span> ${item.text}${knowledgeSource(item)}</p>`;
}
function renderStory(info) {
  return `<div class="story-page"><div class="story-header"><div class="story-day"><span class="story-day-icon" aria-hidden="true">${DAY_MOTIFS[s.day].icon}</span> ${info.day}</div><h1 class="story-title">${info.title}</h1><div class="story-time">${info.time}</div></div>
    ${renderTaskPanel()}
    <section class="story-card"><div class="story-copy">${info.body.map(p => `<p>${p}</p>`).join("")}</div>${(info.messages || []).map(messageMarkup).join("")}${info.extra || ""}</section>
    ${s.notice && s.stage !== "funds" ? `<div class="warning">${s.notice}</div>` : ""}
    <p class="section-label">下一步</p><div class="choices">${(info.choices || []).map(choiceMarkup).join("")}</div>
    ${marxNote()}
    <p class="hero-note">数值、价格、课程与人物均为本游戏的虚构设定。阅读消息不消耗游戏时间。</p>
  </div>`;
}
const ENDINGS = {
  "结束了？": "文件显示“提交成功”。你关掉最后一页日历，有些想做的东西只留下草图，有些晚上也确实留给了自己。下周的安排没有因此消失；至少这周发生过什么，你现在能够说清。",
  "极限过载": "提交提示出现时，手还停在键盘上。日历上密集的工作、往返和约定都能找到来源。你完成了交付，也看见了两天都居高不下的疲劳记录。",
  "最佳小队": "文件上传后，群里有人发了一个“收到”。回看这一周，电脑、代码、截图和检查清单都留下了各自的名字。你们把答应过的事情接上了。",
  "午夜钟鸣": "23:59。最终版仍有必要工作未完成。屏幕上已经做过的事还在，没赶上的部分也写得清楚。明天如何处理，需要再和相关的人商量。",
  "停止响应": "屏幕上还有队友、委托方和朋友的消息。你看着已经写满的日程，暂时无法继续原来的安排。消息还在抵达，你已经没有余力回应。"
};
const ENDING_INSIGHTS = {
  "结束了？": { text: "人的活动从既有的物质生活条件出发，也会改变这些条件。回看这周的设备、费用与约定，才能理解哪些选择得以实现、哪些计划暂时搁置。", source: "《德意志意识形态》第一卷·费尔巴哈", url: "https://www.marxists.org/chinese/marx/marxist.org-chinese-marx-1846.htm" },
  "极限过载": { text: "劳动时间的延长受到身体条件和社会生活需要的限制。完成交付并不能替代休息、交往与个人发展的时间。", source: "《资本论》第一卷·第八章 工作日", url: "https://www.marxists.org/chinese/marx/capital/08.htm" },
  "最佳小队": { text: "《共产党宣言》把每个人的自由发展与一切人的自由发展联系起来。本局的实际分工与互助，提供了思考个人发展需要哪些共同条件的起点。", source: "《共产党宣言》二·无产者和共产党人", url: "https://www.marxists.org/chinese/marx-engels2/02/01.htm" },
  "午夜钟鸣": { text: "认识需要接受实践的检验，并在实践中得到修正和发展。未完成的交付留下了下一轮调整计划、设备和时间安排的依据。", source: "《实践论》", url: "https://www.marxists.org/chinese/maozedong/marxist.org-chinese-mao-193707.htm" },
  "停止响应": { text: "劳动能力的发挥伴随着体力和智力的消耗，其维持需要相应的生活资料。疲劳中断提醒我们，分析任务安排还要考察劳动能力得以持续发挥的条件。", source: "《资本论》第一卷·第四章 货币转化为资本", url: "https://www.marxists.org/chinese/marx/capital/04.htm" }
};
function relationCards() {
  const cards = [];
  cards.push({
    title: "让网页重新运行",
    text: s.device === "repair" ? "你支付150元维修服务，维修点处理故障并复测；周一还借室友电脑推进课程。" : s.device === "borrow" ? "你看过150元维修报价但没有购买。室友按约借出电脑，你用它完成课程工作。" : "你看过150元维修报价但没有购买。公共设备提供工作时段，你付出了往返和归还时间。"
  });
  if (s.commission) cards.push({
    title: "商户活动页面",
    text: s.commission === "decline" ? "商户需要手机报名入口；你未接单，程越按自己的约定制作、交付并收款。那笔钱没有进入你的余额。" : `商户需要活动信息与报名入口。你确认${s.commission === "full" ? "100元完整" : "40元较小"}范围；${s.commissionDelivered ? "已经交付" : "尚未交付"}，${s.commissionPaid ? "周五验收后实际付款" : "款项尚未到账"}。${s.extraCopy ? `另约的30元介绍稿${s.copyPaid ? "也已单独验收付款" : "仍待结算"}。` : ""}`
  });
  if (s.thursdayDinner) cards.push({
    title: "雨里的晚饭",
    text: s.thursdayDinner === "delivery" ? "同一份7元餐食之外，你另付9元配送费。店员出餐、送餐者取餐并送达；你在宿舍等餐。" : s.thursdayDinner === "pickup" ? "你只支付7元餐费，店员备餐，你自己完成往返和领取；未购买配送服务。" : "你支付7元餐费，室友帮你带回；你按约整理他的截图。这是实际互助，没有发生9元配送交易。"
  });
  if (s.mobileChoice) cards.push({
    title: "手机上到底能不能用",
    text: s.mobileChoice === "component" ? "你支付29元购买现有布局组件，并实际花一小时适配内容和数据；作者提供列明功能与说明。" : s.mobileChoice === "self" ? `你选择自己修改，已完成${s.mobileHours}/3小时。${s.device === "repair" ? "使用本人电脑。" : "额外电脑时段由队友按约提供。"}` : "你没有购买29元组件，花一小时重排必要信息，保住手机查找与筛选；扩展布局暂缓。"
  });
  return cards;
}
function renderEnding() {
  const outcome = s.ending || "本周记录";
  const insight = ENDING_INSIGHTS[outcome];
  const paid = s.ledger.filter(item => item.delta < 0 && !item.label.includes("早餐") && !item.label.includes("午餐") && !item.label.includes("晚餐"));
  const rels = relationCards();
  const text = outcome === "午夜钟鸣" && s.uploaded && usesTaskRules() ? `23:59。文件已经发出，必要验收项仍未齐全。${taskProgress().rows.filter(row => row.value < row.max).map(row => row.label).join("、")}留在清单里；这次上传还没有完成全部约定。明天如何处理，需要再和相关的人商量。` : ENDINGS[outcome] || "";
  return `<div class="story-page"><div class="story-header"><div class="story-day"><span class="story-day-icon" aria-hidden="true">${ENDING_ICONS[outcome] || "📖"}</span> ${ENDING_CODES[outcome] ? `${ENDING_CODES[outcome]}结局` : "本局结局"} · ${DAYS[s.day]} ${s.time}</div><h1 class="result-title">${outcome}</h1><p class="result-copy">${text}</p></div>
    ${insight ? `<aside class="ending-insight" aria-label="结局回望"><p>${insight.text}</p>${knowledgeSource(insight)}</aside>` : ""}
    <section class="ending-actions" aria-label="本局结束后的选择"><p>这一周结束了。换个选择，会走到哪里？</p><div class="ending-buttons"><button class="primary-button" type="button" data-action="replay"><span aria-hidden="true">↻</span> 再来一局</button><button class="subtle-button" type="button" data-action="home"><span aria-hidden="true">⌂</span> 返回首页</button></div><small>新一局从周一和300元开始，已解锁成就会保留。</small></section>
    ${renderTaskPanel()}
    <section class="story-card"><p class="eyebrow">我的这一周${outcome === "停止响应" ? " · 截至中断时" : ""}</p>
      <div class="record-grid">
        <div class="record-card"><h3>账本</h3><p>实际余额 ${money(s.cash)}<br>已付餐费 ${money(s.foodSpent)}<br>本人委托实际收入 ${money(s.earnings)}<br>其他实际支出 ${money(-paid.reduce((n, item) => n + item.delta, 0))}${s.advanceUsed ? "<br>下周生活费已提前使用100元，下次少100元" : ""}</p></div>
        <div class="record-card"><h3>日程与身体</h3><p>当前疲劳 ${s.fatigue}% · 本局峰值 ${s.maxFatigue}%<br>课程基础功能 ${s.courseHours}/4 小时<br>最终版修正：${s.finalFix ? "已完成" : "未完成"}<br>最终版上传：${s.uploaded ? s.uploadTime : "未完成"}</p></div>
        <div class="record-card"><h3>自己的生活</h3><p>${s.personal.length ? s.personal.join("；") : "本局没有新增个人活动记录"}。${s.birthday === "full" ? "参加完整生日晚餐。" : s.birthday === "short" ? "短暂参加生日聚餐。" : s.birthday === "alone" ? "生日当晚未参加聚餐。" : ""}</p></div>
        <div class="record-card"><h3>本局成就</h3><p class="achievement-hint">点击成就查看触发条件</p><div class="pill-row">${s.achievements.length ? s.achievements.map(achievementButton).join("") : "<span class='pill'>暂无</span>"}</div></div>
      </div>
      <div class="divider"></div><p class="eyebrow">这一周联系了谁</p>
      <div class="record-grid">${rels.map(r => `<div class="record-card"><h3>${r.title}</h3><p>${r.text}</p></div>`).join("")}</div>
      <div class="divider"></div><p>这些卡片只汇总本局已发生的交易、工作与协作。结局不是对你的道德或理论理解评分。</p>
    </section>
    <div class="choices result-links"><button class="choice" type="button" data-action="theory"><span class="choice-title">进入课堂分析</span><span class="choice-detail">用本局经历讨论使用价值、商品交换与商品拜物教。</span></button><button class="choice" type="button" data-action="journal"><span class="choice-title">查看本局完整记录</span><span class="choice-detail">按发生顺序回看收支、劳动、休息与协作。</span></button><button class="choice" type="button" data-action="collection"><span class="choice-title">查看以往成就</span><span class="choice-detail">点击已解锁徽章，回看触发条件与相关知识点。</span></button></div>
  </div>`;
}
const THEORY = [
  {
    title: "这些东西满足了什么需要？",
    body: `<p>维修服务让电脑重新可用；商户网页让报名入口更容易找到；29元组件提供现有的手机布局。这些是具体的<strong>使用价值</strong>。游戏显示的150元、100元、29元是虚构交易中的价格。</p><p>马克思对商品价值的分析涉及社会必要劳动时间。玩家个人花了几小时，不能直接换算出价值；一笔订单的报价也不能单独测出商品的价值量。</p>`
  },
  {
    title: "订单把哪些人的劳动联系起来？",
    body: `<p>周一，你作为购买者看维修报价；周三，你或程越按约提供网页；周五，你又考虑购买别人制作的组件。不同人的工作通过交换发生联系。你能在账本看到功能、价格、交付和付款，也能在记录里找到谁做了什么。</p><p>在商品生产条件下，彼此独立的私人劳动通过交换取得社会联系，而劳动的社会性质表现为商品自身的属性、商品之间的关系。这是<strong>商品拜物教</strong>的核心问题。发现“背后有人劳动”只是入口，仍要解释这种表现形式来自怎样的社会关系。</p><p>本游戏是虚构案例，不能凭100元委托和三小时个人工作推算工资、剩余价值或剥削程度。</p>`
  },
  {
    title: "选择的条件怎样改变？",
    body: `<p>同样需要电脑，有付费维修、约定借用、使用公共设备三种安排；同一顿晚饭，有配送、自取和室友互助。它们改变可用的钱、时间、设备和人与人的约定。休息、朋友与个人兴趣也真实占用这七天。</p><p>比较路线时，要说明哪些条件随选择改变，不能把整局差异都归因于一个按钮。一次校园互助可以改变具体安排，却不能凭此宣称社会层面的矛盾已解决。</p><p>最后可以追问：在现有条件下，怎样为学习、交往、休息和个人发展保留空间？</p>`
  }
];
function renderTheory() {
  const page = THEORY[s.theoryPage] || THEORY[0];
  return `<div class="theory-page"><div class="story-day">课堂分析 · 第 ${s.theoryPage + 1}/3 页</div><h1 class="story-title">${page.title}</h1>
    <div class="theory-nav">${THEORY.map((t, i) => `<button type="button" class="${i === s.theoryPage ? "active" : ""}" data-theory="${i}">${i + 1} · ${t.title}</button>`).join("")}</div>
    <section class="story-card">${page.body}</section>
    <p class="hero-note">概念表述以课程教材为准。游戏中的人物、价格和课程安排均为虚构设计。</p>
    <div class="choices"><button class="choice" type="button" data-action="ending"><span class="choice-title">返回本局结局与记录</span></button></div>
  </div>`;
}
function renderSidebar() {
  const remaining = s.cash - reserve();
  const task = taskProgress();
  $("quick-status").classList.toggle("hidden", ["intro", "theory"].includes(s.stage));
  $("quick-status").innerHTML = `<span>余额 <b>${money(s.cash)}</b></span><span class="${s.fatigue >= 75 ? "status-risk" : ""}">疲劳 <b>${s.fatigue}%</b></span><span>进度 <b>${task.total}%</b><span aria-hidden="true"> ›</span></span>`;
  $("hud").innerHTML = `<div class="hud-grid">
    <div class="stat"><span class="stat-label"><span aria-hidden="true">💰</span> 实际余额</span><span class="stat-value">${money(s.cash)}</span></div>
    <div class="stat"><span class="stat-label">餐费预留之外</span><span class="stat-value small ${remaining < 0 ? "warn" : ""}">${remaining >= 0 ? money(remaining) : `缺 ${money(-remaining)}`}</span></div>
    <div class="stat wide"><span class="stat-label"><span aria-hidden="true">🔋</span> 疲劳 · 达到100%将立即中断</span><span class="stat-value ${s.fatigue >= 75 ? "warn" : ""}">${s.fatigue}%</span><div class="fatigue-track"><div class="fatigue-fill ${s.fatigue >= 75 ? "high" : ""}" style="width:${s.fatigue}%"></div></div></div>
  </div><p class="fatigue-rule-note">完整睡眠 −${FATIGUE_RULES.fullSleepRecovery} · 一小时休息 −${FATIGUE_RULES.restRecovery} · 低电量 ${FATIGUE_RULES.lowBattery}%</p>`;
  $("schedule").innerHTML = `<div class="aside-section"><h2 class="aside-heading">日程与进度</h2>
    <div class="aside-line"><span>当前</span><strong>${s.stage === "intro" ? "周一开始前" : `${DAYS[s.day]} ${s.time}`}</strong></div>
    <div class="aside-line"><span>课程基础功能</span><strong>${s.courseHours}/4 小时</strong></div>
    <div class="aside-line"><span>任务进度</span><strong>${task.total}%</strong></div>
    <button type="button" class="subtle-button" data-action="tasks">查看任务进度与验收清单</button>
    <div class="aside-line"><span>主要设备</span><strong>${deviceName()}</strong></div>
    <div class="aside-line"><span>商户委托</span><strong>${commissionName()}</strong></div>
    <div class="aside-line"><span>最终提交</span><strong>周日 23:59</strong></div>
    <div class="aside-line"><span>未来普通餐费预留</span><strong>${money(reserve())}</strong></div>
    <button type="button" class="subtle-button" data-action="journal">查看本局完整记录</button>
  </div>`;
  $("ledger").innerHTML = `<div class="aside-section"><h2 class="aside-heading">最近实际收支</h2><ul class="ledger-list">${s.ledger.length ? s.ledger.slice(-7).reverse().map(item => `<li><span>${DAYS[item.day]} ${item.label}</span><b class="${item.delta > 0 ? "income" : ""}">${item.delta > 0 ? "+" : "−"}${money(Math.abs(item.delta))}</b></li>`).join("") : "<li>尚无实际收支</li>"}</ul><p class="hero-note">预留只提醒未来餐费，不从余额再次扣除。</p></div>`;
  $("ledger").insertAdjacentHTML("beforeend", marxNote("sidebar-note"));
  $("advance-button").classList.toggle("hidden", s.day < 3 || s.advanceUsed || ["intro", "ending", "theory"].includes(s.stage));
  $("day-chip").textContent = s.stage === "intro" ? "七天的故事" : s.stage === "ending" ? "本周结束" : s.stage === "theory" ? "课堂分析" : `${DAYS[s.day]} · 第 ${s.day + 1}/7 天`;
}
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const MOTION = { sceneExit: 250, day: 1350, ending: 1700, overlayExit: 440 };
let renderedView = null;
let transitionTimer = null;
let inTransition = false;
let overlayExiting = false;

function focusScene() {
  const heading = $("main").querySelector("h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
}
function draw(animate = false) {
  const main = $("main");
  document.body.classList.toggle("is-intro", s.stage === "intro");
  main.innerHTML = s.stage === "intro" ? renderIntro() : s.stage === "ending" ? renderEnding() : s.stage === "theory" ? renderTheory() : renderStory(scene());
  if (animate) main.firstElementChild?.classList.add("scene-enter");
  renderSidebar();
  renderedView = { stage: s.stage, day: s.day, theoryPage: s.theoryPage };
  save();
  window.scrollTo({ top: 0, behavior: "auto" });
}
function finishOverlay() {
  if (!inTransition || overlayExiting) return;
  overlayExiting = true;
  clearTimeout(transitionTimer);
  const overlay = $("scene-transition");
  overlay.classList.remove("is-visible");
  transitionTimer = setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-transitioning");
    draw(true);
    inTransition = false;
    overlayExiting = false;
    $("app-shell").inert = false;
    $("app-shell").removeAttribute("inert");
    focusScene();
  }, MOTION.overlayExit);
}
function showOverlay(kind) {
  const overlay = $("scene-transition");
  const isEnding = kind === "ending";
  const motif = DAY_MOTIFS[s.day];
  const duration = isEnding ? MOTION.ending : MOTION.day;
  $("transition-symbol").textContent = isEnding ? (ENDING_ICONS[s.ending] || "📖") : motif.icon;
  $("transition-kicker").textContent = isEnding ? "本周结算" : `第 ${s.day + 1} / 7 天`;
  $("transition-title").textContent = isEnding ? "这一周，到这里了" : DAYS[s.day];
  $("transition-detail").textContent = isEnding ? "正在整理这一路的选择与记录" : motif.line;
  overlay.dataset.kind = kind;
  overlay.style.setProperty("--progress-duration", `${duration}ms`);
  overlay.classList.remove("hidden", "is-visible");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-transitioning");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (inTransition && !overlayExiting) {
      overlay.classList.add("is-visible");
      $("skip-transition").focus({ preventScroll: true });
    }
  }));
  transitionTimer = setTimeout(finishOverlay, duration);
}
function render() {
  if (inTransition) return;
  const previous = renderedView;
  const changed = previous && (previous.stage !== s.stage || previous.day !== s.day || previous.theoryPage !== s.theoryPage);
  if (!changed || reducedMotion.matches) {
    draw();
    if (changed) focusScene();
    return;
  }
  save();
  inTransition = true;
  $("app-shell").inert = true;
  $("app-shell").setAttribute("inert", "");
  if (s.stage === "ending" && previous.stage !== "ending") { showOverlay("ending"); return; }
  if (s.stage !== "intro" && (s.day !== previous.day || previous.stage === "intro")) { showOverlay("day"); return; }
  $("main").classList.add("scene-leaving");
  transitionTimer = setTimeout(() => {
    $("main").classList.remove("scene-leaving");
    draw(true);
    inTransition = false;
    $("app-shell").inert = false;
    $("app-shell").removeAttribute("inert");
    focusScene();
  }, MOTION.sceneExit);
}
function selectChoice(id) {
  s.notice = "";
  if (id === "advance") { advanceCash(); return; }
  switch (s.stage) {
    case "intro": if (id === "start") startMonday(); break;
    case "monDevice": chooseMondayDevice(id); break;
    case "monEvening": chooseMondayHour(id); break;
    case "tueGift": chooseGift(id); break;
    case "tueDinner": chooseTuesdayDinner(id); break;
    case "wedCommission": chooseCommission(id); break;
    case "wedSwap": chooseSwap(id); break;
    case "thuCopy": chooseCopy(id); break;
    case "thuDinner": chooseThursdayDinner(id); break;
    case "friDinner": if (id === "pay" && payMeal(4, "晚餐", 7, "friAfterDinner")) friAfterDinner(); break;
    case "friMobile": chooseMobile(id); break;
    case "satPersonal": chooseSaturdayPersonal(id); break;
    case "satCoord": chooseSaturdayCoord(id); break;
    case "sunDevice": chooseSundayDevice(id); break;
    case "sunPersonal": chooseSundayPersonal(id); break;
    case "sunExecute": chooseSundayExecute(id); break;
  }
  render();
}
function openDialog(title, body) {
  const dialog = $("detail-dialog");
  const wasOpen = dialog.open;
  $("dialog-content").innerHTML = `<h2 id="dialog-title" tabindex="-1">${title}</h2>${body}`;
  if (!wasOpen) dialog.showModal();
  dialog.scrollTop = 0;
  if (wasOpen) $("dialog-title").focus({ preventScroll: true });
}
function achievementButton(name) {
  const item = ACHIEVEMENTS.find(a => a.name === name);
  return item ? `<button class="pill achievement-pill" type="button" data-achievement="${item.name}" aria-label="${item.name}，查看触发条件">${item.icon} ${item.name}</button>` : "";
}
function openAchievements() {
  const unlocked = collectedAchievements();
  const cards = unlocked.map(item => `<button class="achievement-card" type="button" data-achievement="${item.name}" aria-label="${item.name}，查看触发条件"><span class="achievement-icon" aria-hidden="true">${item.icon}</span><span class="achievement-card-copy"><strong>${item.name}</strong><small>已解锁</small></span><span class="achievement-arrow" aria-hidden="true">›</span></button>`).join("");
  openDialog("以往成就", `<div class="collection-summary"><span>已解锁 ${unlocked.length} / ${ACHIEVEMENTS.length}</span><p class="achievement-hint">点击成就查看触发条件</p></div>${unlocked.length ? `<div class="achievement-list">${cards}</div>` : `<div class="collection-empty"><span aria-hidden="true">🏅</span><p>还没有解锁成就。</p><small>开始这一周，留下自己的第一枚徽章。</small></div>`}<p class="hero-note">成就累计保存在当前浏览器，再来一局仍会保留。</p>`);
}
function openAchievement(name) {
  const item = ACHIEVEMENTS.find(a => a.name === name);
  if (!item || !achievementCollection.has(name)) return;
  openDialog(`${item.icon} ${item.name}`, `<p class="achievement-unlocked">已解锁</p>${item.description ? `<p class="hero-note">${item.description}</p>` : ""}<div class="achievement-detail"><p class="achievement-condition"><strong>触发条件</strong><br>${item.condition}</p><p class="achievement-insight">${item.insight}${knowledgeSource(item)}</p>${name === "穿透迷雾" ? `<details class="task-checklist"><summary>重读完整解读</summary>${mistExplanationMarkup()}</details>` : ""}</div><button class="subtle-button" type="button" data-action="collection">返回以往成就</button>`);
}
function restartRun(startImmediately = false) {
  if (inTransition) return;
  const active = !["intro", "ending", "theory"].includes(s.stage);
  if (active && !window.confirm("重新开始会清除本局进度；已解锁的成就收藏仍会保留。确定吗？")) return;
  s.achievements.forEach(name => achievementCollection.add(name));
  saveCollection();
  s = DEFAULT_STATE();
  $("detail-dialog").close();
  closeSidebar();
  if (startImmediately) startMonday();
  render();
}
function openJournal() {
  const rows = s.journal.map(item => `<div class="message"><span class="message-source">${DAYS[item.day]} ${item.time || ""} · ${item.kind}</span><p>${item.text}</p></div>`).join("");
  openDialog("本局发生过什么", rows || "<p>故事还没有开始。</p>");
}
function mistExplanationMarkup() {
  const source = ACHIEVEMENTS.find(item => item.name === "穿透迷雾");
  return `<section aria-label="穿透迷雾完整解读">
    <h3 class="aside-heading">社会关系怎样取得物的形式</h3>
    <p>把三份记录接起来，可以看见一条关系：<strong>分别安排的劳动 → 通过劳动成果的交换发生联系 → 以商品、货币及其数量关系表现出来。</strong></p>
    <p>制作者熟悉程序，商户熟悉活动，维修者熟悉电脑故障。彼此的活动并没有因此直接组成一张共同计划；交易把这些分别进行的劳动连接起来。</p>
    <p>在商品生产中，生产者之间劳动的社会联系，通过劳动产品之间的价值关系来表现。于是，产品仿佛天然就具有支配交换的价值属性；由人们的生产关系形成的社会性质，取得了物的属性和物之间关系的外观。</p>
    <p>这就是<strong>商品拜物教</strong>所要揭示的机制。即使已经知道每位制作者是谁，只要这种生产和交换方式继续存在，人们仍要通过商品与货币实现这部分社会联系。认识这种机制，并不会使它自动消失。</p>
    <h3 class="aside-heading">把课程小组放到旁边看一看</h3>
    <p>你们可以围绕共同目标直接商量谁写代码、谁做核验。在这项内部协作中，每次交接不必先把各自成果卖给对方。这个有限的对照，让人看见劳动联系能够采取不同形式；一个课程小组还不能等同于整个社会的生产制度。</p>
    <p><strong>账本记录了钱与物怎样转手。现在，你也能追问：这些数额怎样连接了分别劳动的人，又怎样反过来影响他们的安排？</strong></p>
    <p class="achievement-insight">以上为结合游戏情境的原理解释。${knowledgeSource(source)}</p>
  </section>`;
}
function openRecord(index) {
  if (s.stage !== "friMobile" || !Number.isInteger(index) || index < 0 || index > 2 || (index > 0 && !s.hiddenReads[index - 1])) return;
  s.hiddenReads[index] = true;
  const maker = s.commission === "decline" ? "程越" : "你";
  const workRecord = s.commission === "decline"
    ? "程越分享了他的工作便签：确认要改的地方、安排电脑时段，再制作和核对页面。这些工作由他按自己的约定完成；他的交付、验收和收入进入他的经历。你读到记录，也没有因此获得他的报酬。"
    : s.commission === "small"
    ? "你更新了约定的文字与链接，也写清沿用旧布局的限制。一小时的工作按范围完成，聊天中的40元约定仍要经过后续验收与付款才能进入账本。"
    : "你的日志留下三小时工作：确认资料与范围、制作入口、调整与核对。聊天中的100元约定，没有随着每次按下保存键，自动变成余额。";
  const firstSource = { source: "《资本论》第一卷·第二章 交换过程", url: "https://www.marxists.org/chinese/marx/capital/02.htm" };
  const secondSource = { source: "《资本论》第一卷·第一章 商品", url: "https://www.marxists.org/chinese/marx/capital/01.htm" };
  const thirdSource = { source: "《资本论》第一卷·第三章第二、三节 商品的形态变化与支付手段", url: "https://www.marxists.org/chinese/marx/capital/03.htm" };
  const blocks = [
    ["商户的手机", `<p class="achievement-unlocked">记录 1 / 3 · 用途与交换</p>
      <p>商户拿起手机，点开活动，找到时间、地点，最后试了一次报名入口。“群里的人能直接找到这里，这个页面就能用。”聊天上方还停着确认用途、工作范围、交付时间与报酬的消息。</p>
      <p>同一个页面接入两份不同的安排：商户用它组织活动；${maker}完成约定，并通过交付取得报酬。</p>
      <h3 class="aside-heading">沿着记录再看一层</h3>
      <p>从页面满足的具体需要，可以看见它的<strong>使用价值</strong>；从双方约定交付和报酬，可以追踪这份成果怎样进入交换关系。技术功能、约定价格和双方的需要，要分别考察。</p>
      <p class="achievement-insight">${knowledgeSource(firstSource)}</p>`],
    ["制作者的屏幕", `<p class="achievement-unlocked">记录 2 / 3 · 劳动怎样取得社会联系</p>
      <p>${workRecord}</p><p>时间已经花出去，为什么还需要交换另一端的确认？</p>
      <h3 class="aside-heading">私人劳动与社会劳动的联系</h3>
      <p>在商品生产条件下，生产者分别安排自己的劳动，又依赖别人的劳动满足需要。各自劳动能否适应社会需要，要通过交换关系受到检验。这里的验收与付款提供了观察入口；单个客户的个人好恶不能直接充当全社会的尺度。</p>
      <p>个人耗时不能直接等同于<strong>社会必要劳动时间</strong>；把100元除以三小时，也不能直接算出商品价值量。价格还可能偏离价值。</p>
      <p class="achievement-insight">${knowledgeSource(secondSource)} <a href="https://www.marxists.org/chinese/marx/capital/03.htm" target="_blank" rel="noopener noreferrer">另见第三章 货币或商品流通</a></p>`],
    ["17:30的验收", `<p class="achievement-unlocked">记录 3 / 3 · 货币把什么接了起来</p>
      <p>17:30，商户按事先确认的用途检查页面。18:00，转账实际到达${s.commission === "decline" ? "程越的账户；你看到的是他分享的说明，报酬没有进入你的余额" : "你的账户；网页报酬进入实际余额"}。</p>
      <p>这笔报酬现在可以用于之后的餐食、工具或其他支出。17:30已经支付的晚饭，仍须由当时的实际余额承担，18:00的转账不能倒填先前的账。</p>
      <p>网页报酬、餐费、维修报价、组件价格排在手机里。它们背后是不同人的活动，账本却把它们都写成可以加减的货币数额。</p>
      <h3 class="aside-heading">商品—货币—商品</h3>
      <p>劳动成果转为货币，再由货币取得其他产品或服务，是理解这条联系的入口。劳动完成、成果依约被接受和实际收到货币，需要区分；延期付款涉及货币的<strong>支付手段</strong>职能。18点到账，并不意味着价值在这一刻才被创造。</p>
      <p class="achievement-insight">${knowledgeSource(thirdSource)}</p>`]
  ];
  if (s.hiddenReads.every(Boolean)) unlock("穿透迷雾");
  render();
  openDialog(blocks[index][0], `${blocks[index][1]}${index === 2 && s.hiddenReads.every(Boolean) ? `<div class="divider"></div><p class="achievement-unlocked">🔎 穿透迷雾 · 已解锁</p>${mistExplanationMarkup()}` : ""}<button class="subtle-button" type="button" data-action="close-dialog">返回游戏</button>`);
}
function openSidebar() {
  $("sidebar").classList.add("open"); $("overlay").classList.remove("hidden");
  $("sidebar").setAttribute("role", "dialog"); $("sidebar").setAttribute("aria-modal", "true");
  $("menu-button").setAttribute("aria-expanded", "true");
  $("main").inert = true; $("topbar").inert = true; $("quick-status").inert = true;
  ["main", "topbar", "quick-status"].forEach(id => $(id).setAttribute("inert", ""));
  document.body.classList.add("is-sidebar-open"); $("close-sidebar").focus();
}
function closeSidebar(returnFocus = false) {
  $("sidebar").classList.remove("open"); $("overlay").classList.add("hidden");
  $("sidebar").removeAttribute("role"); $("sidebar").removeAttribute("aria-modal");
  $("menu-button").setAttribute("aria-expanded", "false");
  $("main").inert = false; $("topbar").inert = false; $("quick-status").inert = false;
  ["main", "topbar", "quick-status"].forEach(id => $(id).removeAttribute("inert"));
  document.body.classList.remove("is-sidebar-open");
  if (returnFocus) $("menu-button").focus();
}
document.addEventListener("click", event => {
  if (inTransition) return;
  const choice = event.target.closest("[data-choice]");
  if (choice && !choice.disabled) { selectChoice(choice.dataset.choice); closeSidebar(); return; }
  const record = event.target.closest("[data-record]");
  if (record && !record.disabled) { openRecord(Number(record.dataset.record)); return; }
  const achievement = event.target.closest("[data-achievement]");
  if (achievement) { openAchievement(achievement.dataset.achievement); return; }
  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "journal") openJournal();
    if (action.dataset.action === "collection") openAchievements();
    if (action.dataset.action === "tasks") openTaskProgress();
    if (action.dataset.action === "close-dialog") $("detail-dialog").close();
    if (action.dataset.action === "home") restartRun();
    if (action.dataset.action === "replay") restartRun(true);
    if (action.dataset.action === "theory") { s.stage = "theory"; s.theoryPage = 0; render(); }
    if (action.dataset.action === "ending") { s.stage = "ending"; render(); }
    return;
  }
  const page = event.target.closest("[data-theory]");
  if (page) { s.theoryPage = Number(page.dataset.theory); render(); }
});
$("skip-transition").addEventListener("click", finishOverlay);
$("advance-button").addEventListener("click", () => { if (!inTransition) advanceCash(); });
$("restart-button").addEventListener("click", () => restartRun());
$("menu-button").addEventListener("click", openSidebar);
$("quick-status").addEventListener("click", openSidebar);
$("close-sidebar").addEventListener("click", () => closeSidebar(true));
$("overlay").addEventListener("click", () => closeSidebar(true));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && $("sidebar").classList.contains("open") && !$("detail-dialog").open) closeSidebar(true);
});
window.matchMedia("(min-width: 921px)").addEventListener("change", event => { if (event.matches) closeSidebar(); });
$("close-dialog").addEventListener("click", () => $("detail-dialog").close());
$("brand").addEventListener("click", event => { event.preventDefault(); if (!inTransition) render(); });
// Existing saves at the current threshold also receive any missing achievement.
if (s.fatigue >= FATIGUE_RULES.lowBattery && !s.achievements.includes("低电量")) unlock("低电量");
if (s.advanceUsed && s.ledger.some(item => item.delta === 100 && item.label === "家人提前转来下周生活费（下次少100元）") && !s.achievements.includes("下周见")) unlock("下周见");
render();
