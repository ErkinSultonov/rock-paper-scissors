$(document).ready(function () {
    
    var scoreHuman = 0;
    var scoreBot = 0;
    $('.scoreBot').html(scoreBot);    
    $('.scoreHuman').html(scoreHuman);

    $('.start').click(function () { 
        $(this).remove();
        var sec = 100
        var timer = setInterval(function() {
        sec = sec - 10;
        $('.timer').animate({width: sec + '%'}, 300)
        $('.overlay').click(function () { 
                $('.window').animate({top: '-600px'}, 1000);
                $('.overlay').fadeOut();
                location.reload();
            })
        if (sec == 0 && $('.timer').attr('what') == 'lose') {
            clearInterval(timer);
            $('.overlay').fadeIn();
            $('.timer').attr('what', 'lose')
            $('.window').animate({top: '150px'}, 1000);
            $('.w-text').append('<h2>Time!!!<h2>');
            $('.top').append('<img src="img/giphy.gif" alt="">')
        }
        else if(sec > 0 && $('.timer').attr('what') == 'you'){
            clearInterval(timer);
            $('.w-text').append('Congratulations you won the bot by a score of <span>'+ scoreBot + ':' + scoreHuman + '</span>')
            $('.top').append('<img src="img/source.gif" alt="">')
        }
        else if(sec > 0 && $('.timer').attr('what') == 'bot'){
            clearInterval(timer);
            $('.w-text').append('Unfortunately the bot defeated you with the score of <span>'+ scoreBot + ':' + scoreHuman + '</span>')
            $('.top').append('<img src="img/lose.gif" alt="">')
        }
        }, 1000);







        $('.button').click(function (a) { 
            var person = $(this).attr('name');
            var bot = Math.floor(Math.random() * 3) + 1;
            $('.right').children().remove();
            $('.left').children().remove();
            if(bot == person){
                $('.out').html('Draw');
                var human = $('.button:nth-child('+ person +')').children();
                var mac = $('.button:nth-child('+ bot +')').children();
                $(human).clone().appendTo('.right')
                $(mac).clone().appendTo('.left')
                $('.left').css('border-color', '#001aff')
                $('.right').css('border-color', '#001aff')
                
            }
            else if(bot == 1 && person == 2 || bot == 2 && person == 3 || bot == 3 && person == 1){
                scoreBot++;
                $('.scoreBot').html(scoreBot);
                var mac = $('.button:nth-child('+ bot +')').children();
                var human = $('.button:nth-child('+ person +')').children();
                $(human).clone().appendTo('.right');
                $(mac).clone().appendTo('.left');
                $('.left').css('border-color', '#5eff00');
                $('.right').css('border-color', '#ff0000');
                if(scoreBot === 3){
                    $('.overlay').fadeIn();
                    $('.timer').attr('what', 'bot')
                    $('.window').animate({top: '150px'}, 1000);
                }
            }
            
            else if(bot == 2 && person == 1 || bot == 3 && person == 2 || bot == 1 && person == 3){
                scoreHuman++;
                $('.scoreHuman').html(scoreHuman);
                var human = $('.button:nth-child('+ person +')').children();
                var mac = $('.button:nth-child('+ bot +')').children();
                $(human).clone().appendTo('.right');
                $(mac).clone().appendTo('.left');
                $('.right').css('border-color', '#5eff00');
                $('.left').css('border-color', '#ff0000');
                if(scoreHuman === 3){
                    $('.overlay').fadeIn();
                    $('.timer').attr('what', 'you');
                    $('.window').animate({top: '150px'}, 1000);
                }
            }
            $('.overlay').click(function () { 
                $('.window').animate({top: '-600px'}, 1000);
                $('.overlay').fadeOut();
                location.reload();
            })

            
        })
     })
    })
