import React from 'react'
import { Flex, Heading, Button } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex justifyContent="center" backgroundColor="gray.500"
            minH={200} p={10} color="white" flexWrap="wrap" margin={10}>
            <Heading as="h1" size="xl" color="white"
                fontWeight={100}>
                DOMINA EL TERRENO
            </Heading>
            <Flex justifyContent="center" w="100%">
                <Button colorScheme="black" variant="outline"
                    borderColor="white">
                    Iniciar sesión
                </Button>
                <Button colorScheme="black" variant="solid" ml={2}
                    backgroundColor="white" color="gray.500">
                    Registrarse
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header