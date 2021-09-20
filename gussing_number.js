
var readlineSynce=require("readline-sync")
var chances=readlineSynce.questionInt("enter a chances---")
var randomNumber=Math.floor(Math.random()*10);
console.log(randomNumber)

for (let i=chances;i>0;i--){

    console.log("you have only this much  chance \n"+i+ "\n")
    guess=readlineSynce.questionInt("enter a guess number---")
    if (guess==randomNumber){
        console.log("congrats!(🥳🥳),your guess number  is right ")
        break

    }
    else if (guess>randomNumber){
        console.log("your guess number  is higher")

    }
    else if (guess<randomNumber){
        console.log(" your guess number  is low")

    }
    else if (i==1){
        console.log("sorry(🥺🥺)you are chances is finshed")
    }
}
