function priorityNav(eventType) {

    var navElementsWidth = 0;
    var navElementsHiddenWidth = 0;
    var navElementsShownWidth = 0;
    var moreButtonWidth = $('#nav-menu .more').outerWidth(true);
    var navWidth = $('#nav-menu').outerWidth(true);
    var navElementsTemp = [];

    $('#nav-menu > li:not(.more)').each(function() {

        navElementsWidth += + $(this).outerWidth( true );
        $(this).attr('data-width', $(this).outerWidth(true));

        if ( (navElementsWidth + moreButtonWidth) >= navWidth ) {
            navElementsTemp.push(this);
        } else {
            navElementsShownWidth+= + $(this).outerWidth( true );
        }

    });

    $(navElementsTemp).prependTo( $('#nav-menu .more ul.more-list') );

    if ( eventType === 'resize' ) {

        $('.more-list > li').each(function() {

            navElementsHiddenWidth += + $(this).attr('data-width');

            if ( (navElementsShownWidth + navElementsHiddenWidth + moreButtonWidth) <= navWidth ) {
                $('li.more').before( $(this) );
            } else {
                return false;
            }

        });

    }

    if ($('.more-list li').length > 0) {
        $('.more').css('display','inline-block');
    } else {
        $('.more').css('display','none');
    }

}

    $(window).on('resize load',function(e){
        priorityNav(e.type);
    });