
//...Problem2...///


function getDayType(day){

      switch(day){

            case "Friday":
            case "Saturday":
                  return "Weekend: "+day;
            
            case "Sunday":
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
                  return "Working Day: " +day;

            default:
                  return "Invalid day";
      }
}

console.log(getDayType("Friday"));
console.log(getDayType("Sunday"));
console.log(getDayType("Saturday"));





// function getDayType(day){

//      if(day==="Friday" || day==="Saturday"){
//            return "Weekend:" +day;
//      }else if(day==="Sunday" || day==="Monday" || day==="Tuesday" || day==="Wednesday" || day==="Thursday"){
//            return "Working Day:" +day;
//      }else{

//           return "Invalid day"

//      }

// }

// console.log(getDayType("Friday"));

// console.log(getDayType("Sunday"));
