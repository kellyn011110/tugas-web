let popup = document.querySelector(".popup");
let masuk = document.querySelector(".btn-masuk");
let result = document.querySelector(".result");
let buttons = document.querySelector(".buttons");

if (masuk) {
  masuk.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

if (buttons) {
  buttons.addEventListener("click", function (event) {
    let tombol = event.target;

    if (tombol.className === "submit") {
      result.textContent = "Submit ditekan";
    }

    if (tombol.className === "cancel") {
      result.textContent = "Cancel ditekan";
    }
  });
}


function submitAction() {
  document.getElementById("message").innerText =
    "Terima kasih! Data berhasil dikirim 🐾";
  alert("Submit berhasil!");
}

function cancelAction() {
  document.getElementById("message").innerText =
    "Aksi dibatalkan.";
  alert("Cancel ditekan!");
