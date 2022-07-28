import { useEffect, useState } from 'react'
import { Text, Container, Link, Image, Flex, Center } from '@chakra-ui/react'
import useGetProjects from '../services/useGetProjects.js'

const Project = () => {
	const [projects, setProjects] = useState([])
	console.log(projects)

	useEffect(() => {
		const projects = useGetProjects()
		setProjects(projects)
	}, [])

	return (
		<Container maxW='container.xl' pt='94px' pb='94px' id='projects'>
			<Center>
				<Text fontSize='18px' fontWeight='bold'>
					Proyectos
				</Text>
			</Center>
			<Flex flexDirection='column' justifyContent='center' alignItems='center'>
				{projects.map(p => (
					<Flex key={p.id} justifyContent='center' p='25px'>
						<Flex
							flexDirection='column'
							justifyContent='center'
							maxWidth='320px'
						>
							<Text
								color='gray.500'
								fontWeight='semibold'
								fontSize='16px'
								textTransform='uppercase'
								m={2}
							>
								{p.name}
							</Text>
							<Text fontWeight='semibold' fontSize='14px' m={2}>
								{p.description}
							</Text>
							<Flex fontSize='16px' color='brand.500' alignItems='center' m={2}>
								<Link
									href={p.githubUrl}
									isExternal
									mr={5}
									border='1px solid'
									borderColor='brand.500'
									borderRadius={2}
									color='brand.500'
									px={4}
									py={1}
									_hover={{
										textDecoration: 'none',
										backgroundColor: 'brand.900',
										color: 'texts',
										borderColor: 'brand.900',
									}}
								>
									Github
								</Link>
								<Link
									href={p.linkUrl}
									isExternal
									px={4}
									py={1}
									border='1px solid'
									borderColor='brand.500'
									borderRadius={2}
									color='brand.500'
									_hover={{
										textDecoration: 'none',
										backgroundColor: 'brand.900',
										color: 'texts',
										borderColor: 'brand.900',
									}}
								>
									Sitio web
								</Link>
							</Flex>
						</Flex>
						<Image src={p.image} alt={p.imageDescription} width='350px' />
					</Flex>
				))}
			</Flex>
		</Container>
	)
}

export default Project
