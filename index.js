var imgBox = document.getElementById("image-box");
var qrImg = document.getElementById("qrImg");
var qrText = document.getElementById("qrText");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    imgBox.classList.remove("show-img");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 500);
  }
}
