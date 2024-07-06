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
      name: 'Hot Topics That You Need To Know In Full Stack Developer Syllabus',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png',
      date   :"03 Jul,2024",
      readtime:"4 Min Read",
      course:"fsd",

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
      name: ' Top 10 Product-Based Companies for Full-Stack Developers [2024]',
      author: 'Tushar Vinocha',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp',
      date   :"26 Mar, 2024",
      readtime:"5 Min Read",
      course:"fsd",
   

    },
    
    {
      id: 4,
      name: '7 Best Full-Stack Development Online Courses',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
      date   :"16 Apr, 2024",
      readtime:"5 Min Read",
      course:"fsd",
   

    },
    
    {
      id: 5,
      name: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      author: 'Isha Sharma',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
      date   :"14 Jun, 2024",
      readtime:"6 Min Read",
      course:"ds",
   

    },  
    
    {
      id: 6,
      name: 'Top Product-Based Companies for Data Science Freshers',
      author: 'Saakshi Priyadarshini',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
      date   :"16 Apr, 2024",
      readtime:"3 Min Read",
      course:"ds",
   

    },
    
    {
      id: 7,
      name: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      author: 'Jaishree Tomar',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      date   :"26 Mar, 2024",
      readtime:"4 Min Read",
      course:"cs",
    },
    
    {
      id: 8,
      name: 'What Is Hacking? Types of Hacking & More',
      author: ' Meghana D',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
      date   :"25 Mar, 2024",
      readtime:"6 Min Read",
      course:"cs",

    },
    {
      id:9,
      name:'FullStackDeveloper',
      author:'Tushar Vinocha',
      image:'https://media.swipepages.com/2022/12/5fcde7acf64f9100108c719e/fsd-300.webp',
      date:"6-07-24",
      readtime:"6 Min Read",
      course:"carrer",

    },
    {
      id:10,
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
