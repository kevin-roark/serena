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

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
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
        var banner = $('#christmas-banner');
        var image_place = $('#serena-image-place');
        var caption_place = $('#serena-image-caption');

        serena.mouseenter(hover_action);
        serena_right.mouseenter(hover_action);
        serena_left.mouseenter(hover_action);
        $('#place-of-interest').click(hover_action);

        function hover_action(event, c) {
            caption_place.html('');

            if (!c)
                c = get_random_color();
            set_names_color(c);
            set_background_color(c);

            var im = get_serena_image();
            image_place.html(im.image);
            setTimeout(function finishImage() {
                caption_place.html(im.caption);
                var border_style = '5px solid ' + c;
                $('#serena-image').css('border', border_style);
            }, 75);
        }

        function set_names_color(c) {
            serena.css('color', c);
            serena_left.css('color', c);
            serena_right.css('color', c);
            banner.css('color', c);
        }

        function set_background_color(c) {
            var rgb = hexToRgb(c);
            if (! rgb)
                return;
            var col = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.5)';
            $('body').css('background-color', col);
        }

        hover_action(null, '#000');
    });

});