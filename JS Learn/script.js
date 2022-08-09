// document.getElementById("count").innerText = 5;

let count = 0;
console.log(count);

function increment() {
  count += 1;
  console.log((document.getElementById("count").innerText = count));
}

let save = 0;

function showResult() {
  result = save;
  document.getElementById("previousScore").innerText += result + "  -";
}

function save_function() {
  save = count;
  count = 0;
  showResult()
  console.log((count, (document.getElementById("count").innerText = save)));
}

function reset() {
  document.getElementById("count").innerText = 0 ;
  document.getElementById("previousScore").innerText = "" ;
  document.getElementById("score").innerText = 0;
}
