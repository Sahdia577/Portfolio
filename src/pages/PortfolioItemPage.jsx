import { Tag } from '../components/ui/PortfolioItemPage';
import {
    Center,
    Image,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Flex,
    Button,
} from '@chakra-ui/react'


export const PortfolioItemPage = ({ item, clickFn }) => {
    return (
        <Center bgColor='purple.900' h='100vh' flexDirection='column'>
            <Card borderRadius='xl' w='3xl' h='3xl'>
                <CardBody>
                    <Image h='md' w='100%' src={item.imageUrl} borderRadius='xl' />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>{item.description}</Text>
                        <Flex gap={2}>
                            {item.skills.map((skill) => (
                                <Tag key={skill} size='md'>
                                    {skill}
                                </Tag>
                            ))}
                        </Flex>
                        <Button w='fit-content' onClick={() => clickFn()} bgColor='purple.200'>
                            Back to overview
                        </Button>
                    </Stack>
                </CardBody>
            </Card>
        </Center>
    );
};