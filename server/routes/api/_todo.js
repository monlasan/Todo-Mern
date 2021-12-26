const express = require('express');
const todoModel = require('../../models/todos');
const router = express.Router();

router.get('/', async (req, res) => {
  const doc = await todoModel.find();
  res.json(doc);
});

router.post('/new', (req, res) => {
  let todo = new todoModel({
    text: req.body.text,
    done: req.body.done,
  });
  todo.save();
  res.json(todo);
});

router.put('/complete/:id', async (req, res) => {
  const filter = { _id: req.params.id };
  const update = { done: req.body.done };
  const updated = await todoModel.findOneAndUpdate(filter, update, {
    new: true,
    runValidators: true,
  });
  console.log(updated);
  res.json(updated);
});

router.delete('/delete/:id', async (req, res) => {
  const result = await todoModel.findByIdAndDelete(req.params.id);
  res.json(result);
});

module.exports = router;
