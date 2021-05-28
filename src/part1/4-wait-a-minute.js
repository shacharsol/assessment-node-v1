

export default function waitAMinute(startTime, endTime) {
	//this is a configuration to our Pomodoro algorythm
	
	const config = {
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15,
		longBreakInterval: 4,		
	  };
	var moment = require('moment'); // require
	var from = moment(startTime);
    var to= moment(endTime);
	//calculate difference between the two dates  
    var diff = Math.abs(from.diff(to, 'minutes'));
	/// init variables
    var sessions = 0; // the total sessions 
    var totalConsecutiveSessions=0; // the total consecutive session to check if we need a long break 
    var counter=0;// some counter
     
    var nextSessionEnd=config.pomodoro;
    var sessions = 0;
    var totalConsecutiveSessions=0;
    var counter=0;
     
    var nextSessionEnd=config.pomodoro;
    do{
      if (counter==0 || counter==nextSessionEnd){// if we are starting the first session or ending the current one        
        sessions++;
        // console.log("new session ",sessions,counter);
		totalConsecutiveSessions++;

        if (totalConsecutiveSessions === config.longBreakInterval){// check if we need a long break
		   totalConsecutiveSessions=0;
           counter=counter+config.longBreak;
           nextSessionEnd = counter+config.longBreak+config.pomodoro;
		//    console.log("next session end ",nextSessionEnd);
        //    console.log("Long break ",config.longBreak)
        }
        else {
			// we beed a short break
            nextSessionEnd = counter+config.pomodoro;
            // console.log("Short break ",config.shortBreak)
          	counter=counter+config.shortBreak;
			// console.log("next session end ",nextSessionEnd);  
        }
      }   
      else{
		  // lets keep the good work
		//   console.log("Working ...",counter);
        counter=counter+1;
      }
      
      
    }while (counter<diff);
    
	// console.log("counter ",counter)
	if (counter<=nextSessionEnd){
		sessions--;
	}
	// console.log("total sessions ",sessions);
 	return sessions;       
}