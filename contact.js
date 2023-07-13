window.onload = function() {
    // Lấy các phần tử trên trang web
var myButton = document.getElementById("myButton");
var myPopup = document.getElementById("myPopup");
var closeButton = document.getElementById("myPopup").querySelector(".popup-content #closeButton");

// Thêm sự kiện click cho nút "Donate"
myButton.onclick = function() {
  myPopup.classList.add("show");
  document.body.classList.add("no-scroll");
}

// Ẩn popup khi nhấp chuột bên ngoài popup
myPopup.onclick = function(event) {
  if (event.target == myPopup) {
    myPopup.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
}

// Ẩn popup khi nhấp nút "close"
closeButton.onclick = function() {
  myPopup.classList.remove("show");
  document.body.classList.remove("no-scroll");
}
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Chế độ tối được thiết lập trên thiết bị
  document.body.classList.add('dark-mode');
} else {
  // Chế độ sáng được thiết lập trên thiết bị
  document.body.classList.remove('dark-mode');
}