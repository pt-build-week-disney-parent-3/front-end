import React,{ useState,useEffect} from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

import { Button,  FormGroup, Label,Input,Form} from 'reactstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SearchForm = (props)=>{
   const [searchTerm ,setSearchTerm] = useState('')
   const [results ,setResults] = useState([])
   const [questions,setQuestions] = useState([])

   
   const handleChanges = (e) => {
     setSearchTerm(e.target.value);
   }

    useEffect(() => {
      axiosWithAuth()
      .get('/api/questions')
      .then(response =>{
        console.log('this is the response',response)
        setQuestions(response.data)
      })
      .catch(err=>{console.log('this is a error',err)})

  
      
    }, []);

    console.log('this is questions',questions)

    useEffect(()=>{

    const output = questions.filter(question =>
        question.question.toLowerCase().includes(searchTerm)
      );
      setResults(output);

    },[searchTerm])



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

          
          {results.map(result=>{
            console.log('result',result)
            return <p>{result.question}</p>
          })}
        </div>
      
    )
}
export default  SearchForm;