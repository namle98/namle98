//Viết hàm add nhận 2 tham số a, b và trả ra tổng của chúng
/*function add(a, b){
    return a + b
}
console.log(add(1,2))
*/
//Viết hàm subtract nhận 2 tham số a, b trả ra hiệu 2 số
/*function subtract(c, d){
    return c - d
   
}
console.log(subtract(3,4))
*/
//Viết hàm multiple nhận 2 tham số a, b trả ra tích 2 số
/*
function multiple(e, f){
    return e * f 
   
}
console.log(multiple(3,4))*/
//Viết hàm excuteOperator1 nhận 2 tham số a, b. Từ hàm excuteOperator gọi hàm add để công 2 số và trả ra tổng 2 số đó 
/*
function excuteOperator1(a, b) {
    return add(a,b);
  }
  function add(a,b){
      return a+b
    }
console.log(excuteOperator1(1, 2))
*/

/*
//Viết hàm mô phỏng hàm “map” của javascript
function map(arr , callback){
    let res = []
    for(i = 0; i < arr.length; i++){
        res.push(callback(arr[i]))
    }
    return res
}
function add(a){
return a * a
}
console.log(map([1,2,3], add))
*/
//Viết hàm mô phỏng lại hàm “filter” của javascript
/*
function filter(arr){
    let res = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 5){
            console.log(res.push((arr[i])))
        }
    }
    return res
}

console.log(filter([10, 2, 6, 1, 4, 12]))
*/
//Viết hàm mô phỏng lại hàm “reduce” của javascript
/*function reduce(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(reduce([1,2,3]))
*/
//Viết hàm mô phỏng hàm “chunk”
/*
function chuckArray(arr, chuck_size){
   let res = []
   while(arr.length){
       res.push(arr.splice(0, chuck_size))
   }
   return res 
}
console.log(chuckArray([1,2,3,4,5,6,7,8,9], 3))
*/
//Viết hàm loại bỏ các giá trị rỗng trong object
/*function removeNullValue(obj){
    for (let key in obj){
        if(!obj[key]){
            delete obj[key]
        }
    }
}
let data = {
    ten: "Nam",
    tuoi: null
}
removeNullValue(data)
console.log(data)
*/
// CHUA BAI TAP
// HÀM MAP
