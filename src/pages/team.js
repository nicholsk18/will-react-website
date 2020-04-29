import Layout, { teamDesc, teamTitle } from "../components/layout";
import Head from "next/head";

const team = () => {
    return (
        <Layout>
            <Head>
                <title>{teamTitle}</title>
                <meta name="description" content={teamDesc} />
            </Head>
            <div>
                <h1 className="container">teams</h1>
            </div>
        </Layout>
    );
};

export default team;
