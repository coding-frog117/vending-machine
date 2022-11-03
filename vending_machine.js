//상품선택시 outline 그려지는 거 해결 못함 -->css 가상 클래스로 하는 거였음. 충격!
// const drink=document.querySelector(".left_goods");

// drink.addEventListener("click",function(e){
//     console.log(e.target);
//     if (e.target.nodeName==="BUTTON"){
//         e.target.
//         classList.toggle("outline");

//     }
// });   

//입금액 넣으면 소지금 감소하는 기능
const input_btn=document.querySelector('#input_btn');
const input_box=document.querySelector('#input_box');
const get_money=document.querySelector('#get_money');
const can_use_money=document.querySelector('.value');

let present_money=25000;
let can_money=1000;

input_btn.addEventListener("click",function(){
    if (present_money===0){
        alert("소지금이 부족합니다");
    }
    else{
        //소지금 감소,잔액 증가
        present_money=present_money-input_box.value;
        if (present_money<=0){
            can_money=can_money+present_money;
            present_money=0;
        }

        can_money=can_money+parseInt(input_box.value);
        get_money.textContent=`${present_money} 원`;
        can_use_money.textContent=`${can_money} 원`;
    }
});

//콜라 선택하면 리스트에 추가, 잔액 감소



//거스름돈 반환
const btn_return=document.querySelector(".left_data_returnbutton");

btn_return.addEventListener("click",function(){
    can_money=0;
    can_use_money.textContent='원';
})

//획득 누르면 리스트 없어짐,획득한 음료에 추가, 총금액 변동




