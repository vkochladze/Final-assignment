let backgroundValue = 0;

leftIncrement = () => {
  backgroundValue -= 1;
  console.log(backgroundValue);
}

leftIncrementBG = () => {
  if (backgroundValue % 2 === 0) {
    document.getElementById("sectionOne").style.backgroundImage = 'url("img/bassCollection.jpeg")';
    console.log("background changes to bass")
} else {
  document.getElementById("sectionOne").style.backgroundImage = 'url(img/newCollection.png)';
  console.log("background changed to collection");
}
}

leftClick = () => {
  leftIncrement();
  leftIncrementBG();
}

rightClick = () => {
  rightIncrement();
  rightIncrementBG();
}

rightIncrementBG = () => {
  if (backgroundValue % 2 === 0) {
    document.getElementById("sectionOne").style.backgroundImage = 'url("img/bassCollection.jpeg")';
    console.log("background changes to bass")
} else {
  document.getElementById("sectionOne").style.backgroundImage = 'url(img/newCollection.png)';
  console.log("background changed to collection");
}
}

rightIncrement = () => {
  backgroundValue +=1;
  console.log(backgroundValue);
}

document.getElementById("leftSlideControl").addEventListener("click", leftClick);

document.getElementById("rightSlideControl").addEventListener("click", rightClick)