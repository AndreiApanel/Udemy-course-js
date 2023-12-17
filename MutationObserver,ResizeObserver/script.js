'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver((mutatuionRecords) => {
	console.log(mutatuionRecords);
});

observer.observe(box, { childList: true });
