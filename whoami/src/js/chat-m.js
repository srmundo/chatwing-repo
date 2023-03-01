let contMessages = document.getElementById("messages");
function ariaInputText() {
  let inputText = document.getElementById("input-message-enter");
  let btnAdd = document.getElementById("btn-addFile");
  let btnCredit = document.getElementById("btn-credit");
  let btnCamera = document.getElementById("btn-camera");
  let btnEmoji = document.getElementById("btn-emoji");
  let btnSend = document.getElementById("btn-send");
  let btnChange = document.getElementById("btn-change");
  console.log(inputText)

  inputText.addEventListener("focus", () => {
    btnCredit.style.display = "none";
    btnCamera.style.display = "none";
    btnAdd.style.left = "89%";
    if (inputText.value.length > 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        btnAdd.style.color = '#36D98D';
        btnAdd.style.textShadow = "0px 1px 5px rgba(0, 0, 0, 0.6)";
        inputText.rows = '30';
        inputText.style.height = '50px';
        contMessages.style.height = '85%';
    }
    if (inputText.value.length < 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        inputText.rows = '2';
        inputText.style.height = '27px';
        contMessages.style.height = '91%';
    }
  });
  inputText.addEventListener("keypress", (e) => {
    btnChange.className = "icon-send";
    if (inputText.value === "" || inputText.value.length === 0) {
      btnChange.className = "icon-mic";
    }
    if (inputText.value !== "" || inputText.value.length !== 0) {
      btnCredit.style.display = "none";
      btnCamera.style.display = "none";
      btnAdd.style.left = "89%";

    }
    if (inputText.value.length > 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        btnAdd.style.color = '#36D98D';
        btnAdd.style.textShadow = "0px 1px 5px rgba(0, 0, 0, 0.6)";
        inputText.rows = '30';
        inputText.style.height = '50px';
        contMessages.style.height = '85%';
    }
    if (inputText.value.length < 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        inputText.rows = '2';
        inputText.style.height = '27px';
        contMessages.style.height = '91%';
    }
  });
  inputText.addEventListener("keyup", () => {
    btnChange.className = "icon-send";
    if (inputText.value === "" || inputText.value.length === 0) {
      btnChange.className = "icon-mic";
    }
    if (inputText.value !== "" || inputText.value.length !== 0) {
      btnCredit.style.display = "none";
      btnCamera.style.display = "none";
      btnAdd.style.left = "89%";
    }
    if (inputText.value.length > 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        btnAdd.style.color = '#36D98D';
        btnAdd.style.textShadow = "0px 1px 5px rgba(0, 0, 0, 0.6)";
        inputText.rows = '30';
        inputText.style.height = '50px';
        contMessages.style.height = '85%';
    }
    if (inputText.value.length < 20) {
        btnCredit.style.display = "none";
        btnCamera.style.display = "none";
        btnAdd.style.left = "89%";
        inputText.rows = '2';
        inputText.style.height = '27px';
        contMessages.style.height = '91%';
        btnAdd.style.color = '#fff';
        btnAdd.style.textShadow = "none";
    }
  });
  contMessages.addEventListener("click", () => {
    btnCredit.style.display = "block";
    btnCamera.style.display = "block";
    btnAdd.style.left = "69%";
    btnChange.className = "icon-mic";
    if (inputText.value !== "" || inputText.value.length !== 0) {
      btnCredit.style.display = "none";
      btnCamera.style.display = "none";
      btnAdd.style.left = "89%";
      btnChange.className = "icon-send";
    }
    
  });
}

ariaInputText();
