import {
	Box,
	Center,
	Link,
	Spacer,
	Text,
	Container,
	Flex,
	Stack,
	Image,
} from '@chakra-ui/react'
import logo from '../assets/logo.png'

const Navbar = () => {
	return (
		<Box backgroundColor='brand.900' position='fixed' top='0px' w='100%'>
			<Container maxW='container.lg' color='texts' px={6}>
				<Flex>
					<Center w='100%'>
						<Link href='#' _hover={{ textDecoration: 'none' }}>
							<Flex alignItems='center'>
								<Image src={logo} alt='logo' boxSize='64px' />
								<Text fontSize='20px'>Paul Vidart</Text>
							</Flex>
						</Link>
						<Spacer />
						<Stack direction='row' spacing={4}>
							<Link
								href='#projects'
								color='texts'
								variant='link'
								fontSize='14px'
							>
								Proyectos
							</Link>
							<Link href='#contact' color='texts' fontSize='14px'>
								Contacto
							</Link>
							<Link
								href='./src/assets/cv.pdf'
								download='CurriculumVitae2022'
								color='texts'
								variant='link'
								fontSize='14px'
							>
								Descargar CV
							</Link>
						</Stack>
					</Center>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
