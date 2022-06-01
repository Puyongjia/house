var a1 = document.getElementsByClassName('a1');

var drop1 = document.getElementsByClassName('drop1')[0];
var mba = document.getElementById('mba');
var pullDown = document.getElementsByClassName('pullDown')[0]
function fu() {
    drop1.style.display = 'flex';
    mba.style.display = 'block';
    pullDown.style.display = 'flex';

}

touch.on(a1[0], 'tap', function () {
    drop1.style.display = 'flex';
    mba.style.display = 'block';
    pullDown.style.display = 'flex';
    a1[4].id = 'haha';
})

touch.on(a1[4], 'tap', function () {
    for (i of a1) {
        i.id = '';
    }
    this.id = 'haha'
    pullDown.style.display = 'flex';
    ulpeice.style.display = 'none';
    ulWu.style.display = 'none';
    more.style.display = 'none';
})
var ulpeice = document.getElementsByClassName('ulpeice')[0]
touch.on(a1[1], 'tap', function () {
    drop1.style.display = 'flex';
    mba.style.display = 'block';
    ulpeice.style.display = 'flex';
    for (i of a1) {
        i.id = '';
    }
    a1[5].id = 'haha';
})

touch.on(a1[5], 'tap', function () {
    for (i of a1) {
        i.id = '';
    }
    this.id = 'haha'

    pullDown.style.display = 'none';
    ulpeice.style.display = 'flex';
    ulWu.style.display = 'none';
    more.style.display = 'none';
})

var ulWu = document.getElementsByClassName('ulWu')[0];
touch.on(a1[2], 'tap', function () {
    drop1.style.display = 'flex';
    mba.style.display = 'block';
    ulWu.style.display = 'flex';
    for (i of a1) {
        i.id = '';
    }
    a1[6].id = 'haha';
})

touch.on(a1[6], 'tap', function () {
    for (i of a1) {
        i.id = '';
    }
    this.id = 'haha'
    pullDown.style.display = 'none';
    ulpeice.style.display = 'none';
    ulWu.style.display = 'flex';
    more.style.display = 'none';
})

var more = document.getElementsByClassName('more')[0];
touch.on(a1[3], 'tap', function () {
    drop1.style.display = 'flex';
    mba.style.display = 'block';
    more.style.display = 'block';
    for (i of a1) {
        i.id = '';
    }
    a1[7].id = 'haha';
})

touch.on(a1[7], 'tap', function () {
    for (i of a1) {
        i.id = '';
    }
    this.id = 'haha'

    pullDown.style.display = 'none';
    ulpeice.style.display = 'none';
    ulWu.style.display = 'none';
    more.style.display = 'block';
})

touch.on(mba, 'tap', function () {
    mba.style.display = 'none';
    drop1.style.display = 'none';
    pullDown.style.display = 'none';
    ulpeice.style.display = 'none';
    ulWu.style.display = 'none';
    more.style.display = 'none';
})