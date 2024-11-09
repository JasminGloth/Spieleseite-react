import { useState } from "react";
import { isInputElement } from "react-router-dom/dist/dom";
import { RustConfigEditorForm } from "../components/RustConfigEditorForm";



export const PageRustConfigEditor = () => {
    const [fileRows, setfileRows] = useState<any>([])
    const onDrop: React.DragEventHandler<HTMLDivElement> = (ev) => {
        ev.preventDefault()
        ev.dataTransfer
        const fileReader = new FileReader()
        const fileDropped = ev.dataTransfer.files[0]
        fileReader.readAsText(fileDropped)
        fileReader.onloadend = () => {
            const jsonresult: any = fileReader.result
            const jsonData: any = JSON.parse(jsonresult)
            console.log(jsonData)
            const jsonArray = Object.entries(jsonData)
            console.log(jsonArray)
            const arrayMapping = jsonArray.map(([key, value]) => {
                console.log(key, value)
                return <RustConfigEditorForm key={key} keyname={key} value={value as any} ></RustConfigEditorForm>
            })
            setfileRows(arrayMapping)
        }
    }

    const onDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        console.log("item ist drüber")
    }
    return (
        <div className="page pageRustConfigEditor">
            <div className="dropzone" onDrop={onDrop} onDragOver={onDragOver}>Json Dropzone</div>
            <div className="form">{fileRows}</div>
        </div>
    );
};