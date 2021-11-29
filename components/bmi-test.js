import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function BmiTest() {
    const [bmiResult, setBmiResult] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    function handleHeightChange(event) {
      setHeight(event.target.value);
    }
    function handleWeightChange(event) {
      setWeight(event.target.value);
    }
    function calculateBmi() {
      const bmi = (weight / (height / 100) ** 2).toFixed(2);
      setBmiResult(Number(bmi));
    }
      return (
        <Center py={5}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}></Text>
              <Text fontSize={'4xl'} fontWeight={800}>
                BMI Calculator only js
              </Text>
              
            </Stack>
          </Stack>
            <Stack spacing={4} px={4}>
                <FormControl id="weight">
                    <FormLabel>Input Weigth</FormLabel>
                    <Input type="number"placeholder=" weight (kg)" value={weight} onChange={handleWeightChange} />
                </FormControl>
                <FormControl id="height">
                    <FormLabel>Input Height</FormLabel>
                    <Input type="number" placeholder="Height (cm)" value={height} onChange={handleHeightChange} />
                </FormControl>
            </Stack>
  
          <Box bg={useColorModeValue('gray.90', 'gray.100')} px={4} py={5}>
            
            <Button
                onClick={calculateBmi}
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                    bg: 'green.500',
                }}
                _focus={{
                    bg: 'green.500',
                }}>
                Calculate
            </Button>
          </Box>

            <Box bg={useColorModeValue('gray.90', 'gray.100')} px={4} py={5}>
                <List>
                    <ListItem>
                    
                        <Text>
                            Your BMI is:{bmiResult}
                        </Text>
                    </ListItem>
                    </List>
                    </Box>
                    
        </Box>
      </Center>
      );
  }