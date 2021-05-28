
import moment from 'moment';
const waitAMinute =  (startTime,endTime) => {
	const config = {
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15,
		longBreakInterval: 4,		
	  };
	 
	  	//calculate difference between the two dates  
	let  diff = Math.abs(moment(startTime).diff(moment(endTime), 'minutes'));
	return computePomodoro(config,diff);
   
}
const computePomodoro =  (config,diff) => {
		/// init variables
	let sessions = 0; // the total sessions 
    let totalConsecutiveSessions=0; // the total consecutive session to check if we need a long break 
    let counter=0;// some counter     
    let nextSessionEnd=config.pomodoro;
	// do while loop
    do{
      if (counter==0 || counter == nextSessionEnd){// if we are starting the first session or ending the current one        
        sessions++;        
		totalConsecutiveSessions++;

        if (totalConsecutiveSessions === config.longBreakInterval){// check if we need a long break
		   totalConsecutiveSessions = 0;
           counter +=  config.longBreak; // set a long break
           nextSessionEnd = counter + config.longBreak + config.pomodoro;
        }
        else {
			// we beed a short break
            nextSessionEnd = counter + config.pomodoro;
          	counter += config.shortBreak;		
        }
      }   
      else{
		  // lets keep the good work		
        counter++;
      }            
    }while (counter<diff);
	
	// handle un finsihed sessions
	if (counter<=nextSessionEnd){
		sessions--;
	}

   return sessions;
}
export default waitAMinute