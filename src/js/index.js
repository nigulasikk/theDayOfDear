$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        // sectionsColor: ['#8FB98B', '#DE564B', '#EAE1C0'],
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            $(".show").removeClass('show').addClass('hide');
            //using index
            if (index == 2) {
                $(".hide").removeClass('hide').addClass('show');
            }

        }
    });

    var river = $(".river");

    var positionX = river.css("background-position-x");
    var i = 0;
    setInterval(function() {
        i++;
        river.css("background-position-x", i);

    }, 40);
});