var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor((Math.random() * 100) + 1) }
 cart.push(newItem)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // create array of item/cost
  var itemCostList = []
  var item
  var cost
  for (let i = 0; i < cart.length; i++) {
  	item = Object.keys(cart[i])
  	cost = Object.values(cart[i]).toString()
  	itemCostList.push(`${item} at $${cost}`)
  }

  // return messages
  var note
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
  	note = itemCostList.toString()
  	console.log(`In your cart, you have ${note}.`)
  } else if (cart.length === 2) {
  	note = itemCostList.join(" and ")
  	console.log(`In your cart, you have ${note}.`)
  } else if (cart.length >= 3) {
  	var lastItem = itemCostList[itemCostList.length - 1]
  	itemCostList.pop()
  	itemCostList.push(`and ${lastItem}`)
  	note = itemCostList.join(", ")
  	console.log(`In your cart, you have ${note}.`)
  }
}

function total() {
  var totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    var itemCost = parseInt(Object.values(cart[i]))
    totalCost = totalCost + itemCost
  }
  return totalCost
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
}
