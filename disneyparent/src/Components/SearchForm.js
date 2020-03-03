import React from 'react';
import {withFormik,Form,Field,} from 'formik';
import { Button,  FormGroup, Label,Input ,Col} from 'reactstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SearchForm = ()=>{
    return (
        <div>
        <NavLink to="/">
        <p>Home</p>
      </NavLink>
      
        <Form>
            <FormGroup>
        <Label for="Search">Search</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search Questions"
        />
         <Button color="info" type ='submit' style={{ marginLeft:'55em',marginTop:'1em',color:'white'}}>Search</Button>
      </FormGroup>
        </Form>
        </div>
      
    )
}
export default withFormik({
    mapPropsToValues:()=>({
      search:'',
      
    }),
  
  
  }) (SearchForm);