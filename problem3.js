//...Problem3...///


function validateUsername(str){


    let lowerCase=str.toLowerCase();
    let size=lowerCase.length;

    if(size<4){
          return "Too Short: " +str;
    }else if(size===4){
           return "Available: " +str;
    } else if(lowerCase.includes(" ")){
          return "No Space Allowed: "+str;
    }
    
    
    else if(lowerCase.includes("admin")){
           
        return "Reserved Word: "+str;

    }
    
   
    
    else {

        return "Available: " +str;
    }

}

console.log(validateUsername("abcd"));
console.log(validateUsername("ab"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("a b"));
console.log(validateUsername("rahim123"));
console.log(validateUsername("Abdur Rahim"));
console.log(validateUsername("ab cd"));
console.log(validateUsername("admin user"));
console.log(validateUsername("adminuser"));
