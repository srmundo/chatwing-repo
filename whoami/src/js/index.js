function hiddenShow(
  elementForClick,
  elementForHS,
  elementOpt1 = null,
  elementOpt2 = null,
  elementOpt3 = null,
  elementOpt4 = null,
  elementOpt5 = null
) {
  let elementFC = document.getElementById(elementForClick);
  let elementFHS = document.getElementById(elementForHS);
  let elementopt1 = document.getElementById(elementOpt1);
  let elementopt2 = document.getElementById(elementOpt2);
  let elementopt3 = document.getElementById(elementOpt3);
  let elementopt4 = document.getElementById(elementOpt4);
  let elementopt5 = document.getElementById(elementOpt5);
  elementFC.addEventListener(
    "click",
    () => {
      elementFHS.style.display = "block";
    },
    false
  );
  elementopt1.addEventListener("click", () => {
    elementFHS.style.display = "none";
  });
  elementopt2.addEventListener("click", () => {
    elementFHS.style.display = "none";
  });
  elementopt3.addEventListener("click", () => {
    elementFHS.style.display = "none";
  });
  elementopt4.addEventListener("click", () => {
    elementFHS.style.display = "none";
  });
  elementopt5.addEventListener("click", () => {
    elementFHS.style.display = "none";
  });
}

hiddenShow(
  "btn-more-header",
  "more-opt-header",
  "main-index",
  "nav-index",
  "app-name",
  "iframe"
);
