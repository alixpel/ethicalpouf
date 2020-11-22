const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
// create connection à la bdd mysql:
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'admin_2020',
    database: 'new_schema_alix'
});

// const de chargement de médias dans le formulaire :
// il faut préalablement avoir :
// - créé le dossier suivant dans le serveur : mkdir files-upload
// - lancé sur ton terminal : "npm install express-fileupload morgan lodash --save" , car ce sont les modules manquants.

const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');

// upload de fichiers :
app.use(fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 2 * 1024 * 1024 * 1024 // maxi 2MB
    }
}));

app.use('/uploads', express.static('uploads'));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
//start app
// const port = process.env.PORT || 3000;
// app.listen(port, () =>
//   console.log(`App is listening on port ${port}.`)
// );

// Connection à la bdd:
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});
// Utilisation du middleware cors pour éviter les problèmes de Same Origin
app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////////////
//requête GET pour afficher tous les produits:
app.get('/produits', (req, res) => {
    let sql = 'SELECT * FROM produits ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un produit:
app.get('/produitSelect/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher tous les artisans:
app.get('/artisans', (req, res) => {
    let sql = 'SELECT * FROM artisans ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un artisan:
app.get('/artisanSelect/:id', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher LE produit de l'artisan:
app.get('/produitsArtisan/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE artisan_id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//requête GET pour afficher l'artisan du produit:
app.get('/artisanProduit:id', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE id =' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

///REQUETE GET POUR PAGE ACCUEIL////////////////////////////////////////////////////////
// GET POUR AFFICHER 8 PRODUITS MAXI QUI ONT été sélectionné par firstPage
app.get('/produitsFirstpage', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE firstPage = 1 LIMIT 4';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
// GET POUR AFFICHER 8 ARTISANS MAXI QUI ONT été sélectionné par firstPage
app.get('/artisansFirstpage', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE firstPage = 1 LIMIT 8';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//requête GET pour afficher l' artisan du mois:
app.get('/artisanDuMois', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE artisanDuMois = 1 LIMIT 1' ;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher 4 produits de l'artisan du mois:
app.get('/produitsArtisanDuMois', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE produitDuMois = 1 LIMIT 4' ;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

// requête GET pour sélectionner les produits par categorie
app.get('/produitsCategory/:category', (req, res) => {
    let sql = "SELECT * FROM produits WHERE category =" + "'" + req.params.category + "'";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    })
  });

//////////////// REQUETES POST ////////////////

//POST pour entrer un nouvel artisan:
app.post('/artisans/nouveau', (req, res) => {

  let photoFile = req.files.photoFile;
  photoFile.mv('./uploads/' + photoFile.name);
  let sql =  `INSERT INTO artisans
                                    (name,
                                      photo,
                                      presentation,
                                      firstPage,
                                      artisanDuMois)
                  VALUES ('${req.body.name}',
                          '${photoFile.name}',
                          '${req.body.presentation}',
                          ${req.body.firstPage},
                          ${req.body.artisanDuMois} )`;
  db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
  })
})

//POST pour entrer un nouveau produit:
app.post('/produits/nouveau', (req, res) => {
    let photoFileProduct = req.files.photoFileProduct;
    photoFileProduct.mv('./uploads/' + photoFileProduct.name);
    let secondPhotoFileProduct = req.files.secondPhotoFileProduct;
    secondPhotoFileProduct.mv('./uploads/' + secondPhotoFileProduct.name);
    let sql =  `INSERT INTO produits
                                    (name,
                                    artisan_id,
                                    category,
                                    type,
                                    materials,
                                    photo,
                                    secondPhoto,
                                    dimensions,
                                    origine,
                                    longPrez,
                                    firstPage,
                                    produitDuMois)
                VALUES ('${req.body.name}',
                        '${req.body.artisan_id}',
                        '${req.body.category}',
                        '${req.body.type}',
                        '${req.body.materials}',
                        '${photoFileProduct.name}',
                        '${secondPhotoFileProduct.name}',
                        '${req.body.dimensions}',
                        '${req.body.origine}',
                        '${req.body.longPrez}',
                        ${req.body.firstPage},
                        ${req.body.produitDuMois} )`;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

/////////////////////////DELETE////////////////////////////////////////////

//requête DELETE pour supprimer un artisan:
app.delete('/artisandelete/:id', (req, res) => {
    let sql = 'DELETE FROM artisans WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//requête DELETE pour supprimer un produit:
app.delete('/produitdelete/:id', (req, res) => {
    let sql = 'DELETE FROM produits WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})


/////////////////////UPDATE////////////////////////////////////////////////
///requête UPDATE pour un artisan

// app.put('/changeArtisan/:id', (req, res) => {
//     let sql =  `UPDATE artisans SET
//                         name = '${req.body.name}' ,
//                         presentation = '${req.body.presentation}',
//                         photo = '${req.body.photo}',
//                         firstPage = ${req.body.firstPage},
//                         artisanDuMois = ${req.body.artisanDuMois}
//     WHERE id=` + req.params.id;
//     db.query(sql, (err, results) => {
//         if(err) throw err;
//         res.status(200).send(results);
//     })
// })

// essai de modification :
app.put('/changeArtisan/:id', (req, res) => {
    let photoFile = req.files.photoFile;
    photoFile.mv('./uploads/' + photoFile.name);
    let sql =  `UPDATE artisans SET
                        name = '${req.body.name}' ,
                        presentation = '${req.body.presentation}',
                        photo = '${photoFile.name}',
                        firstPage = ${req.body.firstPage},
                        artisanDuMois = ${req.body.artisanDuMois}
    WHERE id=` + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

///requête UPDATE pour un produit

app.put('/changeProduit/:id', (req, res) => {
    let sql =  `UPDATE produits SET
                        name = '${req.body.name}' ,
                        artisan_id = '${req.body.artisan_id}',
                        category = '${req.body.category}',
                        type = '${req.body.type}',
                        materials = '${req.body.materials}',
                        thumbnail = '${req.body.thumbnail}',
                        photo = '${req.body.photo}',
                        dimensions = '${req.body.dimensions}',
                        origine = '${req.body.origine}',
                        longPrez = '${req.body.longPrez}',
                        firstPage = ${req.body.firstPage}
    WHERE id=` + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//////////////// REQUETES POST ET GET POUR LA NEWSLETTER ////////////////

app.post('/inscription/nouveau', (req, res) => {
    let sql =  `INSERT INTO newsletter
                                      (email)
                    VALUES ('${req.body.email}')`;
    db.query(sql, (err, results) => {
          if(err) throw err;
          res.status(200).send(results);
    })
  })
  app.get('/newsletters', (req, res) => {
    let sql = 'SELECT * FROM newsletter ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})








app.listen('3000', () => {
    console.log('server started on port 3000');
})