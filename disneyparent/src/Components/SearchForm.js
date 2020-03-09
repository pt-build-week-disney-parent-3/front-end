import React from 'react';
import {withFormik,Form,Field,} from 'formik';
import { Button,  FormGroup, Label} from 'reactstrap';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';


const Disclaimer = styled.small`
margin-left: 20%;
color: red;

`

const Container = styled.div`
background-color: #EEEEEE;
`
const SearchForm = (props)=>{
    console.log('props from SearchForm.js',props.values)
    return (
        <Container>

          <Form>
            <div>
              <FormGroup>
                <Label  style={{marginLeft:'2em' }} for="Search">Search:</Label>
                <Field
                style={{marginLeft:'2em' ,width:'60em'}}
                  type="text"
                  name="search"
                  
                  placeholder="Keyword, Name, and or Location"
                />
                <Label style = {{marginLeft: '2em'}} for = 'Meeting Location'>Meeting Location:</Label>
                <Field 
                style = {{marginLeft:'2em', width:'30em'}}
                component = 'select'
                name = 'meeting location'
                >
                  <option value = 'Tomorrow-Land'>Tomorrowland</option>
                  <option value = 'Liberty-Square'>LibertySquare</option>
                  <option value = 'Adventure-Land'>Adventureland</option>
                  <option value = 'Frontier-Land'>Frontierland</option>
                </Field>
                <Label style = {{marginRight: '2em', paddingLeft: '20px'}} for = 'Time'>Time:</Label>
                <input type = 'time' name = 'time'  >
                  
                </input><br/>
                <Disclaimer >*For the safety of all of our guests, meetup times must be between 7am and 9pm </Disclaimer>
                <Button color="info" type ='submit' style={{ marginLeft:'55em',marginTop:'1em',color:'white'}}>Search</Button>
              </FormGroup>
              </div>
          </Form>
        </Container>
      
    )
}
export default withFormik({
    mapPropsToValues:()=>({
      search:'',
      
    }),
  
  
  }) (SearchForm);