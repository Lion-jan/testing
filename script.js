
let count = 0;
let myAns;
let check = true;

let savollar = [
  {
    savol: "Bulardan qaysi futbol jamoasi?",
    javoblar: ["Ronaldo", "Real Madrid", "Venera", "Toshkent"],
    javob: "b"
  },

  {
    savol: "3*4=?",
    javoblar: ["12", "21", "0", "3"],
    javob: "a"
  },

  {
    savol: "3+4-3=?",
    javoblar: ["7", "5", "3", "4"],
    javob: "d"
  },

  {
    savol: "11-4=?",
    javoblar: ["4", "11", "7", "4"],
    javob: "c"
  },

  {
    savol: "12-12=?",
    javoblar: ["3", "10", "9", "0"],
    javob: "d"
  }
]

// bu joyda o'quvchilar bo'limidagi barcha ishlarni bajaruvchi kodlar saqlanadi 

function Students() {
  alert("test ishash: <Enter>\n testdan chiqish: <exit>")
  let start = new Date();
  if (check) {
    for (let i = 0; i < savollar.length; i++) {
      myAns = prompt(`${savollar[i].savol}\na)${savollar[i].javoblar[0]}\nb)${savollar[i].javoblar[1]}\nc)${savollar[i].javoblar[2]} \nd)${savollar[i].javoblar[3]}`);
      if (myAns[0].toLowerCase() == savollar[i].javob) { count++ }
      if (myAns.toLowerCase() == "exit") { check = false; break; }
      else continue
    }
  }
  let end = new Date();
  let Time = (Math.trunc((end - start) / 100) / 10)
  if (count == savollar.length) alert("siz hamma savolga to'g'ri javob berdingiz " + `ketgan vaqt ${Time} soniya`)
  else if (count == 0) alert("siz birorota ham savolga to'g'ri javob bera olmadingiz" + `ketgan vaqt ${Time} soniya`)
  else alert(`siz ${savollar.length} ta savoldan ${count}ta savolga to'g'ri javob berdingiz  \nketgan vaqt: ${Time} soniya`)
}


// bu joyda o'qituvchilar  bo'limini ishlatishda foydalanilgan kodlar saqlanadi 

function teachers() {
  let name = "Sherxon"
  let password = "venera"
  let check_login = false;
  while (!check_login) {
    let user_name = prompt("Foydalanuvchi nomini kiriting")
    let user_password = prompt("Parolni kiriting")
    if (!(user_name == name) || !(user_password == password)) { alert("foydalanuvchi nomi yoki parol hato. Qaytadan urunib ko'ring"); check_login = false }
    else {
      alert("siz dasturga muaffaqiyatli kirdingiz");
      check_login = true;

    }
  }

}





let login = prompt("1=> Talabalar uchun \n 2=> O'qituvchi uchun")

switch (login) {
  case "1": Students(); break;
  case "2": teachers(),
    room = prompt("kerakli bo'limni tanlang\n1=>savollarni ko'rish");
    ; break;
}

