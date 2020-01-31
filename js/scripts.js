//Business logic
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.sizePricing = function() {
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 16;
  } else if (this.size === "large") {
    price = 20;
  }
  return price;
}

//User Logic
var pie = new Pizza();


$(document).ready(function() {
  $(".pizzamaker").submit(function() {
    event.preventDefault();
    var pizzaSize = $("#piesize").val();
    var pizzaCrust = $("#piecrust").val();

    console.log(pizzaSize);
    console.log(pizzaCrust);
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzaToppings = $(this).val();
      $("#showtoppings").append(pizzaToppings + "<br>");
    });




  })

})