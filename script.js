const openBtn = document.getElementById("open");

const gift = document.getElementById("gift");

const intro = document.getElementById("intro");

const birthday = document.getElementById("birthday");

const message = document.getElementById("message");

const openSound = document.getElementById("openSound");

const birthdaySound = document.getElementById("birthdaySound");

const text = `

✨ یک روز خاص برای یک آدم خاص ✨


هیفا جان،

امروز شروع فصل جدیدی از زندگیته 🌙


امیدوارم ۱۸ سالگیت پر از

خاطره‌های قشنگ،

آدم‌های خوب،

و لحظه‌هایی باشه که همیشه یادت بمونه 🤍


به خودت ایمان داشته باش

چون بهترین روزهای زندگی هنوز در راهن ✦


🎂 تولدت مبارک هیفا 🎂


با عشق، اسما 🤍

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
