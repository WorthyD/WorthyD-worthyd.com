var Themer = {
    init: function (cookieName) {
        var pObj = this;
        $('li', '.ThemerWrapper').click(function () {
        	pObj.LoadStyle($(this).data('link'), cookieName);
            return false;
        }).hover(function () {
            //$(this).css('cursor', 'pointer');
            this.style.cursor = 'pointer';
        }, function () {
            this.style.cursor = '';

        });

        $('.themeArrow', '.ThemerWrapper').click(function () {
            $('ul', '.ThemerWrapper').slideToggle("fast", function () {
                if ($('li:visible', '.ThemerWrapper ul').length > 0) {
                    $('.themeArrow', '.ThemerWrapper').addClass('active');
                } else {
                    $('.themeArrow', '.ThemerWrapper').removeClass('active');
                }
            });
            return false;
        });
    },
    LoadStyle: function (path, cookieName) {
        $("#custom").attr('href', path);

        var expires = '';

        var date = new Date();
        date.setTime(date.getTime() + (5 * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();


        document.cookie = cookieName + '=' + path + expires + '; path=/';
    }

};	