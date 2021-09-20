var n=require("readline-sync")
var num=n.questionInt("enter  a number--")
var sum=0
for (let i=1; i<=num; i++){
    var num1=n.questionInt("enter a number---")
    sum=sum+num1
    console.log(sum)

}
