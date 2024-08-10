
import { Top } from "../Components/Sections/Top";
import Welcome from "../Components/Sections/Welcome";
import AboutMe from '../Components/Sections/AboutMe'
import Projects from '../Components/Sections/Projects'
import SectionSeparator from '../Components/Sections/SectionSeparator'
import TechStack from '../Components/Sections/TechStack'
export default function Home() {

  return (
    <main style={{minHeight:'100vh',width:'100vw'}} className="bg-white dark:bg-darkbg">
      
     <Top/>
     <Welcome/>
     <AboutMe/>
     <SectionSeparator/>
     <Projects/>
     <SectionSeparator/>
     <TechStack/>
      
    </main>
  );
}
