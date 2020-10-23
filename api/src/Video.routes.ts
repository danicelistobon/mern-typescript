import { Router } from 'express';
import * as videoCtrl from './Video.controllers';

const router = Router();

router.post('/newVideo', videoCtrl.newVideo);
router.get('/videos', videoCtrl.getVideos);
router.get('/videos/:id', videoCtrl.getVideo);
router.put('/videos/:id', videoCtrl.updateVideo);
router.delete('/videos/:id', videoCtrl.deleteVideo);

export default router;
