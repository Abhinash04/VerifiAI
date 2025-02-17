import "react"; 
import vid1 from "../assets/placeholder.mp4";
import Upload from "./Upload.jsx";
import { FaLock } from "react-icons/fa"

const Section1 = () => {
    return (
        <div className="bg-gradient-to-b from-[#E0EAF3] relative to-[#CFDEF3]" id="section1">
            <section className="relative lg:min-h-screen pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 flex flex-col lg:flex-row items-center lg:items-start max-w-[90%] mx-auto">

                {/* Left Content */}
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20 lg:w-1/2 flex flex-col items-start text-left">
                    <h3 className="text-blue-500 font-semibold uppercase text-sm">VERIFIAI</h3>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2">Is your document/video authentic and secure?</h1>
                    <p className="text-gray-600 mt-4">
                        A free and <span className="font-semibold text-black">fast AI video/docx authenticator</span> performing 
                        <span className="font-semibold text-black"> 16 crucial checks</span> to verify authenticity and ensure your 
                        document is secure and reliable.
                    </p>

                    {/* Upload Box */}
                    <div className="flex items-center gap-4 mt-6">
                        <Upload />

                        {/* Add to Chrome Button */}
                        <a 
                            href="#" 
                            className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700" 
                            role="button"
                        >
                            Add to Chrome
                            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3">
                        {[
                            {
                                text: "Over 12,000 students joined",
                                icon: (
                                    <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ),
                            },
                            {
                                text: "No yearly charges, maximum limits",
                                icon: (
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ),
                            },
                            {
                                text: "Secured & Safe ",
                                icon: (
                                    <FaLock />
                                ),
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="flex-shrink-0">{item.icon}</div>
                                <p className="ml-3 text-sm text-black">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visuals (Video) */}
                <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
                    <video 
                        className="w-full max-w-xl rounded-lg shadow-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        src={vid1} 
                    />
                </div>
            </section>
        </div>
    );
};

export default Section1;
