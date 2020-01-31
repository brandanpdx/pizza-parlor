//Business logic
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.sizePricing = function(size) {
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 16;
  } else if (this.size === "large") {
    price = 20;
  }
}

//User Logic

var pie = new pizza();

$(document).ready(function(){

})