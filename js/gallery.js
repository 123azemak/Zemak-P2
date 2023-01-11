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
	const imageHTML = document.getElementById('photo').src;
	imageHTML.src = mImages[mCurrentIndex].img;
	if(mCurrentIndex < 12){mCurrentIndex++} else
	{mCurrentIndex = 0};
	// if(k < path3.length - 1){k++;} else
	//Add code here to access the #slideShow element.
	//Access the img element and replace its source
	//with a new image from your images array which is loaded 
	//from the JSON string
	console.log('swap photo');
}
var mImages = [];
// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

// Holds the retrived JSON information
var mJson;

var mUrl = 'images.json';

mRequest.onreadystatechange = function(){
	if(this.ready == 4 && this.status == 200){
		mJson = JSON.parse(mRequest.responseText);
		iterateJSON(mJson);
	}
};
mRequest.open("GET", mUrl, true);
mRequest.send();

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
	
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
	
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

function iterateJSON(){
for(const currentIndex in mJson.images){
	mImages[curretIndex] = new GalleryImage();
	mImages[curretIndex].location = mJson.images[currentIndex].imgLocation;
	mImages[curretIndex].description = mJson.images[currentIndex].description;
	mImages[curretIndex].date = mJson.images[currentIndex].date;
	mImages[curretIndex].img = mJson.images[currentIndex].imgPath;
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

