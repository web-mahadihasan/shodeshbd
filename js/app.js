// Get elements 
let totalSeat = Number(document.getElementById("total-seat").innerText);
const countSelectSeat = document.getElementById("count-select-seat");
const seatListContainer = document.getElementById("seat-list-container");
const totalPrice = document.getElementById("total-price");
const discountAmount = document.getElementById("discount-amount");
const grandTotal = document.getElementById("grand-total");
// coupon 
const couponBtn = document.getElementById("coupon-apply");
const couponInput = document.getElementById("input-coupon");
const couponContainer = document.getElementById("coupon-container");
//input



const seats = document.querySelectorAll(".seat-btn-container button");

for(const seat of seats){
    seat.addEventListener("click", function(event){    
      event.stopPropagation();
        if (selectSeatCount.length < 4 && !selectSeatCount.includes(seat)) {
          mainCalculation(seat);
        } else {
          const addedSeats = document.querySelectorAll(".seat-name");
          
        if(selectSeatCount.length < 4){
          
          for (const seatList of addedSeats) {
            if (seatList.innerText === seat.innerText) {
              seatList.parentNode.remove();
            }
          }
          const index = selectSeatCount.indexOf(seat);
          selectSeatCount.splice(index, 1);

          seat.classList.remove("bg-primary");
          totalSeat++;
          document.getElementById("total-seat").innerText = totalSeat;
          countSelectSeat.innerText = selectSeatCount.length;
          const resetTotalPrice = Number(totalPrice.innerText);
          totalPrice.innerText = resetTotalPrice - ticketPrice;
          grandTotal.innerText = resetTotalPrice - ticketPrice;

        } else {
          alert `You have selected maximum seat`
        }
        }

    });
};

// Coupon validation 


document.getElementById("coupon-apply").addEventListener("click", function(){
    const inputCoupon = document.getElementById("input-coupon").value;
    const getTotalAmount = Number(totalPrice.innerText);
    let discount = 0;

    if(inputCoupon === "NEW50"){
        discount = (getTotalAmount * 15) / 100;
        discountAmount.innerText = discount.toFixed(2);
        couponContainer.classList.add("hidden");
      document.getElementById("coupon-price").classList.remove("hidden");

        const grandtotalAmount = getTotalAmount - discount;
        grandTotal.innerText = grandtotalAmount;
    }else if(inputCoupon === "Couple 20"){
        discount = (getTotalAmount * 20) / 100;
        discountAmount.innerText = discount.toFixed(2);
        couponContainer.classList.add("hidden");
        document.getElementById("coupon-price").classList.remove("hidden");

        const grandtotalAmount = getTotalAmount - discount;
        grandTotal.innerText = grandtotalAmount;
    }else{
        alert `Invalid coupon`
    }
    
});


document.getElementById("input-phone-number").addEventListener("keyup", function(event){
  event.preventDefault();
  const purchaseBtn = document.getElementById("purchase-btn");
  const inputPhoneNumber = document.getElementById("input-phone-number").value;

  if(inputPhoneNumber.length === 11){
    purchaseBtn.removeAttribute("disabled", false);
  } else{
    purchaseBtn.setAttribute("disabled",true);
  }
});


document.getElementById("purchase-btn").addEventListener("click", function(event){
  event.preventDefault();
  const inputPhoneNumber = document.getElementById("input-phone-number").value;
  const checkSelectSeat = Number(countSelectSeat.innerText);

  if (checkSelectSeat > 0){
    if (inputPhoneNumber.length === 11) {
     my_modal_1.showModal();
     document
       .getElementById("continue-btn")
       .addEventListener("click", function () {
         window.location.href = "index.html";
       });
   }else{
    alert`Input your Name & Phone number`;
   }
  }else {
     alert`Select Your seat first`;
   }
})