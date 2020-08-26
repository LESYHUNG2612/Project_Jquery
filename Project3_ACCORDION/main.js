$(function(){
    $('.NDKhoi').slideUp();
    // thu một khối lại
    $('h3').click(function(event){
        $('.NDKhoi').slideUp();
        // khi click trả các khối về giá trị ban đầu
        console.log('đã click');
        $(this).next('.NDKhoi').slideToggle();
        // sự kiên click xổ nội dung khối xuống(next tiếp theo) 
        //click tiếp thu lên 
        //$(this).next('.NDKhoi').slideDown();
        // sự kiên click xổ nội dung khối xuống(next tiếp theo)
        //$(this).addClass('Color')
        // khi click thêm class Color vào h3 đổi màu h3 trong css
        $(this).toggleClass('Color')
        // khi click thêm class Color vào h3 đổi màu h3 được định 
        //dạng bên css click lần 2 biến mất vì sử dụng togger

    });
});