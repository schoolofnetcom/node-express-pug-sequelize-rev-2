const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@localhost:3306/sequelize', { operatorsAliases: Sequelize.Op })
// const sequelize = new Sequelize('sequelize', 'root', '', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	operatorsAliases: Sequelize.Op
// 	// pool: { 
// 	// 	max: 
// 	// 	min: 
// 	// 	acquire:
// 	// 	idle
// 	// }
// })

sequelize
	.authenticate()
	.then(() => console.log('OK!'))
	.catch(() => console.log('ERROR!'))

sequelize.sync()

module.exports = sequelize