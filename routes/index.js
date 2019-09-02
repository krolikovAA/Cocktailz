const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Cocktailz' });
});

router.get('/hello', function (req, res) {
  res.render('hello', { name: 'world!' });
})

router.get('/feedback', function (req, res) {
  console.log(req.query);
  const options = {
    name: req.query.name,
    height: req.query.height
  }
  res.render('feedback.hbs', options);
});

router.post('/feedback', function (req, res) {
  // res.redirect('/');
  console.log(req.body);
  fs.writeFile('db.json', JSON.stringify(req.body));
  res.json({ status: "Success" });
})


router.get('/srching', async function (req, res, next) {
  res.render('srching');
});


router.get('/srchname', async function (req, res, next) {
  res.render('srchname');
});




router.post('/cockinfo', async function (req, res, next) {
  let info = req.body
  let name = info.info.drinks[0].strDrink;
  let arrIng = [];
  for (let i = 1; i < 16; i++) {
    let key = `strIngredient${i}`
    if (info.info.drinks[0][key] !== '') {
      arrIng.push(info.info.drinks[0][key])
    }
  }
  let ingr = arrIng;
  let instr = info.info.drinks[0].strInstructions;
  let image = info.info.drinks[0].strDrinkThumb;
  let alc = info.info.drinks[0].strAlcoholic

  res.render('curcocktail', {
    name,
    ingr,
    instr,
    image,
    alc,
  });
})



router.post('/ingcock', async function (req, res, next) {
  let all = req.body.info.drinks
  let arr1 =[];
  let set = {};
  for (let i =0; i<10;i++){
    let randoms = Math.floor(Math.random()*(all.length - 1)+1);
    if (set[randoms] === undefined) {
      set[randoms] = true;
      arr1.push(all[randoms]);
    } else {
      i--;
    }
  }
  
  res.render('exmples',{arr1});
});


module.exports = router;
