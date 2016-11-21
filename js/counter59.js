$(function(){

    function  CountBox(i) {
        $(".last-btn-download .counter-download").val(i);
            
        if (i == 0){
            $(".last-btn-download .counter-download").addClass('hidden');
            $(".last-btn-download .btn-submit-infofile").removeClass('hidden');
        }
    };

    var interval;
    window.onload = function () {
        var i = 59;
        interval = setInterval(function(){
           CountBox(i);
           i--;     
           if(i < 0){
            clearInterval(interval);
           }
            
        }, 1000)    

    };
});    