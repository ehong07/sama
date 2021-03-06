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
  // box configs: [{xCoordinate: 0, yCoordinate: 0, value: 'boxValue'}, ...]
  boxes: Array,
  // state associated with form
  state: String,
  // nickname from client associated with form
  nickname: String
});

const Form = mongoose.model('Form', formSchema);

const postForm = boxConfig => {
  const newForm = new Form({
    boxes: boxConfig,
    state: 'TX',
    nickname: 'Test Nickname'
  });

  newForm.save(err => {
    if (err) {
      console.log('DB ERR: ', err);
    } else {
      console.log('DB SAVE SUCCESS');
    }
  });
};

const fetchForm = (filter, callback) => {
  Form.find(filter, (err, formData) => {
    if (err) {
      console.log('DB ERR: ', err);
      callback(err, null);
    } else {
      console.log('DB FETCH SUCCESS');
      callback(null, formData);
    }
  });
};

module.exports.postForm = postForm;
module.exports.fetchForm = fetchForm;
