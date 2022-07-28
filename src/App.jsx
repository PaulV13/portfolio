import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Box, Divider } from '@chakra-ui/react'

function App() {
	return (
		<Box backgroundColor='background'>
			<Navbar />
			<About />
			<Divider orientation='horizontal' padding='64px 0' borderColor='gray' />
			<Project />
			<Contact />
			<Divider orientation='horizontal' borderColor='brand.700' />
			<Footer />
		</Box>
	)
}

export default App
