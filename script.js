const codeSubmit = document.getElementById('code-submit');
const grandTotal = document.getElementById('grand-total');
const number  = document.getElementById('number');
const discount1 = document.getElementById('discount1');
const discount2 = document.getElementById('discount2');
const nextButton = document.getElementById('submit-button') ;
const inputFeild = document.getElementById('coupon-code');
let seatCount = 0;
nextButton.disabled = true;

function a1(){
    commonFunction('a1');
    
}
function a2(){
    commonFunction('a2');
}
function a3(){
    commonFunction('a3');
}
function a4(){
    commonFunction('a4');
}
function b1(){
    commonFunction('b1');
}
function b2(){
    commonFunction('b2');
}
function b3(){
    commonFunction('b3');
}
function b4(){
    commonFunction('b4');
}
function c1(){
    commonFunction('c1');
    
}
function c2(){
    commonFunction('c2');
}
function c3(){
    commonFunction('c3');
}
function c4(){
    commonFunction('c4');
}
function d1(){
    commonFunction('d1');
}
function d2(){
    commonFunction('d2');
}
function d3(){
    commonFunction('d3');
}
function d4(){
    commonFunction('d4');
}
function e1(){
    commonFunction('e1');
}
function e2(){
    commonFunction('e2');
}
function e3(){
    commonFunction('e3');
}
function e4(){
    commonFunction('e4');
}

document.getElementById('coupon-code').addEventListener('keyup' , function(){
    const inputValue = inputFeild.value ;
    if(inputValue === 'NEW15' ){
        codeSubmit.classList.remove('hidden'); 
        document.getElementById('code-submit').addEventListener('click' ,function(){
            grandTotal.innerText = 1870;
            inputFeild.classList.add('hidden');
            codeSubmit.classList.add('hidden');
            discount1.classList.remove('hidden');
        })
}



if(inputValue === 'Couple 20'){
    codeSubmit.classList.remove('hidden'); 
        document.getElementById('code-submit').addEventListener('click' ,function(){
            grandTotal.innerText = 1760;
            inputFeild.classList.add('hidden');
            codeSubmit.classList.add('hidden');
            discount2.classList.remove('hidden');
        })
}

}
)

document.getElementById('number').addEventListener('keyup' , function(){
    const numberValue = number.value;
    console.log(numberValue);
    if(seatCount > 0 && numberValue != ''){  
        nextButton.disabled = false ;
    }
})




nextButton.addEventListener('click' ,function(){
    document.getElementById('part1').classList.add('hidden');
    document.getElementById('part2').classList.remove('hidden');
})