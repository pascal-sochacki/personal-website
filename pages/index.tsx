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
                className={"w-full p-5 bg-background_dark flex justify-between items-center px-36 xl:flex-row flex-col fixed z-40"}>
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


            <main>
                <section className={"w-screen h-screen grid place-content-center"}>
                    <div className={"flex items-center gap-5 md:flex-row flex-col-reverse"}>

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
                                I'm Pascal, IT Consultant focused on Cloud and DevOps.
                            </p>
                            <p className={"text-2xl"}>
                                Website under construction 🏗!
                            </p>
                        </div>
                        <div className={"w-44 relative border-2 rounded-full overflow-hidden border-d place-content-center bg-texta"}>
                            <Image src={me} layout={"responsive"}/>
                        </div>

                    </div>
                </section>
                <section className={"w-screen h-screen bg-d p-20"}>
                    <h1 className={"text-background_dark text-2xl font-bold"}>Working Experience</h1>
                </section>

            </main>
        </>
    )
}

export default Home
