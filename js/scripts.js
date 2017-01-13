$(document).ready(function(){

  var designPoints = 0;
  var click = 0;






  $("#question1").submit(function(event){
    if(click === 0){
      designPoints += parseInt( $("input:radio[name=design]:checked").val());
      click++;
      event.preventDefault();
      $("#q2").slideToggle();
    };
    alert(designPoints);
  });

  $("#question2").submit(function(event){
    event.preventDefault();
    $("#q3").slideToggle();
  });

  $("#question3").submit(function(event){
    event.preventDefault();
    $("#q4").slideToggle();
  });
});
