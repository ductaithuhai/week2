//------BT1-------
function abs(a) {
    if(a<0){
        return -a;
    } else{
        return a;
    }
}
console.log(abs(-100));

//------BT2-------
function sum(a,b) {
        return a+b;
}
console.log(sum(10, 5));

//------BT3-------
function area(a,b) {
    let recArea;
    recArea= parseFloat(((a+b)*2).toFixed(2));
    return recArea;
}
console.log(area(10.2545, 5.5279));

//------BT4-------
function max(a,b) {
    if(a-b>0){
        return a;
    } if(a-b<0){
        return b;
    } else{
        return "Hai số bằng nhau";
    }
}
console.log(max(-5,-15));

//------BT5-------
function checkHMSNumber(h,m,s) {
    if(h<=24&&m<=60&&s<=60){
        return "h,m,s tạo thành một bộ giờ, phút, giây hợp lệ";
    } else{
        return "h,m,s không tạo thành một bộ giờ, phút, giây hợp lệ";
    }
}
console.log(checkHMSNumber(24,60,60));

//------BT6-------
function checkTriangleSides(a,b,c) {
    if(a<b+c&&b<a+c&&c<a+b){
        return "a,b,c là ba cạnh của 1 tam giác";
    } else{
        return "a,b,c không phải là ba cạnh của 1 tam giác";
    }
}
console.log(checkTriangleSides(3,4,2));

//------BT7-------
function getInteger(a) {
    if(parseFloat(a.toFixed(0))>a){
        return (parseFloat(a.toFixed(0))-1);
    } else{
        return parseFloat(a.toFixed(0));
    }

}
console.log(getInteger(1000.2987262));

//------BT8-------
function min(a,b,c) {
    let min;
    min=a;
    if(min>b&&c>b){
        min=b;
    }else if(min>c){
        min=c;
    }
    return min
}
console.log(min(30,25,24));

//------BT9-------
function leapYear(a) {
    if((a%4==0&&a%100!=0)||(a%400==0&&a%100!=0)){
        return "Năm đã nhập là năm nhuận";
    } else{
        return "Năm đã nhập không phải là năm nhuận";
    }
}
console.log(leapYear(2024));

// //------BT10-------
// function readNumberInteger(a) {
//     switch(a*10){
//         case 0:
//             return "Không";
//             break;
//     }
// }
// console.log(readNumberInteger(0));

//------BT16-------
function nextSecond(h,m,s) {
    if(h>23||m>60||s>60){
        return "Thời gian nhập vào không hợp lệ";
    }else{
        console.log("Bây giờ là "+h+" giờ "+m+" phút "+s+" giây");
        if (h<=23&&s<59&&m<59){
            s=s+1;
            return "Một giây sau là "+h+" giờ "+m+" phút "+s+" giây"
        } else if (h<=23&&s==59&&m<59){
            m=m+1;
            return "Một giây sau là "+h+" giờ "+m+" phút "+"00 giây"
        } else if (h<23&&s==59&&m==59){
            h=h+1;
            return "Một giây sau là "+h+" giờ "+"00 phút "+"00 giây"
        } else if(h==23&&s==59&&m==59){
            return "Một giây sau là 00 giờ 00 phút 00 giây"
        }
    }
}
console.log(nextSecond(23,25,59));

//------BT10-Nhom 2-------
function reverseNumber(a) {
    if(a<10){
        return "So nguoc lai cua a la: "+a;
    } else{
        let lenA=String(a).length;
        let singleNumber=[];
        for(let i=0;i<lenA;i++){
            singleNumber.push(a%10);
            a=Math.floor(a/10);
        }
        return parseFloat(singleNumber.join(""));
    }
}
console.log(reverseNumber(156));

//------BT11-Nhom 2-------
function checkSymmetryNumber(a) {
    let origin=a;
    if(a<10){
        return "So nguoc lai cua a la: "+a;
    } else{
        let lenA=String(a).length;
        let singleNumber=[];
        for(let i=0;i<lenA;i++){
            singleNumber.push(a%10);
            a=Math.floor(a/10);
        }
        let reverseA= parseFloat(singleNumber.join(""));
        if(reverseA==origin){
            return "So A đối xứng";
        } else{
            return "Số A không đối xứng";
        }
    }
}
console.log(checkSymmetryNumber(12122));

//------BT31-Nhom 2-------
function dayInterval(d1,m1,y1,d2,m2,y2) {
    const date1= new Date(y1+"-"+m1+"-"+d1);
    const date2= new Date(y2+"-"+m2+"-"+d2);
    let timeInterval=abs(date2.getTime()-date1.getTime())
    return timeInterval/86400000;
}
console.log(dayInterval(2,12,1994,3,4,2000));

//------BT32-Nhom 2-------
function dayCount(d,m,y) {
    const date= new Date(y+"-"+m+"-"+d);
    const firstDay= new Date(y+"-"+0+"-"+1);
    let dayCount=date.getTime()-firstDay.getTime()
    return dayCount/86400000+1;
}
console.log(dayCount(10,2,1994));

//------BT33-Nhom 2-------
function dayRemain(d,m,y) {
    const date3= new Date(y+"-"+m+"-"+d);
    let nextYear=y+1;
    const nextYearFirstDay= new Date(nextYear+"-"+1+"-"+1);
    let dayRemain=nextYearFirstDay.getTime()-date3.getTime();
    console.log(date3);
    console.log(nextYearFirstDay);
    console.log(dayRemain);
    return dayRemain/86400000;
}
console.log(dayRemain(30,12,95));