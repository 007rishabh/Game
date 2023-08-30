import React from 'react'
import { Drawer,DrawerBody,DrawerHeader,DrawerContent,DrawerOverlay,DrawerCloseButton,Button, useDisclosure, VStack, HStack}from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
export default function Header() {
    const {isOpen,onOpen,onClose } = useDisclosure()
  return (
    <>
    <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Video Hub</DrawerHeader>
        <VStack alignItems='flex-start'>
            <Button onClick={onClose} variant ={'ghost'} colorScheme='purple'>
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} variant ={'ghost'} colorScheme='purple'>
                <Link to={'/video'}>Video</Link>
            </Button>
            <Button onClick={onClose} variant ={'ghost'} colorScheme='purple'>
                <Link to={'/video?category=free'}>Free Video</Link>
            </Button>
            <Button onClick={onClose} variant ={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Video</Link>
            </Button>
        </VStack>
        <HStack pos={'absolute'} bottom={'10'} left={0} justifyContent={'space-evenly'} w={'full'}>
        <Button onClick={onClose} colorScheme={'purple'}><Link to={'/login'}>Log In</Link> </Button>
        <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}><Link to={'/signup'}>Sign Up </Link></Button>

        </HStack>
    </DrawerContent>
    </Drawer>    
    
    </>
  )
}
