import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
const Signup = () => {
  return(
    <div className='container'>
      <a href='/'>Back to home</a>
      <h4>Signup Page</h4>
      <Form>
        <FormGroup>
          <Label for="accountName">Name</Label>
          <Input type="text" name="text" id="accountName" placeholder="Juan dela Cruz" />
        </FormGroup>
        <FormGroup>
          <Label for="accountName">School/Affiliation</Label>
          <Input type="text" name="text" id="accountName" placeholder="University of the Philippines Diliman" />
        </FormGroup>
        <Label for="educAttainment">Highest Educational Attainment</Label>
        <FormGroup check id="educAttainment">
          <Label check>
            <Input type="radio" name="educAttainment" />{' '}
            Bachelor's Degree
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="educAttainment" />{' '}
            Post-graduate Degree
          </Label>
        </FormGroup>
        <br />
        <Label for="howLong">How long have you been in the general area of sustainability studies? (may include years in graduate school) </Label>
        <FormGroup check id='howLong'>
          <Label check>
            <Input type="radio" name="howLong" />{' '}
            1-3
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="howLong" />{' '}
            4-6
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="howLong" />{' '}
            More than 7 years
          </Label>
        </FormGroup>
      </Form>
      <br />
      <a href='/home'><Button color='info'>Submit</Button></a>
    </div>
  );
};

export default Signup;