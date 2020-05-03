import Head from "next/head";
import { contactTitle, contactDesc } from "../components/PageTitles";
import Layout from "../components/layout";

const contact = () => {
    return (
        <Layout>
            <Head>
                <title>{contactTitle}</title>
                <meta name="description" content={contactDesc} />
            </Head>
            <div className="page section-color">
                <div className="container pb-5">
                    <div className="text-center py-4">
                        <h1>Contact Will</h1>
                        <p>
                            Reach out to will wbout his future plans, or if you
                            interested in sponsoring!
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <form action="/contacts" method="POST">
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="subject"
                                        name="subject"
                                        className="form-control"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder="Leave a message here..."
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <input
                                        type="submit"
                                        className="btn btn-primary text-white px-5"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="sm-hidden col-md-0 col-md-6">
                            <div className="contact-img">img goes here</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default contact;
