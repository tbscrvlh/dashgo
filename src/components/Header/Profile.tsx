import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (

        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAline="right">
                    <Text>Tobias Carvalho</Text>
                    <Text color="gray.300" fontSize="small">
                        tobias.jung.carvalho@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Tobias Carvalho" src="https://github.com/tbscrvlh.png" />
        </Flex>
    )
}