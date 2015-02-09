/* jshint esnext: true */

export default class Subquery {

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