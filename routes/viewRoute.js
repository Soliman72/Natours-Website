const express = require( 'express' );
const router = express.Router();
const viewController = require( './../controllers/viewController' );
const authController = require( './../controllers/authController' );

router.use( authController.isLoggedIn );

router.get( '/', viewController.overview );
router.get( '/tour/:slug', viewController.tour );
router.get( '/login', viewController.login );
router.get( '/signUp', viewController.signup );
router.get( '/accountPage', viewController.accountPage );

module.exports = router;