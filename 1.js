// console.log("hello");
// let tannu = "sharma"
// var kanha = "32434"
// const the = "ram"
// let ram
// // console.table([tannu,kanha,the,ram])
// // kanha = Number (kanha);
// // console.log(typeof kanha);
// // console.log(kanha);
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2));
// // console.log(Math.floor(4.2));
// // console.log(Math.min(4.2,4.6,4.1));
// // console.log(Math.max(4.2,4.6,4.1));
// // console.log(Math.random()*10+1);

// // const coding =[ "js","ruby","java","python","cpp"]
// // coding.forEach( (item)=>{
// //     console.log(item);
    
// // })

// // for (let i = 0; i <10; i++) {
    
// //     if ( i == 5) {
// //         console.log('hii');
        
// //         continue  
// //     }
// //     console.log(i) 
// // }
// // for (let index = 0; index <20; index++) {
// //    if(index== 5){
// //     console.log('detect 5');
// // break
// //    }
// //    console.log(index);
   
    
// // }
// // for (let i= 1; i <= 5; i++) {
    
// //     console.log('table of'+i);
    
// //     for (let j = 1; j <= 10; j++) {
        
// //         console.log( i+" * "+ j +" = " + i*j);
        
// //     }

// // }
// let myarray=['tannu','ankit','shital','soham']
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log("my name is",element);
    
// }
// // let a=3
// // while(a<=10){
// //     console.log("the number is ", a ," less than and equal to 10");
// //     a++
// // }
// // let a=3
// // do{
// //     console.log("the value is "+a); 
// //     a++
// // }
// // while(a<=5)
// //  
// const map = new Map() 
// map.set('in',"india")
// map.set('usa',"united state of America")
// map.set('Fr',"france")
// map.set('in',"india")
// for (const [key,value]of map){
//     console.log(key,":-", value);
    
// }
// const obj={
//     game1:'running',
//     game2:'football'

// }
// for (const [key,value] in obj) {
// console.log(obj[key]);

// }
// const coding =["tannu","shital","prachi","gudiya"]

// coding.forEach(item,index,arr => {
//     console.log(item,index,arr );
    
    
// });
let mynumber=[1,2,3,4,5,6,7,8]
const newnumber = mynumber.filter((num)=>{
    return num>4
})

mynumber.forEach(element => {
    if(num>4){
        newnumber.push(num)
    }
    
});
console.log(newnumber);