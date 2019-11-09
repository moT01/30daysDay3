//THIS CONTROLS THE NAV HOVER EFFECTS AND STYLE
var navElements = [
  [
    document.getElementById('about'),
    document.getElementById('subAbout')
  ],[
    document.getElementById('officeSpace'),
    document.getElementById('subOfficeSpace')
  ],[
    document.getElementById('thingsToDo'),
    document.getElementById('subThingsToDo')
  ],[
    document.getElementById('media'),
    document.getElementById('subMedia')
  ]
];

navElements.forEach((subArray) => {
  subArray[0].addEventListener('mouseover', function() { addHoverStyle(   subArray[0], subArray[1]); });
  subArray[0].addEventListener('mouseout' , function() { removeHoverStyle(subArray[0], subArray[1]); });
  subArray[1].addEventListener('mouseover', function() { addHoverStyle(   subArray[0], subArray[1]); });
  subArray[1].addEventListener('mouseout' , function() { removeHoverStyle(subArray[0], subArray[1]); });
});

function addHoverStyle(navBtn, subNavBtns) {
  navBtn.style.color = '#4286f4';
  navBtn.style.backgroundColor = '#eee';  
  subNavBtns.style.display = 'flex';
};

function removeHoverStyle(navBtn, subNavBtns) {
  navBtn.style.color = '#000';
  navBtn.style.backgroundColor = '#fff';
  subNavBtns.style.display = 'none';
};


//MOBILE NAV MENU
var mobileNav = document.getElementById('mobile-nav');
var isShown = false;

document.getElementById('nav-menu').addEventListener('click', function() {
  isShown ? hideMobileNav() : showMobileNav()  
});

function showMobileNav() { 
  mobileNav.style.left =    '0%';
  isShown = true;
}
  
function hideMobileNav() { 
  mobileNav.style.left = '-100%';
  isShown = false;
}


//SLIDESHOW
var delay = 7500;
var index = 0;
var leftChevron = document.getElementById('left-chevron');
var rightChevron = document.getElementById('right-chevron');
var slideInterval = setInterval(nextSlide, delay);
var slides = [
  document.getElementById('slide0'),
  document.getElementById('slide1'),
  document.getElementById('slide2'),
  document.getElementById('slide3'),
  document.getElementById('slide4'),
  document.getElementById('slide5'),
  document.getElementById('slide6')
];

leftChevron.addEventListener('click', function() {
  clearInterval(slideInterval);
  slides[index].style.opacity = '0';
  index == 0 ? index = 6 : index--;  
  slides[index].style.opacity = '100';
  slideInterval = setInterval(nextSlide, delay);
});

rightChevron.addEventListener('click', function() {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, delay);
});

function nextSlide() {
  slides[index].style.opacity = '0';
  index == 6 ? index = 0 : index++;   
  slides[index].style.opacity = '100';
};
