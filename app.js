let pic = document.querySelectorAll("img");
function ghumao() {
  let random = Math.ceil(Math.random() * 6);
  switch (random) {
    case 1:
      pic[0].src = "Images/1.png";
      break;
    case 2:
      pic[0].src = "Images/2.png";
      break;
    case 3:
      pic[0].src = "Images/3.png";
      break;
    case 4:
      pic[0].src = "Images/4.png";
      break;
    case 5:
      pic[0].src = "Images/5.png";
      break;
    case 6:
      pic[0].src = "Images/6.png";
      break;
  }
}

