!function(e){"use strict";var l=e("header").height()+50;e(".header_area").length&&e(window).scroll(function(){e(window).scrollTop()>=l?e(".header_area").addClass("navbar_fixed"):e(".header_area").removeClass("navbar_fixed")});var t=e(".menu_right > li").has("ul").children("a");t.on("click",function(){return t.not(this).closest("li").find("ul").slideUp(200),e(this).closest("li").children("ul").slideToggle(200),!1}),e(".toggle_icon").on("click",function(){e("body").toggleClass("open")}),e(".side_menu .list.menu_right").mCustomScrollbar({theme:"dark"}),e(".package-area").magnificPopup({delegate:".img-popup",type:"image",gallery:{enabled:!0}}),e(".play-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});new Swiper(".swiper-container",{autoplay:{delay:5e3},speed:2e3,loop:!0});if(e(".active-gallery-carousel").owlCarousel({items:2,loop:!0,margin:30,nav:!0,navText:["<img src='img/cprev.png'>","<img src='img/cnext.png'>"],dots:!1,responsive:{0:{items:1},420:{items:1},575:{items:1},768:{items:2},1200:{items:2},1680:{items:2}}}),e(".active_testimonial").owlCarousel({items:1,loop:!0,dots:!1,autoplay:!1,nav:!0,navText:["<img src='img/cprev.png'>","<img src='img/cnext.png'>"]}),e("#mc_embed_signup").find("form").ajaxChimp(),e("select").niceSelect(),e("#datepicker").datepicker({showOn:"button",buttonImage:"img/calendar.png",buttonImageOnly:!0}),e("#datepicker1").datepicker({showOn:"button",buttonImage:"img/calendar.png",buttonImageOnly:!0}),e("#mapBox").length){var a=e("#mapBox").data("lat"),o=e("#mapBox").data("lon"),r=e("#mapBox").data("zoom");e("#mapBox").data("marker"),e("#mapBox").data("info"),e("#mapBox").data("mlat"),e("#mapBox").data("mlon"),new GMaps({el:"#mapBox",lat:a,lng:o,scrollwheel:!1,scaleControl:!0,streetViewControl:!1,panControl:!0,disableDoubleClickZoom:!0,mapTypeControl:!1,zoom:r,styles:[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#dcdfe6"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#dcdfe6"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}]})}}(jQuery);