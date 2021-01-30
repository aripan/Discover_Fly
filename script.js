//! FIRST CLASS TICKET
document
  .getElementById("first-class-increase")
  .addEventListener("click", function () {
    // const ticketInput = document.getElementById("first-class-count");
    // const ticketNumber = parseInt(ticketInput.value);
    // const ticketNumberNew = ticketNumber + 1;
    // ticketInput.value = ticketNumberNew;

    updateTicketInfo(true);
    costCalculation("first-class");
  });

document
  .getElementById("first-class-decrease")
  .addEventListener("click", function () {
    // const ticketInput = document.getElementById("first-class-count");
    // const ticketNumber = parseInt(ticketInput.value);
    // const ticketNumberNew = ticketNumber - 1;
    // ticketInput.value = ticketNumberNew;

    updateTicketInfo(false);
    costCalculation("first-class");
  });

// //! ECONOMY CLASS
// document
//   .getElementById("economy-class-increase")
//   .addEventListener("click", function () {
//     const ticketInput = document.getElementById("economy-class-count");
//     const ticketNumber = parseInt(ticketInput.value);
//     const ticketNumberNew = ticketNumber + 1;
//     ticketInput.value = ticketNumberNew;

//     // updateTicketInfo(true);
//     costCalculation();
//   });

// document
//   .getElementById("economy-class-decrease")
//   .addEventListener("click", function () {
//     const ticketInput = document.getElementById("economy-class-count");
//     const ticketNumber = parseInt(ticketInput.value);
//     const ticketNumberNew = ticketNumber - 1;
//     ticketInput.value = ticketNumberNew;

//     // updateTicketInfo(false);
//     costCalculation();
//   });

// Updating the ticket number
function updateTicketInfo(isIncrease) {
  const ticketInput = document.getElementById("first-class-count");
  const ticketNumber = parseInt(ticketInput.value);
  let ticketNumberNew = 0;
  if (isIncrease == true) {
    ticketNumberNew = ticketNumber + 1;
  }
  if (isIncrease == false && ticketNumber > 0) {
    ticketNumberNew = ticketNumber - 1;
  }
  // const ticketNumberNew = ticketNumber + 1;
  ticketInput.value = ticketNumberNew;
}

// Calculating the cost
function costCalculation() {
  // Subtotal Cost
  const ticketInput = document.getElementById("first-class-count");

  const ticketNumber = parseInt(ticketInput.value);

  const subtotalCost = ticketNumber * 150;
  document.getElementById("subtotal-cost").innerText = subtotalCost;

  // Tax Amount
  const taxAmount = subtotalCost * 0.1;
  document.getElementById("tax-amount").innerText = taxAmount;

  // Total Cost
  const totalCost = subtotalCost + taxAmount;
  document.getElementById("total-cost").innerText = totalCost;
}

// function getTicketClass(ticketClass) {
//   console.log(ticketClass);
//   const ticketClassInput = document.getElementById(ticketClass + "-count");
//   const ticketNumber = parseInt(ticketClassInput.value);
//   console.log(ticketNumber);
//   return ticketNumber;
// }