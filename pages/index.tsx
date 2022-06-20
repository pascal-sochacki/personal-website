import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import me from "../public/images/me.png"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Personal Website | Pascal Sochacki</title>
                <meta name="description" content="Personal Website from Pascal Sochacki a IT Consultant"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div
                className={"w-full p-5 bg-background_dark flex justify-between items-center px-36 xl:flex-row flex-col"}>
                <Link href={"/"}>
                    <a className={"text-2xl font-azeret"}>sochacki.dev</a>
                </Link>
                <nav className={"flex gap-2 flex-col text-center md:flex-row md:gap-10"}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    <Link href={"/"}>
                        <a>Working Experience</a>
                    </Link>
                    <Link href={"/"}>
                        <a>Contact</a>
                    </Link>
                </nav>
            </div>


            <main className={"px-36 pt-56"}>
                <div className={"flex items-center gap-5"}>
                    <div>
                    <div className={"flex gap-4"}>
                        <Link href={"https://github.com/pascal-sochacki"}>
                            <a className={"border-2 rounded-full px-1 border-y-d"}>Github</a>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/paso/"}>
                            <a className={"border-2 rounded-full px-1 border-y-d"}>LinkedIn</a>
                        </Link>
                        <Link href={"https://twitter.com/PascalSochacki"}>
                            <a className={"border-2 rounded-full px-1 border-y-d"}>Twitter</a>
                        </Link>
                    </div>
                    <h1 className={"text-4xl font-bold"}>
                        I am Pascal Sochacki
                    </h1>
                    <p>
                        I'm Pascal, IT Consultant focus on Cloud and DevOps.
                    </p>
                    </div>
                    <div className={ "w-40 rounded-full overflow-hidden border-2 flex bg-d"}>
                        <Image src={me} />
                    </div>

                </div>

            </main>
        </>
    )
}

export default Home
