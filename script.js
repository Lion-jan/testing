
let count = 0;
let myAns;
let check = true;

let savollar = [
  {
    savol:"Bulardan qaysi futbol jamoasi?",
    javoblar:["Ronaldo","Real Madrid","Venera","Toshkent"],
    javob:"b"
  },

  {
    savol:"3*4=?",
    javoblar:["12","21","0","3"],
    javob:"a"
  },

  {
    savol:"3+4-3=?",
    javoblar:["7","5","3","4"],
    javob:"d"
  },

  {
    savol:"11-4=?",
    javoblar:["4","11","7","4"],
    javob:"c"
  },

  {
    savol:"12-12=?",
    javoblar:["3","10","9","0"],
    javob:"d"
  }
]


function testing(){
  alert("test boshlanmoqda...")
  let start = new Date(); 
  if (check){
    for (let i=0; i<savollar.length;i++){
      myAns = prompt(`${savollar[i].savol}\na)${savollar[i].javoblar[0]}\nb)${savollar[i].javoblar[1]}\nc)${savollar[i].javoblar[2]} \nd)${savollar[i].javoblar[3]}`);
      if(myAns[0].toLowerCase()==savollar[i].javob) {count++}
      if (myAns.toLowerCase()=="exit") {check = false;break;}
      else continue
    }
  }
  let end = new Date();
  let Time = (Math.trunc((end - start)/100)/10)
if (count == savollar.length) alert("siz hamma savolga to'g'ri javob berdingiz "+ `ketgan vaqt ${Time} soniya`)
else if( count == 0) alert("siz birorota ham savolga to'g'ri javob bera olmadingiz"+ `ketgan vaqt ${Time} soniya`)
else alert(`siz ${savollar.length} ta savoldan ${count}ta savolga to'g'ri javob berdingiz ketgan vaqt ${Time} soniya`)
}



let login = prompt("1=> Talabalar uchun \n 2=> O'qituvchi uchun")

switch (login){
  case "1": testing(); break;
  case "2": console.log("bu joy hali ishlamayapti ");break;
}

