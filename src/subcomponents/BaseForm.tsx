import { BaseType } from "../interfaces";
import { useState } from "react";

const BaseForm = (key: number, category: BaseType, formEdit: Function) => {
    const v = category.get(key)!;
    return (<div key={key} className='base-form'>
            <i className="material-icons close-button" 
                onClick={(e) => {
                    category.delete(key)
                    formEdit(Array.from(category.keys()).map((i: number) => BaseForm(i, category, formEdit)));
                }}
            >
                close
            </i>
            <div>
                {('institutionName' in v && !('title' in v)) ? (
                    <div className="form-field">
                       {
                        'levelOfEducation' in v ? "School Name" : "Company Name" 
                       } <input type="text" defaultValue={v.institutionName} onChange={(e) => {v.institutionName = e.target.value}} />
                    </div>
                ) : <></>}
                {('title' in v) ? (
                    <div className="form-field">
                       Project Title <input type="text" defaultValue={v.title} onChange={(e) => {v.title = e.target.value}} />
                    </div>
                ) : <></>}
            </div>
            <div>
                {
                    ('levelOfEducation' in v) ? (
                        <div className="form-field">
                            Level Of Education <input type='text' defaultValue={v.levelOfEducation}
                            onChange={(e) => {v.levelOfEducation = e.target.value}}/>
                        </div>  
                    ) : <></>
                }
                {
                    ('roleName' in v)  ? (
                        <div className="form-field">
                            Role Name <input type='text' defaultValue={v.roleName} 
                            onChange={(e) => {v.roleName = e.target.value}}/>
                        </div>
                    ) : <></>
                }
            </div>

            <div className="form-field">
                Start Date <input type="month" min="1945-01" defaultValue={v!.startDate} 
                onChange={(e) => {v!.startDate = e.target.value}}
            />
            </div>
            <div className="form-field">
                End Date <input type="month" min="1945-01" defaultValue={v!.endDate}
                    onChange={(e) => {v!.endDate = e.target.value}}
                    />
            </div>
            <div className="form-field">
                Location <input type="text" defaultValue={v!.location}
                    onChange={(e) => {v!.location = e.target.value}}
                    />
            </div>
            {
                ('stack' in v) ? (
                    <div className="form-field">
                        Tech Stack: <input type="text" onChange={(e) => {v!.stack = e.target.value.split(",")}} defaultValue={v.stack}>
                        </input> 
                    </div>
                ) : <></>
            }
            {
                ('institutionName' in v || 'title' in v) ? (
                    <div className="form-field">
                        <textarea cols={30} rows={3} onChange={(e) => {v!.bulletPoints = e.target.value.split("\n")}} defaultValue={v.bulletPoints}>
                            
                        </textarea> 
                    </div>
                ) : <></>
            }
    </div>)
};

export default BaseForm