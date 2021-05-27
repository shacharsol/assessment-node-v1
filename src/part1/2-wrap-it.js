
export default function transformArgumentsToArray(transformingFunction) {
	return function(){  
		return  transformingFunction.apply( this,...arguments );
	   
	  }
}

