const openBtn = document.getElementById("open");

const gift = document.getElementById("gift");

const intro = document.getElementById("intro");

const birthday = document.getElementById("birthday");

const message = document.getElementById("message");

const openSound = document.getElementById("openSound");

const birthdaySound = document.getElementById("birthdaySound");

const text = `

✨ یک روز خاص، برای یک آدم خاص ✨


امروز فقط یک روز معمولی نیست...

امروز شروع یک فصل جدید از داستان زندگی توئه 🌙


فصل ۱۸ سالگی؛

فصلی پر از رویاهای جدید،

تجربه‌های تازه،

انتخاب‌های بزرگ،

و لحظه‌هایی که قراره خودت بسازیشون ✨


امیدوارم توی این مسیر همیشه لبخند روی لبت باشه،

آدم‌های خوب کنارت بمونن،

و به چیزهایی برسی که ته دلت آرزوشون رو داری 🤍


امیدوارم روزهای سخت قوی‌ترت کنن،

روزهای خوب خوشحالت کنن،

و هر لحظه از این مسیر چیزی برای افتخار کردن بهت بده.


به خودت ایمان داشته باش...

چون بهترین قسمت‌های داستان تو هنوز نوشته نشده ✦


🎂 تولدت مبارک هیفا 🎂



`;

// باز شدن جعبه

openBtn.onclick = () => {
  gift.classList.add("open");

  openSound.play().catch(() => {});

  setTimeout(() => {
    intro.style.display = "none";

    birthday.classList.remove("hidden");

    birthdaySound.play().catch(() => {});

    typeText();

    createStars(40);
  }, 1500);
};

// تایپ متن

function typeText() {
  let i = 0;

  function typing() {
    if (i < text.length) {
      message.innerHTML += text.charAt(i);

      i++;

      setTimeout(typing, 45);
    }
  }

  typing();
}

// ستاره های جشن بعد باز شدن

function createStars(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      let star = document.createElement("div");

      star.className = "click-star";

      star.innerHTML = "✦";

      star.style.left = Math.random() * 100 + "%";

      star.style.top = Math.random() * 100 + "%";

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 1000);
    }, i * 50);
  }
}

// ستاره با کلیک روی صفحه

document.addEventListener("click", function (e) {
  let star = document.createElement("div");

  star.className = "click-star";

  star.innerHTML = "✦";

  star.style.left = e.clientX + "px";

  star.style.top = e.clientY + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
});
