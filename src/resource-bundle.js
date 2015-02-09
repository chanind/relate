/* jshint esnext:true */

export default class ResourceBundle {

	constructor(definition) {
		this.nodesMap = {};
		for (var name in Object.keys(definition)) {
			this.nodesMap[name] = new QueryNode(definition[name]);
		}
	}

	getNodesMap() {
		return this.nodesMap;
	}

}