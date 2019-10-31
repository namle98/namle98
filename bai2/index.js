/*let arr = [1, 2, 3, 4];
arr.push(5);
arr.push(6);
arr.pop();
arr.shift();
arr.shift();
arr.unshift(0);
arr.unshift(-1);
console.log(arr);
*/
/*
let arr = ["Ronaldo, Messi, Neymar"];
let a = prompt(" muon nhap them cau thu nhap \"Y\" hoac khong nhap \"N\"").toUpperCase();
if(a == "Y"){
    let c = prompt("nhap ten cau thu" )
    arr.push(c);
console.log(arr)
}else if (a == "N"){
    console.log("Good Bye");
}
*/
/*
let arr = [" Honda ", " Suzuki ", " Yamaha ", " Kawasaki ", " Ducati"];
alert(arr[4]);
hangxe.forEach(function(element, index, arr){
    console.log(`Element: ${element}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${arr}`);

}
*/
/*
let ds = ["Nam", "Hoang", "Yen", "Hai", "Hung"]
ds.splice(3,0,"Hoa")
console.log(ds);
ds.splice(3,1,"hien")
console.log(ds);
ds.splice(3,1,)
console.log(ds)
*/
/*
let array1 = [5, 12, 8, 130, 44];
let tong = 0;
for(let i = 0; i<array1.length ; i++){
    tong = tong + array1[i];
}
console.log(tong)
for(let i = 0; i<array1.length ; i++){
    if(array1[i] % 5 == 0){
        console.log(array1[i])
    }
}
for(let i = 0; i<array1.length ; i++){
    if(array1[i] % 10 == 4){
        console.log(array1[i])
    }
}
*/
/*
let arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let newarr = arr1.reduce(function(acc, items ){
    if(acc.indexOf(items) < 0){
     acc.push(items)
     return acc;
    }
    return acc;
}, [])
console.log(newarr)
*/
/*let arr = [5, 12, 8, 130, 44];
let arr1 = arr.reduce(function(acc, items){
    if(!(items % 5)){
        acc.push(items)
    }
    return acc
},[])
console.log(arr1)
*/
/*
function transformArray(arr, callback){
    let res = []
    for(let i = 0; i < arr.length; i++){
        res.push(callback(arr[i]))
    }
    return res;
}
function sqrt(item){
    return item * item
}
function double(item){
    return item * 2
}
console.log(transformArray([1, 2, 3, 4], sqrt ))
*/