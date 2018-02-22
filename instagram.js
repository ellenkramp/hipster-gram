var body = document.querySelector("body");
var galleryDiv = document.createElement("div");
var lightBoxDiv = document.createElement("div");
var lightBoxImg = document.createElement("img");
lightBoxDiv.classList.add("enlarged");
galleryDiv.classList.add("gallery-class");

var gallery = [
    {link: 'http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg'},
    {link: 'http://www.our3dvr.com/data/wallpapers/64/WDF_1097626.jpg'},
    {link: 'https://orig00.deviantart.net/160f/f/2010/118/8/5/pretty_nature_by_tylercuddlebutt.jpg'},
    {link: 'https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Pretty-HD-Photo-Tumblr-PIC-WPE004194.jpg'}
];
body.appendChild(lightBoxDiv);
body.appendChild(galleryDiv);
lightBoxDiv.appendChild(lightBoxImg);


for (var i = 0; i<gallery.length; i++) {
    var pic = gallery[i];
    var galImg = document.createElement('img');
    galImg.src = pic.link;
    galleryDiv.appendChild(galImg);
    galleryDiv.classList.add('gallery-class');
    galImg.addEventListener('click', lightBox);
}
function lightBox() {
    lightBoxImg.setAttribute("src", this.src);
    lightBoxDiv.classList.toggle('visible');
    lightBoxImg.addEventListener('click', normalState);
}
function normalState() {
    lightBoxDiv.classList.toggle('visible');
}
