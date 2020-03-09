import React,{ useState,useEffect} from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { Button,  FormGroup, Label,Input,Form,} from 'reactstrap';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';


const Disclaimer = styled.small`
margin-left: 2%;
color: red;
text-align: justify;
align-content: left;
width: 20%;
`

const Container = styled.div`
background-color: #EEEEEE;
`

const Time = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-content: space-evenly;
width: 100%;
`
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
    
        <Container>
        
          <Form>
            <div>
              <FormGroup>
                <Label  style={{marginLeft:'2em' }} for="Search">Search:</Label>
                <Input
                style={{marginLeft:'2em' ,width:'90%'}}
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={handleChanges}
                  placeholder="Questions"
                />
                <Time>
                <Label style = {{width: '15%'}} for = 'Meeting Location'>Meeting Location:</Label>
                <Input 
                style = {{width:'20%'}}
                type = 'select'
                name = 'meeting location'
                >
                  <option value = 'Tomorrow-Land'>Tomorrowland</option>
                  <option value = 'Liberty-Square'>LibertySquare</option>
                  <option value = 'Adventure-Land'>Adventureland</option>
                  <option value = 'Frontier-Land'>Frontierland</option>
                </Input>
               
                  <label style = {{ width: '10%'}}for = 'Time'>Time:</label>
                  <Input type = 'time' name = 'time' style = {{ width: '15em'}}  >
                    
                  </Input><br/>
                  <Disclaimer >*For the safety of all of our guests, meetup times must be between 7am and 9pm </Disclaimer>
                </Time>
                <Button color="info" type ='submit' style={{ marginLeft:'55em',marginTop:'1em',color:'white'}}>Search</Button>
              </FormGroup>
              </div>
          </Form>

          
          {results.map(result=>{
            console.log('result',result)
            return <p>{result.question}</p>
          })}
        </Container>
      
    )
}
export default  SearchForm;