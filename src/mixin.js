/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
import React from 'react';
import ResourceManager from './resource-manager';
import SubQuery from './subquery';

export default {
	statics: {
		getQuery: function(queryName) {
			if (!this.resources || !this.resources[queryName]) {
				throw new Exception(`Could not find ${queryName} in static resources`);
			}
			return new SubQuery(this, this.resources[queryName]);
		}
	},

	propTypes: {
		resourceBundle: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		let manager = ResourceManager.getInstance();
		return manager.getResources(this.constructor.resources, this.props.resourceBundle);
	}
};