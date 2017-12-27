const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('event', {
		name: DataTypes.STRING,
		description: DataTypes.TEXT
	}, {
		timestamps: false
	})
}