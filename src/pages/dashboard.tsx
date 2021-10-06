import React, { useState } from 'react'
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
    InputLeftElement
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
    FiBell
} from "react-icons/fi";

export default function Dashboard() {
  return (
    <Flex 
      h='100vh'
      flexDir='row'
      overflow='hidden'
      maxW='2000px'
    >
      <Flex
        w='15%'
        flexDir='column'
        alignItems='item'
        backgroundColor='#020202'
        color='#fff'
      >

      </Flex>

    </Flex>
  )
}