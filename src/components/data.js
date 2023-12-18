import exploreTheWorld from '../assets/exploreCountries.png'
import youthEmpoweringImg from '../assets/youthEmpowering.png'
import bookItNow from '../assets/bookItNow.png'
import LeaderBoard from '../assets/leaderBoard.png'
const projects=[
    {
        id:1,
        title:'Explore The World',
        imgSource: `${exploreTheWorld}`,
        description: 'Explore The World is a project that shows all the countries in the world and the details of individual countries, it is developed in React and Redux uses rest countries API, and is a Mobile version.',
        listOftech:['React', 'Redux', 'API', 'CSS3'],
        liveDemo:"https://explore-the-world-0u3r.onrender.com/",
        sourceCode:"https://github.com/clin2on3mun/explore-countries"
    },
    {
        id:2,
        title:'Youth Empowering Africa Summit',
        imgSource: `${youthEmpoweringImg}`,
        description: 'This is an Youth Empowering Africa summit event website that describes the event were it will take place and show all details needed for the user to understand what the event is all about and shows recent events in about page, it is an exciting project.',
        listOftech:['HTML5', 'CSS3', 'Javascript'],
        liveDemo:"https://clin2on3mun.github.io/YouthEmpowering/",
        sourceCode:"https://github.com/clin2on3mun/YouthEmpowering"
    },
    {
        id:3,
        title:'BookItNow',
        imgSource: `${bookItNow}`,
        description: 'The BookItnow - is an Online Doctor Reservation web application designed to provide users with the ability to reserve, view, and manage doctors and doctor appointment reservation . The system aims to streamline the process of finding and booking doctors from various locations.',
        listOftech:['Ruby on Rails', 'React', 'Redux','Css','Tailwind'],
        liveDemo:"https://bookitnow-app.onrender.com/",
        sourceCode:"https://github.com/cosywasswa/BookItNow-back-end"
    },
    {
        id:4,
        title:'LeaderBoard',
        imgSource: `${LeaderBoard}`,
        description: 'LeaderBoard is a project that uses API to store data in name and score format.',
        listOftech:['Webpack', 'Javascript', 'HTML5','Css', 'API'],
        liveDemo:"https://clin2on3mun.github.io/LeaderBoard/",
        sourceCode:"https://github.com/clin2on3mun/LeaderBoard"
    },
]
export default projects