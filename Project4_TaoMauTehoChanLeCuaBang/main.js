$(document).ready (function() {  
    $('tr:even').addClass('alt'); 
    // giữa hai bảng sẽ xuất hiện lỗi
    //$('tr:nth-child(odd)').addClass('alt'); 
    // luôn đúng vì tính từ cha của nó
}); 
$(document).ready(function() {  
   $('tr:nth-child(odd)').addClass('alt');  
    $('td:contains(Henry)').addClass('highlight'); 
    // có chữ henry tạo hiệu ứng hightlight
}); 