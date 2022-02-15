import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Ele/dele. Leg Breaker Pleno e Kidney Waster Sênior.</p>
                <SocialBar />
            </section>

            <section>
                <h1 className="title">
                    Read{" "}
                    <Link href="/posts/first-post">
                        <a>this page</a>
                    </Link>
                </h1>
            </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

function SocialBar() {
    return (
        <div>
            <a href="https://twitter.com/vudureversso">
                <Image
                    src="/images/twitter-brands.png"
                    width={20}
                    height={20}
                />
                @vudureverso
            </a>{" "}
            <a href="https://twitter.com/josenaldomatos">
                <Image
                    src="/images/twitter-brands.png"
                    width={20}
                    height={20}
                />
                @josenaldomatos
            </a>{" "}
            <a href="https://github.com/josenaldo">
                <Image src="/images/github-brands.png" width={20} height={20} />
                @josenaldo
            </a>
        </div>
    );
}
