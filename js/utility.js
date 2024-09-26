let selectSeatCount = [];
const ticketPrice = 550;

function mainCalculation(selectSeat) {
  selectSeatCount.push(selectSeat);
  selectSeat.classList.add("bg-primary");
  
  // seat calculate 
  totalSeat --;
  document.getElementById("total-seat").innerText = totalSeat;
  countSelectSeat.innerText = selectSeatCount.length;

  // seat list generator
  document.getElementById("seat-list-demotext").classList.add("hidden");
    seatListContainer.innerHTML += `
                <div class="flex justify-between space-y-2 mt-2 ">
                    <p class="seat-name text-text-light">${selectSeat.innerText}</p>
                    <p class="text-text-light">Economy</p>
                    <p class="text-text-light">550</p>
                </div>
                `;

  // price calculate 
  totalPrice.innerText = (ticketPrice * selectSeatCount.length).toFixed(2);
  document.getElementById("grand-total").innerText = totalPrice.innerText;
  
  // check coupon 
  if (selectSeatCount.length === 4) {
    couponBtn.removeAttribute("disabled");
    couponInput.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", true);
    couponInput.setAttribute("disabled", true);
  }
}
