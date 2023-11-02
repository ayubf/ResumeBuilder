import { createContext } from 'react';
import { LinkInterface, EducationInterface, ExpereinceInterface, ProjectInterface, SkillsInterface } from './interfaces';

const stringSet = (s: string) => {}

export const initialState = {
    name: "",   
    email: "",
    phone: "",
    links: new Map<number, LinkInterface>(),
    education: new Map<number, EducationInterface>(),
    experience: new Map<number, ExpereinceInterface>(),
    projects: new Map<number, ProjectInterface>(),
    skills: new Map<number, SkillsInterface>(),

    setName: stringSet,
    setEmail: stringSet,
    setPhoneNumber: stringSet,
}


export const resumeContext = createContext(initialState);