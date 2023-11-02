import {resumeContext} from './context';
import { useContext, useState } from 'react';
import BaseForm from './subcomponents/BaseForm'
import SimpleForm from './subcomponents/SimpleForm';

const Editor = () => {

    const {
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

    } = useContext(resumeContext);


    const [eduLen, setEduLen] = useState(0);
    const [educationForms, setEducationForms] = useState(Array<JSX.Element>())

    const [expLen, setExpLen] = useState(0);
    const [expForms, setExpForms] = useState(Array<JSX.Element>());

    const [projLen, setProjLen] = useState(0);
    const [projForms, setProjForms] = useState(Array<JSX.Element>());


    const [skillsLen, setSkillsLen] = useState(0);
    const [skillForms, setSkillForms] = useState(Array<JSX.Element>());

    const [linksLen, setLinksLen] = useState(0);
    const [linkForms, setLinkForms] = useState(Array<JSX.Element>());


    return <div className="editor">
        <div className="form-field">
            Name <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-field">
            Email Address <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-field">
            Phone Number <input type="text" name="phone" value={phone} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </div>
        <div className='form-field'>
            Education
            <div className="button-wrapper">
                <button
                    onClick={(e) =>
                    {
                        education.set(eduLen, {
                        institutionName: "",
                        index: eduLen,
                        levelOfEducation: "",
                        startDate: "",
                        endDate: "",
                        location: "",
                        bulletPoints: [],
                        })
                        setEduLen(eduLen+1)
                        setEducationForms(Array.from(education.keys()).map((i: number) => BaseForm(i, education, setEducationForms)));
                    }}
                >+</button>
            </div>
            <div className="button-wrapper">
                <button
                    onClick={(e) => {
                        education.clear()
                        setEducationForms(Array.from(education.keys()).map((i: number) => BaseForm(i, education, setEducationForms)));
                    }}
                >
                    Clear
                </button>
            </div>
            <div className="education-target">
                {educationForms.map(i => <div className="base-form-wrapper">{i}</div>)}
            </div>
        </div>
        <div className='form-field'>
            Experience
            <div className="button-wrapper">
                <button
                    onClick={(e) =>
                    {
                        experience.set(expLen, {
                        institutionName: "",
                        index: expLen,
                        roleName: "",
                        startDate: "",
                        endDate: "",
                        location: "",
                        bulletPoints: [],
                        })
                        setExpLen(expLen+1)
                        setExpForms(Array.from(experience.keys()).map((i: number) => BaseForm(i, experience, setExpForms)));
                    }}
                >+</button>
            </div>
            <div className="button-wrapper">
                <button
                    onClick={(e) => {
                        experience.clear()
                        setExpForms(Array.from(experience.keys()).map((i: number) => BaseForm(i, experience, setExpForms)));
                    }}
                >
                    Clear
                </button>
            </div>
            <div className="base-target">
                {expForms.map(i => <div className="base-form-wrapper">{i}</div>)}
            </div>
        </div>
        <div className='form-field'>
            Projects
            <div className="button-wrapper">
                <button
                    onClick={(e) =>
                    {
                        projects.set(projLen, {
                        index: projLen,
                        title: "",
                        startDate: "",
                        endDate: "",
                        bulletPoints: [],
                        stack: [],
                        })
                        setProjLen(projLen+1)
                        setProjForms(Array.from(projects.keys()).map((i: number) => BaseForm(i, projects, setProjForms)));
                    }}
                >+</button>
            </div>
            <div className="button-wrapper">
                <button
                    onClick={(e) => {
                        projects.clear()
                        setProjForms(Array.from(projects.keys()).map((i: number) => BaseForm(i, projects, setProjForms)));
                    }}
                >
                    Clear
                </button>
            </div>
            <div className="base-target">
                {projForms.map(i => <div className="base-form-wrapper">{i}</div>)}
            </div>
        </div>
        <div className="form-field tooltip">
            Skills 
            <div className="button-wrapper">
                <button
                    onClick={(e) => {
                        skills.set(skillsLen, {
                            categoryName: "",
                            skills: []
                        })
                        setSkillsLen(skillsLen+1)
                        setSkillForms(Array.from(skills.keys()).map((i: number) => SimpleForm(i, skills, setSkillForms)))
                    }}
                > +
                </button>
            </div>
            <div className="button-wrapper">
                    <button
                        onClick={(e) => {
                            skills.clear()
                            setSkillForms(Array.from(skills.keys()).map((i: number) => SimpleForm(i, skills, setSkillForms)))
                        }}
                    >
                        Clear
                    </button>
            </div>
            <div className="base-target">
                {skillForms.map(i => <div className="base-form-wrapper">{i}</div>)}
            </div>
        </div>
        <div className="form-field tooltip">
            Links 
            <div className="button-wrapper">
                <button
                    onClick={(e) => {
                        links.set(linksLen, {
                            siteName: "",
                            link: ""
                        })
                        setLinksLen(linksLen+1)
                        setLinkForms(Array.from(links.keys()).map((i: number) => SimpleForm(i, links, setLinkForms)))
                    }}
                > +
                </button>
            </div>
            <div className="button-wrapper">
                    <button
                        onClick={(e) => {
                            links.clear()
                            setLinkForms(Array.from(links.keys()).map((i: number) => SimpleForm(i, links, setLinkForms)))
                        }}
                    >
                        Clear
                    </button>
            </div>
            <div className="base-target">
                {linkForms.map(i => <div className="base-form-wrapper">{i}</div>)}
            </div>
        </div>
        <div>
        </div>
    </div>
}

export default Editor;



