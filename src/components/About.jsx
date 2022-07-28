import { Text, Container, Image, Flex, Box } from '@chakra-ui/react'
import jsIcon from './../assets/jsIcon.svg'
import htmlIcon from './../assets/htmlIcon.svg'
import cssIcon from './../assets/cssIcon.svg'
import reactIcon from './../assets/reactIcon.svg'

const About = () => {
	return (
		<Container maxW='container.xl' pt='158px' pb='94px' pl='150px' pr='150px'>
			<Flex
				flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
				alignItems='center'
				justifyContent='space-evenly'
			>
				<Image
					src='https://bit.ly/dan-abramov'
					boxSize='250px'
					display={{ base: 'none', md: 'block', lg: 'block' }}
				/>
				<Box>
					<Text fontSize='26px' fontWeight='bold'>
						Desarrollador Frontend
					</Text>
					<Text fontSize='18px'>kasldaksd</Text>
					<Flex my={4}>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							mx={2}
						>
							<Image src={jsIcon} boxSize='24px' alt='icono javascript' />
							<Text>Javascript</Text>
						</Box>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							mx={2}
						>
							<Image src={htmlIcon} boxSize='24px' alt='icono html' />
							<Text>HTML</Text>
						</Box>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							mx={2}
						>
							<Image src={cssIcon} boxSize='24px' alt='icono css' />
							<Text>CSS</Text>
						</Box>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							mx={2}
						>
							<Image src={reactIcon} boxSize='24px' alt='icono react' />
							<Text>React</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Container>
	)
}

export default About
