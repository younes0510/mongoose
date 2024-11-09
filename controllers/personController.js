const Person =require('../models/Person')


const create = async (personData) => {
const person =new Person (personData)
return await person.save()

}





const createPeople = (arrayPeopel) => {

 return Person.create(arrayPeopel)   
}

const findPeopelById = (personId) =>{
    return Person.findById(personId)
}

const findPeopelByName = (name) => {
    return Person.find({name:name})
}


const findPersonByFood = (food)=>{
    return Person.findOne({favoriteFoods :food})
}

const addFood = async (personId)=> {
const person = await Person.findById(personId)
person.favoriteFoods.push('hamburger');
return person.save()
}



const updateAge = (personName)=>{
    return Person.findOneAndUpdate(
        {name:personName},
        {age:20},
        {new:true}
    )
}


const removeById = (personId) => {

    return Person.findByIdAndRemove(personId)
}


const removeManyPeople = () => {
    return Person.deleteMany({name:"Maria"})
}


const searchBurritos = async () => {
    return await Person.find({ favoriteFoods:"burrito"})
    .sort({name:1})
    .limit(2)
    .select('-age')
}


module.exports={
    create,
    createPeople,
    findPeopelById,
    findPeopelByName,
    findPersonByFood,
    addFood,
    updateAge,
    removeById,
    removeManyPeople,
    searchBurritos
}