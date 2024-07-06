import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Datascience from './assets/component/Datascience'
import All from './assets/component/All'
import FullStackDevelopment from './assets/component/FullStackDevelopment'
import Cybersecurity from './assets/component/Cybersecurity'
import Carrer from './assets/component/Carrer'
import Navbar from './assets/component/Navbar'
import './App.css'
//import Card from './component/Card'


function App() {
  const products = [
    {
      id: 1,
      name: 'Best Full-Stack Development Project Ideas in 2024',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg',
      date   :"03 Jul,2024",
      readtime:"4 Min Read"

    },
    {
      id: 2,
      name: 'How Long Would It Take to Be a Full Stack Developer?',
      author: 'Meghana D',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp',
      date   :"26 Mar, 2024",
      readtime:"3 Min Read",
      course:"fsd",

    },
    {
      id: 3,
      name: '10 Best Database Management Systems For Software Developers',
      author: 'By Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
      date   :"22 Mar, 2024",
      readtime:"4 Min Read",
      course:"fsd",
    },
   
    {
      id: 4,
      name: ' How does Apache work? A detailed introduction to Apache',
      author: 'By Tushar Vinocha',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png',
      date   :"26 Mar, 2024",
      readtime:"5 Min Read",
      course:"fsd",
   

    },
    
    {
      id: 5,
      name: 'Top 10 Full-Stack Developer Frameworks in 2024',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg',
      date   :"16 Apr, 2024",
      readtime:"5 Min Read",
      course:"fsd",
   

    },
    
    {
      id: 6,
      name: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
      date   :"14 Jun, 2024",
      readtime:"6 Min Read",
      course:"ds",
   

    },
    
    {
      id: 7,
      name: '12 Real-World Data Science Examples: Power Of Data Science',
      author: 'Lukesh',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png',
      date   :"25 Mar,2024",
      readtime:"3 Min Read",
      course:"ds",
   

    },
    
    {
      id: 8,
      name: 'Can A Commerce Student Do Data Science?',
      author: 'Saakshi Priyadarshini',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png',
      date   :"16 Apr, 2024",
      readtime:"3 Min Read",
      course:"ds",
   

    },
    
    {
      id: 9,
      name: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      author: 'Tushar Vinocha',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png',
      date   :"16 Apr,2024",
      readtime:"5 Min Read",
      course:"cs",  

    },    
    {
      id: 11,
      name: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      author: 'Jaishree Tomar',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      date   :"26 Mar, 2024",
      readtime:"4 Min Read",
      course:"cs",
    },
    
    {
      id: 12,
      name: 'What Is Hacking? Types of Hacking & More',
      author: ' Meghana D',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
      date   :"25 Mar, 2024",
      readtime:"6 Min Read",
      course:"cs",

    },
    {
      id:13,
      name:'FullStackDeveloper',
      author:'Tushar Vinocha',
      image:'https://media.swipepages.com/2022/12/5fcde7acf64f9100108c719e/fsd-300.webp',
      date:"6-07-24",
      readtime:"6 Min Read",
      course:"carrer",

    },
    {
      id:14,
      name:'UI/UX Developer',
      author:'Tushar Vinocha',
      image:'https://media.swipepages.com/2022/12/5fcde7acf64f9100108c719e/ux_ui-design-300.webp',
      date:"06-07-24",
      readtime:"6 Min Read",

      course:"carrer",
    },

  ];  
  return (
    <>
      <div>        
        <BrowserRouter>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/'element={<All products={products}/>}/>
          <Route path='/fsd' element={<FullStackDevelopment products={products}/>}/>
          <Route path='/ds' element={<Datascience products={products}/>}/>
          <Route path='/cs' element={<Cybersecurity products={products}/>}/>
          <Route path='/carrer' element={<Carrer products={products}/>}/>
     

        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App;
