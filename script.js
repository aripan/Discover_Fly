//! FIRST CLASS TICKET
document
  .getElementById("first-class-increase")
  .addEventListener("click", function () {
    updateTicketInfo("first-class", true);
    costCalculation();
  });

document
  .getElementById("first-class-decrease")
  .addEventListener("click", function () {
    updateTicketInfo("first-class", false);
    costCalculation();
  });

//! ECONOMY CLASS
document
  .getElementById("economy-class-increase")
  .addEventListener("click", function () {
    updateTicketInfo("economy-class", true);
    costCalculation();
  });

document
  .getElementById("economy-class-decrease")
  .addEventListener("click", function () {
    updateTicketInfo("economy-class", false);
    costCalculation();
  });

// Updating the ticket number
function updateTicketInfo(ticket, isIncrease) {
  const ticketNumber = getTicketClass(ticket);

  let ticketNumberNew = 0;
  if (isIncrease == true) {
    ticketNumberNew = ticketNumber + 1;
  }
  if (isIncrease == false && ticketNumber > 0) {
    ticketNumberNew = ticketNumber - 1;
  }

  document.getElementById(ticket + "-count").value = ticketNumberNew;
}

// Calculating the cost
function costCalculation() {
  // Subtotal Cost
  const firstClassTicketNumber = getTicketClass("first-class");
  const economyClassTicketNumber = getTicketClass("economy-class");
  const subtotalCost =
    firstClassTicketNumber * 150 + economyClassTicketNumber * 100;

  document.getElementById("subtotal-cost").innerText = subtotalCost;

  // Tax Amount
  const taxAmount = subtotalCost * 0.1;
  document.getElementById("tax-amount").innerText = taxAmount;

  // Total Cost
  const totalCost = subtotalCost + taxAmount;
  document.getElementById("total-cost").innerText = totalCost;
}

function getTicketClass(ticketClass) {
  const ticketClassInput = document.getElementById(ticketClass + "-count");
  const ticketNumber = parseInt(ticketClassInput.value);
  return ticketNumber;
}
