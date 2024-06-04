const input = document.getElementById("inp");
const btn = document.querySelector("button");
const select = document.getElementById("zorluk");
const p = document.getElementById("wrapper");

btn.disabled = true;
input.disabled = true;
btn.textContent = "Bir zorluk seç!";

let kacKere = 0;

let random;
select.addEventListener("change", (e) => {
  let selectValue = e.target.value;
  random = Math.round(Math.random() * selectValue);
  if (random != undefined) {
    btn.disabled = false;
    input.disabled = false;
    btn.textContent = "Tahmin Et!";
  }
  console.log(random);
});

input.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13){
        tahminEt()
    }
})

function tahminEt() {
  let value = input.value;
  kacKere++;
  if (kacKere < 4) {
    if (value == random) {
      p.innerHTML = `Doğru bildin. ${kacKere} denedin.`;
      p.style.color = "green";
      btn.disabled = true;
      input.disabled = true;
    } else if (value > select.value) {
      kacKere--;
      p.textContent = `Girebileceğiniz en büyük değer ${select.value} olmalı`;
      p.style.color = "red";
    } else if (value < random) {
      p.innerHTML = `Daha büyük bir sayı gir. ${3 - kacKere} hakkın kaldı.`;
      p.style.color = "red";
      input.value = "";
    } else if (value > random) {
      p.innerHTML = `Daha küçük bir sayı gir. ${3 - kacKere} hakkın kaldı.`;
      p.style.color = "red";
      input.value = "";
    } else {
      p.innerHTML = "Doğru bir veri girmediniz.";
    }
  }
  if (kacKere == 3 && value != random) {
    p.textContent = "Oyunu kaybettin";
    p.style.color = "red";
    btn.disabled = true;
    input.disabled = true;
  }
}
