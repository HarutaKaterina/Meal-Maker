const menu = {
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},
get appetizers() {
  return this._courses.appetizers;
},
get mains() {
  return this._courses.mains;
},
get desserts() {
  return this._courses.desserts
},
set appetizers(appetizers) {
  this._courses.appetizers = appetizers;
},
set mains(mains) {
  this._courses.mains = mains;
},
set desserts(desserts) {
  this._courses.desserts = desserts;
},
get courses(){
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  };
},
addDishToCourse(courseName, dishName, dishPrice){
const dish = {
  name: dishName,
  price: dishPrice,
}
return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `The name of appetizer is '${appetizer.name     }'. The name of main is '${main.name}'. The name of dessert is '${dessert.name}'. The total price of meal is ${totalPrice}$.`;
}
};

menu.addDishToCourse('appetizers', 'salata greceasca', 3.20);
menu.addDishToCourse('appetizers', 'salata caesar', 6.30);
menu.addDishToCourse('appetizers', 'olivie', 4.65);
menu.addDishToCourse('appetizers', 'suba', 6.80);

menu.addDishToCourse('mains', 'pui copt', 7.20);
menu.addDishToCourse('mains', 'bors', 5.80);
menu.addDishToCourse('mains', 'frigarui', 10.00);
menu.addDishToCourse('mains', 'carne batuta', 8.20);

menu.addDishToCourse('desserts', 'budinca', 5.00);
menu.addDishToCourse('desserts', 'inghetata', 3.20);
menu.addDishToCourse('desserts', 'napoleon cake', 4.50);
menu.addDishToCourse('desserts', 'kiev cake', 4.20);

const meal = menu.generateRandomMeal();
console.log(meal);


