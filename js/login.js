const button = document.querySelector(".button");
const id = document.querySelector(".id");
const password = document.querySelector(".password");

button.onclick = function () {
  alert(`${id.value}님 안녕하세요!`);
};

password.addEventListener("keyup", function (e) {
  if (password.value.length > 0 && id.value.length > 0) {
    button.disabled = false;
    button.style.backgroundColor = "#0095F6";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.backgroundColor = "#B9DFFC";
    button.style.cursor = "default";
  }
});

id.addEventListener("keyup", function (e) {
  if (password.value.length > 0 && id.value.length > 0) {
    button.disabled = false;
    button.style.backgroundColor = "#0095F6";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.backgroundColor = "#B9DFFC";
    button.style.cursor = "default";
  }
});