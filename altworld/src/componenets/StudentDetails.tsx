import React from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { FaBackward, FaForward } from 'react-icons/fa6';
import { styled } from 'styled-components'

interface StudentDetailsProps {
  image: string;
  name: string;
  email: string;
  score: number;
  behavioural: number;
  communication: number;
  situation_handling: number;
  about: string;
  experience: string;
  hobbies: string;
  intro: string;
}
interface VideoPlayerProps {
  videoLink: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink }) => {
  return (
    <div style={{ height: '500px' }}>
      <video controls>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ padding: '5px', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
        <FaForward style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '10px' }} />
        <div>
          <Text color={'white'}>Tell me about yourself</Text>
          <Text color={'white'}>Question 1/11</Text>
        </div>
        <FaBackward style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export const StudentDetails: React.FC<StudentDetailsProps> = ({ image, name, email, score, behavioural, communication,
  situation_handling, about, experience, hobbies, intro }) => {

  return (
    <DIV style={{display:'flex'}}>
      <div style={{ width: '70%', padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <HStack>
            <img src={image} alt='pic' width={'10%'} style={{ borderRadius: '10px' }} />
            <div>
              <Text textAlign={'left'} fontWeight={'bold'} margin={'0px'}>{name}</Text>
              <Text textAlign={'left'} margin={'0px'}>{email}</Text>
            </div>
          </HStack>
          <Text fontSize='x-large' fontWeight={'bold'} color={score > 50 ? "green" : "orange"}>{score}%</Text>
        </div>



        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text textAlign={'left'} width={'30%'}>Behavioural</Text>
          <progress value={behavioural} max={10} style={{ width: '50%', height: '10px', backgroundColor: 'lightgrey' }}
            className={behavioural >= 7 ? "progress-green" : "progress-orange"} />
          <style>
            {`
            .progress-green::-webkit-progress-value {
            background-color: green;
          }
      
           .progress-orange::-webkit-progress-value {
            background-color: orange;
           }
          `}
          </style>
          <Text width={'15%'} fontWeight={'bold'} color={behavioural >= 7 ? "green" : "orange"}>{behavioural}/10</Text>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text textAlign={'left'} width={'30%'}>Communication</Text>
          <progress value={communication} max={10} style={{ width: '50%', height: '10px', backgroundColor: 'lightgrey' }}
            className={communication >= 7 ? "progress-green" : "progress-orange"} />

          <style>
            {`
             .progress-green::-webkit-progress-value {
                background-color: green;
              }
      
          .progress-orange::-webkit-progress-value {
            background-color: orange;
          }
             `}
          </style>
          <Text width={'15%'} fontWeight={'bold'} color={communication >= 7 ? "green" : "orange"}>{communication}/10</Text>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text textAlign={'left'} width={'30%'}>Situation handling</Text>
          <progress value={situation_handling} max={10} style={{ width: '50%', height: '10px', backgroundColor: 'lightgrey' }}
            className={situation_handling >= 7 ? "progress-green" : "progress-orange"} />

          <style>
            {`
               .progress-green::-webkit-progress-value {
                background-color: green;
         }
      
           .progress-orange::-webkit-progress-value {
            background-color: orange;
            }
           `}
          </style>
          <Text width={'15%'} fontWeight={'bold'} color={situation_handling >= 7 ? "green" : "orange"}>{situation_handling}/10</Text>
        </div>

        <div style={{ padding: '10px' }}>
          <Text fontSize={'lg'} textAlign={'left'} margin={'0px'} fontWeight={'bold'}>About</Text>
          <Text textAlign={'left'} margin={'0px'}>{about}</Text>
        </div>

        <div style={{ padding: '10px' }}>
          <Text fontSize={'lg'} textAlign={'left'} margin={'0px'} fontWeight={'bold'}>Experience</Text>
          <Text textAlign={'left'} margin={'0px'}>{experience}</Text>
        </div>

        <div style={{ padding: '10px' }}>
          <Text fontSize={'lg'} textAlign={'left'} margin={'0px'} fontWeight={'bold'}>Hobbies</Text>
          <Text textAlign={'left'} margin={'0px'}>{hobbies}</Text>
        </div>

        <div style={{ padding: '10px' }}>
          <Text fontSize={'lg'} margin={'0px'} textAlign={'left'} fontWeight={'bold'}>Introduction</Text>
          <Text margin={'0px'} textAlign={'left'}>{intro}</Text>
        </div>

        <Button margin={'10px'} width={'70%'} border='1px solid #67D7CD' padding={'10px'} bgColor={"#67D7CD"} color={'white'} fontSize={'medium'} borderRadius={'10px'}>SHORTLIST</Button>
      </div>

      {/* images */}
      <div style={{ backgroundColor: 'black', height: '630px', }}>
        <VideoPlayer videoLink={image} />
        {/* <img src={image} alt='pic'/> */}
      </div>
    </DIV>
  )
}

const DIV = styled.div`
display:'flex';

@media screen and (max-width: 950px) {
    flex-direction: column;
}

`;