/* jshint esnext:true */

let instance;

export default class ResourceManager {

	constructor() {
		this.rootNodesById = {};
	}

	getResources(resourceDefinitions, resourceBundle) {
		for (var name of Object.keys(resourceBundle.getNodeMap())) {
			node = resourceBundle.getNodeMap()[name];
			if (node.isRoot() && !this.rootNodesById[node.id]) {
				this._buildQueryNodeGraph(node, resourceDefinitions[name]);
			}
		}
		return {};
	}

	static getInstance() {
		if (!instance) instance = new ResourceManager();
		return instance;
	}

	_buildQueryNodeGraph(rootNode, nodeSubqueries) {
		this.rootNodesById[rootNode.id] = rootNode;
		if (nodeSubqueries.associated) {
			for (var name of Object.keys(nodeSubqueries.associated)) {

			}
		}
	}
}