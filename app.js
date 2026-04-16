//  function helps to calculates the expiry date
function calculateExpiry(purchaseDate, warrantyMonths) {
    let date = new Date(purchaseDate);
    date.setMonth(date.getMonth() + warrantyMonths);
    
    let today = new Date();
    let diff = date - today; // Difference in milliseconds
    
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : "Expired";
}

// Eg
console.log("Days until expiry:", calculateExpiry("2025-04-15", 12));
