




var priloha = 0;
       
       

	function add_attachment() {
		priloha++;	
		if (priloha < 7) {
			var upload_file = document.getElementById('att_'+priloha);
			upload_file.style.display="";
		
		}
		if (priloha == 6) {
			var tlacitko = document.getElementById("add_attch");
			tlacitko.style.visibility="hidden";
		}
	}

	function vyber_typ(co) {
		var hz = document.getElementById('hromadna');
		var normal = document.getElementById('normalni');
		var save_draft = document.getElementById('save_draft');
		if (co == 1) {
            hz.style.display="none";
			normal.style.display="";
			save_draft.style.display="";
		} else {
			hz.style.display="";
			normal.style.display="none";
			save_draft.style.display="none";
		}
	}

       

$( document ).ready(function() {




var p =($("img[src*='149673']",this).addClass('reply').attr('title'));
$("img[src*='149673']").parent().append('<div class="funLabel">'+p+'</div>');

var p =($("img[src*='149681']",this).addClass('forward').attr('title'));
$("img[src*='149681']").parent().append('<div class="funLabel">'+p+'</div>');

var p =($("img[src*='149665']",this).addClass('delete').attr('title'));
$("img[src*='149665']").parent().append('<div class="funLabel">'+p+'</div>');



$('.posta').find('.tree').find('li:first-child').closest('td[valign="top"]').addClass('sidebarPhone');
$('.posta').find('.tree').find('li:first-child').click(function(){
if($(this).closest('td[valign="top"]').hasClass('openSide')){
$(this).closest('td[valign="top"]').removeClass('openSide');
}
else $(this).closest('td[valign="top"]').addClass('openSide');
})

$("a[href*='nova_zprava.pl?lang']").parent().parent().attr('id', 'NM').click(function() {
     ("a[href*='nova_zprava.pl?lang']").parent().parent().attr('id', 'NM').delay(100).mouseout();
    
   
if($('#newMessage').attr('class')=='close'){
$('#newMessage').addClass('open').removeClass('close');
$('#NM').addClass('NMopen').removeClass('NMclose');
}
else {$('#newMessage').addClass('close').removeClass('open');
$('#NM').addClass('NMclose').removeClass('NMopen');
     
}
})




$("a[href='nova_zprava.pl']").parent().parent().attr('id', 'NM').click(function() {
if($('#newMessage').attr('class')=='close'){
$('#newMessage').addClass('open').removeClass('close');
$('#NM').addClass('NMopen').removeClass('NMclose');
}
else {$('#newMessage').addClass('close').removeClass('open');
$('#NM').addClass('NMclose').removeClass('NMopen');
}
})


$('#calTable').load('https://is.stuba.sk/auth/student/moje_studium.pl a[href*="/auth/katalog/rozvrhy_view.pl"]');

$('.posta').children('.container').append('<div id="newMessage" class="close"> </div>');
$('.posta').children('.container').children('form[name="post_slozka"]').children('table:first').addClass('postTable');

$('.rozvrh').children('.container').children('table:first').addClass('rozvrhTable')

$('#newMessage').load('https://is.stuba.sk/auth/posta/nova_zprava.pl form[name="formular"]',function(){

$( '<i class="fa fa-paperclip" onclick="attach()" aria-hidden="true"></i>' ).insertAfter( 'input[type="file"]' );


$('input[type=file]').change(function() {
   $(this).next().addClass('fs'); 
});


});
   



    $('b').parent().parent().addClass("selected");
});

var url = window.location.href;
var tmp = url;
if(url==='https://is.stuba.sk/auth/') url= 'domov';
if(url==='https://is.stuba.sk/auth/posta/slozka.pl') {url= 'posta'
}
if(url==='https://is.stuba.sk/auth/posta/slozka-pl'){
url='posta';
}
if(tmp.startsWith("https://is.stuba.sk/auth/posta/slozka.pl?fid")){
url='posta';

}
if(tmp.startsWith("https://is.stuba.sk/auth/posta/slozka.pl?lang")){
url='posta';

}
if(tmp.startsWith("https://is.stuba.sk/auth/posta/slozka.pl?;fid")){
url='posta add';

}

if(url==='https://is.stuba.sk/auth/student/list.pl') url='list';
if(url.startsWith("https://is.stuba.sk/auth/student/list.pl?")) url='listNext';
    
if (tmp.indexOf("email_on") >= 0) {url='list'}
if (tmp.indexOf("rozvrh") >= 0) {url='rozvrh'}
$('body').addClass(url);








	$(".menu>.item>:nth-child(2)").each(function(){
		if(Number($(this).text()) > 0){
			$(this).parent().addClass("highlighted");
		}
	});
	$(".paint").hover(function(){
		$(".paint>.hidden-area").stop().fadeIn(500);
	}, function(){
		$(".paint>.hidden-area").stop().fadeOut(500);
	})
	$(".paint>.hidden-area>.button").click(function(){
		setColorScheme($("#color-scheme").val());
	})
