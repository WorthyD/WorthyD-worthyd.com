var HomeScreen = (function () {
    var _Init = function (elmId) {
        var infoBlock = document.querySelectorAll(elmId);
        if (infoBlock.length > 0) {
            infoBlock[0].classList.add('bg-' + (Math.floor(Math.random() * 11) + 1));
        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBIb21lU2NyZWVuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfSW5pdCA9IGZ1bmN0aW9uIChlbG1JZCkge1xyXG4gICAgICAgIHZhciBpbmZvQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsbUlkKTtcclxuICAgICAgICBpZiAoaW5mb0Jsb2NrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW5mb0Jsb2NrWzBdLmNsYXNzTGlzdC5hZGQoJ2JnLScgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEluaXQ6IGZ1bmN0aW9uIChlbG1JZCkge1xyXG4gICAgICAgICAgICBfSW5pdChlbG1JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pKCk7IiwidmFyIE1lbnUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9Jbml0ID0gZnVuY3Rpb24gKGVsbUlkLCBtZW5JZCwgc2MpIHtcclxuICAgICAgICB2YXIgbWVudSwgYnRuLCBzaG93Q2xhc3MsIGhlaWdodDtcclxuIFxyXG4gICAgICAgIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsbUlkKTtcclxuICAgICAgICBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVuSWQpO1xyXG4gICAgICAgIHNob3dDbGFzcyA9IHNjO1xyXG5cclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IG1lbnVUb2dnbGUobWVudSwgc2hvd0NsYXNzKSB9LCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBtZW51VG9nZ2xlID0gZnVuY3Rpb24gKG1lbnUsIHNob3dDbGFzcykge1xyXG4gICAgICAgIGlmICghbWVudS5jbGFzc0xpc3QuY29udGFpbnMoc2hvd0NsYXNzKSkge1xyXG4gICAgICAgICAgICBzaG93TWVudShtZW51LCBzaG93Q2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZGVNZW51KG1lbnUsIHNob3dDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGhpZGVNZW51ID0gZnVuY3Rpb24gKG1lbnUsIHNob3dDbGFzcykge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShzaG93Q2xhc3MpXHJcbiAgICB9XHJcbiAgICB2YXIgc2hvd01lbnUgPSBmdW5jdGlvbiAobWVudSwgc2hvd0NsYXNzKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBJbml0OiBmdW5jdGlvbiAoZWxtSWQsIG1lbklkLCB3cmFwKSB7XHJcbiAgICAgICAgICAgIF9Jbml0KGVsbUlkLCBtZW5JZCwgd3JhcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pKCk7Il19
