const Tour = require( '../models/tourModel' );
const catchAsync = require( '../utils/catchAsync' );
const AppError = require( './../utils/appError' );

exports.overview = catchAsync( async ( req, res , next ) =>
{
  // 1) get tour data from collection
  const tours = await Tour.find();

  // 2) build template
  // 3) render that template with tour data => 1)
  res.status( 200 ).render( 'overview',{
    title: 'Exciting tours for adventurous people',
    tours 
    } );

} );

exports.tour = catchAsync( async ( req, res, next ) =>
{
  // 1) get tour from collection and populate reviews and guids 
  const tour = await Tour.findOne( { slug: req.params.slug } ).populate( {
    path: 'reviews',
    fields: 'review rating user',
  } );

  // if ( !tour ){
  //   return next( new AppError(
  //     'not found this tour !', 404
  //   ) );
  // };

  // 2) build a template
  
  // 3) send tour data to our template from 1)
  res.status( 200 ).render( 'tour', {
    title: tour.name,
    tour
  })
})

exports.login = ( req, res, next ) =>
{
  res.status( 200 ).render( 'login' , {
    title : 'Login into your Account'
  } );
}
exports.signup = ( req, res, next ) =>
{
  res.status( 200 ).render( 'signup' , {
    title : 'Sin Up to create Account'
  } );
}

exports.accountPage = catchAsync( async ( req, res, next ) =>
{
  res.status( 200 ).render( 'accountPage' );
})