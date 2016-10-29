  function GetCharacterCount(
        arr /*This is an array object*/,
        value /*Character to be checked */
       ) { 
  
        if (arr === null || typeof arr === "undefined") {
              throw new Error("Null or empty values are not allowed");
        }

        if (value === null || typeof value === "undefined") {
              throw new Error("Null or empty values are not allowed");
        }

        if (!arr.hasOwnProperty)
              throw new Error("hasOwnProperty is not defined on arr");     

        
        return (arr.hasOwnProperty(value) ? (parseInt(arr[value] , 10) + 1 ) : 1 );

      }

module.exports = GetCharacterCount;
