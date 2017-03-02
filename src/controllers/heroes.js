import { Router } from 'express';
import Hero from '../models/hero';

export default () => {
  const api = Router();

  // POST '/v1/heroes' Create new hero entry
  api.post('/', (req, res) => {
    // Create a new blank Hero model
    const newHero = new Hero();
    // Fetch hero properties from the request body
    newHero.name = req.body.name;
    newHero.secretIdentity = req.body.secretIdentity;
    // Save it in our database
    newHero.save((err) => {
      if (err) {
        return res.status(500).send('Something broke!');
      }
      // If everything worked then we notify user of success
      return res.json({
        message: 'Superhero saved successfully',
      });
    });
  });

  // GET '/v1/heroes' Get (Read) all heroes
  api.get('/', (req, res) => {
    Hero.find({}, (err, heroes) => {
      if (err) {
        return res.send(err);
      }
      return res.json(heroes);
    });
  });

  // GET '/v1/heroes/:id' Get (Read) a specific heroe by ObjectId
  api.get('/:id', (req, res) => {
    Hero.findById(req.params.id, (err, hero) => {
      if (err) {
        return res.send(err);
      }
      return res.json(hero);
    });
  });

  // PUT '/v1/restaurants' Update restaurant entry

  // DELETE '/v1/restaurants/' Delete restaurant entry
  return api;
};
