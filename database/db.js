const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sama', {
  useMongoClient: true
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const formSchema = mongoose.Schema({
  boxes: Array,
  state: String
});

const Form = mongoose.model('Form', formSchema);
