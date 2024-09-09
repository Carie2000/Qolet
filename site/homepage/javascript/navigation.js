(function( $ ) {
    var masthead, menuToggle, siteNavContain, siteNavigation;
    function initMainNavigation( container ) {
        var dropdownToggle = $( '<button />', { 'class': 'dropdown-toggle', 'aria-expanded': false })
            .append( screenReaderText.icon )
            .append( $( '<span />', { 'class': 'qoletscreen-readertext', text: screenReaderText.expand }) );
        container.find( '.menu-item-has-children > a, .page_item_has_children > a' ).after( dropdownToggle );
        container.find( '.current-menu-ancestor > button' )
            .addClass( 'toggled-on' )
            .attr( 'aria-expanded', 'true' )
            .find( '.qoletscreen-readertext' )
            .text( screenReaderText.collapse );
		container.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );
        container.find( '.dropdown-toggle' ).on( 'click', function( e ) {
            var _this = $( this ),
                screenReaderSpan = _this.find( '.qoletscreen-readertext' );
            e.preventDefault();
            _this.toggleClass( 'toggled-on' );
            _this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
            _this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
            screenReaderSpan.text( screenReaderSpan.text() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );
        });
    }

    initMainNavigation( $( '.qolet-main-navigation' ) );
    masthead       = $( '#masthead' );
    menuToggle     = masthead.find( '.menu-toggle' );
    siteNavContain = masthead.find( '.qolet-main-navigation' );
    siteNavigation = masthead.find( '.qolet-main-navigation > div > ul' );

    (function() {
        if ( ! menuToggle.length ) {
            return;
        }
        menuToggle.attr( 'aria-expanded', 'false' );
        menuToggle.on( 'click', function() {
            siteNavContain.toggleClass( 'toggled-on' );
            $( this ).attr( 'aria-expanded', siteNavContain.hasClass( 'toggled-on' ) );
        });
    })();

    (function() {
        if ( ! siteNavigation.length || ! siteNavigation.children().length ) {
            return;
        }
        function toggleFocusClassTouchScreen() {
            if ( 'none' === $( '.menu-toggle' ).css( 'display' ) ) {
                $( document.body ).on( 'touchstart', function( e ) {
                    if ( ! $( e.target ).closest( '.qolet-main-navigation li' ).length ) {
                        $( '.qolet-main-navigation li' ).removeClass( 'focus' );
                    }
                });
                siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' )
                    .on( 'touchstart', function( e ) {
                        var el = $( this ).parent( 'li' );
                        if ( ! el.hasClass( 'focus' ) ) {
                            e.preventDefault();
                            el.toggleClass( 'focus' );
                            el.siblings( '.focus' ).removeClass( 'focus' );
                        }
                    });
            } else {
                siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' ).off( 'touchstart' );
            }
        }
        if ( 'ontouchstart' in window ) {
            $( window ).on( 'resize', toggleFocusClassTouchScreen );
            toggleFocusClassTouchScreen();
        }
        siteNavigation.find( 'a' ).on( 'focus blur', function() {
            $( this ).parents( '.menu-item, .page_item' ).toggleClass( 'focus' );
        });
    })();
})( jQuery );