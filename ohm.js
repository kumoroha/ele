let voltba;
let amp;
let vf;
let ans;
let voltbar = document.getElementById('dcv');
let ampr = document.getElementById('i');
let vfr = document.getElementById('vf');
let w;
const ansar = document.getElementById('ansdiv');

voltbar.focus();

function cal() {
    voltba = parseFloat(voltbar.value);
    amp = parseFloat(ampr.value);
    vf = parseFloat(vfr.value);
    if (voltba == null || voltba == '' || amp == null || amp == '' || vf == null || vf == '') {
        alert('すべてのテキストボックスに値を入力してください。');
    } else if (amp == 0) {
        alert('アンペア数を確認してください。\n本当に0ですか？');
    } else {
        ans = (voltba - vf) / amp;
        w = vf * amp;
    }
    ansar.textContent = `結果：${ans}Ω,${w}W`;
}

voltbar.addEventListener('input' ,(event) => {
    cal();
});
ampr.addEventListener('input', (event) => {
    cal();
});
vfr.addEventListener('input', (event) => {
    cal();
});
