var varukorg= [];

function addItem(name, price) {
  for (var i = 0; i < varukorg.length; i++) {
    if (varukorg[i].name === name) {
      varukorg[i].quantity++;
      varukorg[i].total = varukorg[i].quantity * varukorg[i].price;
      displayVarukorg();
      return;
    }
  }

  var item = {
    name: name,
    price: price,
    quantity: 1,
    total: price
  };
  varukorg.push(item);
  displayVarukorg();
}

function updateQuantity(name, quantity) {
  for (var i = 0; i < varukorg.length; i++) {
    if (varukorg[i].name === name) {
      varukorg[i].quantity = quantity;
      varukorg[i].total = quantity * varukorg[i].price;
      displayVarukorg();
      return;
    }
  }
}

function taBortProdukt(name) {
  for (var i = 0; i < varukorg.length; i++) {
    if (varukorg[i].name === name) {
      varukorg.splice(i, 1);
      displayVarukorg();
      return;
    }
  }
}

function displayVarukorg() {
  var varukorgSaker = document.getElementById("varukorgprodukter");

  varukorgSaker.innerHTML = "";

  for (var i = 0; i < varukorg.length; i++) {
    var item = varukorg[i];
  }}
    var li = document.createElement("li");
    var nameSpan = document.createElement("span");
    var quantitySpan = document.createElement("span");
    var priceSpan = document.createElement("span");
    var totalSpan = document.createElement("span");

    nameSpan.textContent = item.name;
    quantitySpan.textContent = "Antal: ";
    priceSpan.textContent = "Pris: kr" + item.price.toFixed(2);
    totalSpan.textContent = "Total: kr" + item.total.toFixed(2);

    var quantityInput =
      document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = item.quantity;

    quantityInput.addEventListener("change", function() {
      var newQuantity = parseInt(this.value);
      if (newQuantity < 1) {
        newQuantity = 1;
        this.value = newQuantity;
      }
      updateQuantity(item.name, newQuantity);
    });
    var taBortKnapp = document.createElement("button")
function displayVarukorg() {
  var varukorgSaker = document.querySelector(".varukorgprodukter");
  var varukorgTotal = document.querySelector(".totalpris");
  var checkoutButton = document.querySelector(".checkout");

  varukorgSaker.innerHTML = "";

  var total = 0;

  for (var i = 0; i < varukorg.length; i++) {
    var item = varukorg[i];

    var li = document.createElement("li");

    var nameSpan = document.createElement("span");
    var quantitySpan = document.createElement("span");
    var priceSpan = document.createElement("span");
    var totalSpan = document.createElement("span");

    nameSpan.textContent = item.name;
    quantitySpan.textContent = "Antal: ";
    priceSpan.textContent = "Pris: kr" + item.price.toFixed(2);
    totalSpan.textContent = "Total: kr" + item.total.toFixed(2);

    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = item.quantity;

    quantityInput.addEventListener("change", function() {
      var newQuantity = parseInt(this.value);
      if (newQuantity < 1) {
        newQuantity = 1;
        this.value = newQuantity;
      }
      updateQuantity(item.name, newQuantity);
    });

    var taBortKnapp = document.createElement("button");
    taBortKnapp.textContent = "Ta bort";
    taBortKnapp.addEventListener("click", function() {
      taBortProdukt(item.name);
    });

    li.appendChild(nameSpan);
    li.appendChild(document.createElement("br"));
    li.appendChild(quantitySpan);
    li.appendChild(quantityInput);
    li.appendChild(document.createElement("br"));
    li.appendChild(priceSpan);
    li.appendChild(document.createElement("br"));
    li.appendChild(totalSpan);
    li.appendChild(document.createElement("br"));
    li.appendChild(taBortKnapp);

    varukorgSaker.appendChild(li);

    total += item.total;
  }

  varukorgTotal.textContent = "kr" + total.toFixed(2);

  if (varukorg.length > 0) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}