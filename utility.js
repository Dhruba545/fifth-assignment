function commonFunction(id){
    if(seatCount < 4){
    seatCount ++ ;
    const button = document.getElementById(id);
    button.disabled = true ;

    const leftSeat = document.getElementById('available-seat');
    leftSeat.innerText = 20 -seatCount;    
  
    const totalSeat = document.getElementById('totalSeat');
    totalSeat.innerText = seatCount ;

    totalPrise = seatCount * 550 ;
    const giveMoney = document.getElementById('totalPrice');
    giveMoney.innerText = totalPrise;

    const seatName = button.innerText ;
    const seats = document.getElementById('seats');
    const newSeat = document.createElement('li');
    newSeat.classList.add('flex' , 'justify-around');
    seats.appendChild(newSeat);

    const newp1 = document.createElement('p');
    newp1.innerText = seatName ;
    newSeat.appendChild(newp1);

    const newp2 = document.createElement('p');
    newp2.innerText = 'Economoy' ;
    newSeat.appendChild(newp2);

    const newp3 = document.createElement('p');
    newp3.innerText = '550' ;
    newSeat.appendChild(newp3);
    }
}