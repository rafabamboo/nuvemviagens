function rotateImages(svgId, images) {
  var currentIndex = 0;
  var svg = document.getElementById(svgId);
  var image = svg.querySelector("image");
  image.setAttribute("href", images[0]);

  setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    image.setAttribute("href", images[currentIndex]);
  }, 1000);
}

var images1 = ["img/logo-unimed.svg", "img/logo-bagy.svg", "img/logo-bandits.svg", "img/logo-californio.svg", "img/logo-clava.svg", "img/logo-coopershoes.svg"];
var images2 = ["img/logo-dooca.svg", "img/logo-escala.svg", "img/logo-kildare.svg", "img/logo-piccadilly.svg", "img/logo-polvo.svg", "img/logo-protarget.svg"];
var images3 = ["img/logo-pvc.svg", "img/logo-ramarim.svg", "img/logo-trinto.svg", "img/logo-unimed.svg", "img/logo-wdt.svg", "img/logo-bagy.svg"];

rotateImages("logo1", images1);
rotateImages("logo2", images2);
rotateImages("logo3", images3);