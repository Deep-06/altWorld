import React from 'react'
import { Button, HStack,  Text, VStack } from '@chakra-ui/react'
import { FaHouseChimney, FaPlus } from "react-icons/fa6";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { styled } from 'styled-components'

export const Dashboard = () => {
  return (
    <DIV >
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <div style={{margin:'0px'}}>
          <div style={{margin:'0px' , display:'flex',gap:'0px'}}>
          <CiSquareChevUp />
          <CiSquareChevUp />
          </div>
          <CiSquareChevDown />
        </div>
        <Text fontWeight={'bold'} fontSize='lg' >Hi, AltWorld</Text>
      </div>
      <VStack>
        <HStack gap={'30px'} >
          <FaHouseChimney color={"#67D7CD"}  />
          <Text fontWeight='bold' fontSize='xl' >Dashboard</Text>
        </HStack>

        <VStack bgColor={"#67D7CD"} padding={'15px'} align={'left'} gap="5px" borderRadius={'10px'}>
          <Button margin='5px' width={'20%'} border='1px solid white'  bgColor={'white'} borderRadius={'10px'} padding={'10px'}><FaPlus color='grey' /></Button>
          <Text fontSize={'larger'} fontWeight='bold' textAlign={'left'} color={'white'} margin='0px'>New Assignment?</Text>
          <Text fontSize='lg' textAlign={'left'} color={'white'}>Select from pre-defined questions to have a quick turnaround</Text>
          <Button fontSize='lg' border='1px solid white' padding={'10px'} borderRadius={'10px'}>Create New Assignment</Button>
        </VStack>
      </VStack>

    </DIV>
  )
}

const DIV = styled.div`
padding:10px; 
margin:10px; 
width:18%;



@media screen and (max-width: 701px) and (max-width: 950px) {
  width:30%;
  margin:10px;
  padding:10px; 
  margin-right:20px;
};

@media screen and (max-width: 700px) {
  width:90%;
  
}

`;