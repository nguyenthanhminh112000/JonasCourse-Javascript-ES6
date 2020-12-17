// // --------------- DESTRUCTING

// var array=['Minh',22,21];
// const [name1,age1]=['Minh',21];
// const [name2,age2]=array;

// console.log(name1,age1);
// console.log(name2,age2);



// var obj={
//     name:'Minh',
//     job:'Student',
//     age:20
// }
// var {name:a,job:b}=obj;
// console.log(a)

// function calcAgeRetirement(yearOfBirth){
//     let age=new Date().getFullYear()-yearOfBirth;
//     return [age,65-age]
// }

// let [age,yearRetirement]=calcAgeRetirement(2000);
// console.log(age,yearRetirement);
// // --------------- ARRAYS
// const arr=document.querySelectorAll('.box');
// // arr.forEach((cur)=>{
// //     cur.style.backgroundColor='red';
// // });
// const nodeToArr=Array.from(arr);
// // console.log(arr);
// // console.log(nodeToArr);

// for(const cur of nodeToArr){
//     if(cur.className==='box blue'){
//         continue;
//     }
//     cur.textContent='I changed blue';
// }

// let arr=[1,2,3];

// for(let cur of arr){
//     cur=cur*2;
//     console.log(cur);
// }
// console.log(arr);



// // --------------- THE SPREAD OPERATOR

// function addNumber(a,b,c,d){
//     return a+b+c+d;
// }
// var arr=[1,2,12,5,8,10,20,10];
// console.log(addNumber.apply(this,arr));
// console.log(addNumber(...arr));

// const dinh=['Dinh','Hien','Dat','Ty'];
// const linh=['Linh','Thau'];
// const family=[...dinh,...linh];
// console.log(family);

// var h1=document.querySelector('h1');
// var nodeList=document.querySelectorAll('.box');
// var nodeListPlus=[h1,...nodeList];
// console.log(nodeListPlus);

// // --------------- REST PARAMETER
// function isFullAge(limit){
//     var arr=Array.from(arguments);
//     arr.forEach((el)=>{
//         console.log(el);
//     })
//     console.log(limit);
// }
// isFullAge(1,2,3);


// function isFullAge6(limit,variable,...years){
//     console.log(years);
//     console.log(arguments);
// }
// isFullAge6(1,2,'str',{ten:'minh'});

// // --------------- DEFAULT PARAMETER
// function SmithPerson(firstName,yearOfBirth,lastName='Smith',nationality='British'){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.yearOfBirth=yearOfBirth;
//     this.nationality=nationality;
// }

// var john=new SmithPerson('john',1990);
// var emily = new SmithPerson('emily',2000,'Diaz','Spanish');
// console.log(john);
// console.log(emily);

// // --------------- MAPS
// const question =new Map();
// question.set('question','What is my name');
// question.set(1,'Minh');
// question.set(2,'Dat');
// question.set(3,'Dinh');
// question.set(4,'Hien');
// question.set('answer',1);
// question.set(true,'Correct');
// question.set(false,'Incorrect');
// console.log(question.get('question'));
// // if(question.has(4)){
// //     question.delete(4);
// //     console.log('Deleted');
// //     console.log(question);
// // }
// // question.forEach((value,key)=>{
// //     console.log(`The key ${key} set to ${value}`);
// // });
// for(let [key,value] of question) {
//     if(typeof (key)==='number'){
//         console.log(`Answer ${key} : ${value}`);
//     }
// }
// const ans=parseInt(prompt('Input answer'));

// console.log(question.get(ans===question.get('answer')));

// const question = new Map();
// question.set('question','What is the official name of latest Javascript version?');
// question.set(1,'ES5');
// question.set(2,'ES6');
// question.set(3,'ES7');
// question.set('correct',3);
// question.set(true,'Correct answer');
// question.set(false,'Wrong answer');
// question.forEach((value,key)=>{
//     console.log(`This is ${key} and it sets to ${value}`)
// })

// console.log(question.get('question'));
// for(let [key,value] of question){
//     if(typeof(key)==='number'){
//         console.log(`Answer ${key} with value ${value}`);
//     }
// }

// let ans=parseInt(prompt('Input the answer : '));
// console.log(question.get(ans===question.get('correct')));

// // --------------- CLASSES

// // ES5
// var Person5=function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
// }


// Person5.prototype.calculateAge=function(){
//     var age= new Date().getFullYear()-this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5=function(name,yearOfBirth,job,olympicGames,medals)
// {
//     Person5.call(this,name,yearOfBirth,job);
//     this.olympicGames=olympicGames;
//     this.medals=medals;
// }


// Athlete5.prototype=Object.create(Person5.prototype);
// Athlete5.prototype.wonMedals=function(){
//     this.medals++;
//     console.log(this.medals);
// }
// var johnAthlete5= new Athlete5('John',2000,'En',3,10);
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedals();
// console.log(johnAthlete5);



// // ES6
// class Person6{
//     constructor(name,yearOfBirth,job){
//             this.name=name;
//             this.yearOfBirth=yearOfBirth;
//             this.job=job;
//     }
//     calculateAge(){
//         var age= new Date().getFullYear()-this.yearOfBirth;
//         console.log(age);
//     }
//     // static word create the method for just only blueprint can use it.
//     static greeting(){
//         console.log('Test');
//     }
// }

// class Athelete6 extends Person6{
//     constructor (name,yearOfBirth,job,olympicGames,medals){
//         super(name,yearOfBirth,job);
//         this.olympicGames=olympicGames;
//         this.medals=medals;
//     }
//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6=new Athelete6('Minh',2000,'Student',3,10);
// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();



// // // --------------- FINAL CHALLENGE
// class basicInformation{
//     constructor(name,buildYear){
//         this.name=name;
//         this.buildYear=buildYear;
//     }
//     calcAge(){
//         return new Date().getFullYear()-this.buildYear;
//     }
// }

// class Park extends basicInformation{
//     constructor(name,buildYear,trees,area){
//         super(name,buildYear);
//         this.trees=trees;
//         this.area=area;
//         this.density=this.trees/this.area;
//         this.age=this.calcAge();
//     }
// }


// class Street extends basicInformation{
//     constructor(name,buildYear,length,size=3){
//         super(name,buildYear);
//         this.length=length;
//         this.size=size;
//     }
//     classifyStreet(){
//         const classification=new Map();
//         classification.set(1,'Tiny');
//         classification.set(2,'Small');
//         classification.set(3,'Normal');
//         classification.set(4,'Big');
//         classification.set(5,'Huge');
//         return classification.get(this.size);
//     }
// }
// var arrPark=[];
// var firstPark= new Park('QuangTrungSoftwareCity',2000,5000,2000);
// var secondPark= new Park('LongKhanh',2005,5000,2000);
// var thirdPark= new Park('Gia Dinh',2010,5000,2000);
// arrPark.push(firstPark);
// arrPark.push(secondPark);
// arrPark.push(thirdPark);
// console.log(firstPark);

// var arrStreet=[];
// var firstStreet= new Street('Tran Phu',2000,1000);
// var secondStreet= new Street('Tran Phu1',2000,1000,"Big");
// var thirdStreet= new Street('Tran Phu2',2000,1000,"Big");
// var fourthStreet= new Street('Tran Phu3',2000,1000,"Big");
// arrStreet.push(firstStreet);
// arrStreet.push(secondStreet);
// arrStreet.push(thirdStreet);
// let totalAge=0 
// arrPark.forEach(element => {
//     totalAge+=element.age;
// });
// console.log(totalAge);


