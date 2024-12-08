import express from 'express';
const router = express.Router();
import playlistController from '../controller/PlaylistController.js';
import tokenMiddleware from '../middlewares/token.middleware.js';


router.post('/create', tokenMiddleware.authenticateToken, playlistController.createPlaylist);
router.get('/all', playlistController.getAllPlaylists);
router.get('/creator', tokenMiddleware.authenticateToken, playlistController.getAllPlaylistsByCreator);

router.get('/:id/tracks', tokenMiddleware.authenticateToken, playlistController.getAllTracksInPlaylist);
router.post('/track', tokenMiddleware.authenticateToken, playlistController.addTrackToPlaylist);
router.delete('/:id/track', tokenMiddleware.authenticateToken, playlistController.deleteTrackFromPlaylist);
// router.patch('/:id/order', tokenMiddleware.authenticateToken, playlistController.changeTrackOrder);

router.delete('/:id',  playlistController.deletePlaylist);
router.put('/:id', tokenMiddleware.authenticateToken, playlistController.updatePlaylist);
router.get('/:id', tokenMiddleware.authenticateToken, playlistController.getPlaylistById);

export default router;