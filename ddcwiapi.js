(function(WIAPI) {
    var API = new WIAPI('ipitcrew-text');
    API.utils.getConfig().then(function(config) {
        API.subscribe('page-load-v1', function(ev) {
            API.insert('page-footer', function(elem, meta) {
                var div = document.createElement('div');
                div.id = 'cb-startText';
                API.append(elem, div);
                API.loadJS('https://chatbox.com/ipc/assets/' + config.dealerName + '.js');
            });
        });
    });
})(window.DDC.API);
