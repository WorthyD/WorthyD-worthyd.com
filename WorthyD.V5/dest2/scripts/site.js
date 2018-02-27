var RandomBG = (function () {
    var _Init = function (elmId) {

    }

    return {
        Init: function (elmId) {
            _Init(elmId);
        }
    };

})();
var Menu = (function () {
    var _Init = function (elmId, menId, sc) {
        var menu, btn, showClass, height;
 
        btn = document.getElementById(elmId);
        menu = document.getElementById(menId);
        showClass = sc;

        btn.addEventListener('click', function () { menuToggle(menu, showClass) }, false);

    }

    var menuToggle = function (menu, showClass) {
        if (!menu.classList.contains(showClass)) {
            showMenu(menu, showClass);
        } else {
            hideMenu(menu, showClass);
        }
    }
    var hideMenu = function (menu, showClass) {
        menu.classList.remove(showClass)
    }
    var showMenu = function (menu, showClass) {
        menu.classList.add(showClass);
    }

    return {
        Init: function (elmId, menId, wrap) {
            _Init(elmId, menId, wrap);
        }
    };

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSYW5kb21CRyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX0luaXQgPSBmdW5jdGlvbiAoZWxtSWQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBJbml0OiBmdW5jdGlvbiAoZWxtSWQpIHtcclxuICAgICAgICAgICAgX0luaXQoZWxtSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG59KSgpOyIsInZhciBNZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfSW5pdCA9IGZ1bmN0aW9uIChlbG1JZCwgbWVuSWQsIHNjKSB7XHJcbiAgICAgICAgdmFyIG1lbnUsIGJ0biwgc2hvd0NsYXNzLCBoZWlnaHQ7XHJcbiBcclxuICAgICAgICBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbG1JZCk7XHJcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbklkKTtcclxuICAgICAgICBzaG93Q2xhc3MgPSBzYztcclxuXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBtZW51VG9nZ2xlKG1lbnUsIHNob3dDbGFzcykgfSwgZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVudVRvZ2dsZSA9IGZ1bmN0aW9uIChtZW51LCBzaG93Q2xhc3MpIHtcclxuICAgICAgICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKHNob3dDbGFzcykpIHtcclxuICAgICAgICAgICAgc2hvd01lbnUobWVudSwgc2hvd0NsYXNzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWRlTWVudShtZW51LCBzaG93Q2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBoaWRlTWVudSA9IGZ1bmN0aW9uIChtZW51LCBzaG93Q2xhc3MpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoc2hvd0NsYXNzKVxyXG4gICAgfVxyXG4gICAgdmFyIHNob3dNZW51ID0gZnVuY3Rpb24gKG1lbnUsIHNob3dDbGFzcykge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChzaG93Q2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgSW5pdDogZnVuY3Rpb24gKGVsbUlkLCBtZW5JZCwgd3JhcCkge1xyXG4gICAgICAgICAgICBfSW5pdChlbG1JZCwgbWVuSWQsIHdyYXApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG59KSgpOyJdfQ==
