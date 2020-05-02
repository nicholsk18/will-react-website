import Layout, {
    tournamentsDesc,
    tournamentsTitle,
} from "../components/layout";
import styles from "../pageStyles/Tournaments.module.css";
import Stats from "../components/Stats";
import Head from "next/head";

const tournaments = () => {
    return (
        <Layout>
            <Head>
                <title>{tournamentsTitle}</title>
                <meta name="description" content={tournamentsDesc} />
            </Head>
            <div className="page">
                <div className={styles.banner}>
                    <div className="container section-30">
                        <h2 className={styles.title}>Tournaments</h2>
                        <hr className={styles.hLine} />
                        <p className={styles.subTitle}>
                            &quot;The most important shot in Golf is the next
                            one&quot;
                        </p>
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
                                        <tr className="border-bottom">
                                            <th colSpan="4"> Round Score</th>
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
                                            <p>Date</p>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p>Place/turnName</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <p>Place</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default tournaments;
