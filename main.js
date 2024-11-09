const mongoose = require('mongoose');

const personController = require('./controllers/personController');




async function persons() {
  try {
   
    const person = await personController.create({
      name: "younes",
      age: 21,
      favoriteFoods: ["pizza", "tacos"]
    });

    
    const manyPeople = await personController.createPeople([
      { name: "Maria", age: 27, favoriteFoods: ["burrito"] },
      { name: "aymen", age: 29, favoriteFoods: ["burrito", "chawarma"] }
    ]);

   
    const maryPeople = await personController.findPeopelByName("Maria");

   
    const Burrito = await personController.searchBurritos();
    console.log("Burrito lovers:", Burrito);

  } catch (err) {
    console.error("Error:", err);
  }
}

persons(); 







mongoose.connect('mongodb://127.0.0.1:27017/person ');
app.listen(3000, () => console.log('Server started on: http://localhost:3000'));

