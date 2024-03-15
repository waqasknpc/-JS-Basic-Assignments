let str = "Superman";
let reversed = "";
for (let i = str.length-1; i>=0; i-- ){
    reversed += str[i];
}
console.log(reversed);


let str2 = prompt("Do you want to check the string is palindrome or not? Please enter any word here")
let reversed2 = "";
for(let i=str2.length-1; i>=0; i--){
    reversed2 += str2[i];
}
if(str2 === reversed2){
    alert("Yes,This Word is Palindrome")
} else{
    alert("No,This Word isn't Palindrome")
}


let dataType = prompt("Do You Want To Check Data Type. Please enter something")
if(isNaN(dataType)){
    alert("Data type: string")
}else{
    alert("Data type: number")
}



// let number = [1,2,3,5,6,7]
// let numberLength = number.length
// let lastDigit = number[number.length-1]
// // console.log(lastDigit)
// for(let i=number.length-1; i>=0; i--){
//     console.log(number[i])
//     if(numberLength - number[i]  === 1){
//         console.log("it is not consistent")
//         break;  
//     }else if(i==0){
//         console.log("it is consistent")
//     }
// }
