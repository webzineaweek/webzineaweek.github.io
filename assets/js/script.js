$(document).ready(function(){
	$('#preloader').click(function(){
		setTimeout(function() {
		$('#loding6').css('background-color', '#39FF47');
	}, 1000);

	setTimeout(function() {
		$('#loding5').css('background-color', '#39FF47');
	}, 1500);

	setTimeout(function() {
		$('#loding4').css('background-color', '#39FF47');
	}, 2000);

	setTimeout(function() {
		$('#loding3').css('background-color', '#39FF47');
	}, 2500);

	setTimeout(function() {
		$('#loding2').css('background-color', '#39FF47');
	}, 3000);

	setTimeout(function() {
		$('#loding1').css('background-color', '#39FF47');
	}, 3500);

	setTimeout(function() {
		$('#preloader').hide();
	}, 4100);

	setTimeout(function() {
		$('#preloader').show();
	}, 4400);

	setTimeout(function() {
		$('#preloader').hide();
		$('body').css('background-color', '#39FF47');
		$('html').css({
			'overflow-y': 'scroll',
			'overflow-x': 'scroll'
		});
		$('.main').css('visibility', 'visible');

	}, 4900);
	});
	// $('body').scrollTop(0);

	$('.index-wrapper').hover(function( ) {
		$('.info').show();
	},function(){
		$('.info').hide();
	});

	$('#about').hover(function( ) {
		$('#about').css('text-shadow', '2px 3px 3px black');
		$('#firstweek').css('text-shadow', 'none');
		$('.about-wrapper').show();
	},function(){
		$('#about').css('text-shadow', 'none');
		$('#firstweek').css('text-shadow', '2px 3px 3px black');
		$('.about-wrapper').hide();
	});

	$('.date-wrapper > ul > li').each(function( ) {
		$(this).css({
			left : Math.random() * $('.date-wrapper').width(),
			top : Math.random() * (($('.date-wrapper').height() -10) - $(this).height()) + 20
		});
	});

	var index = 0;

	$('.date-wrapper > ul > li > span').click(function(){
		index = index + 1;
		$(this).hide();
		$('.diary-wrapper').animate({scrollTop: 1000000});
		$(this).replaceWith('<img class="boom" src="assets/img/boom.gif">');
		setTimeout(function(){
			$('.boom').hide();
		}, 400);
		if(index == 38){
			setTimeout(function(){
				$('.diary-wrapper').append('<br><a href="https://www.instagram.com/p/CIzacXUJLBL/?utm_source=ig_web_copy_link" target="_blank"><img id="clover" src="assets/img/clover.png" style="width: 19px"; height="auto";></a>');
			}, 10);
		}else{
		};
	});

	$('.sticker-wrapper').each(function( ) {
		$(this).css({
			left : Math.random() * ($('.date-wrapper').width() - $(this).width()) + 5,
			top : Math.random() * (($('.date-wrapper').height() -10) - $(this).height()) + 20
		});
	});

	var Nov12diary 	= [];
	Nov12diary[0] 	= '<span class="questions" id="exhibitionmap">오늘 한 일 중 하나는 오랜 친구의 첫 개인전의 전시 지도를 만드는 일이다.</span> ';
	Nov12diary[1] 	= '<span>아, 작품 이름에 웃긴 단어들이 있어서 ' + '<span id="funnyfont">웃긴 서체</span>' +'도 써봤다.</span> ';
	Nov12diary[2] 	= '<span class="questions" id="designGrammer">내가 디자인 어법이 익숙하지 않아서인지 디자인 작업은 항상 내가 예상한 시간에서 2-3배의 시간이 더 필요하다.</span> ';
	Nov12diary[3] 	= '<span><br>오늘 못한 일 중 하나는 완성된 (베타 버전의) 작업을 기록하는 일이다.</span> <span class="questions" id="record">저번 학기 작업물인데 아직도 원하는 모양의 기록물을 남기지 못했다. 사진이든 스캔이든 장비가 가진 한계가 너무 잘 보여서 자주 힘이 빠진다.</span> ';
	Nov12diary[4] 	= '<span>그래도 가능한 최선의 방법을 찾아야 한다. 작업물 자체로 보여지는 상황보다 작업이 기록물로 보여지는 상황이 많기 때문에 어쩔 수가 없다. 하하...</span> ';

	var Nov13diary 	= [];
	Nov13diary[0] 	= '<span>주말을 앞둔 금요일은 어수선하다. 이동이 많은 날은 핸드폰 확인도 어렵다. 오랜만에 만원 버스, 만원 지하철을 탔다. 한 자리에 가만히 있는 일은 몸에 피로감을 준다. 멍해진다.</span> ';
	Nov13diary[1] 	= '<span>뭘 하러 가는지는 가끔 잊고 가는 과정에서의 감각이 하루를 지배하기도 한다.</span> ';
	Nov13diary[2] 	= '<span>집 가는 길에 앞이 안 보일 정도로 안개가 꼈다. 정말 한 치 앞이 안 보여서 보이는 건 자동차 불빛밖에 없었다.</span> ';
	Nov13diary[3] 	= '<span>평소엔 빠르게 지나가던 길인데 차들이 다 같이 비상등을 켜고 천천히 가는 게 뭔가 귀여워 보였다.</span> ';

	var Nov14diary 	= [];
	Nov14diary[0] 	= '<span>인스타로 요즘 하는 전시들 사진을 봤다. 실물로 보고 싶은 작업이 많았다.</span> <span class="questions" id="volume">촉감과 두께, 무게에 대해서 생각해본다.</span> ';
	Nov14diary[1] 	= '<br><span>인천에서는 하루가 거의 비슷하게 시작된다. 엄마가 자고있는 나를 살짝 깨워서 자신의 오전 일정을 말하고, 할 일을 부탁하고 나간다.</span> ';
	Nov14diary[2] 	= '<span>엄마의 단점은 나에게 시키는 일이 많다는 점이고, 엄마의 장점은 시킨 일을 했는지 안 했는지 검사를 안 한다는 점이다.</span> ';
	Nov14diary[3] 	= '<span><br><img class="diaryImg" src="assets/img/myhair.jpg">친척들을 오랜만에 만났다. 내 머리를 보고 프랑스 이모는 뮤지컬 캣츠 등장인물 같다고 했고, 사촌 언니는 귀엽다고 했고, 작은 이모와 엄마는 남자 같다고 했고, 막내 이모는 잘 어울린다고 했고, 아빠는 아침에 짧은 머리가 뻗쳤을 때 웃기다고 했다.</span></span> ';
	Nov14diary[4] 	= '<span>언젠가 아빠가 소형차는 강호동같이 덩치 큰 사람이 타는 게 좋다고 했다. 나는 어떤 실용적 이유나 운전과 관련한 얘기인가 해서 왜냐고 물었고 대답은 명쾌했다. 재밌어서.</span> ';

	var Nov15diary 	= [];
	Nov15diary[0] 	= '<span>인천에 산다고 하면 바다가 가깝냐고 물어보는 사람들이 있다. 나는 최근 몇년을 제외하고는 쭉 인천에 살았는데, 바다와는 먼 곳에서 살았다. </span>';
	Nov15diary[1] 	= '<br><img class="diaryImg" src="assets/img/christmas.jpg"><img class="diaryImg" src="assets/img/christmas2.jpg"><span id="christmas">핸드폰을 보다가 어떤 사진에 멈췄다. 올해 처음 본 크리스마스 사진이다. 나는 겨울이 좋다. 겨울의 색이 좋다. 크리스마스의 색도 좋다.</span> ';
	Nov15diary[2] 	= '<span id="snow">눈이 오는 크리스마스를 보고 싶다. 벌써 크리스마스가 한 달 정도밖에 남지 않았다. </span>';

	var Nov16diary 	= [];
	Nov16diary[0] 	= '<img class="diaryImg" src="assets/img/plant.jpg"><span id="plant">집에 돌아오니 화분에 꽃이 피어있다. 집을 비운 3일간 블라인드가 올라가 있어서 빛을 많이 받은 모양이다. 전에 작업실에서 키우던 화분은 겨울에 추워서 얼어 죽었다. 그 이후로 몇 년간 식물을 키우지 않았는데 두 번째 식물은 다행히 계속 살 거 같다.</span> ';
	Nov16diary[1] 	= '<br><span>오늘에서야 근 며칠간의 만남 일정들이 마무리되었다. 일정이 몰려있었다. 누군가를 만나는 일에 긴장하지 않아도 되는데 긴장이 된다. 어쩔 수 없는 일이다. </span>';
	Nov16diary[2] 	= '<br><span>글보다 말이 좋다고 생각했는데, 점점 듣기보다 읽기가 더 편한 거 같다. (아니, 읽기도 어렵다.) 글은 선택해서 읽는 것이 가능한데 말은 그게 안 되니 참아야 한다. </span>';
	Nov16diary[3] 	= '<br><span>(요즘은 아예 안 하지만) 게임을 할 때도 로그아웃하는 순간이 좋았다. 뭔가를 쏟아내다가 문을 닫아버리는 순간이 좋다. </span>';
	Nov16diary[4] 	= '<br><span>올해가 얼마 남지 않았다는 생각 때문인지 마음이 급하다. 파주에 오랜만에 왔으니 정리를 해야겠다.</span> ';

	var Nov17diary 	= [];
	Nov17diary[0] 	= '<span>오늘은 진짜 많이 잤다. 꿈도 안 꾼 거 같다. 많이 잔 김에 낮잠도 잤다. 아예 밤을 새울 생각이다.</span> ';
	Nov17diary[1] 	= '<br><span>나세가 차를 태워줘서 민정과 같이 저녁을 먹고 두성집으로 갔다. 괴로운 노래 듣기 배틀이 벌어졌다. 나세는 음악을 오래 공부해서 징그러운 케이팝 듣기를 힘들어한다.</span> ';
	Nov17diary[2] 	= '<span>우리는 숨듣명에 대해서 생각해봤다. 왜 숨을까? 왜 들을까? 왜 명곡일까? 일단 우리가 그 노래들의 가사를 다 알고 있었다는 점이 아이러니하다. </span>';
	Nov17diary[3] 	= '<span class="questions" id="thisWork"><br>작업은 생각보다 아주 많이 길어져서, 아침 수업까지 잠깐이라도 잘 시간이 없었다. 분명 2-3시간을 예상했는데 거의 10시간 넘게 마우스를 만지작거렸다.</span> ';
	Nov17diary[4] 	= '<span class="questions" id="work">물론 시간이 중요한 것은 아니고 마음에 들어야 하는데 그렇지가 않아서 좀 답답했다.</span> ';

	var Nov18diary 	= [];
	Nov18diary[0] 	= '<span class="questions" id="diary">오늘은 일주일을 기록하는 마지막 날이다. 나는 한동안 이 일주일을 곱씹게 될 것이다. 아마 기록한 것들로 괴로울 거고, 기록하지 못한 것들로 괴로울 거다. 시시한 글이지만 복잡했던 2020년에 대한 기록이 남게 되어 다행이다.</span> ';
	Nov18diary[1] 	= '<br><img img class="diaryImg" src="assets/img/toy1.jpg"><span class="questions" id="toy">책장을 봤는데 장난감들이 다 넘어져 있다. 왜지? 아까 이불 들었을 때 닿았나. 세우기 귀찮아서 일단 그냥 뒀다. 전에 살던 집에서는 넘어진 장난감을 세워도 매번 다시 넘어졌다. 한동안 넘어진 장난감 세우기는 매일의 수행이 됐다.</span> ';
	Nov18diary[2] 	= '<br><span class="questions" id="name">새로 할 작업을 위한 이름을 생각해봤다. 전에 생각해둔 단어인데 지금 꺼내면 되겠다는 생각이 들었다.</span> ';
	Nov18diary[3] 	= '<span class="questions" id="newWork">아직 정리 못 한 작업들이 많은데 새 작업을 하는 게 괜찮을지 모르겠다.</span> ';
	Nov18diary[4] 	= '<br><span>이제 꽤 추운데 눈은 언제 올까. 왠지 올해 눈이 엄청 많이 올 거 같다. 파주의 겨울이 어떨지 궁금하다. 일단 겨울에 가까워지니 <span id="star">별</span>이 잘 보여서 좋다. </span>';

	var index12 = -1;
	var index13 = -1;
	var index14 = -1;
	var index15 = -1;
	var index16 = -1;
	var index17 = -1;
	var index18 = -1;

	$('.Nov12Date').click(function(){
		index12++;
		index12 < Nov12diary.length;
		$('.diary-wrapper').append(Nov12diary[index12]);

	});

	$('.Nov13Date').click(function(){
		index13++;
		index13 < Nov13diary.length;
		$('.diary-wrapper').append(Nov13diary[index13]);
	});

	$('.Nov14Date').click(function(){
		index14++;
		index14 < Nov14diary.length;
		$('.diary-wrapper').append(Nov14diary[index14]);
	});

	$('.Nov15Date').click(function(){
		$(this).hide();
		index15++;
		index15 < Nov14diary.length;
		$('.diary-wrapper').append(Nov15diary[index15]);

	});

	$('.Nov16Date').click(function(){
		index16++;
		index16 < Nov16diary.length;
		$('.diary-wrapper').append(Nov16diary[index16]);
	});

	$('.Nov17Date').click(function(){
		index17++;
		index17 < Nov17diary.length;
		$('.diary-wrapper').append(Nov17diary[index17]);
	});

	$('.Nov18Date').click(function(){
		index18++;
		index18 < Nov17diary.length;
		$('.diary-wrapper').append(Nov18diary[index18]);
	});

	$('.sticker-wrapper > img').click(function(){
		$(this).hide();
		$('.diary-wrapper').animate({scrollTop: 1000000});
		$(this).replaceWith('<img class="boom" src="assets/img/boom.gif">');
		setTimeout(function(){
			$('.boom').hide();
		}, 400);
	});

	$('#sticker1').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker1.jpeg"></span>');
	});
	$('#sticker3').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker3.jpeg"></span>');
	});
	$('#sticker5').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker5.jpeg"></span>');
	});
	$('#sticker6').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker6.jpeg"></span>');
	});
	$('#sticker7').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker7.jpeg"></span>');
	});
	$('#sticker8').click(function(){
		$('.diary-wrapper').append('<span><img class="diaryImg2" src="assets/img/sticker/sticker8.jpeg"></span>');
	});

	$(document).on('click', function() {
		if($('#snow').length){
			$('#snowImg').show();
		};
	});

	$(document).on('click', '#funnyfont', function() {
		if($('body').css('font-family') != 'PusKul'){
			$('body').css("font-family", "PusKul");
			$('#funnyfont').css({
				'font-weight' : 'normal',
				'color' : '#39FF47'});
			$('.info').css("width", "200px");
		}else if($('body').css('font-family') == 'PusKul'){
			$('body').css({'font-family': 'BlinkMacSystemFont, -apple-system, Arial, "Spoqa Han Sans", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, sans-serif'});
			$('#funnyfont').css({
				'font-weight' : 'bold',
				'color' : 'black'});
			$('.info').css("width", "190px");
		}else{
		};
	});

	$(document).on('click', '#star', function() {
		$('body').css({
			'background-color': 'black'
		});
		$('.diary-wrapper').css({
			'box-shadow': 'none',
			'background-color': 'rgba(0, 0, 0, 0);'
		});
		$('.date-wrapper, .title, .draggable, .diaryImg, #clover, #icon').css('visibility', 'hidden');
		$('span').css('visibility', 'hidden');
		$('a:visited, a:active, a').css('color', 'white');
		$('#star').css({
			'color': 'white',
			'visibility': 'visible'
		});
		$('#star').attr('id','blackStar');
		$('#starImg').show();

		for (var i = 0; i < 100; i++) {
			$('#starImg').append('<div class="squere"></div>');
		}

		$( '.squere' ).each(function(index ) {
			$(this).css({
				left : Math.random() * ($('#starImg').width() - $(this).width()),
				top : Math.random() * ($('#starImg').height() - $(this).height())
			});
		});

		if($('#snowImg').length){
			$('#snowImg').css('visibility', 'hidden');
		};
	});

	$(document).on('click', '#blackStar', function() {
		$('body').css({
			'background-color': '#39FF47'
		});
		$('.diary-wrapper').css({
			'box-shadow': '5px 7px 5px #1a6025',
			'background-color': 'white'
		});
		$('.date-wrapper, .title, .draggable, .diaryImg, #clover, #icon').css('visibility', 'visible');
		$('span').css('visibility', 'visible');
		$('a:visited, a:active, a').css('color', 'black');
		$('#blackStar').css('color', 'black');
		$('#blackStar').attr('id','star');
		$('#starImg').hide();

		if($('#snowImg').length){
			$('#snowImg').css('visibility', 'visible');
		};
	});

	$('.X').click(function(){
		$(this).parent().hide();
	});

	$('.worklink').click(function(){
		$(this).attr('class', 'worklink-visited');
		$('body').css('overflow-x', 'hidden');
		event.stopPropagation();
		$('body').click(function(){
			$('.work-list').hide();
		})
	});

	//**********hover and show work img


	$('#swimsuit').click(function(){
		$('.work-list').not('#work-swimsuit').hide();
		$('#work-swimsuit').toggle();
		$('.interview-list').not('#work-swimsuit').css('z-index', '9');
	});

	$('#swimsuit-xray').click(function(){
		$('.work-list').not('#work-xray').hide();
		$('#work-swimsuit-xray').toggle();
		$('.interview-list').not('#work-swimsuit-xray').css('z-index', '9');
	});

	$('#map').click(function(){
		$('.work-list').not('#work-map').hide();
		$('#work-map').toggle();
		$('.interview-list').not('#work-map').css('z-index', '9');
	});

	$('#calander').click(function(){
		$('.work-list').not('#work-calander').hide();
		$('#work-calander').toggle();
		$('.interview-list').not('#work-calander').css('z-index', '9');
	});

	$('#hanriver').click(function(){
		$('.work-list').not('#work-hanriver').hide();
		$('#work-hanriver').toggle();
		$('.interview-list').not('#work-hanriver').css('z-index', '9');
	});

	$('#hyunsoomak').click(function(){
		$('.work-list').not('#work-hyunsoomak').hide();
		$('#work-hyunsoomak').toggle();
		$('.interview-list').not('#work-hyunsoomak').css('z-index', '9');
	});

	$('#drawing').click(function(){
		$('.work-list').not('#work-drawing').hide();
		$('#work-drawing').toggle();
		$('.interview-list').not('#work-drawing').css('z-index', '9');

	});

// ************************mobile
	function myFunction(x) {
	if (x.matches) {
		$(document).on('click', '#exhibitionmap', function() {
			$('#interview-exhibitionmap').animate({scrollTop: 0});
			$(this).attr('class', 'questions-visited');
			$('#interview-exhibitionmap').show();
			$('.interview-list').not('#interview-exhibitionmap').css('z-index', '9');
			$('#interview-exhibitionmap').css('z-index', '10');
		});

		$(document).on('click', '#designGrammer', function() {
			$('#interview-designGrammer').animate({scrollTop: 0});
			$(this).attr('class', 'questions-visited');
			$('#interview-designGrammer').show();
			$('.interview-list').not('#interview-designGrammer').css('z-index', '9');
			$('#interview-designGrammer').css('z-index', '10');
		});

	$(document).on('click', '#record', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-record').show();
		$('.interview-list').not('#interview-record').css('z-index', '9');
		$('#interview-record').css('z-index', '10');
	});

	$(document).on('click', '#volume', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-volume').show();
		$('.interview-list').not('#interview-volume').css('z-index', '9');
		$('#interview-volume').css('z-index', '10');
	});

	$(document).on('click', '#name', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-name, #interview-instaName').show();
		$('.interview-list').not('#interview-name, #interview-instaName').css('z-index', '9');
		$('#interview-name, #interview-instaName').css('z-index', '10');
	});

	$(document).on('click', '#work', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-work').show();
		$('.interview-list').not('#interview-work').css('z-index', '9');
		$('#interview-work').css('z-index', '10');
	});

	$(document).on('click', '#newWork', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-newwork').show();
		$('.interview-list').not('#interview-newwork').css('z-index', '9');
		$('#interview-newwork').css('z-index', '10');
	});

	$(document).on('click', '#thisWork', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-thisWork').show();
		$('.interview-list').not('#interview-thisWork').css('z-index', '9');
		$('#interview-thisWork').css('z-index', '10');
	});

	$(document).on('click', '#toy', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-toy').show();
		$('.interview-list').not('#interview-toy').css('z-index', '9');
		$('#interview-toy').css('z-index', '10');
	});

	$(document).on('click', '#diary', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-diary').show();
		$('.interview-list').not('#interview-diary').css('z-index', '9');
		$('#interview-diary').css('z-index', '10');
	});

	} else {

		$(function(){
		$(".interview-list").draggable();
	});

		$(document).on('click', '#exhibitionmap', function() {
		$('#interview-exhibitionmap').animate({scrollTop: 0});
		$(this).attr('class', 'questions-visited');
		$('#interview-exhibitionmap').show();
		$('#interview-exhibitionmap').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-exhibitionmap').css('z-index', '9');
		$('#interview-exhibitionmap').css('z-index', '10');
	});

	$(document).on('click', '#designGrammer', function() {
		$('#interview-designGrammer').animate({scrollTop: 0});
		$(this).attr('class', 'questions-visited');
		$('#interview-designGrammer').show();
		$('#interview-designGrammer').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-designGrammer').css('z-index', '9');
		$('#interview-designGrammer').css('z-index', '10');
	});

	$(document).on('click', '#record', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-record').show();
		$('#interview-record').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-record').css('z-index', '9');
		$('#interview-record').css('z-index', '10');
	});

	$(document).on('click', '#volume', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-volume').show();
		$('#interview-volume').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-volume').css('z-index', '9');
		$('#interview-volume').css('z-index', '10');
	});

	$(document).on('click', '#name', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-name, #interview-instaName').show();
		$('#interview-name').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('#interview-instaName').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-name, #interview-instaName').css('z-index', '9');
		$('#interview-name, #interview-instaName').css('z-index', '10');
	});

	$(document).on('click', '#work', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-work').show();
		$('#interview-work').css({
			left : Math.random() * ($('.interview-wrapper').width()) - 60,
			top : 30
		});
		$('.interview-list').not('#interview-work').css('z-index', '9');
		$('#interview-work').css('z-index', '10');
	});

	$(document).on('click', '#newWork', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-newwork').show();
		$('#interview-newwork').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-newwork').css('z-index', '9');
		$('#interview-newwork').css('z-index', '10');
	});

	$(document).on('click', '#thisWork', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-thisWork').show();
		$('#interview-thisWork').css({
			left : Math.random() * ($('.interview-wrapper').width()) - 60,
			top : 25
		});
		$('.interview-list').not('#interview-thisWork').css('z-index', '9');
		$('#interview-thisWork').css('z-index', '10');
	});

	$(document).on('click', '#toy', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-toy').show();
		$('#interview-toy').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-toy').css('z-index', '9');
		$('#interview-toy').css('z-index', '10');
	});

	$(document).on('click', '#diary', function() {
		$(this).attr('class', 'questions-visited');
		$('#interview-diary').show();
		$('#interview-diary').css({
			left : Math.random() * ($('.interview-wrapper').width()),
			top : Math.random() * ($('.interview-wrapper').height())
		});
		$('.interview-list').not('#interview-diary').css('z-index', '9');
		$('#interview-diary').css('z-index', '10');
	});

  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)

});
