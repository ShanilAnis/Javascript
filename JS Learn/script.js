// document.getElementById("count").innerText = 5;

let count = 0;
console.log(count)

function increment() {
  count += 1;
  console.log((document.getElementById("count").innerText = count));
}

let save = 0;

function save_function() {
  save = count;
  console.log((count ,document.getElementById("count").innerText = save));
  count = 0;

}
