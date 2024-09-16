import Intro from "../components/Intro"
import Navbar from "../components/Navbar"
import Skills from "./Skills"
import Hobbies from "./Hobbies"
function home() {
  return (
    <div>
      <Navbar/>
     <Intro/>
     <Hobbies/>
     <Skills/>
    </div>
  )
}


export default home
