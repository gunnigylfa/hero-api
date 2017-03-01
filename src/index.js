import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

const app = express();

/*
 * Send out a welcome message when the user hits our
 * welcome route at http://localhost:1337/help
 */
app.use('/welcome', (req, res) => {
  res.send({
    message: 'Welcome to our hero api',
  });
});

/*
 * Tell bodyParser that we are going to parse the bodies
 * of our requests as json
 */
app.use(bodyParser.json());

// Prepend our routes with a major version
app.use('/v1', routes);
// Fire up our server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
