$(function(){
    $(".explanation-text").typed({
        strings: ["In Round 1 You Will Have 100 Seconds To Translate 5 Words From German To English."],
        typeSpeed: 0,
        onStringTyped: function() {
        },
      });
});

$("document").ready(function() {
    console.log("loading");
    $('.game-container').load('views/round1-pregame.html');
});

$("#btn-ready").click(function(){
    $('.game-container').load('views/round1.html');
})

function countdown(id, duration){
    var clock = document.getElementById(id);
    this.data.dur = duration;
    var counting = setInterval(function(){ 
        clock.innerText = data.dur--;
    if(duration<=0){
      clearInterval(counting);
    }
  },1000);
}

