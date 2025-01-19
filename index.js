const qr_input = document.querySelector("#qr-input");
const qr_image = document.querySelector("#qr-image");
const qr_button = document.querySelector("#qr-button");
qr_button.addEventListener("click", () => {
  const qrInput = qr_input.value;
  if (qrInput == "") {
    qr_input.placeholder = "Please Enter a valid URL";
  } else {
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`;
    qr_image.alt = `QR Code for ${qrInput}`;
  }
});
