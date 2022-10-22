import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  extendTheme,
  theme as base,
  VStack,
  HStack,
  StackDivider,
  Heading,
  Avatar,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Center,
  Image,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  IconButton,
  Stack,
  useCheckboxGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';


const GreenAddIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#27AF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  </Icon>

  // <IconButton
  //     colorScheme='green'
  //     aria-label='Call Segun'
  //     size='lg'
  //     icon={<AiOutlinePlusCircle />}
  // />

)


export default function BucketList(context) {
  const { user_id } = useSelector(state => state.user)
  // console.log('user_id: ', user_id)
  // console.log('render start')

  const [bucketItems, setBucketItems] = useState([])
  // console.log('bi-start: ', bucketItems)

  const [allValues, setUserInput] = useState({
    userInput: "",
    itemText: [],
    id: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  let id = "";

  const ListComponent = (props) => {
    // console.log('props: ', props.checked);
    return (
      <Checkbox defaultChecked={props.checked} onChange={updateCheck} id={props.id} ><Text fontSize={"14px"}>{props.text}</Text></Checkbox>
    );
  };


  useEffect(() => {
    let retrievedBucketitems = [];
    // console.log('use ef, bi: ', bucketItems)
    // console.log('rbi: ', retrievedBucketitems)
    const getBucketList = async () => {
      setIsLoading(true);
      const res = await axios.get('/connect', {
        params: {
          user_id: user_id,
          pairing: context.pairing
        }
      });
      if (res.data[0].bucket_list) {
        retrievedBucketitems = await res.data[0].bucket_list.map((item, i) => (<ListComponent key={i} id={item.recordid} text={item.name} checked={item.checked} />))
        setBucketItems(retrievedBucketitems);
      }
      // console.log('bi-after: ', bucketItems )
      setIsLoading(false);
    };
    getBucketList();
  }, [])

  const updateCheck = (e) => {
    axios.put('/bucket-list', {
      id: e.target.id,
      boolean: e.target.checked
    })
  }
  // const [userInput, setUserInput] = useState("");
  const postReq = (input) => {
    axios.post('/bucket-list',
      {
        name: input,
        pairing: context.pairing
      }
    )
      .then(data => {
        console.log('data: ', data.data)
        id = data.data
      })
      .then(next => {
        setUserInput(prevState => {
          return { userInput: '', itemText: [...prevState.itemText, inputRef.current.value], id: id }
        }
        )
      }
      )

  };

  const handleChange = event => {
    setUserInput(prevState => {
      return { ...prevState, userInput: event.target.value }
    });
  };

  const handleClick = () => {
    if (inputRef.current.value.length > 0) {
      postReq(inputRef.current.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputRef.current.value.length > 0) {
      postReq(inputRef.current.value);
    };
  }


  return (
    <Center pb={2}>
      <Box
        w={'90%'}
        h={'200px'}
        bg={useColorModeValue('white', 'gray.800')}
        border={'1px'}
        borderColor={'#2C2C2D'}
        rounded={'md'}
        textAlign={'left'}>
        <Box
          w={'100%'}
          h={'30px'}
          bgColor={'#011936'}
          mt={0}
          py={1}
          pl={5}>
          <Text fontSize={'15px'} color={'white'}>Bucket List</Text>
        </Box>

        <Stack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={0}
        >
          <HStack w={'100%'} pl={2} py={1}>
            <Button
              width={'15px'}
              ml={0}
              height={"15px"}
              colorScheme='white'
              onClick={handleClick}
            >
              <GreenAddIcon />
            </Button>

            <Input
              variant='unstyled'
              placeholder='Add to list'
              value={allValues.userInput}
              _placeholder={{ color: 'gray.700', fontWeight: 'bold' }}
              size='sm'
              ref={inputRef}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />

          </HStack>
          <Box
            w={'90%'}
            overflowY="auto"
            maxHeight="130px"
            bg={useColorModeValue('white', 'gray.800')}
            pl={5}
            align='stretch'
          >
            {/* <Box w={'100%'} py={2} align='flex-start'>
                            <GreenAddIcon/>
                            <Text fontSize={"15px"}>Add to list</Text>
                        </Box> */}
            <VStack spacing={2} py={2} align='flex-start'>
              {/* {retrievedBucketitems === true ? {retrievedBucketitems} ? null} */}
              {isLoading ? <>Loading...</> : bucketItems}
              {allValues.itemText.map((item, i) => (<ListComponent key={i} id={allValues.id} text={item} />))}
            </VStack>
          </Box>
        </Stack>
      </Box>
    </Center>



  );


}

