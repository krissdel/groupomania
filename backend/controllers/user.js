// require("dotenv").config(); //charge les variables d'environnement à partir d'un .env fichier dans process.env
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
const User = require('../models/User');
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
// const Sequelize = require('sequelize')



// -----[enregistrement d'un utilisateur]-------------------------------------------------------------------
exports.signup = async (req, res) => {
    try {
        // const hash = await bcrypt.hash(req.body.password, 10); // [10 est le salt (10 tours)]

        const user = await User.create ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
          });
          console.log(req.body); 
            
        await user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(() => res.status(500).json({ message: 'mot de passe incorrect !' }));
    }   

      catch (error) {
        res.status(500).json({ error: "l'utilisateur existe déjà !"});
  }
};


      //  =================================================



//             var firstName = req.body.firstName;
//             var lastName = req.body.lastName;
//             var email =  req.body.email;
//             var password = req.body.password;

//     console.log( req.body)

//     if (!email || !password|| !firstName || !lastName ) {
//       return res.status(400).json({ error: 'Certains champs sont vides !' });
//   }
//   getUserByEmail(email)
//   .then(user => {
//       if(user) return res.status(400).json({ error: "L'utilisateur existe déjà !" });
//   })
//   .then (password => {
//     models.User.create({
//       firstName: firstName, 
//       lastName: lastName,
//       email: email,
//       password: password,
//     });
//     return res.status(200).json({ success: 'Utilisateur enregistré !' });
// })
// .catch(error => {
//   return res.status(400).json({ error });
// })
// }


// -----[connection d'un utilisateur ]-----------------------------------------------------------------------
exports.login = async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user){
            return res.status(401).json({ error: 'Utilisateur non trouveé !' });
        }
        const valid = await bcrypt.compare(req.body.password, user.password)
        
        .then(valid => {
            if (!valid) {
              return res.status(401).json({ message: "Mot de passe incorrect !" });
             }
                        res.status(200).json({
                          userId: user._id,
                          token: jwt.sign(
                            { userId: user._id },
                            // process.env.JWT_KEY,
                            'TOKEN_SECRET_KEY',
                            { expiresIn: "24h" },
                          ),
                        });
                      })
        .catch(error => {
          res.status(500).json({ error })
        });
                  }
    
    
    catch (error) {
      return res.status(500).json({ error });
  };

};


// -----[déconnexion d'un utilisateur ]-----------------------------------------------------------------------

exports.logout = async(req, res) =>{
  try{
    const user = await User.updateOne({_id:req.user._id},{$set :{connected : false}})
    // console.log(req.user._id)
    .then(() => res.status(200).json({ message: ' Utilisateur Déconnecté !'}))
    .catch(error => res.status(400).json({ error }));   
  }
  catch{
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
      .then(() => res.status(200).json({ message: 'mise a jour utilisateur !'}))
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
  User.findOne({ _id: req.params.id})
  .then(user => {
    const filename = user.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () =>{            //assure que le fichier image correspondant est également supprimé.
      user.deleteOne({_id: req.params.id })
      .then(() => res.status(200).json({ message: 'utilisateur supprimé !'}))
      .catch(error => res.status(400).json({ error }));
    });
  })
  .catch(error => error.status(500).json({
    error
  }));

};
