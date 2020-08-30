$(document).ready(function() {
    console.log('keke');
    console.log($('.Chapter1').offset().top);
    //tính tọa độ phần tử
    $('.TopHeader ul li:nth-child(1) a ').on('click',function(event){
        event.preventDefault();
        // ngăn chặn thoát khỏi trang web
        $('body').animate({ scrollTop: $('.Chapter1').offset().top},200);
    });
});
