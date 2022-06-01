var sjh = document.getElementById('sjh');
var name1 = localStorage.getItem('name1');
console.log(name1);
var fsyz = document.getElementsByClassName('fsyz')[0];
var time;
sjh.oninput = function () {
    if (sjh.value == name1) {
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

var yzm1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/
var ma1 = document.getElementsByClassName('ma1')[0];
var ma2 = document.getElementsByClassName('ma2')[0];
console.log(ma1, ma2);
ma1.onblur = function () {
    if (yzm1.test(ma1.value)) {

    } else {
        alert('密码至少包含一个数字和字母6-10位')
    }
}
ma2.onblur = function () {
    if (ma2.value != ma1.value) {
        alert('密码输入不一致')
    }
}


var yes = document.getElementsByClassName('yes')[0];

touch.on(yes, 'tap', function () {
    if (sjh.value == name1 && yzm.value == srr && yzm1.test(ma1.value) && ma2.value == ma1.value) {
        window.location.href = 'index.html';
        alert('登录成功');
        localStorage.setItem('pas', ma1.value);
    } else {
        alert('输入有误');
    }
})

