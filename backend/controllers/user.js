require("dotenv").config(); //charge les variables d'environnement à partir d'un .env fichier dans process.env
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
const user = require('../models/user');



// -----[enregistrement d'un utilisateur]-------------------------------------------------------------------
exports.signup = async (req, res) => {


  try {

    console.log("-1------------------------------", req.body);

    const alreadyExist = await user.alreadyExist(req.body.email);
    console.log("-2-----------------------------")
    if (alreadyExist.data.length > 0) {
      res.status(500).json({ error: "l'utilisateur existe déjà !" });
      console.log('utilisateur existe déjà');
      return
    }



    const hash = await bcrypt.hash(req.body.password, 10); // [10 est le salt (10 tours)]
    console.log("-3-----------------------------")




    const answer = await user.signup({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: hash,
      admin: 0
    });




    console.log("-4-----------------------------")

    if (answer.succeed) {
      console.log("-5-----------------------------")

      const token = jwt.sign(
        { userId: answer.data.insertId },
        process.env.JWT_KEY,
        // { expiresIn: "24h" }
      );
      res.status(201).json({ "message": "Utilisateur créé !", "jwt": token });
    } else res.status(500).json({ error: "oulàlà c'est le drame" });
  }

  catch (error) {
    res.status(500).json({ error: error });
  }
};



// -----[connection d'un utilisateur ]-----------------------------------------------------------------------
exports.login = async (req, res) => {

  try {

    console.log("-1------------------------------", req.body);

    const alreadyExist = await user.alreadyExist(req.body.email);
    console.log("-2-----------------------------")

    if (!alreadyExist.data.length > 0) {
      res.status(500).json({ error: "utilisateur n'existe pas !" });
      return console.log("utilisateur n'existe pas");
      //  console.log(alreadyExist.data.length)
    }
    console.log('ooooooooooooooooooo');

    // =============================================




    if (alreadyExist.succeed) {
      console.log('*****************', alreadyExist);
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_KEY,
        { expiresIn: "24h" },


      );
      console.log("----->>>>", user);
      return res.status(200).json({ 
        "message": "welcome user !",
        // "user": user.id,
        // "jwt": token,

      });


      // res.status(200).json({
      //   userId: user.id,
      //   token: token
      // });


    }

    console.log("---889899-----------------------")
    // next();
  }


  catch (error) {
    return res.status(500).json({ error });
  };

};


// -----[déconnexion d'un utilisateur ]-----------------------------------------------------------------------

exports.logout = async (req, res) => {
  try {
    const currentUser = await User.updateOne({ _id: req.user._id }, { $set: { connected: false } })
      // console.log(req.user._id)
      .then(() => res.status(200).json({ message: ' Utilisateur Déconnecté !' }))
      .catch(error => res.status(400).json({ error }));
  }
  catch {
    (error => res.status(500).json({ error }))
  }
};
// -----[modifier un utilisateur]-----------------------------------------------------------------------


exports.modifyUser = (req, res) => {
  const userObject = req.file ? {
    ...JSON.parse(req.body.user),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

  } : { ...req.body };
  User.findOne({ _id: req.params.id })
    .then(user => {
      if (req.file) {
        const filename = user.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'mise a jour utilisateur !' }))
            .catch(error => res.status(400).json({ error }));
        });
      } else {
        User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: "compte utlisateur modifiée !" }))
          .catch(error => res.status(400).json({ error }));
      }
    })
    .catch(error => res.status(500).json({ error }));
};



// -----[supprimer un utilisateur]-----------------------------------------------------------------------


exports.deleteUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      const filename = user.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {            //assure que le fichier image correspondant est également supprimé.
        user.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => error.status(500).json({
      error
    }));

};
