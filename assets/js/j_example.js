$(document).ready(function(){
    $(document).keydown(function(e){
        switch (e.which){
            case 38: //top key
                $('.player1').animate({
                    top: '-=50'
                });
                break;
        }
    });
});