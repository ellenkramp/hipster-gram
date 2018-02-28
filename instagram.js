var body = document.querySelector("body");
//LightBox//
var lightBoxDiv = document.querySelector(".lightBox");
var leftArrow = document.querySelector("#left");
var rightArrow = document.querySelector("#right");
var lightBoxImg = document.querySelector(".lightBoxImg");
rightArrow.src = "https://cdn2.iconfinder.com/data/icons/lightly-icons/24/chevron-right-384.png";
leftArrow.src = "https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrow_right_left_back_otline-512.png";

//Gallery Items//
var galleryDiv = document.querySelector(".gallery-class");
var gallery = [
    {link: 'http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg',
    comments: {
        user1: "string1",
        user2: "string2"
        }
    },
    {link: 'http://www.our3dvr.com/data/wallpapers/64/WDF_1097626.jpg',
    comments: {
        user1: "test comment",
        user2: "test comment"
        }
    },
    {link: 'https://orig00.deviantart.net/160f/f/2010/118/8/5/pretty_nature_by_tylercuddlebutt.jpg'},
    {link: 'https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Pretty-HD-Photo-Tumblr-PIC-WPE004194.jpg'},
    {link: 'http://natbg.com/wp-content/uploads/2016/06/flowers-cotton-flower-pretty-nature-wallpaper-for-desktop.jpg'},
    {link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9JNgXoDsIiCklFf4_hhUj_8CkkPjbDFERv-m-vrieo_9WZQbrw'}
];

//Profile//

//store profile data//
var info = {
    image: 'https://s-media-cache-ak0.pinimg.com/avatars/misskramp_1349735122_280.jpg',
    handle: 'javascript_rocks_2000',
    posts: gallery.length,
    followers: 110,
    following: 99,
    name: 'Ellen',
    description: 'Using javascript to make the world a better place.'
};

//represent DOM elements as variables//
var profile = document.querySelector(".profile");
var profilePic = document.querySelector(".profile-pic");
var infoName = document.querySelector(".name");
var infoHandle = document.querySelector(".handle");
var infoPosts = document.querySelector(".posts");
var infoFollowers = document.querySelector(".followers");
var infoFollowing = document.querySelector(".following");
var infoDescription = document.querySelector(".description");

// populate profile variables with data //
profilePic.src = info.image;
infoHandle.innerText = info.handle;
infoName.innerText = info.name;
infoPosts.innerText = info.posts + " posts"; 
infoFollowers.innerText = info.followers + " followers";
infoFollowing.innerText = info.following + " following";
infoDescription.innerText = info.description;

//Gallery creation//
gallery.forEach(function(image) {
    var galImg = document.createElement('img');
    galImg.classList.add('gallery-class');
    galImg.src = image.link;
    galImg.addEventListener('click', lightBox);
    galleryDiv.appendChild(galImg);
});

//lightBox functions//
function lightBox() {
    lightBoxImg.setAttribute("src", this.src);
    lightBoxDiv.classList.toggle('visible');
    lightBoxImg.addEventListener('click', normalState);
}

function normalState() {
    lightBoxDiv.classList.toggle('visible');
}
