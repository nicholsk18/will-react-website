import { useState } from "react";

const adminTeam = () => {
    const [editor, setEditor] = useState(false);
    const [pageContent, setPageContent] = useState("");
    const [editorState, setEditorState] = useState("");

    const valueFromDb = "string";
    setPageContent(valueFromDb);

    function editContent(event) {
        setEditor(true);
    }

    function saveContent() {
        setEditor(false);
    }

    const Editor = ({ content }) => {
        return (
            <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                defaultValue={content}
                onChange={(e) => setEditorState(e.target.value)}
            />
        );
    };

    return (
        <div>
            {editor ? (
                <div>
                    <Editor content={pageContent} />
                    <button onClick={saveContent}>save</button>
                </div>
            ) : (
                <div>
                    {/* 
                        write a showContetent component
                        this component will figure out what and how to render
                    */}
                    <h1>{pageContent}</h1>
                    <button onClick={editContent}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default adminTeam;
