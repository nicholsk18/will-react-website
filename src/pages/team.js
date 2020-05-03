import Head from "next/head";
import { teamDesc, teamTitle } from "../components/PageTitles";
import Layout from "../components/layout";

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
