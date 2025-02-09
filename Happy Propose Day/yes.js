const febHolidays = [
    "i miss the days when you bring smile on my face",
    "talking to you feels like a therepy",
    "be kind to the world 🌎 😊",
    "ek bhi tum aur hazar bhi tum 🤩",
    "dukh me tum aur khushi me tum 🤨",
    "the moon is beautiful isn't it 😅",
    "i remembered you asked me to call me budhu 😂",
    "lets just hope",
    "apa fer milaange ",
    "now, i'm focused on you 😁",
    "My future wife🤭",
    "why not give a hit and trial",
    "No matter how far we are",
    "i cant thik any bad for you ",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "Main humesa tumhre sath hun 🤞✔",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
