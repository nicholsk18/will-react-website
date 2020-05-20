import { useState } from "react";

const Editor = ({ content, callback }) => {
    const [editorState, setEditorState] = useState(content);

    function saveContent() {
        // update api

        // callback returns back to original render
        // pass to call back with out saving here
        callback(editorState.split("\n"));

        console.log(editorState.split("\n"));
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
