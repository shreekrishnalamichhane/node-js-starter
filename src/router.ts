import express from 'express';

const router = express.Router();

import { statusRoutes } from '@/modules/status/routes';

// Status Routes
router.use('/status', statusRoutes);

export default router;
