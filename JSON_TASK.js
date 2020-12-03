//Problem-0 Part-A
var cat = {
  name: 'Fluffy',
  activities: ['play', 'eat cat food'], 
  catFriends: [
  {
  name: 'bar',
  activities: ['be grumpy', 'eat bread omblet'],
  weight: 8,
  furcolor: 'white'
  }, 
  {
  name: 'foo',
  activities: ['sleep', 'pre-sleep naps'],
  weight: 3
  }
  ]
 }
weight=0;
activities=0
cat.weight=12; //qn1-Add height and weight to Fluffy
cat.height=20; //qn1

cat.name=" Fluffyy" //qn2-Fluffy name is spelled wrongly. Update it to Fluffyy

for(i=0;i<cat.catFriends.length;i++)  {
console.log(cat.catFriends[i].activities)} //qn3-List all the activities of Fluffyy’s catFriends

//q4-Print the catFriends names

for(i=0;i<cat.catFriends.length;i++)  {
  console.log(cat.catFriends[i].name)}

  //q5-Print the total weight of catFriends
  for(i=0;i<cat.catFriends.length;i++)  {
      weight=weight+ +cat.catFriends[i].weight}
      console.log("total weight of cat friends",weight)

//q6-Print the total activities of all cats (op:6)
for(i=0;i<cat.catFriends.length;i++)  {
  activities=activities+ +cat.catFriends[i].activities.length}
  console.log(activities+ +cat.activities.length)

//q7-Add 2 more activities to bar & foo cats
  cat.catFriends[0].activities.push("playful","sleepy")
  cat.catFriends[1].activities.push("playful","sleepy")
  console.log(cat)

//q8-Update the fur color of bar
cat.catFriends[0].furcolor="Red"
console.log(cat)


//Problem-0-Part-B
var myCar = {
  make: 'Bugatti',
  model: 'Bugatti La Voiture Noire',
  year: 2019,
  accidents: [
  {
  date: '3/15/2019',
  damage_points: '5000',
  atFaultForAccident: true
  },
  {
  date: '7/4/2022',
  damage_points: '2200',
  atFaultForAccident: true
  },
  {
  date: '6/22/2021',
  damage_points: '7900',
  atFaultForAccident: true
  }
  ]
 }
 //1. Loop over the accidents array. Change atFaultForAccident from true to false.
 for(i=0;i<myCar.accidents.length;i++)
{
  myCar.accidents[i].atFaultForAccident=false;
}

//2.Print the dated of my accidents
console.log(myCar)
for(i=0;i<myCar.accidents.length;i++)
{
  console.log(myCar.accidents[i].date);
}


//problem-1 Parsing an JSON object’s Values:

var obj = {name : "RajiniKanth", age : 33, hasPets : false};


function printAllValues(obj) {
 
console.log(Object.values(obj))


}
printAllValues(obj)

//problem2-Parsing an JSON object’s Keys:

function printAllKeys(obj) {
    console.log(Object.keys(obj))
   }
 printAllKeys(obj)

 //problem3-Parsing an JSON object and convert it to a list:
 
 var o = {name: "ISRO", age: 35, role: "Scientist"};
 
 function convertListToObject(o) {
  console.log(Object.entries(o))

 }
 convertListToObject(o)

 //problem-4-Parsing a list and transform the first and last elements of it:

 var arr = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr) {
 
console.log("var object={" +arr[0]+":" + JSON.stringify(arr[arr.length-1])   +"}")

}
transformFirstAndLast(arr)

//problem5-Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 console.log("var object = {")
 
for(i=0;i<arr.length;i++)
{
  for(j=0;j<arr.length;j++)
  {
     if(i>=0 && j==0)
     {
       console.log(arr[i][j]+":"+JSON.stringify(arr[i][+j +1]))

     }

  }
}
 console.log("}")
 
}
fromListToObject(arr)

//problem6-Parsing a list of lists and convert into a JSON object:

var array=[[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
  var ar=array.map(function(x)
  {
    return {
    firstName:x[0],
    lastName:x[1],
    age:x[2],
    role:x[3]

    };
  
  });
  console.log(ar) 
 }
 transformEmployeeData(arr)

 //problem-7

 var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5}
testName="detects that two objects are equal"
function assertObjectsEqual(actual, expected, testName){
  a=actual;
  b=expected;
 if(actual.foo ==expected.foo && actual.bar == expected.bar)
 {
   console.log("Passed")
 }
else{

  console.log("FAILED[my test] Expected"+JSON.stringify(b)+",but got"+JSON.stringify(a))
}

}

assertObjectsEqual(actual, expected, testName)


//problem-8-Parsing JSON objects and Compare:


var securityQuestions = [
  {
  question: "What was your first pet’s name?",
  expectedAnswer: "FlufferNutter"
  },
  {
  question: "What was the model year of your first car?",
  expectedAnswer: "1985"
  },
  {
  question: "What city were you born in?",
  expectedAnswer: "NYC"
  }
 ]
 function chksecurityQuestions(securityQuestions,ques,ans) {
   console.log(ques,ans)
   for(i=0;i<securityQuestions.length;i++){
 if(securityQuestions[i].question==ques && securityQuestions[i].expectedAnswer==ans)
 {
   
   return true;
 }
 else
 {
   return false;
 }

 }}
 var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
status=chksecurityQuestions(securityQuestions,ques,ans);
console.log(status)

//problem-9--Parsing JSON objects and Compare:

var students = [
  {
  name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
  {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
  {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
  {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
  {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
  {name: "Devdas",age: 56} 
  ];
let s=""
  function returnMinors(arr)
{
  for(i=0;i<students.length;i++)
  {
  if(arr[i].age<20)
  {
    console.log(arr[i].name);
   
  }
  }

}
returnMinors(students)










