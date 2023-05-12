const {Router} = require('express');
const {UserControllers} = require('../../controllers/user.controllers')
const {Render} = require('../../controllers/render.controller.js')

const router = Router();


router.get('/account/newPassword',UserControllers.newPassword)
router.post('/account/reset', UserControllers.EmailResetPassword)
router.get('/new_password_user',Render.newPassword)
router.get('/account/reset',Render.resetPassword)
router.get('/login',Render.loginRender)
router.get('/getUser/:id',UserControllers.getUserById)
router.get('/getUsers',UserControllers.getUsers)
router.get('/register',Render.registerRender)
router.post('/login',UserControllers.loginUser)
router.post('/register',UserControllers.registerUser)
router.delete('/deleteUser/:id',UserControllers.deleteUser)

module.exports = router