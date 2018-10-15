import React from 'react';
import {Button} from 'reactstrap';

const FrontPage = () => {
  return(
    <div className='container centered'>
      <h4>Home</h4>
      <Button outline color='primary' href='/signup'>Signup </Button>{' '}
      <Button outline color='success' href='/login'>Login</Button>
    </div>
  );
};

export default FrontPage;
