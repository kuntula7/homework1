/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/
let sister = {
    name : 'ანა',
    age : 28,
}
let brother = {
    name : 'ლევანი',
    age : 21,
}
let ageDifference = sister.age - brother.age;
let sentence = sister.name + ' ' + brother.name + 'ზე' + ' ' + ageDifference + ' ' + 'წლით' + ' ' + 'უფროსია';
console.log(ageDifference)
console.log(sentence)
/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
let studentsName = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
console.log(studentsName[studentsName.length - 5 ])
/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         ეს ვერ გავიგე --> up 

        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
let student = {
    firstName : 'Leo',
    lastName : 'Messi' ,
    age : 34,
    subjects : ['Sports','History','Georgraphy','Math','Art'] ,
    roommate :{
        fullName : 'Luis Suarez',
        age : 35,
    }
}
for(let i = 0; i < student.subjects.length; i++){
    console.log(student.subjects[i])
  }

let fullName = student.firstName + ' ' + student.lastName;

let result = student.fullName + ' ' +'არის' + ' ' + student.age + ' '  + 'წლის' + ' ' + 'და' + ' ' + 'მისი' + ' ' + 'რუმმეითი' + ' ' + 'არის' + ' ' + student.roommate.fullName;

let result2 = `${fullName} არის ${student.age} წლის და მისი რუმმეითი არის ${student.roommate.fullName}`

console.log(fullName)
console.log(result)
console.log(result2)


/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
let fruitsArray = ["Banana", "Orange", "Apple", "Mango",2,1]
let i = 0;
while(true){
    console.log(fruitsArray[i]);
    i++;
    if(typeof fruitsArray[i] == 'number'){
        break;
    }
}

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/
let numbersArray = [12,23,43,11,9,2,121,90];
for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i]>31 && numbersArray[i]%2 == 0){
        console.log(numbersArray[i] + ' ' + 'Element is greater than provided value and is EVEN')
    } else if(numbersArray[i]<31 && numbersArray[i]%2){
        console.log(numbersArray[i] + ' ' + 'Element is less than provided value and is ODD')
        }
 }
/* ფუნქციები ჯერ არ გვისწავლია --> down
    Task 6 : 
     შექმენით ფუნცქია arrayBreaker რომელიც პარამეტრად მიიღებს ორ ცვლადს . პირველია რა მნიშვნელობაზეც
     უნდა შეწყდეს ციკლი ე.წ breakValue და მეორე პარამეტრი იქნება მასივი .
     დაწერეთ იტერაცია , დალოგეთ ელემენტები მანამ სანამ მასივის ელემენტი არ იქნება 12 ის ტოლი . 

     const BREAKVALUE = 12;
     let array = [41,31,81,9,2,12,71,21,32]
*/