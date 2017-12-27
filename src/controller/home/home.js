module.exports = (req, res) => {
	return res.render('home/index', {
		title: 'Home',
		msg: 'Welcome to Events app'
	}) 
}