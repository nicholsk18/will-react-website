import Head from "next/head";
import Link from "next/link";
import admin from "../admin";
import { adminPanalTitle } from "../../components/PageTitles";
import Layout from "../../components/layout";

const panal = () => {
    return (
        <Layout>
            <Head>
                <title>{adminPanalTitle}</title>
            </Head>
            <div className="page">
                <div className="container text-center py-5">
                    <h1>
                        Select Page to edit
                        <br />
                        <p className="py-0 my-0">
                            <small className="text-muted">
                                Do not use nav ontop
                            </small>
                        </p>
                    </h1>
                </div>

                <div className="container pb-5 text-center">
                    <div className="row">
                        <div className="col-12 py-2">
                            <Link href="/admin/admin-home">
                                <a className="btn btn-primary">Edit Home</a>
                            </Link>
                        </div>
                        <div className="col-12 py-2">
                            <Link href="/admin/admin-tournaments">
                                <a className="btn btn-primary">
                                    Edit Tournaments
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 py-2">
                            <Link href="/admin/admin-about">
                                <a className="btn btn-primary">Edit About</a>
                            </Link>
                        </div>
                        <div className="col-12 py-2">
                            <Link href="/admin/admin-team">
                                <a className="btn btn-primary">Edit Team</a>
                            </Link>
                        </div>
                        <div className="col-12 py-2">
                            <Link href="/admin/admin-contact">
                                <a className="btn btn-primary">Edit Contact</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default panal;
