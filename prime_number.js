var n=require("readline-sync")
var num=n.questionInt("enter a any number--")
 var count=0
let i=2
while (i<num){
    if (num%i==0){
        count=count+1
    }
    i=i+1
}
if (count==0){
    console.log("prime number",num)
}
else{
    console.log("not prime number",num)
}