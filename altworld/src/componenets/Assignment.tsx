import React, { useEffect, useState } from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { AssignmentDetails } from '../data/db'
import { FaCopy, FaDiceD6, FaPen } from 'react-icons/fa6'
import { candidate } from '../data/db'
import { StudentDetails } from './StudentDetails'
import { styled } from 'styled-components'


interface Student {
  id: number;
  name: string;
  email: string;
  image: string;
  score: number;
  behavioural: number;
  communication: number;
  situation_handling: number;
  about: string;
  experience: string;
  hobbies: string;
  intro: string;
}
export const Assignment = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Student | null>(null);
  useEffect(() => {
    setSelectedCandidate(candidate[0] || null);
  }, []);
  const handleCandidateClick = (id: number) => {
    const student = candidate.find((c) => c.id === id);
    setSelectedCandidate(student || null);
  };
  return (
    <DIV >
      <ASSIGNMENTDIV >
        <Text fontSize='md' textAlign={'left'} >Pages / Assignment</Text>
        <Text fontSize='md' fontWeight={'bold'} textAlign={'left'}>{AssignmentDetails.name}</Text>
        <div style={{boxShadow:'1px 4px 6px lightgrey',padding:'10px'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text fontSize='xl' fontWeight='bold'>{AssignmentDetails.name}</Text>
            <HStack>
              <Text fontWeight='bold' color='green'>{AssignmentDetails.status}</Text>
              <FaPen style={{ padding: '10px', borderRadius: '10px' ,boxShadow:'1px 4px 6px lightgrey'}}/>
            </HStack>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text fontSize='small'>Assignment link</Text>
            <Text fontSize='small' color='blue'>{AssignmentDetails.link}</Text>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text fontSize='small'>Assignment Hour</Text>
            <Text fontSize='small'>{AssignmentDetails.time}</Text>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text fontSize='small'>Assignment Ends at</Text>
            <Text fontSize='small'>{AssignmentDetails.endsat}</Text>
          </div>

          <HStack>
            <Button borderRadius={'10px'} fontSize='small' padding={'10px'} borderColor={'white'}><FaDiceD6 />TO REVIEW</Button>
            <Button borderRadius={'10px'} fontSize='small' padding={'10px'} borderColor={'white'}><FaCopy />SHORLISTED</Button>
          </HStack>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
              <Text fontSize={'medium'}>CANDIDATE</Text>
              <Text fontSize={'medium'}>SCORE</Text>
            </div>
            <div style={{ gap: '0px' }}>
              {candidate.map((el, i) => {
                return <div key={el.id} onClick={() => handleCandidateClick(el.id)}
                  style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                  <HStack>
                    <img src={el.image} alt='pic' width={'10%'} style={{ borderRadius: '10px' }} />
                    <div>
                      <Text textAlign={'left'} fontWeight={'bold'} margin={'0px'}>{el.name}</Text>
                      <Text textAlign={'left'} margin={'0px'}>{el.email}</Text>
                    </div>
                  </HStack>
                  <Text fontSize={'large'} fontWeight={'bold'} color={el.score > 50 ? "green" : "orange"}>{el.score}%</Text>
                </div>
              })}
            </div>
          </div>

        </div>
      </ASSIGNMENTDIV>


      {/* Student details */}
      <div style={{ padding: '20px', width: '70%', paddingTop: '40px', boxShadow: '5px 5px whitesmoke'}}>
        {selectedCandidate && (
          <StudentDetails
            image={selectedCandidate.image}
            name={selectedCandidate.name}
            email={selectedCandidate.email}
            score={selectedCandidate.score}
            behavioural={selectedCandidate.behavioural}
            communication={selectedCandidate.communication}
            situation_handling={selectedCandidate.situation_handling}
            about={selectedCandidate.about}
            experience={selectedCandidate.experience}
            hobbies={selectedCandidate.hobbies}
            intro={selectedCandidate.intro}
          />
        )}

      </div>

    </DIV>
  )
}

const DIV = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
margin:10px;
margin-top:2px;

@media screen and (max-width: 950px) {
    flex-direction: column;
    padding:10px;
}

`;

const ASSIGNMENTDIV = styled.div`
width:35%;
padding:10px;

@media screen and (max-width: 950px) {
  width:70%;
  padding:10px;
};
@media screen and (min-width: 951px) and (max-width: 1050px) {
  width:50%;
  padding:10px;
}

`;