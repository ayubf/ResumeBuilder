import { LinkInterface, SkillsInterface } from "../interfaces";

const SimpleForm = (key: number, categoryMap: Map<number, SkillsInterface | LinkInterface>, mapMethod: Function) => {
    const v = categoryMap.get(key)!;
    return (
        <div key={key} className='base-form'>
            <i className="material-icons close-button" 
                onClick={(e) => {
                    categoryMap.delete(key)
                    mapMethod(Array.from(categoryMap.keys()).map((i: number) => SimpleForm(i, categoryMap, mapMethod)));
                }}
            >
                close
            </i>
            {
                ('categoryName' in v) ? (
                    <div>
                        <div className="form-field">
                            Category <input type="text" defaultValue={v.categoryName} onChange={(e) => {v.categoryName = e.target.value}}/>
                        </div>
                        <div className="form-field">
                            List <input style={{
                                "width": 500
                            }} type="text" onChange={(e) => {v.skills = e.target.value.split(",")}} defaultValue={v.skills} />
                        </div>
                    </div>
                ) : <></>
            } {
                ('siteName' in v) ? (
                    <div>
                        <div className="form-field">
                            Site <input type="text" defaultValue={v.siteName} onChange={(e) => {v.siteName = e.target.value}}/>
                        </div>
                        <div className="form-field">
                            Link <input style={{
                                "width": 500
                            }} type="text" onChange={(e) => {v.link = e.target.value}} defaultValue={v.link} />
                        </div>
                    </div>
                ) : <></>
                
            }
        </div>
    )
}

export default SimpleForm