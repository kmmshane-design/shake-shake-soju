const revealItems = document.querySelectorAll(".reveal");
const languageButtons = document.querySelectorAll(".language-option");
const translatedItems = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    brandLocation: "Taunggyi | Aye Thar Yar",
    navFlavors: "Flavors",
    navServe: "Serve",
    navContact: "Contact",
    navOrder: "Order",
    heroEyebrow: "Ready mixed fruit soju",
    heroTitle: "Shake Shake, then chill.",
    heroLede:
      "A bright, easy premium soju made for after-work tables, house parties, and relaxed nights with friends. Serve cold, add ice, and enjoy without extra mixer.",
    heroPrimary: "Explore Flavors",
    heroSecondary: "Order Now",
    legalNote: "Legal drinking age only. Drink responsibly.",
    captionSmall: "No mixer needed",
    captionStrong: "Just ice",
    marqueePrice: "Fair Price",
    marqueeMixer: "No Mixer Needed",
    marqueeCold: "Serve Cold",
    marqueeFlavors: "Five Fruit Flavors",
    marqueeChill: "Ready To Chill",
    marqueeMade: "Made In Aye Thar Yar",
    storyEyebrow: "The mood",
    storyTitle: "Commercial enough for the shelf. Easy enough for the night.",
    storyOne:
      "Shake Shake is a ready-to-drink fruit soju from Taunggyi (Aye Thar Yar), balanced for a smooth pour and a light social feel.",
    storyTwo:
      "The format keeps the serve simple: open the bottle, add ice if you like, shake gently, and pour. No extra mixer, no complicated bar setup.",
    serveEyebrow: "How to serve",
    serveTitle: "Cold bottle. All flavors. Easy pour.",
    stepOneTitle: "Chill",
    stepOneText: "Keep every flavor cold for the crispest fruit taste.",
    stepTwoTitle: "Shake",
    stepTwoText: "Gently shake before serving to wake up the fruit notes.",
    stepThreeTitle: "Pour",
    stepThreeText: "Serve straight or over ice. Mixer is optional.",
    flavorsEyebrow: "Five flavors",
    flavorsTitle: "Pick the color of the night.",
    grapeTitle: "Grape",
    grapeText: "Fresh, bright, and smooth.",
    strawberryTitle: "Strawberry",
    strawberryText: "Soft sweetness with a clean finish.",
    mangoTitle: "Mango",
    mangoText: "Juicy, mellow, and tropical.",
    tangerineTitle: "Tangerine",
    tangerineText: "Citrus snap for an easy chill.",
    pinkTitle: "Pink Lady",
    pinkText: "Soft, smooth, and easy to enjoy.",
    contactEyebrow: "Trade and orders",
    contactTitle: "Ready for customers, shops, and events.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    telegramLabel: "Telegram / Viber",
    orderFormLabel: "Order form",
    orderFormText: "Open enquiry form",
    orderEyebrow: "Scan to order",
    orderTitle: "Bring Shake Shake to your next table.",
    orderText: "Scan the QR code or open the form for retail, event, and general order enquiries.",
    orderButton: "Open Order Form",
  },
  my: {
    brandLocation: "တောင်ကြီး | အေးသာယာ",
    navFlavors: "အရသာများ",
    navServe: "သုံးဆောင်ရန်",
    navContact: "ဆက်သွယ်ရန်",
    navOrder: "မှာယူရန်",
    heroEyebrow: "အသီးအရသာ Ready Mixed Soju",
    heroTitle: "Shake Shake သောက်ပြီး Chill မယ်",
    heroLede:
      "အလုပ်ပြီးချိန်မှာ သူငယ်ချင်းတွေနဲ့ chill ဖို့၊ အိမ်ပါတီအတွက် လွယ်လွယ်ကူကူသောက်လို့ရတဲ့ premium soju ပါ၊ အေးအေးလေးထားပြီး ရေခဲထည့်သောက်ရုံနဲ့ mixer ထပ်မလိုပါဘူး။",
    heroPrimary: "အရသာများ ကြည့်ရန်",
    heroSecondary: "အခုမှာယူရန်",
    legalNote: "အသက်ပြည့်သူများအတွက်သာ။ တာဝန်ယူသောက်သုံးပါ။",
    captionSmall: "Mixer မလိုပါ",
    captionStrong: "ရေခဲပဲ လိုတယ်",
    marqueePrice: "တန်သောစျေးနှုန်း",
    marqueeMixer: "Mixer မလို",
    marqueeCold: "အေးအေးလေးသောက်",
    marqueeFlavors: "အသီးအရသာ ၅ မျိုး",
    marqueeChill: "Ready To Chill",
    marqueeMade: "အေးသာယာမှ ထုတ်လုပ်သည်",
    storyEyebrow: "Mood",
    storyTitle: "ဆိုင်မှာ တင်ရောင်းဖို့လည်း Premium Quality ဖြစ်ပြီး၊ Mixer ထပ်မလိုတဲ့အတွက် အလုပ်ရှုပ်သက်သာလို့ လွယ်လွယ်ကူကူ Chill နိုင်မယ်",
    storyOne:
      "Shake Shake က တောင်ကြီး (အေးသာယာ) မှ ထုတ်လုပ်တဲ့ ready-to-drink fruit soju ဖြစ်ပြီး smooth pour နဲ့ social mood အတွက် balance လုပ်ထားပါတယ်။",
    storyTwo:
      "ပုလင်းဖွင့်၊ ရေခဲထည့်ချင်ရင်ထည့်၊ နူးနူးညံ့ညံ့ shake လုပ်ပြီး သောက်ရုံပါပဲ။ Mixer ထပ်မလိုသလို bar setup လည်း မရှုပ်ပါဘူး။",
    serveEyebrow: "ဘယ်လို သုံးဆောင်မလဲ",
    serveTitle: "အေးမြတဲ့ ခံစားမှု၊ ပြည့်စုံတဲ့ အရသာ။ အလွယ်တကူ ဖွင့်ဖောက် သုံးဆောင်လိုက်ပါ။",
    stepOneTitle: "Chill",
    stepOneText: "အရသာပိုလန်းဖို့ ပုလင်းကို အေးအေးလေးထားပါ။",
    stepTwoTitle: "Shake",
    stepTwoText: "မသောက်ခင် Shake ပြီး Fruit Note ကို အသက်သွင်းလိုက်ပါ",
    stepThreeTitle: "Pour",
    stepThreeText: "ဒီအတိုင်းသောက်လည်းရ၊ ရေခဲနဲ့သောက်လည်းရပါတယ်။ Mixer မလိုပါဘူး။",
    flavorsEyebrow: "အရသာ ၅ မျိုး",
    flavorsTitle: "ဒီညအတွက် ကိုယ်ကြိုက်တဲ့ Flavors ကိုရွေးမယ်",
    grapeTitle: "စပျစ်",
    grapeText: "လန်းဆန်းပြီး smooth ဖြစ်တယ်။",
    strawberryTitle: "စတော်ဘယ်ရီ",
    strawberryText: "ချိုမွှေးပြီး finish သန့်တယ်။",
    mangoTitle: "သရက်",
    mangoText: "Juicy ဖြစ်ပြီး tropical mood ရတယ်။",
    tangerineTitle: "လိမ္မော်",
    tangerineText: "Citrus အရသာလေးနဲ့ chill လို့ကောင်းတယ်။",
    pinkTitle: "Pink Lady",
    pinkText: "နူးညံ့ပြီး သောက်လွယ်",
    contactEyebrow: "မှာယူလိုပါက",
    contactTitle: "သင့်ဆိုင်အတွက်ဖြစ်စေ၊ အမှတ်တရပွဲလေးတွေအတွက်ဖြစ်စေ အကောင်းဆုံးသောဝန်ဆောင်မှုဖြင့် အသင့်ရှိနေပါပြီ။",
    phoneLabel: "ဖုန်း",
    emailLabel: "Email",
    telegramLabel: "Telegram / Viber",
    orderFormLabel: "Order Form",
    orderFormText: "Enquiry form ဖွင့်ရန်",
    orderEyebrow: "Scan လုပ်ပြီးမှာယူရန်",
    orderTitle: "Shake Shake ကို သင့် table ဆီ ယူလာမယ်။",
    orderText: "Retail, event နှင့် general order enquiry အတွက် QR code ကို scan လုပ်ပါ သို့မဟုတ် form ကို ဖွင့်ပါ။",
    orderButton: "Order Form ဖွင့်ရန်",
  },
};

const setLanguage = (language) => {
  const copy = translations[language] || translations.en;

  translatedItems.forEach((item) => {
    const key = item.dataset.i18n;
    if (copy[key]) {
      item.textContent = copy[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language === "my" ? "my" : "en";
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    try {
      window.localStorage.setItem("shakeShakeLanguage", language);
    } catch (error) {
      // Language switching still works when storage is unavailable.
    }
    setLanguage(language);
  });
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let savedLanguage = "en";

try {
  savedLanguage = window.localStorage.getItem("shakeShakeLanguage") || "en";
} catch (error) {
  savedLanguage = "en";
}

setLanguage(requestedLanguage === "my" || requestedLanguage === "en" ? requestedLanguage : savedLanguage);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const heroStage = document.querySelector(".hero-stage");

if (heroStage) {
  heroStage.addEventListener("pointermove", (event) => {
    const bounds = heroStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    heroStage.style.transform = `perspective(1100px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg)`;
    heroStage.style.setProperty("--pointer-x", `${x * 1.2}rem`);
    heroStage.style.setProperty("--pointer-y", `${y * 1.2}rem`);
  });

  heroStage.addEventListener("pointerleave", () => {
    heroStage.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    heroStage.style.setProperty("--pointer-x", "0rem");
    heroStage.style.setProperty("--pointer-y", "0rem");
  });
}
