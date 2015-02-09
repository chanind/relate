/* jshint esnext:true */

jest.dontMock('../query-node');

let QueryNode = require('../query-node');

describe('QueryNode', function() {
	it('is a root node if an id is passed in', function() {
		rootNode = new QueryNode({
			resource: 'Set',
			id: 17
		});
		expect(rootNode.isRoot()).toBe(true);
	});
});
