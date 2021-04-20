const express = require('express');
const path = require('path');

const app = express()
const port = process.env.PORT || 3001

app.set(express.static(path.join(__dirname,
'../frontend/build')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

let id = 1
const message_list = [{id: id++, name: "rocal", message: "Hello World!"}];

app.get('/api/v1/list', (req, res) => {
  res.send(message_list);
});

app.post('/api/v1/add', (req, res) => {
  message_list.push({...{id: id++}, ...req.body})
  res.send(message_list);
});

app.delete('/api/v1/item/:id', (req, res) => {
  const index = message_list.findIndex((item) => item.id == req.params.id)
  if (index >= 0) {
    const deleted = message_list.splice(index, 1);
    res.send(message_list);
    console.log('Delete: ' + JSON.stringify(delete[0]))
  }
})

app.put(`/api/v1/item/:id`, (req, res) => {
  console.log(req.body)
  const index = message_list.findIndex((item) => item.id == req.params.id)
  if (index >= 0) {
    const item = message_list[index]
    item.message = req.body.message
    console.log(item, message_list)
    res.send(message_list);
    console.log('Edit: ' + JSON.stringify(item[0]))
  }
})

let redux_id = 1

const redux_message_list = [{id: redux_id++, name: "redux" , message: "Redux message!"}]

app.get('/api/v1/redux_list', (req, res) => {
  res.send(redux_message_list);
});

app.post('/api/v1/redux_add', (req, res) => {
  const new_message = { id: redux_id++, ...req.body }
  redux_message_list.push(new_message)
  console.log(redux_message_list)
  res.send(new_message);
});

app.delete('/api/v1/redux_item/:id', (req, res) => {
  const index = redux_message_list.findIndex((item) => item.id == req.params.id)
  if (index >= 0) {
    const deleted = redux_message_list.splice(index, 1);
    res.send({id: deleted[0].id});
    console.log('Delete: ' + JSON.stringify(deleted[0]))
  }
})

app.put(`/api/v1/redux_item/:id`, (req, res) => {
  console.log(req.body)
  const index = redux_message_list.findIndex((item) => item.id == req.params.id)
  if (index >= 0) {
    const item = redux_message_list[index]
    item.message = req.body.message
    console.log(item, redux_message_list)
    res.send(item);
    console.log('Edit: ' + JSON.stringify(redux_message_list[0]))
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})