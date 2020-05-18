import { useState } from "react";

const Editor = ({ content, callback }) => {
    let str = "";
    for (let item in content) {
        str += content[item] + "\n";
    }
    // const str = one + "\n" + two;
    console.log(str);
    const [editorState, setEditorState] = useState(str);

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
