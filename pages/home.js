import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    return ( 
        <div className="">
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-blue-600 sm:bg-orange-600 md:bg-indigo-600 lg:bg-green-600 xl:bg-red-600"></div>
            <header className="max-w-screen-xl mx-auto px-16 flex justify-between items-center py-4">
                <div className="relative w-36 h-10">
                    <Image src="/logo-01.png" alt="Linkedin Logo" layout="fill" objectFit="contain"/>
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon}  text="Discover" feed/>
                        <HeaderLink Icon={GroupIcon} text="People"/>
                        <HeaderLink Icon={OndemandVideoIcon} text="Learning"/>
                        <HeaderLink Icon={BusinessCenterIcon} text="Jobs"/>
                    </div>
                    <div className="pl-4">
                        <button className="text-blue-700 hover:bg-blue-700 hover:text-white font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-screen-xl mx-auto relative px-16 flex flex-col md:flex-row items-center mt-8">
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-3xl md:text-5xl text-amber-900 max-w-xl !leading-snug pl-4 md:pl-0 font-light">
                        Millions of jobs and <br className="hidden lg:inline"/> people hiring
                    </h1>
                    <div className="space-y-4 mt-10">
                        <div className="intent">
                            <h2 className="text-xl">Search For a Job</h2>
                            <ArrowForwardIosIcon className="text-gray-700"/>
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Search For a Job</h2>
                            <ArrowForwardIosIcon className="text-gray-700"/>
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Search For a Job</h2>
                            <ArrowForwardIosIcon className="text-gray-700"/>
                        </div>
                    </div>    
                </div>

                <div className="relative xl:absolute w-80 h-80 md:w-[800px] lg:h-[400px] top-5 -right-20">
                    <Image src="/job-vector-art.png" alt="Linkedin Clone Vector Art" layout="fill" objectFit="contain"/>
                </div>
            </main>

            
        </div>
     );
}
 
export default Home;