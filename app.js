let canavs = document.getElementById("canvas");
let btn = document.getElementById("button");

let randomColor = () => {
  let random = "0123456789ABCDEF";
  let preval = "#";

  for (i = 0; i < 6; i++) {
    preval = preval + random[Math.floor(Math.random() * 16)];
  }

  return preval;
};

let applyMethod = () => {
  let value = randomColor();
  //   console.log(value);
  canavs.style.backgroundColor = value;
};

btn.addEventListener("click", applyMethod);
