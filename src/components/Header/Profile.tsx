import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>
                        Gregory Bonassina
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        bonassina3@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Gregory Bonassina" src="https://github.com/gregory-bonassina.png" />
        </Flex>
    );
}