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