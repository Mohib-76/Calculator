$("button").click(function() {
  if (this.innerText === "=") {
    let text3 = eval(document.querySelector(".text2").value);
    document.querySelector(".text1").value = document.querySelector(".text2").value;
    document.querySelector(".text2").value = text3;
  } else if (this.innerText === "C") {
    document.querySelector(".text1").value = "";
    document.querySelector(".text2").value = "";
  } else {
    document.querySelector(".text2").value += this.innerText;
  }
  this.slideUp();
});
$(document).keydown(function(event) {
  if (event.key === "Enter") {
    let text3 = eval(document.querySelector(".text2").value);
    document.querySelector(".text1").value = document.querySelector(".text2").value;
    document.querySelector(".text2").value = text3;
  }
});
