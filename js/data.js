const tilData = [
	"240101",
	"240102",
	"240103",
	"240104",
	"240105",
	"240106",
	"240107",
	"240108",
	"240109",
	"240110",
	"240111",
	"240118"
]

const projectsData = [
	{
		title: 'ChatApp',
		description: 'I built this one with nodejs and socket.io. Another project where I have forgotten what my code does. I\'ll have to revisit this one.',
		image: './assets/images/chatapp.png',
		alt: 'ChatApp',
		link: 'https://replit.com/@Winter95/chatApp',
		projectLink: "https://github.com/WinterSunset95/chatApp",
		status: 'Completed'
	},
	{
		title: 'Analog Clock',
		description: 'Built in vanilla, this is a simple analog clock that shows the time in real time. This project gave me some experience in working with angles and relative positional calculations with JavaScript - both of which proved really useful as I went.',
		image: './assets/images/analogclock.png',
		alt: 'Analog Clock',
		link: 'https://wintersunset95.github.io/analog_clock/',
		projectLink: "https://github.com/WinterSunset95/analog_clock",
		status: 'Completed'
	},
	{
		title: 'VanillaSnake',
		description: 'Another project which immensely helped me with vanilla js, the name being self explanatory. Being a project I wrote using purely my own logic, this one was my toughest projects yet (i am dumb)',
		image: './assets/images/vanillasnake.png',
		alt: 'VanillaSnake',
		link: 'https://wintersunset95.github.io/VanillaSnake/',
		projectLink: "https://github.com/WinterSunset95/VanillaSnake",
		status: 'Completed'
	},
	{
		title: 'MyOnlinePhone',
		description: 'I\'ve always wanted to emulate the look and feel of a phone on a website. This is my first attempt at it. It is a simple website that looks like a phone. It has a working calculator, a working clock and a working music player. It was a great learning experience.',
		image: './assets/images/myonlinephone.png',
		alt: 'MyOnlinePhone',
		link: 'https://wintersunset95.github.io/MyOnlinePhone/',
		projectLink: "https://github.com/WinterSunset95/MyOnlinePhone",
		status: 'In Progress'
	},
	{
		title: 'WhatsGo',
		description: 'A terminal client of WhatsApp. Built in Golang, this was my very first project in Golang. I no longer have any idea what my code does :)',
		image: './assets/images/whatsgo.png',
		alt: 'WhatsGo',
		projectLink: "https://github.com/WinterSunset95/WhatsGo",
		status: 'In Development'
	},
	{
		title: 'Unity Church Hlabu',
		description: 'Kan biekin, Unity Church, ta dinga hlabu ka siem ani a. React Native le typescript inchuk malam a ka thaw anih. Playstore ah khawm um a tih.',
		image: './assets/images/unitysongbook.png',
		alt: 'Unity Church Hlabu',
		link: 'https://play.google.com/store/apps/details?id=com.wintersunset95.UnityChurch',
		projectLink: "https://github.com/WinterSunset95/UnitySongBook",
		status: 'Completed'
	},
	{
		title: 'InfotechChatapp',
		description: 'A chat application I built in pure vanilla javascript, html and css. It uses a php backend and a mysql database. It is a simple chat application that allows users to register, login, send messages and receive messages.',
		image: './assets/images/infotechchatapp.png',
		alt: 'InfotechChatapp',
		link: 'https://wintersunset95.github.io/InfotechChatapp/',
		projectLink: "https://github.com/WinterSunset95/InfotechChatapp",
		status: 'Completed'
	},
	{
		title: 'InfoTube',
		description: 'A youtube clone I built on the invidious api. Although it lacks some features, It was a great learning experience',
		image: './assets/images/infotube.png',
		alt: 'InfoTube',
		link: 'https://wintersunset95.github.io/InfoTube/home/',
		projectLink: "https://github.com/WinterSunset95/InfoTube",
		status: 'Completed'
	},
	{
		title: 'Dolur Memorial',
		description: 'A placeholder website I built for a client. It is a school website with a simple design and codebase. There are some special features like an automatic carousel and a staggered image gallery.',
		image: './assets/images/dolurmemorial.png',
		alt: 'Dolur Memorial',
		link: 'https://wintersunset95.github.io/dolurmemorial/',
		projectLink: "https://github.com/WinterSunset95/dolurmemorial",
		status: 'Completed'
	},
	{
		title: 'Drum Kit',
		description: 'The drumkit from the javascript30 course. It is a simple drumkit that plays sounds when you press the corresponding keys. It was a great learning experience and I learnt a lot about event listeners and how to use them.',
		image: './assets/images/drumkit.png',
		alt: 'Drum Kit',
		link: 'https://wintersunset95.github.io/drum_kit/',
		projectLink: "https://github.com/WinterSunset95/drum_kit",
		status: 'Completed'
	},
	{
		title: 'Weather App',
		description: 'Using the Weather api from Rapidapi, I built a simple weather app that shows the weather of any city in the world. Again, a great learning experience',
		image: './assets/images/weather.png',
		alt: 'Weather App',
		link: 'https://wintersunset95.github.io/WeatherApi/',
		projectLink: "https://github.com/WinterSunset95/WeatherApi",
		status: 'Completed'
	},
]

const frontendProjects = [
	{
		title: 'SvelteTube',
		description: 'A svelte-based frontend for the my "PeekABoo" project - A multi platform streaming/aggregator service for Movies, TV Shows, Anime and Dramas',
		image: './assets/images/svelte-tube.jpg',
		alt: 'SvelteTube',
		link: 'https://svelte-tube.vercel.app',
		projectLink: "https://github.com/WinterSunset95/SvelteTube",
		status: 'Ongoing'
	},
	{
		title: 'PeekABoo',
		description: 'Built with Ionic and Capacitor for android, another frontend for the "PeekABoo" project',
		image: './assets/images/peekaboo-ionic.jpeg',
		alt: 'PeekABoo',
		link: 'https://github.com/WinterSunset95/PeekABoo',
		projectLink: "https://github.com/WinterSunset95/PeekABoo",
		status: 'Ongoing'
	},
	{},
	{},
	{
		title: 'Animated Flower',
		description: 'Vanilla javascript project. An animated flower without using any canvas elements.',
		image: './assets/images/flower.jpeg',
		alt: 'Animated Flower',
		link: 'https://wintersunset95.github.io/Flower4u',
		projectLink: "https://github.com/WinterSunset95/Flower4u",
		status: 'Completed'
	},
	{
		title: 'Dolur Memorial',
		description: 'A placeholder website I built for a client. It is a school website with a simple design and codebase. There are some special features like an automatic carousel and a staggered image gallery.',
		image: './assets/images/dolurmemorial.png',
		alt: 'Dolur Memorial',
		link: 'https://wintersunset95.github.io/dolurmemorial/',
		projectLink: "https://github.com/WinterSunset95/dolurmemorial",
		status: 'Completed'
	},
	{
		title: 'InfoTube',
		description: 'A youtube clone I built on the invidious api. Although it lacks some features, It was a great learning experience',
		image: './assets/images/infotube.png',
		alt: 'InfoTube',
		link: 'https://wintersunset95.github.io/InfoTube/home/',
		projectLink: "https://github.com/WinterSunset95/InfoTube",
		status: 'Completed'
	},
]

