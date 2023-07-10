import Courses from "./Courses";
import Footer from "./Footer";
import Navbar from "./Navbar";

import {useState} from 'react'

import Data from "./Data";

function App() {
  const [activeCourse, setActiveCourse] = useState('All')
  const [input, setInput] = useState('')
  const {data} = Data()

  const setActive = (course) => {
    setActiveCourse(course)
  }
  const getInput = (course) =>{
      setInput(course)
  }

  return (
    <div classNameName="App">
      <div className="bg-primary px-1 md:px-0 overflow-x-hidden">
        <Navbar setInput={getInput} input={input}/>
        <Courses activeCourse={activeCourse} setActiveCourse={setActive} data={data} input={input} setInput={getInput}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
