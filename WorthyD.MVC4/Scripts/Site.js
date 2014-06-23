///#source 1 1 C:\Dev\PersonalProjects\WorthyD\WorthyD\WorthyD.MVC4\Scripts\Libs\Util.js
var U = (function () {
    return {
        UtoP: function (i) {
            return i + 'px';
        }
    };
})();
///#source 1 1 C:\Dev\PersonalProjects\WorthyD\WorthyD\WorthyD.MVC4\Scripts\Views\Shared\Menu.js
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
