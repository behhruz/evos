const data = JSON.parse(localStorage.getItem('product'));
let menu_savat = document.querySelector('.menu_savat');

const ReadProducts = () => {
    data.forEach((v, index) => {
        let div = document.createElement('div');
        div.classList.add('card'); // Yangi div ga card classini qo'shamiz
        div.innerHTML = `
            <img class='card_img' src='${v.img}' alt="">
            <h2>${v.nomi}</h2>
            <b>${v.narx} so'm</b>
            <button type="button" class="btu1"> 
                <img src="./img.img/png-clipart-computer-icons-delete-icon-white-text-thumbnail-removebg-preview.png" alt="">
            </button>
        `;
       
        menu_savat.appendChild(div);

        // btu1 tugmasiga event listener qo'shamiz
        let deleteButton = div.querySelector('.btu1');
        deleteButton.addEventListener('click', () => {
            div.remove(); // card ni o'chiramiz
            // localStorage dan ham o'chiramiz
            data.splice(index, 1); // Ma'lumotlar massividan ushbu indeksdagi elementni o'chiramiz
            localStorage.setItem('product', JSON.stringify(data)); // Yangi ma'lumotlarni localStorage ga saqlaymiz
        });
    });
}

ReadProducts();
