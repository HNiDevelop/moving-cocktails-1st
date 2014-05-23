function initPage() {

	console.log('init page');

	skrollr.init({
		constants: {
			//fill the box for a "duration" of 150% of the viewport (pause for 150%)
			//adjust for shorter/longer pause
			//box: '150p',
			//boxx: '250p'

			box: '150p',
			box1: '350',	
			boxx: '100p'
		}
	});

}

