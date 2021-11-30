import React, { Component,useState } from 'react';
import { 
  Center,
  Box,
  useColorModeValue,
  Stack,
  Text,
  RadioGroup,
  FormLabel,
  Radio,
  Input,
  FormControl,
  Button,
  Select,
  

} from '@chakra-ui/react';
//import './App.css';

class bmr3 extends Component {

  constructor() {
    super();
     this.state = {
        gender: '',
        weight: '',
        age: '',
        heightFeet: '',
        heightInches: '',
        activity: '',
        bmr: '',
        error: '',
        dailyneeded: '',
        system: '',
        flag: false,
     }
     
  }
  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  }
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  }
  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  }
  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  }

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  }
  
  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  }
  handleSystemChange = (event) => {
    this.setState({ system: event.target.value });
  }

 calculateBMR(){
   let age = this.state.age;
   let weight = this.state.weight;
   let gender = this.state.gender;
   let heightFeet = this.state.heightFeet;
   let heightInches = this.state.heightInches;

   if(this.state.system==1) {
    if (age == '' || gender == '' || weight == '' || heightFeet == '' || heightInches == ''){

      this.setState({error: 'All Field Are Required!'});
      return;
    }
   }
   else if(this.state.system==2){
    if(age == '' || weight == '' || gender == '' || heightFeet == ''){
      this.setState({error: 'All fields are required'});
        return;
    }
   }

   

   let bmrCalc = '';
   if (this.state.system==1){
      let height = ((heightFeet * 30.48) + (heightInches * 2.54));
      if( gender == 2){
        bmrCalc = (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age));
      } 
      else if(gender == 1) {
        bmrCalc= (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      }
   }
   else if(this.state.system==2){
      if(gender == 1) //Female
      {  bmrCalc = 655 + ( 9.563 * weight ) + ( 1.850 * heightFeet ) - ( 4.676 * age ) }
      else if (gender == 2) //Male
      {  bmrCalc=  66.5 + ( 13.75 * weight) + ( 5.003 * heightFeet) - ( 6.755 * age )  }
      
   }

   
     

      this.setState({ bmr : bmrCalc });
      this.setState({flag:true});
      this.setState({error: ''});
      console.log(gender);
 }
 calculatecalorie(){
  let dailyCarloriesneeded;
    let selected = this.state.activity;
    let bmr1 = this.state.bmr;
     if(selected == 1.2){
       dailyCarloriesneeded = bmr1 * selected;
     }
     else if(selected == 1.375){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.55){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.725){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.9){
      dailyCarloriesneeded = bmr1 * selected;
    }
      this.setState({ dailyneeded : dailyCarloriesneeded })
      console.log(this.state.dailyneeded);

 }

  render(){
    let error;
    if(this.state.error){
      error = <div className="error">{this.state.error}</div>
    }
    let resultBMR;
    if(this.state.bmr){
      resultBMR = <div className="result">{this.state.bmr}</div>
    }

    if(this.state.flag == true){
      var a = true;
    }
    var b = true;
    if(this.state.system==2) {
      var b = false;
    }
    if(this.state.system==1) {
      var ft = 'ft';
      var inch = 'in';
    }
    
    let Calcalorie;

    if(this.state.bmr){
     
     Calcalorie = 
     
     <div className="workout">
      <Stack>
          <FormLabel>Workout in a Week</FormLabel>
           <Select value={this.state.activity} onChange={this.handleactivityChange} name="activity">
             <option value="">Select your Activity</option>
             <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
             <option value="1.375">Lightly Active</option>
             <option value="1.55">Moderately Active</option>
             <option value="1.725">Very Active</option>
             <option value="1.9">Extremely Active</option>
           </Select>

      </Stack>
      <Stack spacing={4} py={4}>
        <Button type="button" onClick={()=> this.calculatecalorie()}>Calculate Calorie</Button>
      </Stack>
    </div>
  }

    let neededcalorie;
    if(this.state.dailyneeded){
      neededcalorie = <div className="result">{this.state.dailyneeded}</div>
    }

  return (

    <Center py={5}>
      <Box
        maxW={'400px'}
        w={'full'}
        //bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
          <Stack
              textAlign={'center'}
              p={6}
              //color={useColorModeValue('gray.800', 'white')}
              align={'center'}>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}></Text>
              <Text fontSize={'4xl'} fontWeight={800}>
                BMR Calc JS
              </Text>
              
            </Stack>
          </Stack>
          <Stack spacing={2} px={4}>
            <RadioGroup>
              <FormLabel>Gender</FormLabel>
              <Radio value="1" checked={this.state.gender === "1"} onChange={this.handlegenderChange} name="gender"> Female</Radio>
              <Radio value="2" checked={this.state.gender === "2"} onChange={this.handlegenderChange} name="gender"> Male</Radio>
            </RadioGroup>
            <FormLabel>System</FormLabel>
            <RadioGroup>
              <Radio value="1" checked={this.state.system === '1'} onChange={this.handleSystemChange} name="Imperial">Imperial</Radio>
              <Radio value="2" checked={this.state.system === '2'} onChange={this.handleSystemChange} name="Metric"  >Metric</Radio>
            </RadioGroup>
          </Stack>
          <Stack spacing={4} px={4}>
            <FormControl>
              <FormLabel>Weight in (Pounds / Kg )</FormLabel>
              <Input type="number" value={this.state.weight} onChange={this.handleWeightChange} name="weight" placeholder="Weight" />
            </FormControl>
          
          
            <FormControl>
              <FormLabel>Height in feet and inches</FormLabel>
              <Input type="number" value={this.state.heightFeet} onChange={this.handleheightFeetChange} name="heightinFeet" min="0" max="8"/>
              {b && <Input type="number" value={this.state.heightInches} onChange={this.handleheightInchesChange} name="heightInches" min="0" max="100"/> }
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input type="number" value={this.state.age} onChange={this.handleAgeChange} name="age"/>
            </FormControl>
          </Stack>
          <Stack spacing={4} px={4}>
            <Button mt={10} bg={'green.200'} w={'full'} _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
                onClick={() => this.calculateBMR()}
                >Calculate</Button>
                {resultBMR}
                {Calcalorie}
                {neededcalorie}
          </Stack>
          
      </Box>
          
    </Center>
 
  );
}
}



export default bmr3;