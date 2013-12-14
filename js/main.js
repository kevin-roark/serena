$(function() {

    var num_photos = 21;
    var photo_num_to_caption = {
        '1': 'thanks Sue',
        '2': 'with Sue Roe',
        '3': "ok that's enough",
        '4': "<a href='http://www.flickr.com/photos/david-moses/'>http://www.flickr.com/photos/david-moses/</a>",
        '5': "learn to let go",
        '6': "i know i know so risqué",
        '7': "christmas 2010 what",
        '8': "complex country, not flat",
        '9': "Timothy Hyde",
        '10': 'lol remember bathing suits',
        '11': 'lol hair',
        '12': 'I have one pose guys and this is it',
        '13': "what's in my eye though",
        '14': 'what ice cream place?',
        '15': 'leaves',
        '16': 'Be a body',
        '17': 'flowers',
        '18': 'orly i am a big fan of you',
        '19': 'maybe i could have some more phone charms on that intensity II',
        '20': 'guess',
        '21': 'storm king art center'
    };

    function get_random_color() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    function get_serena_image() {
        var photo_id = getRandomInt(1, num_photos).toString();
        var photo_url = 'img/good-stuff/' + photo_id + '.jpg';
        var image_html = '<img src="' + photo_url + '" alt="" id="serena-image"></img>';
        var caption = photo_num_to_caption[photo_id];
        return {image: image_html, caption: caption};
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } 

    $(document).ready(function() {
        var serena = $('#serena-name');
        var serena_left = $('#serena-name-left');
        var serena_right = $('#serena-name-right');
        var image_place = $('#serena-image-place');
        var caption_place = $('#serena-image-caption');

        $('#place-of-interest').mouseenter(hover_action);
        $('#place-of-interest').mouseleave(hover_action);
        image_place.click(hover_action);

        function hover_action(event, c) {
            caption_place.html('');

            if (!c)
                var c = get_random_color();
            set_names_color(c);
            console.log(c);

            var im = get_serena_image();
            image_place.html(im.image);
            setTimeout(function finishImage() {
                caption_place.html(im.caption);
                var border_style = '5px solid ' + c;
                $('#serena-image').css('border', border_style);
            }, 250);
        }

        function set_names_color(c) {
            serena.css('color', c);
            serena_left.css('color', c);
            serena_right.css('color', c);
        }

        hover_action(null, '#000');
    });

});