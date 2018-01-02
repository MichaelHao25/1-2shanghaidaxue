var i=0;
$('.news-imgs span.goPrevious').click(function(){
	i--;
	if(i<0) 
	{	
		i=0;
		$('.news-imgs h4').eq(i).addClass('show').siblings().removeClass('show')
	}
	else{
		$('.news-imgs h4').eq(i).addClass('show').siblings().removeClass('show')
	}
})

$('.news-imgs span.goNext').click(function(){
	i++;
	if(i>3) 
		{
			i=3;
			$('.news-imgs h4').eq(i).addClass('show').siblings().removeClass('show');
		}
	else{
		$('.news-imgs h4').eq(i).addClass('show').siblings().removeClass('show');
	}
})


$('.list-news .list-news-tag ul li').click(function(){
	var m=$(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.list-news-col').eq(m).addClass('show').siblings().removeClass('show');
	
})


$('.head .sub-menu-lang h3').click(function(){
	$('.head .sub-menu-lang .sub-lang').show();
})
$('.head .sub-menu-lang .sub-lang p').click(function(){
	var language=$(this).text();
	$('.head .sub-menu-lang h3 span').text(language);
	$('.head .sub-menu-lang .sub-lang').hide();
})

$('.head .sub-menu-lang').hover(function(){
	$('.head .sub-menu-lang .sub-lang').hide();
})

var f=0;
$('.news-col-imgs .goPrevious').click(function(){
	f--;
	if(f<0) 
	{	
		f=0;
		$('.news-col-imgs-li ul').animate({"left":-f*100+"%"},300);
		console.log(f);
	}
	else{
		$('.news-col-imgs-li ul').animate({"left":-f*100+"%"},300);
		console.log(f);
	}
})

$('.news-col-imgs .goNext').click(function(){
	f++;
	if(f>4) 
	{	
		f=4;
		$('.news-col-imgs-li ul').animate({"left":f*-100+"%"},300);
		console.log(f);
	}
	else{
		$('.news-col-imgs-li ul').animate({"left":f*-100+"%"},300);
		console.log(f);
	}
})

$('.lead-tag-tit li').click(function(){
	var m=$(this).index();
	$('.lead-tag-col').eq(m).addClass('show').siblings().removeClass('show');
	$(this).addClass('active').siblings().removeClass('active');
})












