var imageCount = 1;
var imgTotal = 5;

function slideJs(img){
  var Image = document.getElementById("img");
  imageCount = imageCount + img;
  Image.src = "img/img"+imageCount+ ".jpg";
}
