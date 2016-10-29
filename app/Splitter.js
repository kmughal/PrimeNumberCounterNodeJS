 function Splitter( strText /* The text where you want to apply the split function */) {
      
      // I can combine this with the below if statement , but
      // I think it will defeat the purpose / my intend of checking
      // for null values.
      if (typeof strText === "undefined" || strText === null ) {
         throw new Error("Null or empty values are not allowed");
      }

      strText = String(strText).trim();

       if (strText.length === 0) {
            return [];
        }

        return strText.split(" ");        
    }


    module.exports = Splitter;