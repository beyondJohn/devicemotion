(function () {
    
    var jumpMax = {};

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', deviceOrientationHandler, false);
        document.getElementById("doeSupported").innerText = "Supported!";
    }

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler);
        setTimeout(stopJump, 3 * 1000);
    }

    function deviceOrientationHandler(event) {
        var absolute = event.absolute;
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;
    }

    function handleMotionEvent(event) {

        var x = event.accelerationIncludingGravity.x;
        var y = event.accelerationIncludingGravity.y;
        var z = event.accelerationIncludingGravity.z;

        if (evt.acceleration.x > jumpMax.x) {
            jumpMax.x = evt.acceleration.x;
        }
        if (evt.acceleration.y > jumpMax.y) {
            jumpMax.y = evt.acceleration.y;
        }
        if (evt.acceleration.z > jumpMax.z) {
            jumpMax.z = evt.acceleration.z;
        }
    }

    screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

    if (screen.lockOrientationUniversal("landscape-primary")) {
        // orientation was locked
    } else {
        // orientation lock failed
    }

})();
