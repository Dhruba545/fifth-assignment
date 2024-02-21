function a1(){
    console.log('clicked');
    const seatName = document.getElementById('a1').innerText ;
    const seats = document.getElementById('seats');
    const newSeat = document.createElement('li');
    newSeat.classList.add('flex' , 'justify-around');
    seats.appendChild(newSeat);
    // newSeat.innerText = 'yes It Worked';
    const newp1 = document.createElement('p');
    newp1.innerText = seatName ;
    newSeat.appendChild(newp1);

    const newp2 = document.createElement('p');
    newp2.innerText = 'Economoy' ;
    newSeat.appendChild(newp2);

    const newp3 = document.createElement('p');
    newp3.innerText = '550' ;
    newSeat.appendChild(newp3);


    console.log(seatName);
}
