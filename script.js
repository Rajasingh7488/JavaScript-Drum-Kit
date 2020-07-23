// window.addEventListener('keydown' , function(e) {
// 	//! This part is for the audio playing with buttons
// 	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
// 	if(!audio) return; //stops the function from playing all together
// 	audio.currentTime = 0; //rewind to the start
// 	audio.play();
// 		// console.log('audio' ,audio);

// 	//! This part is for adding animation on keypress

// 	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
// 	console.log(key);
// 	key.classList.add('playing');
// });

// function removeTransition(e) {
// 	if(e.propertyName !== 'transform') return; // skip it if its not a transform

// 	this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');

// keys.forEach( key => key.addEventListener('transitionend', removeTransition ));


// ------------------------------------------Now putting all this in a good way---------

function playSoundAndAnimation(e) {
	
	//! This part is for the audio playing with buttons
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	
	if(!audio) return; //stops the function from playing all together
	audio.currentTime = 0; //rewind to the start
	audio.play();
	
	//! This part is for adding animation on keypress
	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	key.classList.add('playing');
};



function removeTransition(e) {
	if(e.propertyName !== 'transform') return; // skip it if its not a transform
	this.classList.remove('playing');
	//! or 	// e.target.classList.remove('playing');

}


const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition ));

window.addEventListener('keydown' , playSoundAndAnimation);