const bookmarkTrack = document.querySelector('.bookmark');
const icon = document.querySelector('.bookmark svg');
const bookmarkText = document.querySelector('.bookmark p');

const iconBackground = document.querySelector('.bookmark svg circle');
const iconForeground = document.querySelector('.bookmark svg path');

let isBookmarked = false;

const slideBookmark = (e) => {
	

	if (isBookmarked) {
		bookmarkText.style.display = 'inline-block';
		icon.style.float = 'left';
      iconBackground.style.fill = "#000";
      iconForeground.style.fill = "#B1B1B1";

      isBookmarked = false;
	} else {
		bookmarkText.style.display = 'none';
		icon.style.float = 'right';
      iconBackground.style.fill = "hsl(176, 50%, 47%)";
      iconForeground.style.fill = "#fff";

      isBookmarked = true;
	}
};

bookmarkTrack.addEventListener('click', slideBookmark);
