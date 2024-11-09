
type Props = {
    keyname : string
    value : string|number|boolean|object|Array<any>
}
export const RustConfigEditorForm = ({keyname,value}:Props) => {
    if (typeof value === "boolean"){
        return <div>
            <label>{keyname}</label>
            <span>true</span><input name={keyname} defaultChecked={value === true} type="radio"/>
            <span>false</span><input name={keyname} defaultChecked={value === false} type="radio" />
        </div>
    }
    else if (typeof value === "number"){
        return <div>
            <label>{keyname}</label><input defaultValue={value} type="number" />
        </div>
    }
    else if (typeof value === "string"){
        return <div>
            <label>{keyname}</label><input defaultValue={value} type="text" />
        </div>
    }
    else {
        return null
    }
}