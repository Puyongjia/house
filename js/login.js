var bo = document.getElementsByClassName('bo')[0].children[0];
var bo1 = document.getElementsByClassName('bo')[0].children[1];
var fpd = document.getElementsByClassName('finpassword')[1];
var fpd1 = document.getElementsByClassName('finpassword')[2];
var yes = document.getElementsByClassName('yes')[0];
console.log(fpd, fpd1);
touch.on(bo, 'tap', function () {
    bo1.className = '';
    bo.className = 'bo1'
    fpd.style.display = 'block';
    fpd1.style.display = 'none';
    yes.innerHTML = '立即登录'
})
touch.on(bo1, 'tap', function () {
    bo.className = '';
    bo1.className = 'bo1'
    fpd1.style.display = 'block';
    fpd.style.display = 'none';
    yes.innerHTML = '验证并登录'
})


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

var srr;
touch.on(fsyz, 'tap', function () {
    srr = [];
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


var sjh1 = document.getElementById('sjh');


touch.on(yes, 'tap', function () {
    var name = localStorage.getItem('name1');
    var pasw = localStorage.getItem('pas');
    var sjh = document.getElementsByClassName('sjh')[0];
    var mm = document.getElementsByClassName('mm')[0];
    if ((sjh.value == name && mm.value == pasw)) {
        alert('登录成功');
        window.location.href = 'index.html';
    } else if ((sjh1.value == name) && (yzm.value == srr)) {
        alert('登录成功');
        window.location.href = 'index.html';
    } else {
        alert('输入有误')
    }
})


