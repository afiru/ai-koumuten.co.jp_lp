(function () {
    function logEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute('data-src'), element.getAttribute('src'));
    }

    var callback_enter = function (element) {
        logEvent("ENTERED", element);
    };
    var callback_load = function (element) {
        logEvent("LOADED", element);
    };
    var callback_set = function (element) {
        logEvent("SET", element);
    };
    var callback_error = function (element) {
        logEvent("ERROR", element);
        element.src = "https://placehold.it/220x280?text=Placeholder";
    };

    var llWebp = new LazyLoad({
        elements_selector: ".lazy.has-webp",
        to_webp: true,
        callback_enter: callback_enter,
        callback_load: callback_load,
        callback_set: callback_set,
        callback_error: callback_error
    });
    var llStandard = new LazyLoad({
        elements_selector: ".lazy:not(.has-webp)",
        callback_enter: callback_enter,
        callback_load: callback_load,
        callback_set: callback_set,
        callback_error: callback_error
    });
}());

//フォントchange
jQuery(function($){
   $(window).ready( function() {
        $('#post_num').jpostal({
           postcode : [
              '#post_num'
           ],
           address : {
              '#prefectures'  : '%3',
              '#address'  : '%4%5%6'
           }
        });
     });
});