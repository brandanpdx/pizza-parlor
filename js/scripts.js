//Business logic

//Pizza Constructor
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}
//Pricing Prototype
Pizza.prototype.pricing = function() {
  var price = 0;
  if (this.size === "small") {
    price += 10;
  } else if (this.size === "medium") {
    price += 15;
  } else if (this.size === "large") {
    price += 20;
  }
  if (this.toppings.includes("proscuitto") || this.toppings.includes("salami")) {
    price += 2
  }
  return price;
}

//Toppings Array Prototype
Pizza.prototype.addTopping = function(toppingToBePushed) {
  this.toppings.push(toppingToBePushed);
}

//User Logic

$(document).ready(function() {
  $(".pizzamaker").submit(function() {
    event.preventDefault();
    var userSize = $("#piesize").val();
    var userCrust = $("#piecrust").val();
    var chosenToppings = [];
    var pie = new Pizza(userSize,userCrust,chosenToppings);
    $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedToppings = $(this).val();
      pie.addTopping(selectedToppings);


    var showprice = pie.pricing();

    console.log(showprice);
    console.log(showtoppings);
      
  
    });
  })
})