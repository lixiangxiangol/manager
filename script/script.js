$(document).ready(function(){
    $('#list').bind('mouseover', function () {
        $(this).removeClass('dis');
    });
    $('#list').bind('mouseout', function () {
        $(this).addClass(' dis');
    });
    $("button").bind('click',function(){
        window.location.href="index.html";
    });
});

