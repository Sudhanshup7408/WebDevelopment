// let a = "Hello to the world";
// const b = 10;
// console.warn(a);
// console.log(b)

// wrong data types
//let a : string = 10 

//let a : string = "Welcome to the world of techies newbiee"

//let data = ['Sudhanshu','Anil','Ankit']
//data.push('Rashi')
//It doesn't accept the integer because you have declared the array with the string only.
//data.push(10)
// let data = ['sudhanshu',10,'Rashi']
// data.push(20)
// data.push(data[2]= 30)
// console.log(data)

interface UserTyped {
    name : string,
    mobile :number,
    address: string,
    Pincode:number

}

let User:UserTyped = {
    name : 'Sudhanshu Pal',
    mobile: 917007823554,
    address: 'Kanpur',
    Pincode: 208017
}

console.warn(User)