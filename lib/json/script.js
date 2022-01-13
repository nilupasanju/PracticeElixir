console.log('js');
var cars = {"name":"Mustang","name1":"Mustang1","brnd":"ford","cost":4000};
var a = 1;
console.log(cars);
console.log(cars.name);
console.log(cars["name"+a]);

var cars2 = {'name':"Mustang",'brnd':"ford",'cost':4000};
console.log(cars2);

var cars3 = {name:"Mustang",brnd:"ford",cost:4000};
console.log(cars3);

var cars = {"name":"mustang","brand1":"ford1","brand2":"ford","cost":4000 };
var cars2 =  {name:"mustang",brand1:"ford1","brand2":"ford",cost:4000 };
var cars3 =  {name:'mustang',brand1:'ford1',"brand2":"ford",cost:4000 };

var a = 1;

console.log(cars["name"]);
console.log(cars["brand"+a]);
a++;
console.log(cars["brand"+a]);


console.log(cars.name);
console.log(cars2.name);
console.log(cars3.name);

var jokes = {
    "type": "success"
    , "value": [{
        "id": 240
        , "joke": "In a fight between Batman and Darth Vader, the winner would be Chuck Norris."
        , "categories": []
    }, {
        "id": 172
        , "joke": "Some kids play Kick the can. Chuck Norris played Kick the keg."
        , "categories": []
    }]
};
console.log(jokes);
console.log(jokes.value[0].joke);

var people = {
    "person1": {
        "name": "Laurence"
        , "age": "40"
        , "location": "Toronto"
    },
    "person2": {
        "name": "Mike"
        , "age": "20"
        , "location": "New York"
    }
};
console.log(people);
console.log(people.person2.location);

//Source Code Example

var people = '{"person1": { "name": "Laurence", "age": "40", "location": "Toronto"},    "person2": { "name": "Mike" , "age": "20" , "location": "New York"    }}';

var myValue = document.getElementById('myValue');
var myObj = JSON.parse(people);
var sendAJAX = JSON.stringify(myObj);

myValue.onchange = function(){
    console.log(myObj);
    myObj.person1.name = this.value;
    endAJAX = JSON.stringify(myObj);
}





































