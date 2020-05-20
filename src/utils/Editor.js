import { useState } from "react";

const Editor = ({ content, callback, pageName }) => {
    const [editorState, setEditorState] = useState(content);

    async function saveContent() {
        // update api

        const updatedPage = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: pageName,
                page: editorState.split("\n"),
            }),
        };

        await fetch("/api/data/", updatedPage).then((res) => {
            console.log(res);
        });

        // callback returns back to original render
        // pass to call back with out saving here
        callback(editorState.split("\n"));
    }
    console.log(pageName);

    return (
        <div>
            <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                value={editorState}
                onChange={(e) => setEditorState(e.target.value)}
            />
            <button onClick={saveContent}>Save</button>
        </div>
    );
};

export default Editor;
