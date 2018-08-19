const commonConfig = {
	database: {
		connectionString: process.env.DATABASE_URL || "postgres://pg:pg@localhost:5432/lugardedescanso"
	},
	port: 4000,
	sslPort: 4443
	// Add here settings shared by all the environments
};

const appConfigurations = {
	development: Object.assign({}, commonConfig, {
		// Add development configurations here
	}),
	stage: Object.assign({}, commonConfig, {
		// Add stage configurations here
	}),
	production: Object.assign({}, commonConfig, {
		// Add production configurations here
	})
};

export default appConfigurations[process.env.NODE_ENV || 'development'];
