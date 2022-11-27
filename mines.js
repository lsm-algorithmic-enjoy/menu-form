const droptoggle = document.querySelector(".dropdown-toggle");
const dropmenu = document.querySelector(".dropdown-menu");
const nextbtn = document.querySelector(".next-button");

//토글버튼 클릭 -> 메뉴를 보여준다.
// 지점 클릭 -> 글자가 토글버튼에 추가, 메뉴 안보이게, disabled 해제

droptoggle.addEventListener("click", toggleClick);
dropmenu.addEventListener("click", itemClick);
droptoggle.addEventListener("blur", menuHide);

function toggleClick(event) {
  dropmenu.classList.toggle("show");
}

function itemClick(event) {
  droptoggle.textContent = event.target.textContent.trim();
  nextbtn.removeAttribute("disabled");
  droptoggle.classList.add("selected");
}

function menuHide(event) {
  dropmenu.classList.remove("show");
}
