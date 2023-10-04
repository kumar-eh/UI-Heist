$(document).ready(function(){
    $('.controllers button').prop('disabled', true);
});

$(function(){
    var existingChannel = null;

    $(function(){
        var flag = false;
        $('.btn-power').click(function(){
            flag = flag ? false : true;
            if(flag){
                $('.next-channel').click();
                $('.btn-power').text('OFF');
                $('.controllers button').prop('disabled', false);
            }
            else{
                $('.television').empty();
                $('.btn-power').text('ON');
                $('.controllers button').prop('disabled', true);
            }
        });
    });

    $(function(){
        $('.next-channel').click(function(){
            $('.television').empty();
            let number = randomNumber();
            existingChannel = number;
            let $image = $("<img src='assets/images/" + number + ".jpg' style='object-fit: contain; width:100%; height:100%'>");
            $('.television').append($image);
            console.log(existingChannel);
        });
    });

    function randomNumber(){
        let a = Math.floor(Math.random() * 7);
        if(existingChannel == a){
            console.log('repeat');
            return Math.floor((a+1)%a);
        }
        else{
            return a;
        }
    }

});


