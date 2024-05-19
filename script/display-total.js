document.addEventListener('DOMContentLoaded', () => {
    // Get the total cost from local storage
    let grandTotal = localStorage.getItem('totalCost');

    // If there's no grandTotal, set it to 0
    if (!grandTotal) {
        grandTotal = 0;
    }

    // Convert grandTotal to a number
    grandTotal = parseInt(grandTotal);

    // Display the grand total in the element with id "grand-total"
    document.getElementById('grand-total').textContent = `₱ ${grandTotal}`;
});
