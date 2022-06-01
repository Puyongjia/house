var sjh = document.getElementById('sjh');
var st = /^1[3456789]\d{9}$/
var fsyz = document.getElementsByClassName('fsyz')[0];
var time;
sjh.oninput = function () {
    if (st.test(sjh.value)) {
        fsyz.style.pointerEvents = ''
    } else {
        fsyz.style.pointerEvents = 'none';
    }
}

var srr = [];
touch.on(fsyz, 'tap', function () {
    clearInterval(time);
    var num = 60;
    time = setInterval(function () {
        num--;
        fsyz.innerHTML = num + '秒后重新发送';

        if (num == 58) {
            for (var i = 0; i < 4; i++) {
                srr.push(Math.floor(Math.random() * 10))
            }
            srr = srr.join('');
            alert('验证码为：' + srr);
        }
        if (num <= 1) {
            fsyz.innerHTML = '重新发送';
            clearInterval(time)
            num = 60;
        }
    }, 1000)
})

var yzm = document.getElementsByClassName('yzm')[0];

yzm.onblur = function () {
    if (yzm.value == srr) {

    } else {
        alert('验证码错误')
    }
}
var pas = document.getElementsByClassName('pas')[0];
var yzm1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/
pas.onblur = function () {
    if (yzm1.test(pas.value)) {

    } else {
        alert('密码至少包含一个数字和字母6-10位');
    }
}

var yes = document.getElementsByClassName('yes')[0];
touch.on(yes, 'tap', function () {
    if (st.test(sjh.value) && (yzm.value == srr) && (yzm1.test(pas.value))) {
        window.location.href = 'index.html';
        localStorage.setItem('name1', sjh.value);
        localStorage.setItem('pas', pas.value);
        localStorage.setItem('is', true);
    } else {
        alert('输入有误');
    }
})