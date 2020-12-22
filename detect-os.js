// Detect operating system
function detectOS() {
    var out = 'other';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('windows phone') !== -1) {
        out = 'windows_phone';
    } else
    if (ua.indexOf('win') !== -1) {
        out = 'windows';
    } else
    if (ua.indexOf('android') !== -1) {
        out = 'android';
    } else
    if (
    ua.indexOf('ipad') !== -1 ||
    ua.indexOf('iphone') !== -1 ||
    ua.indexOf('ipod') !== -1) {
        out = 'ios';
    } else
    if (ua.indexOf('mac') !== -1) {
        out = 'osx';
    } else
    if (ua.indexOf('linux') !== -1) {
        out = 'linux';
    }
    return out;
}
