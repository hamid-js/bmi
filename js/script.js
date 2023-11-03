 let weight = document.querySelector("#weight");
 let height = document.querySelector("#height");
 let weightVal = document.querySelector("#weight-val");
 let heightVal = document.querySelector("#height-val");
 let result = document.querySelector("#result");
 let category = document.querySelector("#category");

 weight.addEventListener("input",weightFunc);
    height.addEventListener("input",heightFunc);

 let weightValue ;
 function weightFunc () {
      weightValue = weight.value
     weightVal.innerHTML= `${weightValue} kg`
     
     bmiFunc()
     resultFunc()

     
    }
    

    let heightMeter ;
    function heightFunc () {
        let heightValue = height.value
         heightMeter = heightValue / 100
        heightVal.innerHTML= `${heightValue} cm`
        
        
        bmiFunc()
        resultFunc()
 }


 let bmiNumber;
 function bmiFunc (){
    bmiNumber = (weightValue / (heightMeter * heightMeter )).toFixed(1)
    if(isNaN(bmiNumber)){
        result.innerHTML= "لطفا قد و وزن خود را انتخاب کنید"
    }else{
        result.innerHTML= bmiNumber
    }
    

 }


 function resultFunc(){


     if (bmiNumber < 18.5){
          
             category.innerHTML= "under Weight";
             result.style.color= "orange"
         
         }else if ( bmiNumber < 25){
     
             category.innerHTML= "normal Weight";
             result.style.color= "#2ebf75"
     
         
         }else if ( bmiNumber < 30){
     
            category.innerHTML= "over Weight";
            result.style.color= "orange"
    
        
        }
         
         
         
         else if (bmiNumber >= 30){
             result.innerHTML= bmiNumber;
             category.innerHTML= "Obese";
             result.style.color= "red"
         
         }
 }



   