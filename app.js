
let input = document.querySelectorAll('input')
let btn = document.querySelector('button')
let p =document.querySelector('b')
let usr=[
    {
        ism:"MarsIT",
        kod:"marsit1233",
        navigator:'./admin.html'
    },


]

btn.addEventListener('click',()=>{
    
let kodd = input[1].value
let min = 8
let max = 12

if (kodd.length < min || kodd.length > max) {
        p.innerHTML = 'Parol uzunligi 8 va 12 oraligda bolsn' 
        return
 }
      
     

    usr.map((v)=>{
        if(v.ism==input[0].value&& v.kod==input[1].value ){
            console.log('tori');
            window.location.href=v.navigator
        }

  

  
        else {
            p.innerHTML='bunday foydalanuvchi yoq!'
            
        }
    
    })
})









