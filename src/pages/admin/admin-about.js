import Head from "next/head";
import { useState } from "react";
import Editor from "../../utils/Editor";
import Layout from "../../components/layout";
import { aboutTitle, aboutDesc } from "../../components/PageTitles";
import styles from "../../pageStyles/About.module.css";

const adminAbout = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [pageContent, setPageContent] = useState([
        "<h1>About Will</h1>",
        "<p>Will is a proffesianal golfer based out of Birmingham Alabama. He was named All-Conference USA Second Team his junior year at UAB. His senior year, Will recorded two top-10 finishes and posted 11 rounds at or under par and finished the season with 71.67 stroke average. Will tourned pro in 2016 after finishing his final season at UAB. In 2017 he spent one year playing on the Asian tour. Will is currently is part of Korn Ferry tour.</p>",
    ]);

    function changeState() {
        setIsEdited(true);
    }

    function cancelContent(someStuff) {
        // if want to create a preview?
        if (someStuff) {
            setPageContent(someStuff);
        }
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
                    {<Editor content={pageContent} callback={cancelContent} />}
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
                                        Early Life
                                    </h3>
                                    <p id="p2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Odio tempor orci dapibus
                                        ultrices in iaculis nunc sed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <h3 id="title3" className={styles.sectionTitle}>
                                    Inspiration
                                </h3>
                                <p id="p3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Odio tempor orci dapibus ultrices in iaculis
                                    nunc sed.
                                </p>
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
                                        Future Plans
                                    </h3>
                                    <p id="p4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Odio tempor orci dapibus
                                        ultrices in iaculis nunc sed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <h3 id="title5" className={styles.sectionTitle}>
                                    How donation can help?
                                </h3>
                                <p id="p5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Odio tempor orci dapibus ultrices in iaculis
                                    nunc sed.
                                </p>
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
