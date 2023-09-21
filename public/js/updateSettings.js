import axios from 'axios';
import {showAlert} from './alert';

// type for data or password 
export const updateData =async ( data , type ) =>
{
  try
  {
    const url = type === 'password' ? 'http://localhost:3000/api/v1/users/updateMyPassword' :
      'http://localhost:3000/api/v1/users/updateMe';
    
    const res = await axios( {
      method: 'PATCH',
      url,
      data,
    } );
    if ( res.data.status === 'success' ){
      showAlert( 'success' , 'your data updated successfuly')
    };
  } catch (err) {
    console.log( err.response.data );
    showAlert( 'error', err.response.data.message );
  }

}

