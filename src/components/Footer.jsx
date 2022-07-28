import {
	Container,
	Flex,
	Box,
	Text,
	Image,
	Link,
	Stack,
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

import twitterIcon from './../assets/twitterIcon.svg'
import githubIcon from './../assets/githubIcon.svg'
import linkedinIcon from './../assets/linkedinIcon.svg'

const Footer = () => {
	return (
		<Box backgroundColor='brand.900'>
			<Container maxW='container.lg' py='50px'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text color='texts'>© 2022 Paul Vidart</Text>
					<Link href='/#'>
						<ArrowUpIcon color='#fff' w={8} h={8} />
					</Link>
					<Stack direction='row' spacing={4}>
						<Link href='https://twitter.com' isExternal>
							<Image src={twitterIcon} boxSize='24px' />
						</Link>
						<Link href='https://github.com/' isExternal>
							<Image src={githubIcon} boxSize='24px' />
						</Link>
						<Link href='https://www.linkedin.com/' isExternal>
							<Image src={linkedinIcon} boxSize='24px' />
						</Link>
					</Stack>
				</Flex>
			</Container>
		</Box>
	)
}

export default Footer
