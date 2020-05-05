import Head from "next/head";
import { useState } from "react";
import { contactTitle, contactDesc } from "../components/PageTitles";
import Layout from "../components/layout";

const contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const sendForm = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
        };
        fetch("/contact", sendForm).then((res) => {
            console.log(res);
        });
    }
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
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="5"
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
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
