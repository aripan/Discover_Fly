// First Class Ticket
document
  .getElementById("first-class-increase")
  .addEventListener("click", function () {
    updateTicketInfo("first-class", true);
  });

document
  .getElementById("first-class-decrease")
  .addEventListener("click", function () {
    updateTicketInfo("first-class", false);
  });

// Economy Class Ticket
document
  .getElementById("economy-class-increase")
  .addEventListener("click", function () {
    updateTicketInfo("economy-class", true);
  });

document
  .getElementById("economy-class-decrease")
  .addEventListener("click", function () {
    updateTicketInfo("economy-class", false);
  });

// Updating the ticket number
function updateTicketInfo(ticketClass, isIncrease) {
  const ticketNumber = getTicketClass(ticketClass);
  let ticketNumberNew = 0;
  if (isIncrease == true) {
    ticketNumberNew = ticketNumber + 1;
  }
  if (isIncrease == false && ticketNumber > 0) {
    ticketNumberNew = ticketNumber - 1;
  }

  document.getElementById(ticketClass + "-count").value = ticketNumberNew;

  // updating in the modal
  document.getElementById("booked-ticket").innerText =
    parseInt(document.getElementById("first-class-count").value) +
    parseInt(document.getElementById("economy-class-count").value);

  costCalculation();
}

// Calculating the cost
function costCalculation() {
  // Subtotal Cost
  const firstClassTicketNumber = getTicketClass("first-class");
  const economyClassTicketNumber = getTicketClass("economy-class");
  const subtotalCost =
    firstClassTicketNumber * 150 + economyClassTicketNumber * 100;

  document.getElementById("subtotal-cost").innerText = subtotalCost;

  // updating in the modal
  document.getElementById("subtotal-ticket-cost").innerText = subtotalCost;

  // Tax Amount
  const taxAmount = subtotalCost * 0.1;
  document.getElementById("tax-amount").innerText = taxAmount;

  // updating in the modal
  document.getElementById("ticket-tax-amount").innerText = taxAmount;

  // Total Cost
  const totalCost = subtotalCost + taxAmount;
  document.getElementById("total-cost").innerText = totalCost;

  // updating in the modal
  document.getElementById("total-ticket-cost").innerText = totalCost;
}

// Specifying the ticket class & ticket number
function getTicketClass(ticketClass) {
  const ticketClassInput = document.getElementById(ticketClass + "-count");
  const ticketNumber = parseInt(ticketClassInput.value);
  return ticketNumber;
}

function modalShow() {
  document.getElementById("my-modal").style.display = "block";
  // document.getElementById("booked-ticket").innerText = updateTicketInfo();
}

function modalOff() {
  document.getElementById("my-modal").style.display = "none";
}
