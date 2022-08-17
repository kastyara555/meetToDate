import Head from "next/head";
import Link from "next/link";

const MainContainer = ({ children, keywords }) => (
    <>
        <Head>
            <meta></meta>
        </Head>
        <div>
            <Link href="/"><h3>Main</h3></Link>
            <Link href="/tmp"><h3>Tmp</h3></Link>
            <Link href="/rooms"><h3>Rooms</h3></Link>
        </div>
        <div>{children}</div>
    </>
);

export default MainContainer;
