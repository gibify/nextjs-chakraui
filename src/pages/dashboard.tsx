import React, { useState } from 'react';
import MyChart from '../components/MyChart';

import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell,
} from "react-icons/fi";

export default function Dashboard() {
  const [display, setDisplay] = useState('hide');
  const [value, setValue] = useState(1);

  function handleOnClick() {
    if(display == 'show') { 
      setDisplay('none')
    } else { 
      setDisplay('show')
    }
  }

  return (
    <Flex 
      h={[null, null, '100vh']}
      flexDir={['column', 'column', 'row']}
      overflow='hidden'
      maxW='2000px'
    >
      {/* left  */}
      <Flex
        w={['100%', '100%', '15%', '15%', '15%']}
        flexDir='column'
        alignItems='center'
        backgroundColor='#020202'
        color='#fff'
      >
        <Flex 
          flexDir='column' 
          justifyContent='space-between' 
          h={[null, null, '100vh']}
        >
          <Flex flexDir='column'as='nav'>
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={['4xl','4xl','2xl','3xl','4xl']}
              alignSelf='center'
              letterSpacing='tight'
            >
              B4 Bank
            </Heading>
            <Flex 
              flexDir={['row', 'row', 'column', 'column', 'column']}
              align={['center', 'center', 'center', 'flex-start', 'flex-start']}
              justifyContent='center'
            >
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                  <Icon  as={FiHome} fontSize='2xl' className='active-icon'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                  <Text className='active'>Home</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                  <Icon as={FiPieChart} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                  <Text>Credit</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                  <Icon as={FiDollarSign} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                  <Text>Wallet</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                  <Icon as={FiBox} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' alignItems='center' mb={10} mt={5}>
            <Avatar my={2} src='/avatar.jpeg' />
              <Text textAlign='center'>Evandro Gibicoski</Text>
          </Flex>
        </Flex>
      </Flex>

      { /* center  */}
    <Flex
      w={['100%', '100%', '60%', '60%', '55%']}
      p='3%'
      flexDir='column'
      overflow='auto'
      minH='100vh'
    > 
      <Heading fontWeight='normal' mb={4}>Wellcome back, <Flex fontWeight='bold' display='inline-flex'>Evandro</Flex></Heading>
      <Text color='gray' fontSize='sm'>Balance</Text>
      <Text fontWeight='bold' fontSize='2xl'>$2,500.00</Text>
      <MyChart />
      <Flex justifyContent='space-between' mt={8}>
        <Flex align='flex-end'>
          <Heading as='h2' size='lg' letterSpacing='light'>Transactions</Heading>
          <Text fontSize='sm' color='gray' ml={4}>Oct 2021</Text>
        </Flex>
          <IconButton aria-label='' icon={<FiCalendar />}/>
      </Flex>
      <Flex flexDir='column'>
        <Flex overflow='auto'>
          <Table variant='unstyled' mt={4}>
            <Thead>
              <Tr color='gray'>
                <Th>transaction</Th>
                <Th>Category</Th>
                <Th isNumeric>Cash Back</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/apple-logo.png'/>
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Apple</Heading>
                      <Text fontSize='sm' color='gray'>Oct 25, at 1:40pm</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Eletronic</Td>
                <Td isNumeric>$2+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$242</Text>.00</Td>
              </Tr>
              
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/starbucks-logo.png'/>
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                      <Text fontSize='sm' color='gray'>Oct 20, at 9:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Cafe</Td>
                <Td isNumeric>$20+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$85</Text>.00</Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/samsung-logo.png' />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Samsung</Heading>
                      <Text fontSize='sm' color='gray'>Oct 15, at 11:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Devices</Td>
                <Td isNumeric>$50+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$350</Text>.00</Td>
              </Tr>
            {display == 'show' &&
                <>
                <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/apple-logo.png' />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Apple</Heading>
                      <Text fontSize='sm' color='gray'>Oct 13, at 1:40pm</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Eletronic</Td>
                <Td isNumeric>$26+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$342</Text>.00</Td>
              </Tr>
              
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/starbucks-logo.png' />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                      <Text fontSize='sm' color='gray'>Oct 05, at 9:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Cafe</Td>
                <Td isNumeric>$10+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$55</Text>.00</Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} src='/samsung-logo.png' />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Samsung</Heading>
                      <Text fontSize='sm' color='gray'>Oct 03, at 11:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Devices</Td>
                <Td isNumeric>$80+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$250</Text>.00</Td>
              </Tr>
                </>
              }
            </Tbody>
          </Table>
        </Flex>
        <Flex align='center'>
          <Divider />
          <IconButton 
            aria-label='' 
            icon={display == 'show' ? <FiChevronUp/> : <FiChevronDown/>} 
            onClick={handleOnClick}
          />
          <Divider />
        </Flex>
      </Flex>
    </Flex>
      {/* right */}
    <Flex
      w={['100%', '100%', '35%']}
      minW={[null, null, '300px', '300px', '400px']}
      bgColor='#F5F5F5'
      p='3%' 
      flexDir='column'
      overflow='auto'
    >
      <Flex alignContent='center'>
        <InputGroup bgColor='#fff' mb={4} border='none' borderColor='#fff' borderRadius='10p' mr={2}>
        <InputLeftElement pointerEvents='none' children={<FiSearch color='gray' />}/>
        <Input type='number' placeholder='Search'  borderRadius='10px' />
        </InputGroup>
        <IconButton aria-label='' icon={<FiBell />} fontSize='sm' bgColor='#fff' borderRadius='10px' p='10px' />
        <Flex w={25} h={25} bgColor='#008000' borderRadius='50%' color='#fff' align='center' justify='center' ml='-3' mt='-2' zIndex='1' fontSize='xs'>
          2
        </Flex>
      </Flex>
      <Heading letterSpacing='light'>Cards</Heading>
      {value == 1 && 
        <Box borderRadius='24px' mt={4} w='100%' h='200px' bgGradient='linear(to-t, #0a090a, #25409a)'>
        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
          <Flex justify="space-between" w="100%" align="flex-start">
              <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">$4,750.00</Text>
              </Flex>
              <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>B4 Bank</Text>
              </Flex>
          </Flex>
          <Text mb={4}>**** **** **** 4587</Text>
          <Flex align="flex-end" justify="space-between">
              <Flex>
                  <Flex flexDir="column" mr={4}>
                      <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                      <Text fontSize="lg">10/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                      <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                      <Text fontSize="lg">***</Text>
                  </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
          </Flex>
        </Flex>
        </Box>
      }
      {value == 2 && 
        <Box borderRadius='24px' mt={4} w='100%' h='200px' bgGradient='linear(to-t, #0a090a, #8a0496)'>
        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
          <Flex justify="space-between" w="100%" align="flex-start">
              <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">$3,700.00</Text>
              </Flex>
              <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>B4 Bank</Text>
              </Flex>
          </Flex>
          <Text mb={4}>**** **** **** 1250</Text>
          <Flex align="flex-end" justify="space-between">
              <Flex>
                  <Flex flexDir="column" mr={4}>
                      <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                      <Text fontSize="lg">10/24</Text>
                  </Flex>
                  <Flex flexDir="column">
                      <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                      <Text fontSize="lg">***</Text>
                  </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
          </Flex>
        </Flex>
        </Box>
      }
      {value == 3 && 
        <Box borderRadius='24px' mt={4} w='100%' h='200px' bgGradient='linear(to-t, #0a090a, #bf2806)'>
        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
          <Flex justify="space-between" w="100%" align="flex-start">
              <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">$4,700.0</Text>
              </Flex>
              <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>B4 Bank</Text>
              </Flex>
          </Flex>
          <Text mb={4}>**** **** **** 2050</Text>
          <Flex align="flex-end" justify="space-between">
              <Flex>
                  <Flex flexDir="column" mr={4}>
                      <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                      <Text fontSize="lg">12/25</Text>
                  </Flex>
                  <Flex flexDir="column">
                      <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                      <Text fontSize="lg">***</Text>
                  </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
          </Flex>
        </Flex>
        </Box>
      }
      <Flex justifyContent='center' mt={2}>
        <Button size='xs' mx={1} bgColor={value == 1 ? 'gray.600' : 'gray.400'} onClick={() => setValue(1) } />
        <Button size='xs' mx={1} bgColor={value == 1 ? 'gray.600' : 'gray.400'} onClick={() => setValue(2) } />
        <Button size='xs' mx={1} bgColor={value == 1 ? 'gray.600' : 'gray.400'} onClick={() => setValue(3) } />
      </Flex>
      <Flex flexDir='column' my={4}>
        <Flex justify='space-between' mb={2}>
            <Text>Balance</Text>
            <Text fontWeight='bold'>$640.42</Text>
        </Flex>
        <Flex justify='space-between'>
            <Text>Credit Limit</Text>
            <Text fontWeight='bold'>$1550.00</Text>
        </Flex>
      </Flex>
      <Heading letterSpacing='tight' size='md' my={4}>Send money to</Heading>
      <Flex>
        <AvatarGroup size='md' max={3}>
            <Avatar src='/images/face_image_01.png' />
            <Avatar src='/images/face_image_02.png' />
            <Avatar src='/images/face_image_03.png' />
            <Avatar src='' />
            <Avatar src='' />
        </AvatarGroup>
        <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor='gray.300' />
      </Flex> 
      <Text color='gray' mt={10} mb={2}>Card Number</Text>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<FiCreditCard color='gray.700'/>}/> 
        <Input type='number' placeholder='xxxx xxxx xxxx xxxx' />
      </InputGroup>
      <Text color='gray' mt={10} mb={2}>Sum</Text>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<FiDollarSign color='gray.700'/>}/> 
        <Input type='number' placeholder='185.00' />
      </InputGroup>
      <Button mt={4} bgColor='blackAlpha.900' color='#fff' p={7} borderRadius={15}>Send Money</Button>
      </Flex>
    </Flex>
  )
}

