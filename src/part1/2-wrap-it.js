const transformArgumentsToArray = (transformingFunction) => {
	return function () {
		return transformingFunction.apply(this, ...arguments);
	}
}

export default transformArgumentsToArray