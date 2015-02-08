/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
import React from './react';

import QueryWrapper from './query-wrapper';

export default {
	statics: {
		getQuery: function(queryName) {
			if (!this.resources || !this.resources[queryName]) {
				throw new Exception(`Could not find ${queryName} in static resources`);
			}
			return new QueryWrapper(this, this.resources[queryName]);
		}
	}
};