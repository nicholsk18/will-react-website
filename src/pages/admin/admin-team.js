import { useState } from "react";
import Editor from "../../utils/Editor";

const adminTeam = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [pageContent, setPageContent] = useState("api string here");

    function changeState() {
        setIsEdited(true);
    }

    function cancelContent(pageState) {
        // if want to create a preview?
        if (pageState) {
            setPageContent(pageState);
        }
        setIsEdited(false);
    }
    return (
        <div>
            {isEdited ? (
                <div>
                    {<Editor content={pageContent} callback={cancelContent} />}
                </div>
            ) : (
                <div>
                    {/*
                        write a showContetent component
                        this component will figure out what and how to render
                    */}
                    <h1>{pageContent}</h1>
                    <button onClick={changeState}>Edit</button>
                </div>
            )}
            <button onClick={cancelContent}>Cancel</button>
        </div>
    );
};

export default adminTeam;
