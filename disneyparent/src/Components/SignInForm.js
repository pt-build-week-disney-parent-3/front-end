import React from 'react';
import {withFormik,Form,Field,} from 'formik';
import { Button,  FormGroup, Label, Input, FormText } from 'reactstrap';

const SignInForm=(props)=>{
    console.log('props.values from sign in form',props.values)
    return (
        <Form>
    <FormGroup>
            <label>
                Name:
                <Field type='text' name='name' placeholder='Name'/>
            </label>
    </FormGroup>
    <FormGroup>
            <label>
                   E-mail:
                   <Field type='text' name = 'email' placeholder='E-mail'/>
            </label>
    </FormGroup>
    <FormGroup>
            <label>
                   Password:
                   <Field type='text' name = 'password' placeholder='Password'/>
            </label>
    </FormGroup>
    <FormGroup>
    
            <label>
                   Terms of Service:
                    <Field type='checkbox' name = 'termsOfService' />
            </label>
        </FormGroup>
      <Button color="info" type ='submit'>Submit</Button>
    </Form>
       
    )
}
 

export default withFormik({
    mapPropsToValues:()=>({
      name:'',
      email:'',
      password:'',
      termsOfService:false
    }),
  
  
  }) (SignInForm);