const {Router }=require('express')
const router=Router();
const {
    getUsers,
    getUsersByUsername,
    insertUser,
    getDatos,
    insertDatos,
    getBomba,
    insertBomba
 }=require('../controllers/index.controller');



router.get('/api/user', getUsers);
router.post('/api/user/:username', getUsersByUsername);
router.post('/api/user', insertUser)
router.get('/api/datos',getDatos)
router.post('/api/datos',insertDatos)
router.get('/api/bomba',getBomba)
router.post('/api/bomba',insertBomba)


module.exports=router;