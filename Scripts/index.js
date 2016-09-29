// this is the usual jQuery function when the html page loads
$(document).ready(function(){


	var herp = 0; 
	var derp = 0;
	var wat = 0;
	var honeybadger = 0;
	var mushroom = 0;



	// this is when we select any of the first radiobutton ("choice1")
	$("input:radio[name=choice1]").click(function() {
		// we are declaring a variable here (asdfasdf)
		// herp is a scope variable only accessible withing this function
	    herp = parseInt($(this).val());

	    $("#choice1answer").html(herp);

	    // everytime we click on this radio button, recalculate the total score!
	    addTotalScore();
	    
	});

	// this is when we select any of the first radiobutton ("choice2")
	$("input:radio[name=choice2]").click(function() {
		// derp is a scope variable only accessible withing this function
	    derp = parseInt($(this).val());

		$("#choice2answer").html(derp);

		// everytime we click on this radio button, recalculate the total score!
	    addTotalScore();

	});


	// this is when we select any of the first radiobutton ("choice3")
	$("input:radio[name=choice3]").click(function() {
		// wat is a scope variable only accessible withing this function
	    wat = parseInt($(this).val());

		$("#choice3answer").html(wat);

		// everytime we click on this radio button, recalculate the total score!
	    addTotalScore();

	});

	//this is when we select any of the first radiobutton ("choice4")
	$("input:radio[name=choice4]").click(function() {
		// honeybadger is a scope variable only accessible withing this function
	    honeybadger = parseInt($(this).val());

		$("#choice4answer").html(honeybadger);

		// everytime we click on this radio button, recalculate the total score!
	    addTotalScore();

	});

	//this is when we select any of the first radiobutton ("choice5")
	$("input:radio[name=choice5]").click(function() {
		// mushroom is a scope variable only accessible withing this function
		mushroom = parseInt($(this).val());

		$("#choice5answer").html(mushroom);

		// everytime we click on this radio button, recalculate the total score!
	    addTotalScore();
	    

	});


	function addTotalScore(){
		$("#totalscore").html(herp + derp + wat + honeybadger + mushroom);
	}

});
