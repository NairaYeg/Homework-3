//task 2
function getNumber(result) {
            let ArrayOdd = [];
            let ArrayEven = [];
            for(let i = 0; i < result.length; i++) {      
                      if(typeof((result[i]) === "number") || result[i] === 0 ){
                         if(result[i]%2 === 0) {
                          ArrayOdd.push(result[i]);
                             }else{
                          ArrayEven.push(result[i]);
                                  }
                       }
              }
              for(let i = 0; i < ArrayOdd.length; i++ ){
                         ArrayEven.push(ArrayOdd[i]);
            }
                        return ArrayEven;
}
   
 
// task 4             


let NewArrStrings=[]
for (let n=0;    n<6;   n++){
            NewArrStrings[n]=prompt("")
             let min = NewArrStrings[0].length
              let max = NewArrStrings[0].length
            }
             for (let i=0;   i<NewArrStrings.length;      i++) {

             if(max<NewArrStrings[i].length){

             max = NewArrStrings[i].length
       }
              if(min>NewArrStrings[i].length){

              min = NewArrStrings[i].length
    }
}                   alert = ( min + max )

   

   

// task 5
let Numbers=[]
 // length of array 4
         for (let j=0;j<4;j++){
           Numbers[j]=(+prompt(""))
           }
         let sum=0
        for(let i=0;i<=Numbers.length-1;i++){
        sum=sum+Numbers[i]
         }
        alert(sum)

// task 6 
      let newArray=[]
      let multNumbers=[]
      for (let j=0;j<4;j++){
       newArray[j]=(+prompt(""))
           }
        if(newArray.length===0){
        alert(0)
      }
       else {
       for (let i=0;i<=newArray.length-2;i++) {
        multNumbers[i]=newArray[i]*newArray[i+1]
        }
}
       alert(multNumbers)
      







  
