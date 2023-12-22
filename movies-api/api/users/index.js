import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router();


router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.get('/users/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ success: false, msg: 'not found' });
    }

    const favorites = user.favorites || [];
    const userDetails = {
      _id: user._id,
      username: user.username,
      favorites: favorites,

    };

    res.status(200).json({ success: true, user: userDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Internal server error.' });
  }
});

router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));


router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    
    const result = await User.updateOne({ _id: req.params.id,}, req.body);
        if (result.matchedCount) {
            res.status(200).json({ code:200, msg: 'Success'});
        } else {
            res.status(404).json({ code:404, msg: 'failure'});
        }
        });


        async function registerUser(req, res) {
            await User.create(req.body);
            res.status(201).json({ success: true, msg: 'Success' });
        }
        
        async function authenticateUser(req, res) {
            const user = await User.findByUserName(req.body.username);
            if (!user) {
                return res.status(401).json({ success: false, msg: 'user not found' });
            }
        
            const isMatch = await user.comparePassword(req.body.password);
            if (isMatch) {
                const token = jwt.sign({ username: user.username }, process.env.SECRET);
                res.status(200).json({ success: true, token: 'BEARER ' + token });
            } else {
                res.status(401).json({ success: false, msg: 'wrong password or email' });
            }
        }

        router.get('/:user', async (req, res) => {
            try {
              const user = await User.findOne({ username: req.params.user });
              if (!user) {
                return res.status(404).json({ success: false, msg: 'User not found' });
              }
          
              const favorites = user.favorites || [];
          
              const userDetails = {
                _id: user._id,
                username: user.username,
                favorites: favorites,
        
              };
          
              res.status(200).json({ success: true, user: userDetails });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });


          router.get('/:email/favorites', async (req, res) => {
            try {
              const user = await User.findOne({ username: req.params.email });
              
              if (!user) {
                return res.status(404).json({ success: false, msg: 'User not found' });
              }
          
              const favorites = user.favorites || [];
          
              res.status(200).json({ success: true, favorites: favorites });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });

          router.post('/addtofavorites', async (req, res) => {
            try {
              const user = await User.findById(req.body.user);
              const userId = req.body.user;
              if (!userId) {
                return res.status(401).json({ success: false, msg: 'authorization error' });
              }
          
              const movie = req.body.movie;


              if (user.favorites.includes(movie)) {
                return res.status(400).json({ success: false, msg: 'already in favs.' });
            }
            const userUpdate = await User.findByIdAndUpdate(userId, { $addToSet: { favorites: movie } });
          
            if (!userUpdate) {
              return res.status(404).json({ success: false, msg: 'User not found.' });
          }
              res.status(200).json({ success: true, msg: 'movie has been added' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });
        
          router.post('/removefromfavorites', async (req, res) => {
            try {
              const userId = req.body.user;
              
              if (!userId) {
                return res.status(401).json({ success: false, msg: 'authorization error' });
              }
          
              const movie = req.body.movie;
              const user = await User.findByIdAndUpdate(userId, { $pull: { favorites: movie } });
          
              if (!user) {
                return res.status(404).json({ success: false, msg: 'error not found' });
              }
          
              res.status(200).json({ success: true, msg: 'movie has been added' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });

          router.get('/:email/watchlist', async (req, res) => {
            try {
              const user = await User.findOne({ username: req.params.email });
              
              if (!user) {
                return res.status(404).json({ success: false, msg: 'cant find user.' });
              }
          
              const watchlist = user.watchlist || [];
          
              res.status(200).json({ success: true, watchlist: watchlist });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error.' });
            }
          });

          router.post('/addtowatchlist', async (req, res) => {
            try {

              const user = await User.findById(req.body.user);
              const userId = req.body.user;
              if (!userId) {
                return res.status(401).json({ success: false, msg: 'authorization error' });
              }
          
              const movie = req.body.movie;

              if (user.watchlist.includes(movie)) {
                return res.status(400).json({ success: false, msg: 'already in favs.' });
            }
              const userUpdate = await User.findByIdAndUpdate(userId, { $addToSet: { watchlist: movie } });

              if (!userUpdate) {
                return res.status(404).json({ success: false, msg: 'User not found.' });
            }
          
              res.status(200).json({ success: true, msg: 'movie has been added' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });

          router.post('/removefromwatchlist', async (req, res) => {
            try {
              const userId = req.body.user;
              
              if (!userId) {
                return res.status(401).json({ success: false, msg: 'authorization error' });
              }
          
              const movie = req.body.movie;
              const user = await User.findByIdAndUpdate(userId, { $pull: { watchlist: movie } });
          
              res.status(200).json({ success: true, msg: 'movie removed' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ success: false, msg: 'server error' });
            }
          });


export default router;