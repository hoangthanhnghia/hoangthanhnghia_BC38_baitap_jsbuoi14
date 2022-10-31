// ------------bai 1-------------------------
/**
 * INPUT: 3 số nguyên
 * 
 * PROCESS:
 *      1. xét num1 nhỏ hơn num2 và num 2 nhỏ hơn num3 hay k. Nếu có => 1,2,3
 *      2. xét num2 nhỏ hơn num1 và num 1 nhỏ hơn num3 hay k. Nếu có => 2,1,3
 *      3. xét num3 nhỏ hơn num2 và num 2 nhỏ hơn num1 hay k. Nếu có => 3,2,1

 * 
 * OUTPUT: xuất 3 số theo thứ tự tăng dần 
 */

var num1 = 6;
var num2 = 5;
var num3 = 4;

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);

if(num1 < num2 && num2 < num3) {
    console.log("số thứ tự tăng dần là: " + num1 + num2 +num3);
}else if(num2 < num1 && num1 < num3) {
    console.log("số thứ tự tăng dần là: " + num2 + num1 + num3);
}else if(num3 < num2 && num2 < num1) {
    console.log("số thứ tự tăng dần là: " + num3 + num2 + num1);
}else if(num1 < num3 && num3 < num2) {
    console.log("số thứ tự tăng dần là: " + num1 + num3 + num2);
}else if(num2 < num3 && num3 < num1) {
    console.log("số thứ tự tăng dần là: " + num2 + num3 + num1);
}else if(num3 < num1 && num1 < num2) {
    console.log("số thứ tự tăng dần là: " + num3 + num1 + num2);
}
else {
    console.log("error ");
}





// ------------------bai 2---------------------------
/**
 * INPUT: nhập 4 value bố mẹ anh trai em gái
 * 
 * PROCESS:
 *      1. xét cứng select sau đó dựa vào select để đưa ra lời chào
 * 
 * OUTPUT: xuất 3 số theo thứ tự tăng dần 
 */
var select1 = "Bố";
var select2 = "Mẹ";
var select3 = "Anh trai";
var select4 = "Em gái";

var select = select4;

if(select === select1) {
    console.log("Xin chào " + select1);
}else if( select === select2) {
    console.log("Xin chào " + select2);
}else if( select === select3) {
    console.log("Xin chào " + select3);   
}else if( select === select4) {
    console.log("Xin chào " + select4);   
}else{
    console.log("ai đang dùng máy?");
}

// -----------------bai 3-------------------------
/**
 * INPUT: nhap 3 so, và giá trị count để đếm
 * 
 * PROCESS:
 *      1. xét 3 số chẵn trước nhờ điều kiện if
 *      2. xét tới 2 số chẵn
 *      3. xét 1 số chẵn
 *      4. lấy 3 số trừ đi số chẵn đã có ra số lẻ
 * 
 * OUTPUT: xuất 3 số theo thứ tự tăng dần 
 */
var num4 = 4;
var num5 = 5;
var num6 = 1;

var count = 0;

num4 = parseInt(num4);
num5 = parseInt(num5);
num6 = parseInt(num6);

if( num4 % 2 === 0 && num5 % 2 === 0 && num6 % 2 === 0  ) {
    count += 3;
    console.log("Có 3 số chẵn")
}else if( num4 % 2 === 0 && num5 % 2 === 0 ) {
    count += 2;
    console.log("Có 2 số chẵn và 1 số lẻ")
}else if( num5 % 2 === 0 && num6 % 2 === 0 ) {
    count += 2;
    console.log("Có 2 số chẵn và 1 số lẻ")
}else if( num4 % 2 === 0 && num6 % 2 === 0 ) {
    count += 2;
    console.log("Có 2 số chẵn và 1 số lẻ")
}else if( num4 % 2 === 0) {
    count += 1;
    console.log("Có 1 số chẵn và 2 số lẻ")
}else if( num5 % 2 === 0) {
    count += 1;
    console.log("Có 1 số chẵn và 2 số lẻ")
}else if( num6 % 2 === 0) {
    count += 1;
    console.log("Có 1 số chẵn và 2 số lẻ")
}else {
    console.log("Có 3 số lẻ");
}

// ---------------- bai 4------------------------
/**
 * INPUT: nhap 3 canh
 * 
 * PROCESS:
 *      1. kiem tra 3 canh co phai la cua tam giac
 *      2. 2 canh bang nhau, 1 canh khac => tgiac can
 *      3. 3 canh bang nhau => tgiac deu
 *      4. a^2 + b^2 = c^2 => tgiac vuong
 * 
 * OUTPUT: xuat 3 canh ra tgiac
 */

var a = 13;
var b = 15;
var c = 13;

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

var pytago = ( a * a) + ( b * b) === (c * c);

if( a + b > c && a + c > b && c + b > a ) {
    console.log("hợp lệ");
}else{
    console.log("nhập lại");
}

if( a === b && a === c & b === c) {
    console.log("Tam giác đều");
}else if( a === b || b === c || c === a){
    console.log("Tam giác cân");
}else if( pytago) {
    console.log("Tam giác vuông");
}

// ----------------bai 5-----------------------
/**
 * INPUT: nhap vao ngày tháng năm
 * 
 * PROCESS:
 *      1. kiem tra 3 canh co phai la cua tam giac
 *      2. 2 canh bang nhau, 1 canh khac => tgiac can
 *      3. 3 canh bang nhau => tgiac deu
 *      4. a^2 + b^2 = c^2 => tgiac vuong
 * 
 * OUTPUT: xuat 3 canh ra tgiac
 */
// var day = 21;
// var month = 12;
// var year = 2012;

function tomorrow(a, b, c) {
    var day_7 = a+=1;
    var day_8 = b;
    var day_9 = c;

    var date_3 = ( "ngày " + day_7 + " tháng "  + day_8 + " năm " + day_9) ;
    console.log(date_3);
}

function yesterday(x, y, z) {
    var day_1 = x-=1;
    var day_2 = y;
    var day_3 = z;

    var date_1 = ( "ngày " + day_1 + " tháng "  + day_2 + " năm " + day_3) ;
    console.log(date_1);
}

tomorrow(30, 11, 2000);
yesterday(21, 11, 2000);


// -------------bai 6-------------------
/**
 * INPUT: nhap thang va nam
 * 
 * PROCESS:
 *      1. dùng switch case để kiểm tra xem tháng và năm đó có bao nhiêu ngày
 *      2. dùng 2 chương trình switch case để tìm ngày cho cả năm thường và năm nhuận nhưng làm không ra :((
 * 
 * OUTPUT: xuat ra thang do nam do co bao nhieu ngay
 */

var month = 2;
var year = 2008;

month = parseInt(month);
year = parseInt(year);

// var year1 = year % 4 === 0 && year % 100 === 1;

// var year1 = 2012;
// if( month === 3 && year % 4 === 1) {
//     console.log("tháng có 31 ngày là tháng " + month + " năm " + year);
// }else{
//     console.log("không hợp lệ");
// }

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 12:
        console.log(31);
        break;
    case 2:
        //if()
        console.log(28);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30);
        break;
    default:
        console.log("tháng ko hợp lệ");
}

switch( year) {
    case 2012:
    case 2016:
    case 2020:
    case 2008:
    case 2004:
    case 2000:
        console.log(" tháng 2 năm nhuận có 29 ngày");
        break;
    default:
        console.log("không phải năm nhuận");
}

// ---------------bai 7--------------------------
/**
 * INPUT: nhap vào số có 3 chữ số
 * 
 * PROCESS:
 *      1. tách số trăm chục đơn vị
 *      2. xét các hàng trăm chục đơn vị theo cách đọc
 *      
 * 
 * OUTPUT: chuyển từ số thành chữ
 */

var number = 100;

var hundred = Math.floor(number / 100);


var dozen = Math.floor(number % 100 /10);

var unit = number % 100 %10;

if(dozen > 0) {
    console.log(hundred + " trăm " + dozen + " mươi " + unit);
}else if( hundred > 0 && dozen === 0 && unit > 0 ) {
    console.log(hundred + " trăm " + "lẻ " + unit);
}else if( hundred > 0 && dozen === 0 && unit === 0 ) {
    console.log(hundred + " trăm ");
}else if( hundred > 0 && dozen === 1 && unit === 0 ) {
    console.log(hundred + " trăm mười");
}else{
    console.log("Không hợp lệ");
}

// ---------------------bai 8--------------------------
/**
 * INPUT: nhap thông tin của 3 sinh viên
 * 
 * PROCESS:
 *      1. tính độ dài đoạn đường của 3 sinh viên
 *      2. so sánh rồi xem ai xa nhất
 *      
 *      
 * 
 * OUTPUT: xuất ai là người xa trường nhất
 */
var name1 = 'nghia';
var x1 = 3;
var y1 = 3;



var name2 = 'duong';
var x2 = 4;
var y2 = 2;

var name3 = 'dung';
var x3 = 2;
var y3 = 2;

var x4 = 4;
var y4 = 5;

var d1 = Math.sqrt( Math.pow( (x4 - x1),2 ) + Math.pow( (y4 - y1),2) );
// console.log(d1);

var d2 = Math.sqrt( Math.pow( x4 - x2,2 ) + Math.pow( y4 - y2,2) );
// console.log(d2);

var d3 = Math.sqrt( Math.pow( x4 - x3,2 ) + Math.pow( y4 - y3,2) );
// console.log(d3);

if(d1 > d2 && d1 > d3) {
    console.log( "sinh viên xa trường nhất là: " + name1);
}else if( d2 > d1 && d2 > d3 ) {
    console.log( "sinh viên xa trường nhất là: " + name2);
}else if( d3 > d1 && d3 > d2 ) {
    console.log( "sinh viên xa trường nhất là: " + name3);   
}else{
    console.log("không hợp lệ");
}








