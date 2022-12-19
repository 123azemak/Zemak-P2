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
	document.getElementById(photo).src="img/places/[blank].jpg";
	//Add code here to access the #slideShow element.
	//Access the img element and replace its source
	//with a new image from your images array which is loaded 
	//from the JSON string
	console.log('swap photo');
}

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();


mRequest.onreadystatechange= function(){
	if(this.readyState == 4 && this.status == 200){
		mJson =JSON.parse(this.responseText);
		resolve(data);
	} else if(this.readyState === 4){
	   reject('error getting resource');
	}
}

// Array holding GalleryImage objects (see below).
var mImages = [{ //idk how to link each object 
	"imgPath": "img/places/australia.jpg",
	"imgLocation": "Australia",
	"description": "Loch Ard Gorge",
	"date": "01/01/2016"
},
{
	"imgPath": "img/places/austria.jpg",
	"imgLocation": "Austria",
	"description": "Austrian chapel",
	"date": "01/02/2016"
},
{
	"imgPath": "img/places/france.jpg",
	"imgLocation": "Paris",
	"description": "Eiffel Tower",
	"date": "01/03/2016"
},
{
	"imgPath": "img/places/greece.jpg",
	"imgLocation": "Greece",
	"description": "Greek coastline",
	"date": "01/04/2016"
},
{
	"imgPath": "img/places/hungary.jpg",
	"imgLocation": "Hungary",
	"description": "Budapest skyline",
	"date": "01/05/2016"
},
{
	"imgPath": "img/places/india.jpg",
	"imgLocation": "India",
	"description": "Taj Mahal",
	"date": "01/06/2016"
},
{
	"imgPath": "img/places/italy.jpg",
	"imgLocation": "Italy",
	"description": "Venice",
	"date": "01/07/2016"
},
{
	"imgPath": "img/places/japan.jpg",
	"imgLocation": "Japan",
	"description": "Hirosaki Castle",
	"date": "01/08/2016"
},
{
	"imgPath": "img/places/korea.jpg",
	"imgLocation": "South Korea",
	"description": "Seoul",
	"date": "01/09/2016"
},
{
	"imgPath": "img/places/norway.jpg",
	"imgLocation": "Norway",
	"description": "Countryside mountains",
	"date": "01/10/2016"
},
{
	"imgPath": "img/places/switzerland.jpg",
	"imgLocation": "Switzerland",
	"description": "Lake castle",
	"date": "01/11/2016"
},
{
	"imgPath": "img/places/thailand.jpg",
	"imgLocation": "Thailand",
	"description": "Beachline",
	"date": "01/12/2016"
},
{
	"imgPath": "img/places/turkey.jpg",
	"imgLocation": "Turkey",
	"description": "Istanbul",
	"date": "01/13/2016"
}]; //each json object inside the js array

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'images.json';


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

function GalleryImage() { //what do i put in here
	this.imgLocation = ;
    this.description = "";
    this.date = ;
	this.img = ;
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	//2. description of photo
	//3. the date when the photo was taken
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}