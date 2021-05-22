import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex aling="center">
            { showProfileData && (
								<Box mr="4" textAlign="right"  borderColor="red.900">
              <Text>Tiago Oliveira</Text>
              <Text color="gray.300" fontSize="small">
                    tiagolivesan@outlook.com
               </Text>
            </Box>
						)}

          <Avatar size="md" name="Tiago Oliveira" src="https://github.com/tosantos1.png"/>
        </Flex>
    )
}