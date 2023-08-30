import React from 'react'
import {Box, Button, HStack, Heading, Input, Stack, VStack,Text} from '@chakra-ui/react'
import {AiOutlineSend, AiFillYoutube, AiFillInstagram,AiFillGithub} from 'react-icons/ai'
export default function Fotter() {
  return (
      <Box bgColor={'black'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>Follow Us For Updates</Heading>
        <HStack borderBottom={'2px solid white'} py={'2'}>
        <Input placeholder='Enter Email Here....' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
          <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={'20'}/>
          </Button>
        </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}> VIDEO HUB</Heading>
          <Text>All Rights are Reserved</Text>
        </VStack>
        <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'} >Social Media</Heading>
        <Button variant={'link'} colorScheme='white' >
        <a href="https://youtube.com/"><AiFillYoutube size={'30'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='white' >
        <a href="https://instagram.com/"><AiFillInstagram size={'30'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='white' >
        <a href="https://github.com/"><AiFillGithub size={'30'}/></a>
        </Button>
        </VStack>
        </Stack>
      </Box>
    )
}
