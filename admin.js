let wrapper = document.querySelector('.wrapper');


let food =JSON.parse(localStorage.getItem('food'))|| [
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


let cardfood = (food) => {
    food.forEach((v, index) => {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img class='card_img' src='${v.img}' alt="">
            <h2>${v.nomi}</h2>
            <h3>${v.tarif}</h3>
            <b class='narx'>${v.narx} so'm</b>
          
            <button type="button" class="btu1"> 
                <img src="./img.img/png-clipart-computer-icons-delete-icon-white-text-thumbnail-removebg-preview.png" alt="">
            </button>
        `;
        
        
        let deleteButton = card.querySelector('.btu1');
        deleteButton.addEventListener('click', () => {
            card.remove(); 
           
            food.splice(index, 1);
            localStorage.setItem('food', JSON.stringify(food));
        });

        wrapper.appendChild(card);
    });
};


cardfood(food);





let urlInput = document.querySelector('.url');
let ismiInput = document.querySelector('.ismi');
let odamiInput = document.querySelector('.odami');
let regioniInput = document.querySelector('.regioni');
let btn = document.querySelector('.tb');

btn.addEventListener('click', () => {

 
      let newObj = {
        img: urlInput.value,
        nomi: ismiInput.value,
        tarif: odamiInput.value,
        narx: regioniInput.value,
      };
      food.push(newObj);
      localStorage.setItem('food', JSON.stringify(food));
    
 
});
