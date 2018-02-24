var imageCount = 1;
var imgTotal = 3;

function slideJs(img){
  var Image = document.getElementById("img");
  var checker = 1;
  imageCount = imageCount + img;
  if (imageCount > imgTotal) {
    imageCount = 1;
  }
  if(imageCount < checker){
    imageCount = imgTotal;
  }
  Image.src = "img/img"+imageCount+ ".jpg";
}

window.setInterval(function auto(){
  var Image = document.getElementById("img");
  imageCount = imageCount + 1;
  if (imageCount > imgTotal) {
    imageCount = 1;
  }
  if(imageCount < 1){
    imageCount = imgTotal;
  }
  Image.src = "img/img"+imageCount+ ".jpg";
},5000)
