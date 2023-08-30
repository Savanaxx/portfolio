import Image from "next/image"
import Link from "next/link"
import logo from "./assets/logo.png"
import lk from "./assets/linked.png"
import git from "./assets/git.png"

export default function Page() {
    return (
        <section
            className="flex h-[100%] w-[70%] m-auto bg-slate-700 text-white rounded">
            <div className="text-center h-[80%] w-[100%]">
                <h1 className="animate-bounce m-[10px] text-[30px]">#Jakub Podbielski</h1>
                <Image
                    className="m-auto saturate-50 border-black border-4 rounded-2xl w-auto h-auto"
                    src={logo}
                    width={100}
                    height={100}
                    alt="logo"/>
                    <div>
                    <br></br>
                    <h2 className="text-[3vb] text-center font-bold text-slate-400">About Me</h2>
                    <p className="p-0 m-0 text-[1.2vb] md:p-8 md:m-8 md:text-[2vb] 2xl:text-[2.5vb] text-slate-300">
I consider myself a "beginner" web developer, although this label doesn't capture the full spectrum of my journey. My initial foray into development dates back to my primary school days when I crafted rudimentary HTML code in Notepad and proudly labeled it a website :) Since then, my hunger for knowledge has grown insatiable. I've delved into an array of languages and frameworks, gaining proficiency in HTML, JS, CSS/SASS, Tailwind, React/Next, PHP, MySQL, TypeScript, and even dabbling in Python and C++. With aspirations of becoming a seasoned full stack developer, I'm charting a course to further expand my skill set. Currently, I'm gearing up to embrace the realms of Ruby/Ruby on Rails, Angular, Redux, and .NET, all in pursuit of honing my craft. My goal is to not only acquire technical prowess but also to foster a profound understanding of the art and science of web development.</p>
                    </div>
            </div>

            <footer
                className="h-[10%] w-[100%] mt-auto -ml-[65%] border-black border-2 border-r-0 p-2 bg-slate-600">
                <p className="float-left mr-[1vb] mt-[2vb] font-bold text-[1.5vb] md:text-[2.5vb]">Contact me:</p>
                    <div className="bg-slate-400 h-[100%] w-[30%] grid grid-cols-2 justify-items-center items-center rounded-xl">
                <a href="https://www.linkedin.com/in/jakub-podbielski-a0231b228/"><Image className="saturate-50 rounded-full w-auto h-auto" src={lk} height={45} width={50} alt="lk"/></a>
                <Image className="saturate-50 rounded-full w-auto h-auto" src={git} height={45} width={50} alt="git"/>
                </div>
                <p className="float-right -mt-[2vb] hidden 2xl:flex">technology used: react/next.js | tailwindcss | typescript</p>
            </footer>
            <div
                className="h-auto w-[35%] ml-auto border-black border-2 p-1 bg-slate-600 flex-wrap font-bold">
                <div>
                    <h2 className="text-yellow-200 text-[2vb] md:text-[3vb]">Open Projects:</h2>
                    <ul className="ml-[2vb] text-slate-300 text-[1vb] md:text-[2vb] list-disc">
                        <li>Portfolio</li>
                    </ul>
                    <h2 className="mt-[4vb] text-green-400 text-[2vb] md:text-[3vb]">Closed Projects:</h2>
                    <ul className="ml-[2vb] text-slate-300 text-[1vb] md:text-[2vb] list-disc mt-[20px]">
                        <li className="border-white border-b-[1px]">Desktop app for managing workers
                            <ul className="text-slate-200 text-[1vb] md:text-[2vb] list-none italic">
                                <li className="text-center mb-[1vb]">electron.js | html | css/scss</li>
                            </ul>
                        </li>
                        <li className="mt-[20px]">
                            Many of codecademy projects
                        </li>
                        <li className="border-white border-b-[1px] mt-[2vb]">
                            Company website
                            <ul className="text-slate-200 text-[1vb] md:text-[2vb] list-none italic">
                                <li className="text-center mb-[1vb]">html | css | js</li>
                                <li className="text-center mb-[1vb]">
                                    <a
                                        className="underline underline-offset-2 text-blue-300 not-italic font-bold text-[2vb]"
                                        href="https://enigma24.pl">link</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )

}