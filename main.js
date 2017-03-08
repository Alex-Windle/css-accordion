let header1 = document.querySelector('.header-one');
let body1 = document.querySelector('.body-one');
let header2 = document.querySelector('.header-two');
let body2 = document.querySelector('.body-two');
let header3 = document.querySelector('.header-three');
let body3 = document.querySelector('.body-three');

window.onload = function() {
	body1.classList.add('hide');
	body2.classList.add('hide');
};

// Click box 1
header1.addEventListener('click', function() {
	body1.classList.remove('hide');
	body2.classList.add('hide');
	body3.classList.add('hide');
});

// Click box 2
header2.addEventListener('click', function() {
	body1.classList.add('hide');
	body2.classList.remove('hide');
	body3.classList.add('hide');
});

// Click box 3
header3.addEventListener('click', function() {
	body1.classList.add('hide');
	body2.classList.add('hide');
	body3.classList.remove('hide');
});