// ==UserScript==
// @name         WME Contador MR Caribe Co 2019
// @namespace    Dude495
// @version      2019.04.01
// @description  Añade un contador para el MR Caribe Co 2019
// @author       santyg2001, Dude495
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @license      GNU GPLv3
// @grant        none
// ==/UserScript==
//Some code based off PA MapRaid Countdown Timer by MoM

//Forked from Dude495 WOW Script

(function() {
    'use strict';
    function startClock() {
        const ProjStatus = 'false' //'true' means raid is in progress, 'false' means the raid hasnt started.
        var PHASE = 'MapRaid Colombia Caribe 2019'
        var phaseTime = new Date('apr 15, 2019 04:59:59 UTC').getTime();
        var now = new Date().getTime();
        var time = phaseTime - now;
        var weeks = Math.floor(time / 604800000);
        var days = Math.floor(time%(604800000)/86400000);
        var hours = Math.floor((time%(86400000))/3600000);
        var minutes = Math.floor((time % (3600000)) / 60000);
        var seconds = Math.floor((time % (60000)) / 1000);
        var div = [];
        if (ProjStatus == 'true') {
            if (time > 18000001) {
                div = $('<div>', {id: 'countdown-timer'}).css({marginBottom:'3px', paddingLeft:'2px', textAlign:'center', fontWeight:'600', background: 'lime'});
            }
            if ((time < 18000000) && (time > 0)) {
                div = $('<div>', {id: 'countdown-timer'}).css({marginBottom:'3px', paddingLeft:'2px', textAlign:'center', fontWeight:'600', background: 'yellow'});
            }
            if (time < 0) {
                div = $('<div>', {id: 'countdown-timer'}).css({marginBottom:'3px', paddingLeft:'2px', textAlign:'center', fontWeight:'600', background: 'red'});
            }
        }
        if ($('#countdown-timer').length <= 0) {
            div;
            $('#user-box').after(div);
            $('#user-profile').css('margin-bottom','5px');
        }
        $('#user-box').css('padding-bottom','5px');
        if (ProjStatus == 'false') {
            if (time > 604800000) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' empieza en ' + weeks + 's ' + days + 'd ' + hours + 'h ' + minutes + 'min ';
            }
            else if ((time < 604800000) && (time >= 18000001)) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' empieza en ' + days + 'd ' + hours + 'h ' + minutes + 'min ' + seconds + 's ';
            }
            else if ((time <= 18000000) && (time >= 1)) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' empieza en ' + hours + 'h ' + minutes + 'min ' + seconds + 's ';
            }
            else if (time < 0) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' ha empezado, Felices Ediciones!';
            }
        }
        if (ProjStatus == 'true') {
            if (time > 604800000) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' termina en ' + weeks + 'w ' + days + 'd ' + hours + 'h ' + minutes + 'm ';
            }
            else if ((time < 604800000) && (time >= 18000001)) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' termina en ' + days + 'd ' + hours + 'h ' + minutes + 'm ';
            }
            else if ((time <= 18000000) && (time > 0)) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' termina en ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
            }
            else if (time < 0) {
                document.getElementById('countdown-timer').innerHTML = 'El ' + PHASE + ' ha terminado! <br> Gracias por todos sus esfuerzos!';
            }
        }
    }
    function bootstrap() {
        if (W && W.loginManager && W.loginManager.isLoggedIn()) {
            setInterval(startClock, 1000);
            console.log(GM_info.script.name, 'Initialized');
        } else {
            console.log(GM_info.script.name, 'Bootstrap failed.  Trying again...');
            window.setTimeout(() => bootstrap(), 500);
        }
    }
    bootstrap();
})();
