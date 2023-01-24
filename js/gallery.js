// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {

	if(mCurrentIndex < mImages.length)
	{
		mCurrentIndex++;
	}

	else(mCurrentIndex = 0)
	document.getElementById('photo').src = mImages[mCurrentIndex].img;
var loc = document.getElementsByClassName('location');
loc[0].innerHTML = "Location: " + mImages[mCurrentIndex].location;
var des = document.getElementsByClassName('description');
des[0].innerHTML = "Description: " + mImages[mCurrentIndex].description;
var dt = document.getElementsByClassName('date');
dt[0].innerHTML = "Date: " + mImages[mCurrentIndex].date;

mLastFrameTime = 0;
mCurrentIndex +=1;
}

function toggleDetails()
{
	if($(".moreIndicator").hasClass("rot90"))
	{
		$(".moreIndicator").removeClass("rot90");
		$(".moreIndicator").addClass("rot270");
	}
	else{
		$(".moreIndicator").removeClass("rot270");
		$(".moreIndicator").addClass("rot90");
	}
	$(".details").slideToggle("slow","linear");
}

var mImages = [];

if(prevPhotoCount == true){

    if(mCurrentIndex <= 0){
        mCurrentIndex = (mImages.length - 1);
        console.log("Launched PrevPhoto 1");
        console.log(mCurrentIndex);
    }
    else{
        mCurrentIndex--;
        console.log("Launched PrevPhoto 2");
        console.log(mCurrentIndex);
    }

    prevPhotoCount = false;
    mLastFrameTime = 0;
    currentTime = 0;
}
else{

    if(mCurrentIndex >= (mImages.length - 1)){
        mCurrentIndex = 0;
        console.log(mCurrentIndex);
    }
    else{
        mCurrentIndex++;
        console.log(mCurrentIndex);
    }

    mLastFrameTime = 0;
    currentTime = 0;
}   


// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();


// Holds the retrived JSON information
var mJson;

var mUrl = "images.json";
function fetchJSON()
{
mRequest.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		mJson = JSON.parse(mRequest.responseText);
		iterateJSON(mJson);
	}
};
mRequest.open("GET", mUrl, true);
mRequest.send();
}
// Array holding GalleryImage objects (see below).


//each json object inside the js array

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later



//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {
$("#nextPhoto").position({
	my: "right bottom",
	at: "right bottom",
	of: "#nav"
});
});

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

function GalleryImage() { 
	let location = "";
	let description = "";
	let date = "";
	let img = "";
}


const urlParams = new URLSearchParams(window.location.search);

for (const [key, value] of urlParams) {
	console.log(`${key}:${value}`);
	mUrl = value;
}
if(mUrl == undefined)
{
	mUrl = 'images.json';
}


fetchJSON();

function iterateJSON(mJson){
for(x = 0; x<mJson.images.length; x++)
{
	mImages[x] = new GalleryImage();
	mImages[x].location = mJson.images[x].imgLocation;
	mImages[x].description = mJson.images[x].description;
	mImages[x].date = mJson.images[x].date;
	mImages[x].img = mJson.images[x].imgPath;
}
}

function rotatePosition(){
	var htmlObject = document.querySelector(".moreIndicator");

	if(htmlObject.classList.contains("rot90")== true){
		htmlObject.classList.remove("rot90");
		htmlObject.classList.add("rot270");

		console.log("2LAUNCH")
	}
}

function reveil(){
	$('.details').fadeToggle();
}

function nextPhoto(){
	swapPhoto();
}

var prevPhotoCount = false;

function prevPhoto(){
	prevPhotoCount = true;
	swapPhoto();
}

