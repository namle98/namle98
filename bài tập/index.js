//Viết chương trình in ra số lớn hơn trong hai số (được nhập bằng prompt).

/*
let a = prompt("nhap so thu nhat");
let b = prompt("nhap so thu 2");
if(a > b){
    console.log("so lon hon la " + a);
}else{
    console.log("so lon hon la " + b);
}
*/

//Viết chương trình in ra số lớn nhất trong bốn số (nhập bằng prompt).

/*
let c = prompt("nhap so thu 1");
let d = prompt("nhap so thu 2");
let e = prompt("nhap so thu 3");
let f = prompt("nhap so thu 4");
let max = c;
if(max < d){
    max = d;
    if (max < e)
        max = e;
        if(max < f)
            max = f;
}else{
    if(max < d)
        max = d;
}
console.log("so lon nhat la " + max);
*/

//Viết chương trình xét xem một tam giác có là tam giác đều hay không khi biết ba cạnh của tam giác.

/*
let a = 5;
let b = 6;
let c = 6;
if( a === c && a===b){
    console.log("tam giac deu")
}else{
    console.log("khong phai tam giac deu")
}
*/

//Tình tổng các số tự nhiên từ 1 đến 10
/*
let i = 0;
let tong = 0;
for(i = 1; i <= 10; i++){
    tong = tong + i;
}
console.log(tong);
*/  
  
//Tính trung bình cộng các số từ 1 đến 10
/*
let a = 0;
let tong = 0;
let tbc = 0;
for(a = 1; a <= 10; a++){
    tong = tong + a;
    tbc = tong / 10;
}
console.log(tbc);
*/
/*Viết chương trình hiểu thị hình sau:
*
**
***
****
*/
/*
for(i = 0; i < 5; i++){
    let str = "";
    for(j = 0; j < i; j++){
       str +="*";
    }
    console.log(str);
}
*/
/*
for(i = 1; i < 6; i++){
    let str = "";
    for(j = 1; j < i; j++){
       str += j;
    }
    console.log(str);
}
*/