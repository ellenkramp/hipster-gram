var body = document.querySelector("body");
var lightBoxDiv = document.querySelector("lightBox");
var gallery = document.querySelector('gallery');
var lightBoxImg = document.createElement("img");
var profilePic = document.createElement('img');
profilePic.src = 'https://s-media-cache-ak0.pinimg.com/avatars/misskramp_1349735122_280.jpg';

var gallery = [
    {link: 'http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg'},
    {link: 'http://www.our3dvr.com/data/wallpapers/64/WDF_1097626.jpg'},
    {link: 'https://orig00.deviantart.net/160f/f/2010/118/8/5/pretty_nature_by_tylercuddlebutt.jpg'},
    {link: 'https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Pretty-HD-Photo-Tumblr-PIC-WPE004194.jpg'},
    {link: 'http://natbg.com/wp-content/uploads/2016/06/flowers-cotton-flower-pretty-nature-wallpaper-for-desktop.jpg'},
    {link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9JNgXoDsIiCklFf4_hhUj_8CkkPjbDFERv-m-vrieo_9WZQbrw'}
];

gallery.forEach(function(image) {
    var galleryDiv = document.querySelector('gallery');
    var galImg = document.createElement('img');
    galImg.src = image.link;
    galleryDiv.appendChild(galImg);
    galleryDiv.classList.add('gallery-class');
    galImg.addEventListener('click', lightBox);
});

function lightBox() {
    lightBoxImg.setAttribute("src", this.src);
    lightBoxDiv.classList.toggle('visible');
    lightBoxImg.addEventListener('click', normalState);
}

function normalState() {
    lightBoxDiv.classList.toggle('visible');
}

lightBoxDiv.appendChild(lightBoxImg);
