import React,{ useState,useEffect} from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

import { Button,  FormGroup, Label,Input,Form} from 'reactstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SearchForm = (props)=>{
   const [searchTerm ,setSearchTerm] = useState('')
   const [results ,setResults] = useState([])
   const handleChanges = (e) => {
     setSearchTerm(e.target.value);
   }

    useEffect(() => {
      axiosWithAuth()
      .get('/questions')
      .then(response =>{
        console.log('this is the response',response)
      })
      .catch(err=>{console.log('this is a error',err)})

    // const results = people.filter(person =>
    //   person.toLowerCase().includes(searchTerm)
    // );
    // setSearchResults(results);
  }, [searchTerm]);



    return (
    
        <div>
          <NavLink  to="/">
            <p style={{marginLeft:'2em',marginTop:'1em' }} >Home</p>
          </NavLink>
        
          <Form>
              <FormGroup>
                <Label  style={{marginLeft:'2em' }} for="Search">Search:</Label>
                <Input
                style={{marginLeft:'2em' ,width:'60em'}}
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={handleChanges}
                  
                  placeholder="Questions"
                />
                <Button color="info" type ='submit' style={{ marginLeft:'55em',marginTop:'1em',color:'white'}}>Search</Button>
              </FormGroup>
          </Form>
        </div>
      
    )
}
export default  SearchForm;