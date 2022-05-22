let array=[['a',' b', 3 , 5, 11, 45],[true, 7, 8.5],[6, 8,'text',2],['a',3,8,true]];
let arrayNew=array.map(element1=>element1.filter(element2=>typeof(element2)=='number'));
console.log(arrayNew);