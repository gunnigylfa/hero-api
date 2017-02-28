import express from 'express';

import heroes from '../controllers/heroes';

const router = express();
router.use('/heroes', heroes());

export default router;
