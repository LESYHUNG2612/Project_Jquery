$(function(){
    $('.DangKy').animate({opacity : 0,marginLeft : -100});
    // form đăng ký biến mất
    $('.NutDangKy').click(function(event){
        // sự kiện click vào nút đăng ký
        $('.DangNhap').animate({opacity : 0,marginLeft: -100});
        //from đăng nhập ẩn
        $('.DangKy').animate({opacity : 1,marginLeft : 0});
        //from đăng ký hiện
    });
    $('.NutDangNhap').click(function(event){
        // sự kiện click vào nút đăng ký
        $('.DangKy').animate({opacity : 0,marginLeft : -100});
        //from đăng ký ẩn
        $('.DangNhap').animate({opacity : 1,marginLeft: 0});
        //from đăng nhập hiện
    });
});
// chưa sửa lỗi hiệu ứng