
    function IsPrime(numb) {
         
         if( numb % 2 == 0 ) 
            return false;

        for( var i=3; i<= Math.sqrt(numb); i=i+2){
            if(numb%i == 0){
                return false;
            }
        }
        return true;
  }
  
module.exports = IsPrime;