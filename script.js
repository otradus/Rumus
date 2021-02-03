const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");
const x4 = document.getElementById("x4");

const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const y3 = document.getElementById("y3");
const y4 = document.getElementById("y4");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");

function calculateAll() {
  const hasilx1 = 0;
  const hasilx2 = Number(input2.value) - Number(input1.value);
  const hasilx3 = Number(input3.value) - Number(input1.value);
  const hasilx4 = Number(input4.value) - Number(input1.value);

  x1.textContent = hasilx1;
  x2.textContent = hasilx2;
  x3.textContent = hasilx3;
  x4.textContent = hasilx4;

  const hasily1 = -1 * -(hasilx2 + hasilx3 + hasilx4);
  const hasily2 = -(hasilx2 * 4 - hasily1);
  const hasily3 = -(hasilx3 * 4 - hasily1);
  const hasily4 = -(hasilx4 * 4 - hasily1);

  y1.textContent = hasily1;
  y2.textContent = hasily2;
  y3.textContent = hasily3;
  y4.textContent = hasily4;

  a1.textContent = hasily1 * 2;
  a2.textContent = hasily2 * 2;
  a3.textContent = hasily3 * 2;
  a4.textContent = hasily4 * 2;

  b1.textContent = hasily1 * 3;
  b2.textContent = hasily2 * 3;
  b3.textContent = hasily3 * 3;
  b4.textContent = hasily4 * 3;

  c1.textContent = hasily1 * 5;
  c2.textContent = hasily2 * 5;
  c3.textContent = hasily3 * 5;
  c4.textContent = hasily4 * 5;
}

input1.addEventListener("keydown", calculateAll);
input2.addEventListener("keydown", calculateAll);
input3.addEventListener("keydown", calculateAll);
input4.addEventListener("keydown", calculateAll);
