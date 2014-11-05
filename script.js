console.log('clean it');



	
$(".parallax").animate({scrollTop: 1}, 1, function() {});

var x = $(window).height();

	function start(){
		var tot=0;
		for(var i=1; i<7; i++){
			var t = 3000;
			if(i==5){t=600}
			if(i==6){t=4000}
			$(".parallax").animate({scrollTop: x*i}, t, function(){});			
		
			var tot = t + tot;
		}
	} start();



/*setTimeout(function(){
	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer, #seventhContainer").animate({opacity: 0},1000, function() {});		
}, 18600)
//setTimeout(function(){
	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer, #seventhContainer").animate({opacity: 1},1000, function() {});		
}, 20600)

*/
$("#seventhContainer, #secondContainer").animate({opacity: 1, left: 0 }, 2000, function() {});		


$( '.parallax' ).scroll(function() {

	console.log('scrollin');


	var a = $('.parallax').scrollTop()
	var b = $('.parallax').scrollTop()-(x)
	var c = $('.parallax').scrollTop()-(x*2)
	var d = $('.parallax').scrollTop()-(x*3)
	var e = $('.parallax').scrollTop()-(x*4)
	var f = $('.parallax').scrollTop()-(x*5)
	var g = $('.parallax').scrollTop()-(x*6)

	if(a>=0 && a<x){
		console.log('a')
		rainFall('aaa');
	} else if (b>=0 && b<x){
		console.log('b')

		//rainFall('aaa');
		randAnimate('bbb');
	} else if (c>=0 && c<x){
		console.log('c')

		build('ccc');
	} else if (d>=0 && d<x){
		console.log('d')

		randAnimate('ddd');
	} else if (e>=0 && e<x){
		console.log('e')

		comet('eee');
	} else if (f>=0 && f<x){
		console.log('f')

		randAnimate('fff');
		//$('#seven, .footer').css({paddingBottom: "0px"})
		//$('#seven').animate({left: '2000px'}, 2000);
	} else if (g>=0 && g<x){
		console.log('g')
		end('ggg')
		//$('#group7').html('<div id="week">How was your week?</div>')
		//$('#seven, .footer').css({paddingBottom: "100px"})
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
	console.log('here is rain fall '+b)
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');


	$('.'+b).addClass('back6');

}

function randAnimate(q){
	console.log('twirl '+q);
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');


	$('.'+q).addClass('back7');
} 
	
function build(c){
	console.log('build '+c);
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');


	$('.'+c).addClass('back5');

}
function modernCity(c){
	console.log('modernCity '+c);
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');

	$('.'+c).addClass('back4');

}
function comet(c){
	console.log('comet '+c);
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');


	$('.'+c).addClass('back3');
	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer, #seventhContainer").animate({opacity: 1},1, function() {});		

}

function end(c){
	console.log('finish this shit '+c);

	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back7');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back6');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back5');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back4');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back3');
	$('.aaa, .bbb, .ccc, .ddd, .eee, .fff, .ggg').removeClass('back2');

	$("#container, #secondContainer, #thirdContainer, #fourthContainer, #fifthContainer, #sixthContainer, #seventhContainer").animate({opacity: 0},1000, function() {});		
	$("#links").animate({opacity:1, left:0 }, 5000);
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
addImageTites('eee','images/tasky_pattern100.png','callStackE');
addImageTites('fff','images/washi.png','callStackF');
addImageTites('ggg','images/outlets100.png','callStackG');

rainFall('aaa');
 //Onload



$(window).resize(function() {
	location.reload();
});













//////////CLOCK/////

$(document).ready(function() {
  $('body').append('<div class="time">');
  
  Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
  }
  
  function rotate(element, degrees) {
    element.css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
  }
  
  function setTime() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hrs = date.getHours();
    
    var mapSec = sec.map(0, 59, 0, 360);
    var mapMin = min.map(0,59,0,360);
    var mapHrs = hrs.map(0,12,0,360);
    
    if (sec == 0) {
      $('.seconds-hand').removeClass('smooth');
    } else {
      $('.seconds-hand').addClass('smooth');
    }
    
    if (min == 0) {
      $('.minute-hand').removeClass('smooth');
    } else {
      $('.minute-hand').addClass('smooth');
    }
    
    if (hrs == 0) {
      $('.hour-hand').removeClass('smooth');
    } else {
      $('.hour-hand').addClass('smooth');
    }
      
    rotate($('.seconds-hand'), mapSec);
    rotate($('.minute-hand'), mapMin);
    rotate($('.hour-hand'), mapHrs);
  }
  
  setInterval(function() {setTime()}, 1);
});



