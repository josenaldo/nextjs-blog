import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1 className="title">
                    Read{" "}
                    <Link href="/posts/first-post">
                        <a>this page</a>
                    </Link>
                </h1>
                <p>Vudu Reverso</p>
            </section>
        </Layout>
    );
}
