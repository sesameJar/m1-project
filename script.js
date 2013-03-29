var rnd    = function (a,b){

	return Math.floor(Math.random()*(b-a+1))+a;
};
$(function(){

	$('.download').tap(function(){
		$(this).css({
			left:rnd(5,90)+'%',
			top:rnd(5,90)+'%'
		})
	})
});