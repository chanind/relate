/* jshint esnext:true */

export default class QueryNode {

	constructor(details) {
		this.associated = {};
		this.details = details;
	}

	getResource() {
		return this.details.resource;
	}

	isRoot() {
		return typeof this.details.id !== 'undefined';
	}

	association(name, queryNode) {
		this.associated[name] = queryNode;
	}

}