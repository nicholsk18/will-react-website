import Head from "next/head";
import { useState, useEffect } from "react";
import Editor from "../../utils/Editor";
import Layout from "../../components/layout";
import { aboutTitle, aboutDesc } from "../../components/PageTitles";
import styles from "../../pageStyles/About.module.css";

const adminAbout = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [pageContent, setPageContent] = useState([]);
    const [editorState, setEditorState] = useState();

    // to fix this need to send pagename in body
    useEffect(() => {
        async function getData() {
            const data = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Page-Name": "about",
                },
            };
            await fetch("/api/data", data)
                .then((res) => {
                    return res.json();
                })
                .then((pageData) => {
                    setPageContent(pageData);
                });
        }

        getData();
    }, [pageContent]);

    // will extract to its on util function
    // will take a string and return a string
    function changeState() {
        let concatedArray = "";

        // const content = pageContent.filter((item) => {
        //     return item !== "";
        // });

        const strLength = pageContent.length;
        for (let item = 0; item < strLength; item++) {
            if (strLength - 1 === item) {
                // keeps from last \n being added
                concatedArray += pageContent[item];
                break;
            }
            concatedArray += pageContent[item] + "\n";
        }

        setEditorState(concatedArray);
        setIsEdited(true);
    }

    function cancelContent() {
        setIsEdited(false);
    }

    return (
        <Layout>
            <Head>
                <title>{aboutTitle}</title>
                <meta name="description" content={aboutDesc} />
            </Head>
            {isEdited ? (
                <div>
                    {
                        <Editor
                            content={editorState}
                            callback={cancelContent}
                            pageName={"about"}
                        />
                    }
                </div>
            ) : (
                <div className="page" id={styles.pageAbout}>
                    <div className="section-color py-4">
                        <div className="container">
                            <div className="text-center pt-3 pb-5">
                                <h2 id="title1" className={styles.pageTitle}>
                                    {pageContent[0]}
                                </h2>
                                <p id="p1">{pageContent[1]}</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className={styles.imgBox}>img</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <h3
                                        id="title2"
                                        className={styles.sectionTitle}
                                    >
                                        {pageContent[2]}
                                    </h3>
                                    <p id="p2">{pageContent[3]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <h3 id="title3" className={styles.sectionTitle}>
                                    {pageContent[4]}
                                </h3>
                                <p id="p3">{pageContent[5]}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className={styles.imgBox}>img</div>
                            </div>
                        </div>
                    </div>

                    <div className="section-color py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className={styles.imgBox}>img</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <h3
                                        id="title4"
                                        className={styles.sectionTitle}
                                    >
                                        {pageContent[6]}
                                    </h3>
                                    <p id="p4">{pageContent[7]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <h3 id="title5" className={styles.sectionTitle}>
                                    {pageContent[8]}
                                </h3>
                                <p id="p5">{pageContent[9]}</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className={styles.imgBox}>img</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={changeState}>Edit</button>
                </div>
            )}
            <button onClick={cancelContent}>Cancel</button>
        </Layout>
    );
};

export default adminAbout;
