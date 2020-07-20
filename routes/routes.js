const express = require('express');
const router = express.Router();
const Model = require('../models/model');

router.get('/', (req, res) => {
	Model.find()
		.sort({ date: -1 })
		.then(items => res.json(items));
});

router.post('/', (req, res) => {
	const newModel = new Model({
		name: req.body.name,
	});
	newModel.save().then(item => res.json(item));
});

// router.update('/:id', (req, res) => {
// 	Model.findById(req.params.id)
// 		.then(item => item.update().then(() => res.json({ status: 'updated' })))
// 		.catch(err => res.status(404).json({ status: 'no item found' }));
// });

router.delete('/:id', (req, res) => {
	Model.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ status: 'deleted' })))
		.catch(err => res.status(404).json({ status: 'no item found' }));
});

module.exports = router;
