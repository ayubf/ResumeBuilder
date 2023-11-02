export interface LinkInterface {
    siteName: string,
    link: string,
}

export interface SkillsInterface {
    categoryName: string,
    skills: Array<string>
}

interface BaseInterface {
    startDate: string,
    endDate: string,
    bulletPoints?: Array<string>,
    location?: string,
    institutionName?: string
    index?: number
}
 
export interface EducationInterface extends BaseInterface{
    levelOfEducation: string,
}

export interface ExpereinceInterface extends BaseInterface {
    roleName: string,
}

export interface ProjectInterface extends BaseInterface {
    title: string, 
    stack: Array<string>,
}

export interface ResumeStateInterface {
    name?: string,
    email?: string,
    phone?: string,
    links?: Map<string, LinkInterface>,
    education?: Map<number, EducationInterface>,
    experience?: Map<number, ExpereinceInterface>,
    projects?: Map<string, ProjectInterface>,
    skills?: Map<string, SkillsInterface>

    setName: Function,
    setEmail: Function,
    setPhoneNumber: Function
}

export type BaseType = Map<number, ExpereinceInterface> | Map<number, EducationInterface> | Map<number, ProjectInterface>;


