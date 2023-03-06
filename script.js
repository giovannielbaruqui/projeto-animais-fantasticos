function linha() {
  console.log('------------------------------------------------------------------------------');
}

// Mostre no console cada parágrado do site

const p = document.querySelectorAll('p');
p.forEach((p) => console.log(p));

linha();
// Mostre o texto dos parágrafos no console

p.forEach((p) => console.log(p.innerText));

linha();
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});
linha();
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
linha();
imgs.forEach(() => i++);

