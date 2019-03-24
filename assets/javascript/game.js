
//Create variables
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var crystal1= Math.floor(Math.random()*12+1);
    var crystal2= Math.floor(Math.random()*12+1);
    var crystal3= Math.floor(Math.random()*12+1);
    var crystal4= Math.floor(Math.random()*12+1);
    var totalNumber= 0;
    var gemPlay = document.getElementById("gem-sound");
    var winPlay = document.getElementById("win-sound");
    var losePlay = document.getElementById("lose-sound");
//Random Number between 19 - 120
    let randomNumber = Math.floor((Math.random() *120 ) +19);
    $("#random-number").html(randomNumber)
//start with random numbers for all and total number at 0
    function reset(){
        randomNumber = Math.floor((Math.random() *120 ) +19);
        $("#random-number").text(randomNumber);
        crystal1= Math.floor(Math.random()*12+1);
        crystal2= Math.floor(Math.random()*12+1);
        crystal3= Math.floor(Math.random()*12+1);
        crystal4= Math.floor(Math.random()*12+1);
        totalNumber= 0;
        $("#total").text(totalNumber);
        
    }
//click even for each crystal and add to html

$("#emerald").on('click', function() {
//add to current number
    var gemSound = true;
    if (gemSound) {
        gemPlay.pause();
        gemPlay.currentTime = 0;
        gemPlay.play();  
    }
    totalNumber = totalNumber + crystal1;
    $("#total").html(totalNumber)
    console.log(totalNumber)
// Win or Lose condition. Add score to html
    if (randomNumber === totalNumber) {
        wins++;
        var winSound = true;
        if (winSound) {
        winPlay.pause();
        winPlay.currentTime = 0;
        winPlay.play();
        }
        $(".win").text(`Wins: ${wins}`);
        reset();
    } else if (randomNumber < totalNumber) {
        losses++;
        var loseSound = true;
        if (loseSound) {
        losePlay.pause();
        losePlay.currentTime = 0;
        losePlay.play();
        }
        $(".lose").text(`Lose: ${losses}`)
        reset();
        
    }
})
$("#diamond").on('click', function() {
    var gemSound = true;
    if (gemSound) {
        gemPlay.pause();
        gemPlay.currentTime = 0;
        gemPlay.play();
    }
    totalNumber = totalNumber + crystal2;
    $("#total").html(totalNumber)
    console.log(totalNumber)
    if (randomNumber === totalNumber) {
        wins++;
        $(".win").text(`Wins: ${wins}`);
        var winSound = true;
        if (winSound) {
        winPlay.pause();
        winPlay.currentTime = 0;
        winPlay.play();
        }
        reset();
    } else if (randomNumber < totalNumber) {
        losses++;
        var loseSound = true;
        if (loseSound) {
        losePlay.pause();
        losePlay.currentTime = 0;
        losePlay.play();
        }
        $(".lose").text(`Lose: ${losses}`)
        reset();
}});
$("#longdiamond").on('click', function() {
    var gemSound = true;
    if (gemSound) {
        gemPlay.pause();
        gemPlay.currentTime = 0;
        gemPlay.play();
    }
    totalNumber = totalNumber + crystal3;
    $("#total").html(totalNumber)
    console.log(totalNumber)
    if (randomNumber === totalNumber) {
        wins++;
        var winSound = true;
        if (winSound) {
        winPlay.pause();
        winPlay.currentTime = 0;
        winPlay.play();
        }
        $(".win").text(`Wins: ${wins}`);
        reset();
    } else if (randomNumber < totalNumber) {
        losses++;
        var loseSound = true;
        if (loseSound) {
        losePlay.pause();
        losePlay.currentTime = 0;
        losePlay.play();
        }
        $(".lose").text(`Lose: ${losses}`)
        reset();
}});
$("#square").on('click', function() {
    var gemSound = true;
    if (gemSound) {
        gemPlay.pause();
        gemPlay.currentTime = 0;
        gemPlay.play();
    }
    totalNumber = totalNumber + crystal4;
    console.log(totalNumber)
    $("#total").html(totalNumber)
    if (randomNumber === totalNumber) {
        wins++;
        var winSound = true;
        if (winSound) {
        winPlay.pause();
        winPlay.currentTime = 0;
        winPlay.play();
        }
        $(".win").text(`Wins: ${wins}`);
        reset();
    } else if (randomNumber < totalNumber) {
        losses++;
        var loseSound = true;
        if (loseSound) {
        losePlay.pause();
        losePlay.currentTime = 0;
        losePlay.play();
        }
        $(".lose").text(`Lose: ${losses}`)
        reset();
}});


});
    

    
     
    
   

 



    
    
