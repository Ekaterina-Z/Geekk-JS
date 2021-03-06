const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();

/**
 * Активируем мидлвары
 */
app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/cart', cartRouter);


/**
 * API Каталога
 */
app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});


/**
 * API Корзины
 */
// app.get('/api/cart', (req, res) => {
//   // noinspection JSUnresolvedFunction
//   fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
//     if (err) {
//       res.sendStatus(404, JSON.stringify({result: 0, text: err}));
//     } else {
//       res.send(data);
//     }
//   });
// });
//
// // Добавление нового товара в корзине
//
// app.post('/api/cart', (req, res) => {
//
//   fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
//     if (err) {
//       res.sendStatus(404, JSON.stringify({result: 0, text: err}));
//     } else {
//       // парсим текущую корзину
//       const cart = JSON.parse(data);
//       // добавляем новый товар
//       cart.contents.push(req.body);
//       // пишем обратно
//       fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
//         if (err) {
//           res.send('{"result": 0}');
//         } else {
//           res.send('{"result": 1}');
//         }
//       })
//     }
//   });
// });
//
// // Изменяем количество товара
//
// app.put('/api/cart/:id', (req, res) => {
//
//   fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
//     if (err) {
//       res.sendStatus(404, JSON.stringify({result: 0, text: err}));
//     } else {
//       // парсим текущую корзину
//       const cart = JSON.parse(data);
//       // ищем товар по id
//       const find = cart.contents.find(el => el.id_product === +req.params.id);
//       // изменяем количество
//       find.quantity += req.body.quantity;
//       // пишем обратно
//       fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
//         if (err) {
//           res.send('{"result": 0}');
//         } else {
//           res.send('{"result": 1}');
//         }
//       })
//     }
//   })
// })
// app.delete('/api/cart/:id', (req, res) => {
//   const id = req.params.id
//   fs.readFile('./server/db/userCart.json', 'utf8', (err, data) => {
//     if (err) {
//       res.sendStatus(404, JSON.stringify({result: 0, text: err}));
//     } else {
//       const cart = JSON.parse(data);
//       cart.contents.forEach((element, index) => {
//         console.log(element);
//         if (element.id_product == id) {
//           cart.contents.splice(index, 1)
//           fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), 'utf8', (err) => {
//             if (err) {
//               res.send('{"result": 0}');
//             } else
//               res.send('{"result": 1}');
//           })
//         }
//       })
//     }
//   })
// })


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
