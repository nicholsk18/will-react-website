import Layout, { aboutTitle, aboutDesc } from "../components/layout";
import styles from "../pageStyles/About.module.css";
import Head from "next/head";

const about = () => {
    return (
        <Layout>
            <Head>
                <title>{aboutTitle}</title>
                <meta name="description" content={aboutDesc} />
            </Head>
            <div className="page" id={styles.pageAbout}>
                <div className="section-color py-4">
                    <div className="container">
                        <div className="text-center pt-3 pb-5">
                            <h2 className={styles.pageTitle}>About Will</h2>
                            <p>
                                Will is a proffesianal golfer based out of
                                Birmingham Alabama. He was named All-Conference
                                USA Second Team his junior year at UAB. His
                                senior year, Will recorded two top-10 finishes
                                and posted 11 rounds at or under par and
                                finished the season with 71.67 stroke average.
                                Will tourned pro in 2016 after finishing his
                                final season at UAB. In 2017 he spent one year
                                playing on the Asian tour. Will is currently is
                                part of Korn Ferry tour.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className={styles.imgBox}>img</div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                                <h3 className={styles.sectionTitle}>
                                    Early Life
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Odio tempor orci dapibus ultrices in iaculis
                                    nunc sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <h3 className={styles.sectionTitle}>Inspiration</h3>
                            <p>
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
                                <h3 className={styles.sectionTitle}>
                                    Future Plans
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Odio tempor orci dapibus ultrices in iaculis
                                    nunc sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <h3 className={styles.sectionTitle}>
                                How donation can help?
                            </h3>
                            <p>
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
            </div>
        </Layout>
    );
};

export default about;
