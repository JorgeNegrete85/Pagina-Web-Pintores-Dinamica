const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials/')

app.use(express.static(__dirname + '/public'));

// archivo index
app.get('/', (req, res)=>{
   res.render('index', {
       autor: 'Jorge  Negrete',
       year: new Date().getFullYear(),
       title : 'La Importancia De La Pintura'
   });
});

// archivo edvard munvh
   app.get('/munch', (req, res)=>{
        res.render('edvard',{
            autor: 'Jorge  Negrete',
            year: new Date().getFullYear(),
            title : 'Munch Edvard',
            pintura: 'Algunas De Sus Pinturas'
        });
   });

// archivo alberto durero
       app.get('/durero', (req, res)=>{
           res.render('alberto',{
               autor: 'Jorge  Negrete',
               year: new Date().getFullYear(),
               title : 'Durero Alberto',
               pintura: 'Algunas De Sus Pinturas'
           });
       });

// archivo pablo pedro rubnes
           app.get('/rubens', (req, res)=>{
                   res.render('pablo',{
                       autor: 'Jorge  Negrete',
                       year: new Date().getFullYear(),
                       title : 'Rubens Pedro Pablo',
                       pintura: 'Algunas De Sus Pinturas'
                   });
           });

// archivo gustave caillebotte
               app.get('/caillebotte', (req, res)=>{
                   res.render('gustave',{
                       autor: 'Jorge  Negrete',
                       year: new Date().getFullYear(),
                       title : 'Caillebotte Gustave',
                       pintura: 'Algunas De Sus Pinturas'
                   });
                   });




app.listen(8080, ()=>{
    console.log('escuchando el puerto 8080');



});