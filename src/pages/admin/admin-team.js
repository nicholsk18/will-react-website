import { useState } from "react";
import Editor from "../../components/Editor";

const adminTeam = () => {
    const [editor, setEditor] = useState(false);

    function editContent() {
        setEditor(true);

        <Editor content={""} />;
    }

    return (
        <div>
            {editor ? (
                <Editor content={"hey"} />
            ) : (
                <div>
                    <h1>Page about team info</h1>
                    <p>This page is under production</p>
                </div>
            )}
            <button onClick={editContent}>Edit</button>
        </div>
    );
};

export default adminTeam;
