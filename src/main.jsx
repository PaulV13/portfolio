import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import './styles/index.css'
import App from './App'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>,
	document.getElementById('root')
)
