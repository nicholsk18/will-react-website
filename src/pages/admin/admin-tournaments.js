import Head from "next/head";
import { useState, useEffect } from "react";
import Editor from "../../utils/Editor";
import { adminTournamentsTitle } from "../../components/PageTitles";
import Layout from "../../components/layout";
import styles from "../../pageStyles/Tournaments.module.css";
import Stats from "../../components/Stats";

const adminTournaments = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [pageContent, setPageContent] = useState([]);
    const [editorState, setEditorState] = useState();

    // to fix this need to send pagename in body
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        // async function getData() {
        const data = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Page-Name": "tournaments",
            },
            signal,
        };
        fetch("/api/data", data)
            .then((res) => {
                return res.json();
            })
            .then((pageData) => {
                setPageContent(pageData);
            })
            .catch((e) => {
                console.log(e);
            });
        // }
        // getData();

        return function cleanup() {
            abortController.abort();
        };
    }, [pageContent, setPageContent]);

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
                <title>{adminTournamentsTitle}</title>
            </Head>
            {isEdited ? (
                <div>
                    {
                        <Editor
                            content={editorState}
                            callback={cancelContent}
                            pageName={"tournaments"}
                        />
                    }
                </div>
            ) : (
                <div className="page">
                    <div className={styles.banner}>
                        <div className="container section-30">
                            <h2 className={styles.title}>{pageContent[0]}</h2>
                            <hr className={styles.hLine} />
                            <p className={styles.subTitle}>{pageContent[1]}</p>
                        </div>
                    </div>

                    <div className="container section-30">
                        <p className="text-center">Season Stats</p>
                        <Stats />
                    </div>

                    <div className="section-light-white py-5">
                        <div className="container">
                            <h3 className={styles.sectionTitle}>
                                2020 Korn Ferry Tour Stats
                            </h3>

                            {/* stats go here */}
                            <div className="stats-box mt-4">
                                <div className="row px-0 px-sm-5">
                                    <div className="col-xs-12 col-md-2 text-center m-auto">
                                        <p className="my-0 stats-date">date</p>
                                    </div>

                                    <div className="col-xs-6 col-md-4 text-center my-auto">
                                        <p className="my-0 stats-name">name</p>
                                    </div>

                                    <div className="col-xs-6 col-md-4 text-center">
                                        <table className="mx-auto my-3 stats-rounds">
                                            <tbody>
                                                <tr className="border-bottom">
                                                    <th colSpan="4">
                                                        Round Score
                                                    </th>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <th className="p-1">R1</th>
                                                    <th className="p-1">R2</th>
                                                    <th className="p-1">R3</th>
                                                    <th className="p-1">R4</th>
                                                </tr>
                                                <tr>
                                                    <td className="p-2">-</td>
                                                    <td className="p-2">-</td>
                                                    <td className="p-2">-</td>
                                                    <td className="p-2">-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-xs-12 col-md-2 text-center my-auto">
                                        <p className="m-0 stats-place">CUT</p>
                                    </div>
                                </div>
                            </div>

                            <div className="view-more">
                                <div className="text-center pt-4">
                                    <button href="" className="btn btn-success">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="upcomming-events py-5">
                        <div className="container">
                            <h3 className={styles.sectionTitle}>
                                2020 Upcomming Events
                            </h3>

                            <div className="row">
                                <div className="col-12">
                                    <div className="stats-box mt-4">
                                        <div className="row px-5 mt-3">
                                            <div className="col-4">
                                                <p>{pageContent[2]}</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <p>{pageContent[3]}</p>
                                            </div>
                                            <div className="col-4 text-right">
                                                <p>{pageContent[4]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default adminTournaments;
