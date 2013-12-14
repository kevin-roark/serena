$(function() {

    function get_random_color() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    $(document).ready(function() {
        var serena = $('#serena-name');

        serena.hover(function() {
            var c = get_random_color();
            serena.css('color', c);
        });
    });

});