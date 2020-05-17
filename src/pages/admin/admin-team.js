import { useState } from "react";

const adminTeam = () => {
    const [editor, setEditor] = useState(false);
    const [pageContent, setPageContent] = useState({
        h1: "<h1>Page about team info!</h1>",
        p: "<p>This page is under production!</p>",
    });

    function editContent() {
        setEditor(true);
    }

    function saveContent() {
        setEditor(false);
        setPageContent({
            h1: pageContent.h1,
        });
    }

    const Editor = (props) => {
        return (
            <textarea
                rows="10"
                defaultValue={props.content[0]}
                onChange={(e) => setPageContent.h1(e.target.value)}
            />
        );
    };

    return (
        <div>
            {editor ? (
                <div>
                    <Editor content={[pageContent.h1, pageContent.p]} />
                    <button onClick={saveContent}>save</button>
                </div>
            ) : (
                <div>
                    {/* 
                        write a showContetent component
                        this component will figure out what and how to render
                    */}
                    <h1>{pageContent.h1}</h1>
                    <p>{pageContent.p}</p>
                    <button onClick={editContent}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default adminTeam;
