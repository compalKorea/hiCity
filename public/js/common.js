/**
 * Created by 동준 on 2014-10-16.
 */
var windowHeight = $( window ).height();
getDate();

$(window).bind("scroll", function() {
    if(this.pageYOffset > $(window).height()-91){
        $("#nav").addClass("main-header-link-fix-before");
    }
    if(this.pageYOffset > $( window ).height()-90) {
        $("#nav").addClass('main-header-link-fix');
    }else{
        $("#nav").removeClass('main-header-link-fix');
        $("#nav").removeClass("main-header-link-fix-before");
    }

});

/* 윈도우 창 바뀔때마다 위치 변경 */
$( window ).resize(function() {
    $("section").css('top', $( window ).height()-28);
    windowHeight = $( window ).height();
});

/* 첫 로딩시 위치 설정 */
$(window).load(function(){
    $("section").css('top', $( window ).height()-28);
    windowHeight = $( window ).height();
    setInterval("getDate()", 1000);
});

function getDate(){
    var london = new Date().toLocaleString('en-US', { timeZone: 'Europe/London' });
    var ndate = new Date(london);
    var nyear = ndate.getFullYear();
    var nmonth = ndate.getMonth() + 1;
    var nday = ndate.getDate();
    var nhours = ndate.getHours();
    var nminutes = ndate.getMinutes();
    var nseconds = ndate.getSeconds();
    if(String(nmonth).length == 1)
        nmonth = "0" + nmonth;
    if(String(nday).length == 1)
        nday = "0" + nday;
    if(String(nhours).length == 1)
        nhours = "0" + nhours;
    if(String(nminutes).length == 1)
        nminutes = "0" + nminutes;
    if(String(nseconds).length == 1)
        nseconds = "0" + nseconds;

    $("#yyyy").html(nyear);
    $("#mon").html(nmonth);
    $("#dd").html(nday);
    $("#hh").html(nhours);
    $("#min").html(nminutes);
    $("#ss").html(nseconds);
}

function showMenu(id){
    $("#section").show();
    $("#"+id).show();
    console.log('aaa');
    this.moveScroll(windowHeight);
}

function moveScroll(top){
    $("html, body").stop().animate({ scrollTop: top }, 500);
}

function moveList(obj){
    if(obj=='l' && $("#items").find('li:last').attr('class') == 'active'){
        return;
    }else if(obj=='r' && $("#items").find('li:first').attr('class') == 'active'){
        return;
    }

    var i =0;
    $("#items").find('li').each(function(){
        if($(this).attr('class') == 'active'){
            $(this).removeClass();
            if(obj=='l'){
                var j=i+1;
                $("#items").stop().animate({left : '-=40%'}, 500);
            }else {
                var j=i-1;
                $("#items").stop().animate({left : '+=40%'}, 500);
            }
            $("#items").find('li:eq('+(j)+')').addClass('active');
            return;
        }
        i++;
    });
}