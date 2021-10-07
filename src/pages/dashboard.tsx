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

  function handleOnClick() {
    if(display == 'show') { 
      setDisplay('none')
    } else { 
      setDisplay('show')
    }
  }

  return (
    <Flex 
      h='100vh'
      flexDir='row'
      overflow='hidden'
      maxW='2000px'
    >
      {/* left  */}
      <Flex
        w='15%'
        flexDir='column'
        alignItems='center'
        backgroundColor='#020202'
        color='#fff'
      >
        <Flex flexDir='column' justifyContent='space-between' h='100vh'>
          <Flex flexDir='column'as='nav'>
            <Heading
              mt={50}
              mb={100}
              fontSize='4xl'
              alignSelf='center'
              letterSpacing='tight'
            >
              Rise
            </Heading>
            <Flex flexDir='column' align='flex-start' justifyContent='center'>
              <Flex className='sidebar-items'>
                <Link>
                  <Icon as={FiHome} fontSize='2xl' className='active-icon'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}}>
                  <Text className='active'>Home</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items'>
                <Link>
                  <Icon as={FiPieChart} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}}>
                  <Text>Credit</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items'>
                <Link>
                  <Icon as={FiDollarSign} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}}>
                  <Text>Wallet</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items'>
                <Link>
                  <Icon as={FiBox} fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none'}}>
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' alignItems='center' mb={10} mt={5}>
            <Avatar my={2} src='/avatar.jpg' />
              <Text textAlign='center'>Evandro Gibicoski</Text>
          </Flex>
        </Flex>
      </Flex>

      { /* center  */}
    <Flex
      w='55%'
      p='3%'
      flexDir='column'
      overflow='auto'
      minH='100vh'
    > 
      <Heading fontWeight='normal'>Wellcome back, <Flex fontWeight='bold' display='inline-flex'>Evandro</Flex></Heading>
      <Text color='gray' fontSize='sm'>Balance</Text>
      <Text fontWeight='bold' fontSize='2xl'>$15,150.00</Text>
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
                <Th>Name of transaction</Th>
                <Th>Category</Th>
                <Th isNumeric>Cash Back</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Apple</Heading>
                      <Text fontSize='sm' color='gray'>Jan 20, 2021 at 1:40pm</Text>
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
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                      <Text fontSize='sm' color='gray'>Sep 25, 2021 at 9:00am</Text>
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
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Samsung</Heading>
                      <Text fontSize='sm' color='gray'>Fev 15, 2021 at 11:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Devices</Td>
                <Td isNumeric>$50+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$850</Text>.00</Td>
              </Tr>
            {display == 'show' &&
                <>
                <Tr>
                <Td>
                  <Flex align='center'>
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Apple</Heading>
                      <Text fontSize='sm' color='gray'>Jan 20, 2021 at 1:40pm</Text>
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
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                      <Text fontSize='sm' color='gray'>Sep 25, 2021 at 9:00am</Text>
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
                    <Avatar size='sm' mr={2} />
                    <Flex flexDir='column'>
                      <Heading size='sm' letterSpacing='tight'>Samsung</Heading>
                      <Text fontSize='sm' color='gray'>Fev 15, 2021 at 11:00am</Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Devices</Td>
                <Td isNumeric>$50+</Td>
                <Td isNumeric><Text fontWeight='bold' display='inline-table'>$850</Text>.00</Td>
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
      w='35%'
      bgColor='#F5F5F5'
      p='3%' 
      flexDir='column'
      overflow='auto'
    >

    </Flex>
    </Flex>
  )
}