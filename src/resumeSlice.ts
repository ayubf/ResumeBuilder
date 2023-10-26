import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LinkInterface, EducationInterface, ExpereinceInterface, ProjectInterface, SkillsInterface } from "./interfaces";

export const initialState = {
    name: "Ayub Farah",
    email: "ayubaf04#gmail.com",
    phone: "xxx-xxxx-xxx",
    links: new Map<string, LinkInterface>(),
    education: new Map<string, EducationInterface>(),
    experience: new Map<string, ExpereinceInterface>(),
    projects: new Map<string, ProjectInterface>(),
    skills: new Map<string, SkillsInterface>(),
}

export const resumeSlice = createSlice(
    {
        name: 'resume',
        initialState,
        reducers: {
            
            nameChange: (state, action: PayloadAction<string>) => {
                state.name = action.payload
            },
            emailChange: (state, action: PayloadAction<string>) => {
                state.email = action.payload
            },
            phoneChange: (state, action: PayloadAction<string>) => {
                state.phone = action.payload
            },

            setLink: (state, action: PayloadAction<LinkInterface>) => {state.links.set(action.payload.siteName, action.payload)},
            removeLink: (state, action: PayloadAction<LinkInterface>) => {state.links.delete(action.payload.siteName)},
            
            setEducation: (state, action: PayloadAction<EducationInterface>) => {state.education.set(action.payload.institutionName!, action.payload)},
            removeEducation: (state, action: PayloadAction<EducationInterface>) => {state.education.delete(action.payload.institutionName!)},
            
            setExprience: (state, action: PayloadAction<ExpereinceInterface>) => {state.experience.set(action.payload.institutionName!, action.payload)},
            removeExpreience: (state, action: PayloadAction<ExpereinceInterface>) => {state.experience.delete(action.payload.institutionName!)},
            
            setProject: (state, action: PayloadAction<ProjectInterface>) => {state.projects.set(action.payload.title!, action.payload)},
            removeProject: (state, action: PayloadAction<ProjectInterface>) => {state.projects.delete(action.payload.title!)},

            setSkills: (state, action: PayloadAction<SkillsInterface>) => {state.skills.set(action.payload.categoryName, action.payload)},
            removeSkills: (state, action: PayloadAction<SkillsInterface>) => {state.skills.delete(action.payload.categoryName)},

        },
    }, 
);

export const {
    nameChange, 
    emailChange,
    phoneChange, 
    setLink, 
    removeLink, 
    setEducation,
    removeEducation,
    setExprience,
    removeExpreience,
    setProject,
    removeProject,
    setSkills,
    removeSkills

} = resumeSlice.actions;

export default resumeSlice.reducer;
