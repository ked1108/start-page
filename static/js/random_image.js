ImageArray = new Array();
image[0] = "index.jpg";
image[1] = "index2.jpg";
image[2] = "index3.jpg";
image[3] = "index4.jpg";

function getRandomImage() {
  var num = Math.floor(Math.Random() * 4);
  var img = ImageArray[num];
  document.getElementById("randImage").setAttribute("src", img);
  console.log(img);
}
