

let food = JSON.parse(localStorage.getItem('food')) || [
    {
        img: 'https://cp.ectn.uz/files//donar_govajiy_22_01.png',
        nomi: 'Donar mol goshtidan',
        tarif: "shirali gril mol go'shti bo'lakchalari",
        narx: '48 000',
    },
    {
        img: 'https://cp.ectn.uz/files//kombo_kids_wb.png',
        nomi: 'Kids Combo',
        tarif: "Bolalar uchun ma'zali taom",
        narx: '19 000',
    },
    {
        img: 'https://cp.ectn.uz/files//shaurma_kuriniy_22_01.png',
        nomi: 'Tovuq goshtidan qalampir shaurma',
        tarif: "shirali gril mol go'shti bo'lakchalari",
        narx: '29 000',
    },
    {
        img: 'https://cp.ectn.uz/files//shaurma_qalampir_kuriniy_22_01.png',
        nomi: 'Tovuq goshtidan shaurma',
        tarif: 'Qizarib pishgan tovuq goshtidan gril',
        narx: '27 000',
    },
    {
        img: 'https://cp.ectn.uz/files//donat_klubnika_19_06_wb(1).png',
        nomi: 'Medovik',
        tarif: 'yumshoq biskkivit',
        narx: '19 000',
    },
    {
        img: 'https://cp.ectn.uz/files//donat_caramel_19_06_wb.png',
        nomi: 'chizkeyk',
        tarif: "pishloqli-qaymoqli mazali chiskeyk",
        narx: '19 000',
    },
    {
        img: 'https://cp.ectn.uz/files//donat_klubnika_19_06_wb(1).png',
        nomi: 'Donat',
        tarif: 'qulpanayli',
        narx: '19 000',
    },
    {
        img: 'https://cp.ectn.uz/files//donat_caramel_19_06_wb.png',
        nomi: 'ponchik karamelli',
        tarif: 'karamelli ponchik',
        narx: '17 000',
    },
    {
        img: 'https://cp.ectn.uz/files//studcombo_wb.png',
        nomi: 'Talaba combo',
        tarif: 'onson va tezkor',
        narx: '19 000',
    },
    {
        img: 'https://cp.ectn.uz/files//scombo4_wb.png',
        nomi: 'combo N4',
        tarif: 'toyimli va tezkor comnbo',
        narx: '33 000',
    },
    {
        img: 'https://cp.ectn.uz/files//dablcombo3_20_05_wb.png',
        nomi: 'Double combo',
        tarif: 'ikki kishi uchun juda qulay',
        narx: '85 000',
    },
    {
        img: 'https://cp.ectn.uz/files//naggets8_wb.png',
        nomi: 'Naggetslar',
        tarif: 'qarsildoq naggestrlar',
        narx: '18 000',
    },
    {
        img: 'https://cp.ectn.uz/files//strips_22_01.png',
        nomi: 'strips',
        tarif: 'qarsildoq panirovkadagi shiralar',
        narx: '21 000',
    },
    {
        img: 'https://cp.ectn.uz/files//derevenskiy_22_01.png',
        nomi: 'jaydari kartoshka',
        tarif: 'jaydarilar uchun jaydari kartoshka',
        narx: '16 000',
    },
    {
        img: 'https://cp.ectn.uz/files//fri_22_01.png',
        nomi: 'kartoshka fri',
        tarif: 'yengil tamaddi',
        narx: '15 000',
    },
    {
        img: 'https://cp.ectn.uz/files//fri_mini_wb.png',
        nomi: 'kartoshka fri mini',
        tarif: 'ishtaha ochar tammaddi',
        narx: '10 000',
    },
];
let sn = []
let wrapper = document.querySelector('.wrapper');
let p = document.querySelector('.soni');
let input = document.querySelector('.input');
let cardfood = (food) => {
    food.forEach((v) => {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img class='card_img' src='${v.img}' alt="">
            <h2>${v.nomi}</h2>
            <h3>${v.tarif}</h3>
            <b class='narx'>${v.narx} so'm</b>
            <button type="button" class="btu"> 
                <img src="./img.img/karzinka-removebg-preview.png" alt="">
            </button>`;

        wrapper.appendChild(card)



        card.querySelector('.btu').addEventListener('click', () => {
            let son = parseInt(p.innerHTML);
            son += 1;
            p.innerHTML = son;
            console.log(v);
            sn.push(v)
            localStorage.setItem('product', JSON.stringify(sn))




        });
    });
};

cardfood(food);

input.addEventListener('input', (e) => {
    wrapper.innerHTML = '';
    const searchValue = input.value.trim().toLowerCase();
    if (searchValue === '') {
        cardfood(food);
    } else {
        const res = food.filter((v) => v.nomi.toLowerCase().includes(searchValue));
        cardfood(res);
    }
});


