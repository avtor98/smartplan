import IMask from 'imask';

// Список стран с телефонными кодами и масками
const countries = [
    // Европа
    { name: 'Австрия', code: '+43', mask: '(0) 000 0000', flag: 'at.svg' },
    { name: 'Бельгия', code: '+32', mask: '(0) 000 00 00', flag: 'be.svg' },
    { name: 'Болгария', code: '+359', mask: '(000) 000 0000', flag: 'bg.svg' },
    { name: 'Венгрия', code: '+36', mask: '(00) 000 0000', flag: 'hu.svg' },
    { name: 'Германия', code: '+49', mask: '(000) 000 0000', flag: 'de.svg' },
    { name: 'Греция', code: '+30', mask: '(0) 000 0000', flag: 'gr.svg' },
    { name: 'Дания', code: '+45', mask: '(00) 00 00', flag: 'dk.svg' },
    { name: 'Исландия', code: '+354', mask: '(000) 0000', flag: 'is.svg' },
    { name: 'Испания', code: '+34', mask: '(000) 000 000', flag: 'es.svg' },
    { name: 'Италия', code: '+39', mask: '(000) 000 0000', flag: 'it.svg' },
    { name: 'Латвия', code: '+371', mask: '(000) 0000', flag: 'lv.svg' },
    { name: 'Литва', code: '+370', mask: '(000) 00000', flag: 'lt.svg' },
    { name: 'Люксембург', code: '+352', mask: '(000) 000000', flag: 'lu.svg' },
    { name: 'Нидерланды', code: '+31', mask: '(0) 000 00000', flag: 'nl.svg' },
    { name: 'Норвегия', code: '+47', mask: '(00) 00 00 00', flag: 'no.svg' },
    { name: 'Польша', code: '+48', mask: '(000) 000 000', flag: 'pl.svg' },
    { name: 'Португалия', code: '+351', mask: '(00) 0000 0000', flag: 'pt.svg' },
    { name: 'Румыния', code: '+40', mask: '(000) 000 0000', flag: 'ro.svg' },
    { name: 'Словакия', code: '+421', mask: '(000) 000 000', flag: 'sk.svg' },
    { name: 'Словения', code: '+386', mask: '(00) 000 000', flag: 'si.svg' },
    { name: 'Финляндия', code: '+358', mask: '(00) 000 0000', flag: 'fi.svg' },
    { name: 'Франция', code: '+33', mask: '(0) 00 00 00 00', flag: 'fr.svg' },
    { name: 'Хорватия', code: '+385', mask: '(00) 000 000', flag: 'hr.svg' },
    { name: 'Чехия', code: '+420', mask: '(000) 000 000', flag: 'cz.svg' },
    { name: 'Швейцария', code: '+41', mask: '(0) 000 0000', flag: 'ch.svg' },
    { name: 'Швеция', code: '+46', mask: '(000) 000 00 00', flag: 'se.svg' },

    // Северная Америка
    { name: 'Антигуа и Барбуда', code: '+1-268', mask: '(268) 000-0000', flag: 'ag.svg' },
    { name: 'Багамские Острова', code: '+1-242', mask: '(242) 000-0000', flag: 'bs.svg' },
    { name: 'Барбадос', code: '+1-246', mask: '(246) 000-0000', flag: 'bb.svg' },
    { name: 'Белиз', code: '+501', mask: '(501) 000-0000', flag: 'bz.svg' },
    { name: 'Бермуды', code: '+1-441', mask: '(441) 000-0000', flag: 'bm.svg' },
    { name: 'Британские Виргинские Острова', code: '+1-284', mask: '(284) 000-0000', flag: 'vg.svg' },
    { name: 'Виргинские Острова США', code: '+1-340', mask: '(340) 000-0000', flag: 'vi.svg' },
    { name: 'Гренада', code: '+1-473', mask: '(473) 000-0000', flag: 'gd.svg' },
    { name: 'Доминика', code: '+1-767', mask: '(767) 000-0000', flag: 'dm.svg' },
    { name: 'Доминиканская Республика', code: '+1-809', mask: '(809) 000-0000', flag: 'do.svg' },
    { name: 'Канада', code: '+1', mask: '(000) 000 0000', flag: 'ca.svg' },
    { name: 'Куба', code: '+53', mask: '(00) 0000 0000', flag: 'cu.svg' },
    { name: 'Мексика', code: '+52', mask: '(00) 0000 0000', flag: 'mx.svg' },
    { name: 'Сент-Люсия', code: '+1-758', mask: '(758) 000-0000', flag: 'lc.svg' },
    { name: 'Сент-Китс и Невис', code: '+1-869', mask: '(869) 000-0000', flag: 'kn.svg' },
    { name: 'Сент-Винсент и Гренадины', code: '+1-784', mask: '(784) 000-0000', flag: 'vc.svg' },
    { name: 'Тринидад и Тобаго', code: '+1-868', mask: '(868) 000-0000', flag: 'tt.svg' },
    { name: 'Ямайка', code: '+1-876', mask: '(876) 000-0000', flag: 'jm.svg' },

    // Южная Америка
    { name: 'Аргентина', code: '+54', mask: '(0) 0000 0000', flag: 'ar.svg' },
    { name: 'Бразилия', code: '+55', mask: '(00) 00000-0000', flag: 'br.svg' },
    { name: 'Венесуэла', code: '+58', mask: '(000) 000 0000', flag: 've.svg' },
    { name: 'Колумбия', code: '+57', mask: '(000) 000 0000', flag: 'co.svg' },
    { name: 'Парагвай', code: '+595', mask: '(0) 000 0000', flag: 'py.svg' },
    { name: 'Перу', code: '+51', mask: '(00) 0000 0000', flag: 'pe.svg' },
    { name: 'Чили', code: '+56', mask: '(0) 0000 0000', flag: 'cl.svg' },

    // Азия
    { name: 'Бахрейн', code: '+973', mask: '(00) 0000 0000', flag: 'bh.svg' },
    { name: 'Вьетнам', code: '+84', mask: '(00) 000 0000', flag: 'vn.svg' },
    { name: 'Грузия', code: '+995', mask: '(00) 000 0000', flag: 'ge.svg' },
    { name: 'Индия', code: '+91', mask: '(000) 000 0000', flag: 'in.svg' },
    { name: 'Иран', code: '+98', mask: '(00) 0000 0000', flag: 'ir.svg' },
    { name: 'Ирак', code: '+964', mask: '(00) 000 0000', flag: 'iq.svg' },
    { name: 'Израиль', code: '+972', mask: '(00) 000 0000', flag: 'il.svg' },
    { name: 'Иордания', code: '+962', mask: '(00) 000 0000', flag: 'jo.svg' },
    { name: 'Индонезия', code: '+62', mask: '(000) 000 0000', flag: 'id.svg' },
    { name: 'Катар', code: '+974', mask: '(00) 0000 0000', flag: 'qa.svg' },
    { name: 'Китай', code: '+86', mask: '(000) 0000-0000', flag: 'cn.svg' },
    { name: 'Кипр', code: '+357', mask: '(00) 000 0000', flag: 'cy.svg' },
    { name: 'Малайзия', code: '+60', mask: '(00) 0000 0000', flag: 'my.svg' },
    { name: 'Мальдивы', code: '+960', mask: '(00) 000-0000', flag: 'mv.svg' },
    { name: 'Мьянма', code: '+95', mask: '(00) 000 0000', flag: 'mm.svg' },
    { name: 'ОАЭ', code: '+971', mask: '(00) 000 0000', flag: 'ae.svg' },
    { name: 'Пакистан', code: '+92', mask: '(00) 000 0000', flag: 'pk.svg' },
    { name: 'Саудовская Аравия', code: '+966', mask: '(00) 000 0000', flag: 'sa.svg' },
    { name: 'Сингапур', code: '+65', mask: '(000) 0000', flag: 'sg.svg' },
    { name: 'Южная Корея', code: '+82', mask: '(00) 0000 0000', flag: 'kr.svg' },
    { name: 'Япония', code: '+81', mask: '(000) 0000-0000', flag: 'jp.svg' },

    // Африка
    { name: 'Алжир', code: '+213', mask: '(00) 0000 0000', flag: 'dz.svg' },
    { name: 'Ангуила', code: '+1-264', mask: '(264) 000-0000', flag: 'ai.svg' },
    { name: 'Гана', code: '+233', mask: '(0) 000 0000', flag: 'gh.svg' },
    { name: 'Кения', code: '+254', mask: '(00) 000 0000', flag: 'ke.svg' },
    { name: 'Ливия', code: '+218', mask: '(00) 000 0000', flag: 'ly.svg' },
    { name: 'Маврикий', code: '+230', mask: '(00) 000 000', flag: 'mu.svg' },
    { name: 'Намибия', code: '+264', mask: '(0) 000 0000', flag: 'na.svg' },
    { name: 'Нигерия', code: '+234', mask: '(000) 000 0000', flag: 'ng.svg' },
    { name: 'Северный Судан', code: '+249', mask: '(00) 000 0000', flag: 'sd.svg' },
    { name: 'Южноафриканская Республика', code: '+27', mask: '(0) 000 0000', flag: 'za.svg' },

    // Океания
    { name: 'Австралия', code: '+61', mask: '(0) 0000 0000', flag: 'au.svg' },
    { name: 'Фиджи', code: '+679', mask: '(0) 000 0000', flag: 'fj.svg' },
    { name: 'Новая Зеландия', code: '+64', mask: '(0) 000 0000', flag: 'nz.svg' },
    { name: 'Папуа-Новая Гвинея', code: '+675', mask: '(0) 000 0000', flag: 'pg.svg' }
];

document.addEventListener('DOMContentLoaded', function() {
    const countrySelector = document.getElementById('country-selector');
    const countryDropdown = document.getElementById('country-dropdown');
    const countryMainDropDown = document.getElementById('country-dropdown-main');
    const selectedCode = document.getElementById('selected-code');
    const phoneInput = document.getElementById('phone-input');
    const selectedFlag = document.getElementById('selected-flag');

    let phoneMask;

    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = 'smart-plan__phone-dropdown-item';
        div.innerHTML = `
            <div class="smart-plan__phone-dropdown-info">
                <div class="smart-plan__phone-dropdown-flag" style="background-image: url('images/country/${country.flag}');"></div>
                <span class="smart-plan__phone-dropdown-code">${country.code}</span>
            </div>
            <div class="smart-plan__phone-dropdown-name">
                <span>${country.name}</span>
            </div>
        `;
        div.addEventListener('click', () => {
            selectedFlag.style.backgroundImage = `url('images/country/${country.flag}')`;
            selectedCode.textContent = country.code;
            phoneInput.placeholder = country.mask;

            if (phoneMask) {
                phoneMask.destroy();
            }

            phoneMask = applyMask(phoneInput, country.mask);
            phoneMask.updateValue();
            countryDropdown.classList.remove('show');
            countryMainDropDown.classList.remove('show-main');
        });
        countryDropdown.appendChild(div);
    });

    countrySelector.addEventListener('click', () => {
        countryDropdown.classList.toggle('show');
        countryMainDropDown.classList.toggle('show-main');

    });

    document.addEventListener('click', function(event) {
        if (!countrySelector.contains(event.target) && !countryDropdown.contains(event.target)) {
            countryDropdown.classList.remove('show');
            countryMainDropDown.classList.remove('show-main');
        }
    });
});

// Функция для применения маски
function applyMask(input, mask) {
    return IMask(input, {
        mask: mask
    });
}
