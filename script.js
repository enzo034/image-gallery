var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

var imgGallery = document.getElementById("imgGallery");

let inputFile = document.getElementById("input-file");

function openFullImg(pic)
{
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg()
{
    fullImgBox.style.display = "none";
}

inputFile.onchange = function()
{
    let img = document.createElement("img");

    img.src = URL.createObjectURL(inputFile.files[0]);
    img.onclick = function() {
        openFullImg(this.src);
    };
    imgGallery.appendChild(img);
}