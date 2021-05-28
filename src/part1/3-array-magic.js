const magicArray = (arr) => {
	if (!arr) return 0;
	return arr.filter(elm=> typeof elm ==='number')
				.filter(elm=>elm%7!=0)
				 .reduce((acc, arg) => acc + arg, 0);
}
  
export default magicArray
