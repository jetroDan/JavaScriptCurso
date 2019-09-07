
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/image_one.jpg') {
      miImage.setAttribute('src','images/imege_two.jpg');
    } else {
      miImage.setAttribute('src', 'images/image_one.jpg');
    }
}