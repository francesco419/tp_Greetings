const images = "https://picsum.photos/200/300";

const bgImage=document.createElement('img');

bgImage.src="https://picsum.photos/2100/1300";

bgImage.classList.add("backgroundImg");

document.body.prepend(bgImage);
