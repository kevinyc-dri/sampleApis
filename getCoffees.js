const allCoffees = require('./data/allCoffees.json')

// console.log('this is my list of coffees', coffees)
exports.getCoffees = (name) => {
  allCoffees.forEach((recipe) => {
    if (
      recipe.ingredients.includes('Milk') ||
      recipe.ingredients.includes('Cream') ||
      recipe.ingredients.includes('Steamed Milk') ||
      recipe.ingredients.includes('1oz Steamed Milk')
    ) {
      console.log(name, 'cant touch this', recipe.id, recipe.title)
    }
  })
}
// name this function get coffees and export it
exports.getCoffees = function() {

  // filter all coffees which is an array of objects
  const coffeeTitles = allCoffees.filter(function(item){

    // return each coffee with its title
    return item.title

  })
}