import React from 'react';
import {withFormik,Form,Field,} from 'formik';
import { Button,  FormGroup, Container,Row ,Col} from 'reactstrap';
import styled from 'styled-components';

const SignInForm=(props)=>{
    const Content = styled.div`
    border: 1px solid #000;
    background-image: url(https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60);
    width: 67em;
    height: 67em;
    overFlow: hidden;
    
`;
    console.log('props.values from sign in form',props.values)
    return (
        <Content>
        <Container >
            <Row >
                <Col xs='3' className='mx-auto'  style={{ marginTop:'20em',backgroundColor: '#333', borderColor: '#333' ,color:'white'}} >
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
    </Col>
    </Row>
    </Container>
    </Content>
       
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