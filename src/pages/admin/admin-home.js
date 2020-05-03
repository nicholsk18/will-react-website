import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { adminHomeTitle } from "../../components/PageTitles";
import styles from "../../pageStyles/Home.module.css";
import Stats from "../../components/Stats";

const adminHome = ({ allPostsData }) => {
    return (
        <Layout>
            <Head>
                <title>{adminHomeTitle}</title>
            </Head>
            <div className="page">
                <div className={styles.banner}>
                    <div className="container py-5"></div>
                </div>
            </div>
            <div className="container section-30">
                <div className="col-3 m-auto">
                    <Link href="//www.shoalcreekclub.com/">
                        <img
                            className={styles.sponsorsImg}
                            src="./img/shoal-creek.png"
                            alt=""
                        />
                    </Link>
                </div>
                <p className={styles.homeP}>Season Stats</p>
                <Stats />
            </div>

            <div className="pt-3 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3 m-auto">
                            <Link href="//www.titleist.com/">
                                <a rel="nofollow" target="_blank">
                                    <img
                                        className={styles.sponsorsImg}
                                        src="../../../img/titleist.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-3 m-auto">
                            <Link href="//www.footjoy.com/">
                                <a rel="nofollow" target="_blank">
                                    <img
                                        className={styles.sponsorsImg}
                                        src="../../../img/footjoy.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-3 m-auto">
                            <Link href="//us.puma.com/">
                                <a rel="nofollow" target="_blank">
                                    <img
                                        className={styles.sponsorsImg}
                                        src="../../../img/puma.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-3 m-auto">
                            <Link href="//www.testoril.com/">
                                <a rel="nofollow" target="_blank">
                                    <img
                                        className={styles.sponsorsImg}
                                        src="../../../img/testoril.png"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.twitter}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <blockquote className="twitter-tweet">
                                <p lang="en" dir="ltr">
                                    The woman at the American Airlines ticket
                                    counter told me to have a good flight and I
                                    said you too. First tournament of the year
                                    is off to a rough start
                                </p>
                                &mdash; Will Cannon (@wIllcvnnon){" "}
                                <Link href="//twitter.com/wIllcvnnon/status/1214968883418939392?ref_src=twsrc%5Etfw">
                                    <a>January 8, 2020</a>
                                </Link>
                            </blockquote>{" "}
                            <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charSet="utf-8"
                            ></script>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <blockquote className="twitter-tweet">
                                <p lang="en" dir="ltr">
                                    Arms connected with the plane ✅<br />
                                    Rotate around the body ✅<br />
                                    Smooth swing ✅<br />
                                    <br />
                                    Will Cannon (
                                    <Link href="//twitter.com/wIllcvnnon?ref_src=twsrc%5Etfw">
                                        <a>@WIllCvnnon</a>
                                    </Link>
                                    ) is busy getting tuned up on the range for{" "}
                                    <Link href="//twitter.com/LECOMHC?ref_src=twsrc%5Etfw">
                                        <a>@LECOMHC</a>
                                    </Link>
                                    .{" "}
                                    <Link href="//t.co/F7j2Jc4gsQ">
                                        <a>pic.twitter.com/F7j2Jc4gsQ</a>
                                    </Link>
                                </p>
                                &mdash; Korn Ferry Tour (@KornFerryTour){" "}
                                <Link href="//twitter.com/KornFerryTour/status/1146470204031066112?ref_src=twsrc%5Etfw">
                                    <a>July 3, 2019</a>
                                </Link>
                            </blockquote>{" "}
                            <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charSet="utf-8"
                            ></script>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <blockquote className="twitter-tweet">
                                <p lang="en" dir="ltr">
                                    Awesome week in Greenville for{" "}
                                    <Link href="//twitter.com/BMWCharityProAm?ref_src=twsrc%5Etfw">
                                        <a>@bmwcharityproam</a>
                                    </Link>{" "}
                                    from getting to push an M4 around the track
                                    at bmwperformancedrivingschools to playing
                                    with MLB Hall of Famer Pudge Rodriguez in
                                    the final round. This is an awesome…{" "}
                                    <Link href="//t.co/W0alhNOlOQ">
                                        <a>https://t.co/W0alhNOlOQ</a>
                                    </Link>
                                </p>
                                &mdash; Will Cannon (@wIllcvnnon){" "}
                                <Link href="//twitter.com/wIllcvnnon/status/1138111152536379397?ref_src=twsrc%5Etfw">
                                    <a>June 10, 2019</a>
                                </Link>
                            </blockquote>{" "}
                            <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charSet="utf-8"
                            ></script>
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <Link href="//twitter.com/willcvnnon">
                            <a className="btn btn-primary">
                                Follow Will on Twitter
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- <p class="text-white text-center">Background photo by <a class="text-white" href="https://unsplash.com/@bhoogenboom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="nofollow">Brandon Hoogenboom</a></p> --> */}
            <p className="text-center">
                Photo by{" "}
                <Link href="//unsplash.com/@themick79i">
                    <a rel="nofollow" target="_blank">
                        Mick De Paola
                    </a>
                </Link>
                <span> on Unsplash</span>
            </p>
        </Layout>
    );
};

export default adminHome;
