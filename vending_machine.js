//상품선택시 outline 그려지는 거 해결 못함
const drink=document.querySelector(".left_goods");

drink.addEventListener("click",function(e){
    console.log(e.target);
    if (e.target.nodeName==="BUTTON"){
        e.target.
        classList.toggle("outline");

    }
});   

//입금액 넣으면 소지금 증가하는 기능
const input_btn=document.querySelector('#input_btn');
const input_box=document.querySelector('#input_box');
const get_money=document.querySelector('#get_money');
const can_use_money=document.querySelector('.value');

let present_money=25000;
let can_money=1000;

input_btn.addEventListener("click",function(){
    present_money=present_money-input_box.value;
    if (present_money<=0){
        present_money=0;
    }
    get_money.textContent=`${present_money} 원`;

    can_money=can_money+parseInt(input_box.value);
    if (input_box.value>present_money){
        can_money=can_money+present_money;
    }
    can_use_money.textContent=`${can_money} 원`;
    
})