let voltba;
let amp;
let vf;
let ans;
let voltbar = document.getElementById('dcv');
let ampr = document.getElementById('i');
let vfr = document.getElementById('vf');

function cal() {
    voltba = voltbar.value;
    amp = ampr.value;
    vf = vfr.value;
    if (voltba == null || voltba == '' || amp == null || amp = '' || vf == null || vf == '') {
        alert('すべてのテキストボックスに値を入力してください。');
    } else {
        ans = (voltba - vf) / amp;
    }
    ansar.textContent = ans;
}
