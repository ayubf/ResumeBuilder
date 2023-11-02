import {useState} from 'react';
import Editor from './Editor';
import {resumeContext} from './context';

import { EducationInterface, ExpereinceInterface, LinkInterface, ProjectInterface, SkillsInterface } from './interfaces';

function App() {
  // const resume = useSelector((state: RootState) => state.resume);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [education, setEducation] = useState(new Map<number, EducationInterface>());
  const [experience, setExperience] = useState(new Map<number, ExpereinceInterface>());
  const [projects, setProjectExperience] = useState(new Map<number, ProjectInterface>());
  const [skills, setSkills] = useState(new Map<number, SkillsInterface>());
  const [links, setLinks] = useState(new Map<number, LinkInterface>());

  return (
    <div className="App">
      <h1>Resume Builder</h1>
        <resumeContext.Provider value={{
          name,
          email, 
          phone,
          education,
          experience,
          projects,
          skills,
          links,
          setName,
          setEmail,
          setPhoneNumber,
          }}>
          <Editor />
        </resumeContext.Provider>
      <div className="target">
      </div>
    </div>
  );
}

export default App;
