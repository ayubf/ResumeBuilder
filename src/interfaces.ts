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
}
 
export interface EducationInterface extends BaseInterface{
    degreeAndField: string,
}

export interface ExpereinceInterface extends BaseInterface {
    roleName: string,
}

export interface ProjectInterface extends BaseInterface {
    title: string, 
    stack: Array<string>,
}

