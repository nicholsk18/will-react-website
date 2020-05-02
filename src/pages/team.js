import Layout, { teamDesc, teamTitle } from "../components/layout";
import Head from "next/head";

const team = () => {
    return (
        <Layout>
            <Head>
                <title>{teamTitle}</title>
                <meta name="description" content={teamDesc} />
            </Head>
            <div className="page">
                <div className="container text-center">
                    <h2 className="pt-4">Page about team info</h2>
                    <p>This page is under production</p>
                </div>
            </div>
        </Layout>
    );
};

export default team;
