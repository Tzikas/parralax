
	
$(".parallax").animate({scrollTop: 100}, 1000, function() {});

var x = $(window).height();

	function start(){
		var tot=0;
		for(var i=1; i<7; i++){
			var t = 3000;
			if(i==5){t=600}
			if(i==6){t=5000}
			$(".parallax").animate({scrollTop: x*i}, t, function(){});			
		
			var tot = t + tot;
		}
	} start();



$("#secondContainer").animate({opacity: 1, left: 0 }, 2000, function() {});		


$( '.parallax' ).scroll(function() {



	var a = $('.parallax').scrollTop()
	var b = $('.parallax').scrollTop()-(x)
	var c = $('.parallax').scrollTop()-(x*2)
	var d = $('.parallax').scrollTop()-(x*3)
	var e = $('.parallax').scrollTop()-(x*4)
	var f = $('.parallax').scrollTop()-(x*5)
	var g = $('.parallax').scrollTop()-(x*6)

	if(a>=0 && a<x){
		rainFall('aaa');
	} else if (b>=0 && b<x){
		//rainFall('aaa');
		randAnimate('bbb');
	} else if (c>=0 && c<x){
		console.log('this is c');
		build('ccc');
	} else if (d>=0 && d<x){
		flip('ddd');
	} else if (e>=0 && e<x){
		comet('eee');
	} else if (f>=0 && f<x){
		comet('fff');
		//$('#seven, .footer').css({paddingBottom: "0px"})
		//$('#seven').animate({left: '2000px'}, 2000);
	} else if (g>=0 && g<x){
		end('ggg');
	} else {
		console.log('nothing is in view which is impossible');
	}

	
	$('#container').css({'height':''+a+'px'});
	$('#thirdContainer').css({'height':''+b+'px'});
	$('#fourthContainer').css({'height':''+c+'px'});
	$('#fifthContainer').css({'height':''+d+'px'});
	$('#sixthContainer').css({'height':''+e+'px'});
	$('#seventhContainer').css({'height':''+f+'px'});



})

function rainFall(b){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$('.'+b).addClass('back6');

}

function randAnimate(q){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$('.'+q).addClass('back7');
} 

function flip(q){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$('.'+q).addClass('back1');
} 

	
function build(c){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7, back6, back5, back4, back3, back2, back1');

	$('.'+c).addClass('back5');

}
function modernCity(c){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg, #fifthContainer, #sixthContainer').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$('.'+c).addClass('back4');

}
function comet(c){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg, #fifthContainer, #sixthContainer').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$('.'+c).addClass('back3');
	$('.fff').animate({opacity:0}, 1000);
	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer").animate({opacity: 1},1, function() {});		

}

function end(c){
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg, #fifthContainer, #sixthContainer').removeClass('back7, back6, back5, back4, back3, back2, back1');
	$("#seventhContainer").animate({opacity: 1, position:'relative', left:'-2000px'},2000,function() {});		

	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer").animate({opacity: 0},2, function() {console.log('don')});		
	$("#links").animate({opacity:1, left:0 }, 2000);
}



function addImageTites(div, src, loc){

	var width = $('.'+div).width()
	var height = $('.'+div).height()
	var par = $('.'+div).parent().width();
	var parHeight = $('.'+div).parent().height();
	var num = 0
	for(var row=0; row<parHeight; row+=height){
		for(var lef=0; lef<par; lef+=width){ //So this basically says that the top left position of the image will increment until it's greater then width of its parent. 
			$('#'+loc).append("<img class='"+div+"' src='"+src+"' style='left:"+lef+"px;top:"+row+"px;'></img>")
			num++;
		}
	}

	console.log('num of squares '+num);

}



addImageTites('aaa','images/rain.png', 'callStackA');
addImageTites('bbb','images/sun.png','callStackB');
addImageTites('ccc','images/office.png','callStackC');
addImageTites('ddd','images/washi.png','callStackD');
addImageTites('eee','images/sun.png','callStackE');
addImageTites('fff','images/outlets100.png','callStackF');
addImageTites('ggg','images/outlets100.png','callStackG');

$(window).resize(function() {
	console.log('history.go(0)')
	window.location.href = window.location.href;
});

/*

rainFall('aaa');
 //Onload



$(window).resize(function() {
	location.reload();
});




var resizeTimer;
$(window).resize(function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
	window.location.reload(true);
  }, 200);
});


*/



