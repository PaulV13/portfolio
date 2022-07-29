import imgRockPaperScissor from '../assets/rock-paper-scissor.png'
import imgPomodoro from '../assets/pomodoro.png'
import imgWeatherApp from '../assets/weather-app.png'

function useGetProjects() {
	const projects = [
		{
			id: '1',
			name: 'Pomodoro',
			description: 'Aplicación web de un pomodoro, creada con Vite js y React',
			image: imgPomodoro,
			imageDescription: 'Imagen de aplicacion de pomodoro',
			githubUrl: 'https://github.com/PaulV13/pomodoro-app',
			linkUrl: 'https://pomodoro-app-one.vercel.app',
		},
		{
			id: '2',
			name: 'Rock, Paper & Scissor',
			description:
				'Aplicación del juego Piedra, Papel y Tijera, está creada en React, es un challenge de Frontend Mentor.',
			image: imgRockPaperScissor,
			imageDescription: 'imagen de aplicacion de juego piedra papel tijera',
			githubUrl: 'https://github.com/PaulV13/game-paper-rock-scissors',
			linkUrl: 'https://juego-piedra-papel-tijera.netlify.app',
		},
		{
			id: '3',
			name: 'Weather App',
			description:
				'Aplicación del tiempo actual en determinada ciudad, está creada en React y consume la api de OpenWeatherMap',
			image: imgWeatherApp,
			imageDescription: 'imagen de aplicacion del tiempo',
			githubUrl: 'https://github.com/PaulV13/app-weather',
			linkUrl: 'https://weather-app-paulv13.vercel.app',
		},
	]

	return projects
}

export default useGetProjects
