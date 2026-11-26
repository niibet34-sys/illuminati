/* ILLUMINATI — browser language localisation. The brand and Latin motto remain unchanged.
 * Translations are authored locally: no translation service, tracking or cookies. */
(() => {
  "use strict";
  const dict = {
    en: {
      mast: "The pursuit of knowledge",
      heading: "A Word Before You Write",
      lead: "The Order of the Illuminati cannot make you wealthy, famous, or powerful. It does not control the world, direct political affairs, or govern the entertainment industry.",
      follow: "If these are the promises you seek in joining us, you have come to the wrong place. We ask that you do not contact us for such reasons.",
      purpose: "Our purpose lies elsewhere: in the pursuit of knowledge, independent thought, and inner discipline.",
      footer: "KNOWLEDGE · DISCERNMENT · INNER LIGHT",
      meta: "ILLUMINATI — the pursuit of knowledge, independent thought and inner discipline. Lux intus, lux mundi."
    },
    ru: {
      mast: "Стремление к знанию",
      heading: "Прежде чем написать нам",
      lead: "Орден иллюминатов не может сделать вас богатыми, знаменитыми или наделить властью. Он не управляет миром, политикой или индустрией развлечений.",
      follow: "Если именно ради этого вы хотите вступить в наши ряды, вы обратились не по адресу. Просим не писать нам с подобными ожиданиями.",
      purpose: "Наша цель иная: стремление к знаниям, независимому мышлению и внутренней дисциплине.",
      footer: "ЗНАНИЕ · РАССУДИТЕЛЬНОСТЬ · ВНУТРЕННИЙ СВЕТ",
      meta: "ILLUMINATI — знания, независимое мышление и внутренняя дисциплина. Lux intus, lux mundi."
    },
    fr: {
      mast: "La quête du savoir",
      heading: "Avant de nous écrire",
      lead: "L’Ordre des Illuminati ne peut vous rendre riche, célèbre ou puissant. Il ne contrôle ni le monde, ni la politique, ni l’industrie du divertissement.",
      follow: "Si telles sont vos motivations pour nous rejoindre, vous ne vous adressez pas au bon endroit. Nous vous prions de ne pas nous contacter dans cet espoir.",
      purpose: "Notre vocation est ailleurs : dans la quête du savoir, la pensée indépendante et la discipline intérieure.",
      footer: "SAVOIR · DISCERNEMENT · LUMIÈRE INTÉRIEURE",
      meta: "ILLUMINATI — la quête du savoir, la pensée indépendante et la discipline intérieure. Lux intus, lux mundi."
    },
    de: {
      mast: "Das Streben nach Wissen",
      heading: "Bevor Sie uns schreiben",
      lead: "Der Orden der Illuminaten kann Sie weder reich noch berühmt oder mächtig machen. Er kontrolliert weder die Welt noch die Politik oder die Unterhaltungsindustrie.",
      follow: "Wenn Sie sich uns aus diesen Gründen anschließen möchten, sind Sie hier an der falschen Adresse. Wir bitten Sie, uns mit solchen Erwartungen nicht zu kontaktieren.",
      purpose: "Unser Ziel liegt anderswo: im Streben nach Wissen, unabhängigem Denken und innerer Disziplin.",
      footer: "WISSEN · URTEILSKRAFT · INNERES LICHT",
      meta: "ILLUMINATI — Wissen, unabhängiges Denken und innere Disziplin. Lux intus, lux mundi."
    },
    es: {
      mast: "La búsqueda del conocimiento",
      heading: "Antes de escribirnos",
      lead: "La Orden de los Illuminati no puede hacerte rico, famoso ni poderoso. No controla el mundo, la política ni la industria del entretenimiento.",
      follow: "Si esas son tus razones para querer unirte a nosotros, te has dirigido al lugar equivocado. Te pedimos que no nos contactes con tales expectativas.",
      purpose: "Nuestro propósito es otro: la búsqueda del conocimiento, el pensamiento independiente y la disciplina interior.",
      footer: "CONOCIMIENTO · DISCERNIMIENTO · LUZ INTERIOR",
      meta: "ILLUMINATI — conocimiento, pensamiento independiente y disciplina interior. Lux intus, lux mundi."
    },
    it: {
      mast: "La ricerca della conoscenza",
      heading: "Prima di scriverci",
      lead: "L’Ordine degli Illuminati non può rendervi ricchi, famosi o potenti. Non controlla il mondo, la politica né l’industria dell’intrattenimento.",
      follow: "Se sono queste le ragioni per cui desiderate unirvi a noi, vi siete rivolti al posto sbagliato. Vi chiediamo di non contattarci con simili aspettative.",
      purpose: "Il nostro scopo è un altro: la ricerca della conoscenza, il pensiero indipendente e la disciplina interiore.",
      footer: "CONOSCENZA · DISCERNIMENTO · LUCE INTERIORE",
      meta: "ILLUMINATI — conoscenza, pensiero indipendente e disciplina interiore. Lux intus, lux mundi."
    },
    pt: {
      mast: "A busca pelo conhecimento",
      heading: "Antes de nos escrever",
      lead: "A Ordem dos Illuminati não pode torná-lo rico, famoso ou poderoso. Não controla o mundo, a política nem a indústria do entretenimento.",
      follow: "Se esses são os motivos pelos quais deseja juntar-se a nós, procurou o lugar errado. Pedimos que não nos contacte com tais expectativas.",
      purpose: "O nosso propósito é outro: a busca pelo conhecimento, o pensamento independente e a disciplina interior.",
      footer: "CONHECIMENTO · DISCERNIMENTO · LUZ INTERIOR",
      meta: "ILLUMINATI — conhecimento, pensamento independente e disciplina interior. Lux intus, lux mundi."
    },
    uk: {
      mast: "Прагнення до знань",
      heading: "Перш ніж написати нам",
      lead: "Орден ілюмінатів не може зробити вас багатими, знаменитими чи наділити владою. Він не контролює світ, політику або індустрію розваг.",
      follow: "Якщо саме заради цього ви хочете приєднатися до нас, ви звернулися не за адресою. Просимо не писати нам із такими очікуваннями.",
      purpose: "Наша мета інша: прагнення до знань, незалежного мислення та внутрішньої дисципліни.",
      footer: "ЗНАННЯ · РОЗСУДЛИВІСТЬ · ВНУТРІШНЄ СВІТЛО",
      meta: "ILLUMINATI — знання, незалежне мислення та внутрішня дисципліна. Lux intus, lux mundi."
    },
    pl: {
      mast: "Dążenie do wiedzy",
      heading: "Zanim do nas napiszesz",
      lead: "Zakon Iluminatów nie uczyni cię bogatym, sławnym ani wpływowym. Nie kontroluje świata, polityki ani przemysłu rozrywkowego.",
      follow: "Jeśli właśnie z tych powodów chcesz do nas dołączyć, trafiłeś pod niewłaściwy adres. Prosimy, nie kontaktuj się z nami z takimi oczekiwaniami.",
      purpose: "Nasz cel jest inny: poszukiwanie wiedzy, niezależne myślenie i wewnętrzna dyscyplina.",
      footer: "WIEDZA · ROZTROPNOŚĆ · WEWNĘTRZNE ŚWIATŁO",
      meta: "ILLUMINATI — wiedza, niezależne myślenie i wewnętrzna dyscyplina. Lux intus, lux mundi."
    },
    nl: {
      mast: "Het streven naar kennis",
      heading: "Voordat u ons schrijft",
      lead: "De Orde der Illuminati kan u niet rijk, beroemd of machtig maken. Zij beheerst de wereld, de politiek of de entertainmentindustrie niet.",
      follow: "Als dat uw redenen zijn om zich bij ons aan te sluiten, bent u hier aan het verkeerde adres. Wij verzoeken u ons niet met dergelijke verwachtingen te benaderen.",
      purpose: "Ons doel ligt elders: in het zoeken naar kennis, onafhankelijk denken en innerlijke discipline.",
      footer: "KENNIS · ONDERSCHEIDINGSVERMOGEN · INNERLIJK LICHT",
      meta: "ILLUMINATI — kennis, onafhankelijk denken en innerlijke discipline. Lux intus, lux mundi."
    },
    tr: {
      mast: "Bilginin peşinde",
      heading: "Bize Yazmadan Önce",
      lead: "İlluminati Tarikatı sizi zengin, ünlü veya güçlü yapamaz. Dünyayı, siyaseti ya da eğlence sektörünü kontrol etmez.",
      follow: "Aramıza katılmak istemenizin nedeni buysa yanlış adrestesiniz. Bu tür beklentilerle bizimle iletişime geçmemenizi rica ederiz.",
      purpose: "Amacımız başkadır: bilgi arayışı, bağımsız düşünce ve iç disiplin.",
      footer: "BİLGİ · AYIRT ETME · İÇSEL IŞIK",
      meta: "ILLUMINATI — bilgi arayışı, bağımsız düşünce ve iç disiplin. Lux intus, lux mundi."
    },
    ar: {
      mast: "السعي إلى المعرفة",
      heading: "قبل أن تراسلنا",
      lead: "لا يستطيع تنظيم المتنورين أن يجعلك ثرياً أو مشهوراً أو صاحب سلطة. وهو لا يسيطر على العالم أو السياسة أو صناعة الترفيه.",
      follow: "إذا كانت هذه هي الأسباب التي تدفعك إلى الرغبة في الانضمام إلينا، فقد قصدت المكان الخطأ. نرجو ألا تتواصل معنا بناءً على مثل هذه التوقعات.",
      purpose: "غايتنا مختلفة: السعي إلى المعرفة والتفكير المستقل والانضباط الذاتي.",
      footer: "المعرفة · التمييز · النور الداخلي",
      meta: "ILLUMINATI — المعرفة والتفكير المستقل والانضباط الذاتي. Lux intus, lux mundi."
    },
    zh: {
      mast: "求知之路",
      heading: "致来信者",
      lead: "光照派不能使你富有、成名或获得权力。它不控制世界、政治，也不操纵娱乐产业。",
      follow: "如果你希望加入我们只是为了得到这些，那么你找错了地方。请不要抱着这样的期待与我们联系。",
      purpose: "我们的追求在于别处：知识、独立思考与内在自律。",
      footer: "知识 · 明辨 · 内在之光",
      meta: "ILLUMINATI — 追求知识、独立思考与内在自律。Lux intus, lux mundi."
    },
    zhHant: {
      mast: "求知之路",
      heading: "致來信者",
      lead: "光照派不能使你富有、成名或獲得權力。它不控制世界、政治，也不操縱娛樂產業。",
      follow: "如果你希望加入我們只是為了得到這些，那麼你找錯了地方。請不要抱著這樣的期待與我們聯繫。",
      purpose: "我們的追求在於別處：知識、獨立思考與內在自律。",
      footer: "知識 · 明辨 · 內在之光",
      meta: "ILLUMINATI — 追求知識、獨立思考與內在自律。Lux intus, lux mundi."
    },
    ja: {
      mast: "知識の探求",
      heading: "お問い合わせの前に",
      lead: "イルミナティの団体は、あなたを裕福にしたり、有名にしたり、権力を与えたりすることはできません。世界や政治、娯楽産業を支配しているわけでもありません。",
      follow: "それらを期待して参加を望むのであれば、ここはあなたの求める場所ではありません。そのような目的でのご連絡はお控えください。",
      purpose: "私たちが目指すものは、知識の探求、独立した思考、そして内面の規律です。",
      footer: "知識 · 洞察 · 内なる光",
      meta: "ILLUMINATI — 知識の探求、独立した思考、内面の規律。Lux intus, lux mundi."
    },
    ko: {
      mast: "지식의 탐구",
      heading: "문의하시기 전에",
      lead: "일루미나티 조직은 당신을 부유하게 하거나 유명하게 만들거나 권력을 부여할 수 없습니다. 세계나 정치, 연예 산업을 통제하지도 않습니다.",
      follow: "그러한 기대 때문에 우리와 함께하고자 한다면 이곳은 당신이 찾는 곳이 아닙니다. 그런 목적으로는 연락하지 말아 주십시오.",
      purpose: "우리의 목적은 지식의 탐구, 독립적인 사고, 그리고 내면의 규율에 있습니다.",
      footer: "지식 · 분별 · 내면의 빛",
      meta: "ILLUMINATI — 지식의 탐구, 독립적인 사고, 내면의 규율. Lux intus, lux mundi."
    },
    cs: {
      mast: "Hledání poznání",
      heading: "Než nám napíšete",
      lead: "Řád iluminátů vám nemůže zajistit bohatství, slávu ani moc. Neovládá svět, politiku ani zábavní průmysl.",
      follow: "Pokud se k nám chcete připojit právě z těchto důvodů, jste na nesprávném místě. Prosíme, s takovými očekáváními nás nekontaktujte.",
      purpose: "Naším cílem je něco jiného: hledání poznání, nezávislé myšlení a vnitřní disciplína.",
      footer: "POZNÁNÍ · ROZVAHA · VNITŘNÍ SVĚTLO",
      meta: "ILLUMINATI — poznání, nezávislé myšlení a vnitřní disciplína. Lux intus, lux mundi."
    },
    ro: {
      mast: "Căutarea cunoașterii",
      heading: "Înainte să ne scrieți",
      lead: "Ordinul Illuminati nu vă poate face bogați, celebri sau puternici. Nu controlează lumea, politica sau industria divertismentului.",
      follow: "Dacă acestea sunt motivele pentru care doriți să ni vă alăturați, ați ajuns în locul nepotrivit. Vă rugăm să nu ne contactați cu asemenea așteptări.",
      purpose: "Scopul nostru este altul: căutarea cunoașterii, gândirea independentă și disciplina interioară.",
      footer: "CUNOAȘTERE · DISCERNĂMÂNT · LUMINĂ INTERIOARĂ",
      meta: "ILLUMINATI — cunoaștere, gândire independentă și disciplină interioară. Lux intus, lux mundi."
    }
  };

  function normalize(value) {
    if (!value) return null;
    const language = String(value).trim().replace(/_/g, "-").toLowerCase();
    if (/^zh-(tw|hk|mo|hant)(-|$)/.test(language)) return "zhHant";
    if (/^zh(-|$)/.test(language)) return "zh";
    const base = language.split("-")[0];
    return Object.prototype.hasOwnProperty.call(dict, base) ? base : null;
  }

  const params = new URLSearchParams(window.location.search);
  const forced = normalize(params.get("lang"));
  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];
  const locale = forced || browserLanguages.map(normalize).find(Boolean) || "en";
  const values = dict[locale];
  document.documentElement.lang = locale === "zhHant" ? "zh-Hant" : locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (values[key]) node.textContent = values[key];
  });
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", values.meta);
  const socialDescription = document.querySelector('meta[property="og:description"]');
  if (socialDescription) socialDescription.setAttribute("content", values.meta);
})();
