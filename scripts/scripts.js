$(document).ready(function(){
    $('.controllers button').prop('disabled', true);
});

$(function(){
    var channelNumber = 0;
    let $volume = 10;
    let channelSize = 50;
    let channelContent = [];
    let $powerButton = $('.btn-power');
    let $nextChannel = $('.next-channel');
    let $controllerButtons = $('.controllers button');
    let $television = $('.television');
    let $previousChannel = $('.previous-channel');
    let $increaseVolume = $('.increase-volume');
    let $decreaseVolume = $('.decrease-volume');

    //Power button/Switch is clicked
    $(function(){
        var flag = false;
        $powerButton.click(function(){
            $controllerButtons.css('cursor', 'default');
            flag = flag ? false : true;
            if(flag){
                for (let i = 0; i < channelSize; i++) {
                    channelContent.push(randomNumber());
                }
                console.log(channelContent);
                $nextChannel.click();
                $powerButton.text('OFF');
                $controllerButtons.prop('disabled', false);
            }
            else{
                $controllerButtons.css('cursor', 'no-drop');
                $television.empty();
                $powerButton.text('ON');
                $controllerButtons.prop('disabled', true);
            }
        });
    });


    //Next Channel is clicked if channel number goes above 50 it comes to channel number 1
    $(function(){
        $nextChannel.click(function(){
            channelNumber++;
            if(channelNumber>50)
                channelNumber = 1;
            $television.empty();
            let $channelNumberComponent = $('<div>');
            $channelNumberComponent.addClass('channel-number');
            $channelNumberComponent.text("Channel Number: " + channelNumber);
            let $image = $("<img src='assets/images/" + channelContent[channelNumber-1] + ".jpg' style='object-fit: cover; width:100%; height:100%'>");
            $television.append($channelNumberComponent);
            $television.append($image);
        });
    });


    //Previous Channel is clicked, if channel number goes below zero it goes to channel number 50
    $(function(){
        $previousChannel.click(function(){
            channelNumber--;
            if(channelNumber<1)
                channelNumber = 50;
            $television.empty();
            let $channelNumberComponent = $('<div>');
            $channelNumberComponent.addClass('channel-number');
            $channelNumberComponent.text(channelNumber);
            let $image = $("<img src='assets/images/" + channelContent[channelNumber-1] + ".jpg' style='object-fit: contain; width:100%; height:100%'>");
            $television.append($channelNumberComponent);
            $television.append($image);
        });
    });

    //Increase volume button is clicked
    $increaseVolume.click(function(){
        let $volumeContainer = $('<div>');
        $volumeContainer.addClass('volume');
        $volume++;
        if($volume>50)
            $volumeContainer.text("Maximum volume");
        else
            $volumeContainer.text($volume);
        $television.append($volumeContainer);
        function fadeOut(el) {
           var opacity = 1; // Initial opacity
           var interval = setInterval(function() {
              if (opacity > 0) {
                 opacity -= 0.1;
                 $(el).css('opacity', opacity);
              } else {
                 clearInterval(interval); // Stop the interval when opacity reaches 0
                 $(el).remove(); // Hide the element
              }
           }, 50);
        }
        $volumeComponent = $('.volume');
        fadeOut($volumeComponent);
    });


    //Decrease volume button is clicked
    $decreaseVolume.click(function(){
        let $volumeContainer = $('<div>');
        $volumeContainer.addClass('volume');
        $volume--;
        if($volume<1){
            $volumeContainer.text("Muted");
            $volume=0;
        }
        else
            $volumeContainer.text($volume);
        $television.append($volumeContainer);
        function fadeOut(el) {
           var opacity = 1; // Initial opacity
           var interval = setInterval(function() {
              if (opacity > 0) {
                 opacity -= 0.1;
                 $(el).css('opacity', opacity);
              } else {
                 clearInterval(interval); // Stop the interval when opacity reaches 0
                 $(el).remove(); // Hide the element
              }
           }, 50);
        }
        $volumeComponent = $('.volume');
        fadeOut($volumeComponent);
    });

    //Random number for channels
    function randomNumber(){
        let a = Math.floor(Math.random() * 7);
        return a;
    }

});


