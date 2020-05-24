import { useState, useEffect } from "react";

const Editor = ({ content, callback, pageName }) => {
    const [editorState, setEditorState] = useState(
        content
            .filter((item) => item !== "")
            .toString()
            .replace(/,/g, "")
    );

    async function saveContent() {
        const saveArr = editorState
            .split("\n")
            .filter((item) => !item.startsWith("<--"));
        const updatedPage = {
            method: "PATCH",
            // method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pageName,
                pageContent: saveArr.filter((item) => item !== ""),
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
                rows="15"
                value={editorState}
                onChange={(e) => setEditorState(e.target.value)}
            />
            <button onClick={saveContent}>Save</button>
        </div>
    );
};

export default Editor;
