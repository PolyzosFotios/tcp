function displayInfo(event) {
    event.preventDefault();

    // Λήψη των τιμών των input
    const cost = document.getElementById("cost").value;
    const price = document.getElementById("price").value;
    
    let vatOfB = cost - (cost / 1.13);

    document.getElementById("output").innerHTML = "";

    for (let i = 0; i<= 50;i+=4){
        let income = i * price;
        let incomeClear = i * (price / 1.24);
        let vat = income - incomeClear;
        let total = Math.floor(incomeClear - cost  + vatOfB);

        const displayMessage = i +".  💰 " + income + "  #  🤑 " + total;

        const li = document.createElement("li");
        li.textContent = displayMessage;
        document.getElementById("output").appendChild(li);
    }

    minSpots = ((cost - vatOfB) * 1.24)/price;
    document.getElementById("minSpots").innerHTML = "Min Απαιτούμενες (0 κέρδος): " + minSpots.toFixed(1);
}
