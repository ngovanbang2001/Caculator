const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cal = $('#calculator')
const btns = $$('button');
btns.forEach((btn) => btn.onclick = (e) => {
    var value = e.target.dataset.num;
    switch (value) {
        case '=':
            try {
                if (cal.value === '')
                    cal.value = 'Nhập lại'
                cal.value = eval(cal.value);
            } catch (e) {
                cal.value = ''
            }
            break;
        case 'C':
            cal.value = '';
            break;
        default:
            cal.value += value;
    }

})