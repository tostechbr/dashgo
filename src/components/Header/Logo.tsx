import { Text } from "@chakra-ui/react";

export function Logo(){
    return (
        <Text
              fontSize="3xl"
              fontWidth="bold"
              letterSpacing="tight"
              w="64">
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    )
}