module.exports = (app) => {
	app.use('/', require('./controller/home/index'))
	app.use('/events', require('./controller/event/index'))
}