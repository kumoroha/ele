let voltba;
let amp;
let vf;
let ans;
let voltbar = document.getElementById('dcv');
let ampr = document.getElementById('i');
let vfr = document.getElementById('vf');
let w;
let mes;
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
        amp = amp * 1000;
        ans = (voltba - vf) / amp;
        w = vf * amp;
        if (w < 0.15) {
            mes = '1/4Wのカーボン抵抗で大丈夫です。';
        } else {
            mes = '1/2Wの金属皮膜抵抗やそれ以上の電気量に耐えられる抵抗をお勧めします。';
        }
    }
    ansar.textContent = `結果：${ans}Ω,${w}W　${mes}`;
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

