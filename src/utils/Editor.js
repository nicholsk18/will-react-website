import { useState } from "react";

const Editor = ({ content, callback, pageName }) => {
    const [editorState, setEditorState] = useState(content);

    async function saveContent() {
        // update api

        const updatedPage = {
            method: "PATCH",
            // method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pageName,
                pageContent: editorState
                    .split("\n")
                    .filter((item) => item !== ""),
            }),
        };

        await fetch("/api/data/", updatedPage).then((res) => console.log(res));
        // .then((data) => console.log(data));

        // callback returns back to original render
        // pass to call back with out saving here
        callback();
    }

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
