function setRem() {
    var ui_w = 375;
    var client_W = document.documentElement.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = client_W / ui_w * 1 + 'px';
}
setRem()
window.onresize = setRem;