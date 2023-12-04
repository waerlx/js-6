// // // for (let i = 0; i <= 110 ; i++ ){
// // //     if(i % 2 == 0){


// // //     console.log( i)
// // // }
// // // }
// // let month = 1
// // if (month === 1) {
// //     console.log("january")
// // } else if (month === 2) {
// //     console.log("february")
// // } else if (month === 3) {
// //     console.log("march")
// // } else if (month === 4) {
// //     console.log("april")
// // } else if (month === 5) {
// //     console.log("may")
// // } else if (month === 6) {
// //     console.log("june")
// // } else if (month === 7) {
// //     console.log("july")
// // } else if (month === 8) {
// //     console.log("August")
// // } else if (month === 9) {
// //     console.log("september")
// // } else if (month === 10) {
// //     console.log("october")
// // } else if (month === 11) {
// //     console.log("november")
// // } else if (month === 12) {
// //     console.log("december")
// // }
// // let month2 = 1
// // switch (month2) {
// //     case 1:
// //         console.log('january');
// //         break;
// //     case 2:
// //         console.log('februaryy');
// //         break;
// //     case 3:
// //         console.log('march');
// //         break;
// //     case 4:
// //         console.log('april');
// //         break;
// //     case 5:
// //         console.log('may');
// //         break;
// //     case 6:
// //         console.log('june');
// //         break;
// //     case 7:
// //         console.log('july');
// //         break;
// //     case 8:
// //         console.log('August');
// //         break;
// //     case 9:
// //         console.log('september');
// //         break;
// //     case 10:
// //         console.log('october');
// //         break;
// //     case 11:
// //         console.log('november');
// //         break;
// //     case 12:
// //         console.log('december');
// //         break;
// // }



// // // met a = 2 + 2
// // // switch(a) {
// // //     case 7;
// // //     alert('malovato');
// // //     break;
// // // }
// let browser = "edge"
// if (browser === "Edge"){
//     console.log('Youve got the Edge!')

// }else if (browser === "Chrome"  || brwoser === "Firefox" || brwoser === "Safari" brwoser === "Opera" ){
//     console.log("okay we support these browsers")
// }else{
//     console.log('white hope that thsi page looks ok!')
// }
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('We hope that this page looks ok!');
}
