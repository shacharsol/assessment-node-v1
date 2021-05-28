

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
    var nextSessionEnd=config.pomodoro;
    do{
      if (counter==0 || counter==nextSessionEnd){// if we are starting the first session or ending the current one        
        sessions++;        
		totalConsecutiveSessions++;
        if (totalConsecutiveSessions === config.longBreakInterval){// check if we need a long break
		   totalConsecutiveSessions=0;
           counter=counter+config.longBreak;
           nextSessionEnd = counter+config.longBreak+config.pomodoro;
        }
        else {
			// we beed a short break
            nextSessionEnd = counter+config.pomodoro;
          	counter=counter+config.shortBreak;		
        }
      }   
      else{
		  // lets keep the good work		
        counter=counter+1;
      }
      
      
    }while (counter<diff);
	if (counter<=nextSessionEnd){
		sessions--;
	}
	
 	return sessions;       
}