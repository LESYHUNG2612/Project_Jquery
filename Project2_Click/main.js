$(function(){
    $('.DangKy').animate({opacity : 0,marginLeft : -100});
    // form đăng ký biến mất
    $('NutDangKy').click(function( event ){
        $('.DangNhap').animate({opacity : 0,marginLeft: -100});
        $('.DangKy').animate({opacity : 1,marginLeft : 0});
    });
    $('NutDangNhap').click(function( event ){
        $('.DangKy').animate({opacity : 0,marginLeft : -100});
        $('.DangNhap').animate({opacity : 1,marginLeft : 0});
    });
});
// chưa sửa lỗi hiệu ứng