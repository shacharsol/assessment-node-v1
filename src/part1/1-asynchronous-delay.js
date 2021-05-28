const asynchronousDelay = (delay, callback) => {
	setTimeout(() => callback(), delay); 
}
  
export default asynchronousDelay

