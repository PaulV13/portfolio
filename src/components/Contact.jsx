import { Container, Box, Link, Button, Flex, Text } from '@chakra-ui/react'

const Contact = () => {
	return (
		<Box backgroundColor='brand.900' id='contact'>
			<Container maxW='container.lg' py='50px'>
				<Flex
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Box>
						<Text color='texts'>
							Si estás interesado en un nuevo proyecto, una colaboración, no
							dudes en enviarme un correo electrónico.
						</Text>
					</Box>
					<Link
						href='mailto:paulvidart@gmail.com'
						_hover={{
							textDecoration: 'none',
						}}
						mt={5}
					>
						<Button
							backgroundColor='brand.900'
							color='texts'
							px={4}
							py={2}
							borderRadius={6}
							_hover={{
								textDecoration: 'none',
								background: 'white',
								color: 'brand.700',
							}}
						>
							Contactame
						</Button>
					</Link>
				</Flex>
			</Container>
		</Box>
	)
}

export default Contact
