(function(WIAPI) {
    var API = new WIAPI('ipitcrew-text');
    API.subscribe('page-load-v1', function(ev) {
        API.utils.getConfig().then(function(config) {
            API.insert('page-footer', function(elem, meta) {
                var div = document.createElement('div');
                div.id = 'livechat-button-' + config.buttonId + '';
                API.append(elem, div);
                API.loadJS('https://cdn.jsdelivr.net/gh/ipitcrew/instacom/' + config.dealerId + '.js');
            });
        });
    });
})(window.DDC.API);
