let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];


// function x()
// {
//     console.log("Hii");
// }

// const x=()=>{
//     console.log("hii");
// }



//for Each
// products.forEach((value,index)=>{
//     console.log(value,index);
// });

//map


// let x=[1,2,3,4,5];

// const newArray=x.map((item)=>{
//     return item*10;
// })

// console.log(x);
// console.log(newArray);

//2000


const x=800;
const filteredProducts=products.filter((product)=>{
    return product.price<=x;
})

console.log(products);
console.log(filteredProducts);


var x=100;
var y=x;
y=y+1;
console.log(x);
console.log(y);


var person1={name:"Utkarsh",age:28};
var person2={...person1};

person2.age+=1;

console.log(person1.age);
console.log(person2.age);



let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

let allNames=products.reduce((acc,product)=>{
    acc.push(product.name);
    return acc;
},[])

console.log(allNames);