var Menu = (function () {
    var _Init = function (elmId, menId, sc) {
        var menu, btn, showClass, height;

        btn = document.getElementById(elmId);
        menu = document.getElementById(menId);
        showClass = sc;

        btn.addEventListener(click, function () { menuToggle(menu, showClass) }, false);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX0luaXQgPSBmdW5jdGlvbiAoZWxtSWQsIG1lbklkLCBzYykge1xyXG4gICAgICAgIHZhciBtZW51LCBidG4sIHNob3dDbGFzcywgaGVpZ2h0O1xyXG5cclxuICAgICAgICBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbG1JZCk7XHJcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbklkKTtcclxuICAgICAgICBzaG93Q2xhc3MgPSBzYztcclxuXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2ssIGZ1bmN0aW9uICgpIHsgbWVudVRvZ2dsZShtZW51LCBzaG93Q2xhc3MpIH0sIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1lbnVUb2dnbGUgPSBmdW5jdGlvbiAobWVudSwgc2hvd0NsYXNzKSB7XHJcbiAgICAgICAgaWYgKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhzaG93Q2xhc3MpKSB7XHJcbiAgICAgICAgICAgIHNob3dNZW51KG1lbnUsIHNob3dDbGFzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlkZU1lbnUobWVudSwgc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgaGlkZU1lbnUgPSBmdW5jdGlvbiAobWVudSwgc2hvd0NsYXNzKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKHNob3dDbGFzcylcclxuICAgIH1cclxuICAgIHZhciBzaG93TWVudSA9IGZ1bmN0aW9uIChtZW51LCBzaG93Q2xhc3MpIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoc2hvd0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEluaXQ6IGZ1bmN0aW9uIChlbG1JZCwgbWVuSWQsIHdyYXApIHtcclxuICAgICAgICAgICAgX0luaXQoZWxtSWQsIG1lbklkLCB3cmFwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxufSkoKTsiXX0=
