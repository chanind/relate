/* jshint esnext: true */

class QueryWrapper {

	constructor(classObj, queryData) {
		this.classObj = classObj;
		this.queryData = queryData;
	}

	getClassObj() {
		return this.classObj;
	}

	getQueryData() {
		return this.queryData;
	}

}

export default QueryWrapper;