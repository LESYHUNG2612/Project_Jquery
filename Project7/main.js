$(document).ready(function(){
    $('.NoiDungKhoi').slideUp();
    //đóng các khối lại

    //click vào thẻ h2
    $('h2').click(function(event){   
        // trạng thái các khối thay đổi(xổ xuống)   
        $(this).next('.NoiDungKhoi').slideToggle();
    });
    //sự kiện click vào tiêu đề khối 
    $('.TieuDeKhoi').click(function(event){
        $(this).toggleClass('Xanh');
        // thay class thành xanh nếu click 1 lần
        // và trả về giá trị ban đầu nếu click lần 2
    });
    //phong to ảnh có sẵn trong file hiệu ứng
    $('.AnhNoiDung a').fancybox({openEffect : 'elastic'});

});