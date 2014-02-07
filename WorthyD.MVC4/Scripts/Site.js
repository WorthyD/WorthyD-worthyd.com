///#source 1 1 /Scripts/Libs/Util.js
var U = (function () {
    return {
        UtoP: function (i) {
            return i + 'px';
        }
    };
})();
///#source 1 1 /Scripts/Views/Shared/Menu.js
var Menu = (function () {


    var _Init = function (elmId, menId, sc) {
        var menu, btn, showClass, height;

        btn = document.getElementById(elmId);
        menu = document.getElementById(menId);
        showClass = sc;
        //wrap = document.getElementById(wrap);

        btn.addEventListener(click, function () { menuToggle(menu, showClass) }, false);

        //height = menu.clientHeight;

        //menu.classList.add('closedMenu');
    }

    var menuToggle = function (menu, showClass) {
        console.log(menu.classList);
        if (!menu.classList.contains(showClass)) {
            console.log('show');
            console.log(menu);
            showMenu(menu, showClass);
        } else {
            hideMenu(menu, showClass);
        }
    }
    var hideMenu = function (menu, showClass) {

        //menu = document.getElementById(menId);
        menu.classList.remove(showClass)
    }
    var showMenu = function (menu, showClass) {
        //menu.style.height = U.UtoP(height);
        //menu = document.getElementById(menId);
        menu.classList.add(showClass);
    }

    return {
        Init: function (elmId, menId, wrap) {
            _Init(elmId, menId, wrap);
        }
    };

})();
