/**
 * Created by 동준 on 2014-10-16.
 */
    $(window).bind("scroll", function() {
        console.log(this.pageYOffset);
        if(this.pageYOffset > $( window ).height()) {
            $("#nav").addClass('main-header-link-fix');
        }else{
            $("#nav").removeClass('main-header-link-fix');
        }

    });

    /* 윈도우 창 바뀔때마다 위치 변경 */
    $( window ).resize(function() {
        $("section").css('top', $( window ).height());
    });

    /* 첫 로딩시 위치 설정 */
    $(window).load(function(){
        $("section").css('top', $( window ).height());
    });

