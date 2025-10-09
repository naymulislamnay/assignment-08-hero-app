const Footer = () => {
    return (
        <div className="max-w-[1200px] mx-auto pt-5 sm:pt-8 md:pt-12 pb-3 mt-5 sm:mt-10 md:mt-15 bg-black p-2.5">
            <div className="flex justify-between flex-col md:flex-row gap-1.5 text-[12px] text-[#A1A1AA] text-center md:text-left">
                <div className="w-full md:max-w-[25%] px-1.5">
                    <h2 className="text-white text-[18px] font-bold mb-3">HERO.io</h2>
                    <p>Welcome to HERO.io — your ultimate destination for discovering, exploring, and reviewing the latest mobile and desktop applications. Our platform curates a diverse collection of apps, each carefully organized with detailed descriptions, company profiles, user ratings, and real download data — all powered by our dynamic JSON-driven system.</p>
                </div>

                <div>
                    <h2 className="text-white text-[15px] font-medium mt-1.5 md:mt-0 mb-0 md:mb-3">Company</h2>
                    <p className="mt-0 md:mt-2.5"><a href="">About Us</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Our Mission</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Contact Sales</a></p>
                </div>

                <div>
                    <h2 className="text-white text-[15px] font-medium mt-1.5 md:mt-0 mb-0 md:mb-3">Services</h2>
                    <p className="mt-0 md:mt-2.5"><a href="">Products & Services</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Customer Stories</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Download Apps</a></p>
                </div>

                <div>
                    <h2 className="text-white text-[15px] font-medium mt-1.5 md:mt-0 mb-0 md:mb-3">Information</h2>
                    <p className="mt-0 md:mt-2.5"><a href="">Privacy Popcy</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Terms & Conditions</a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">Join Us</a></p>
                </div>

                <div>
                    <h2 className="text-white text-[15px] font-medium mt-1.5 md:mt-0 mb-0 md:mb-3">Social Links</h2>
                    <p className="mt-0 md:mt-2.5"><a href="">
                        <i className="fa-brands fa-x-twitter mr-1.5"></i>
                        @twitter.HERO.io
                    </a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">
                        <i className="fa-brands fa-linkedin-in mr-1.5"></i>
                        @pnkedin.HERO.io
                    </a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">
                        <i className="fa-brands fa-facebook-f mr-1.5"></i>
                        @facebook.HERO.io
                    </a></p>
                    <p className="mt-0 md:mt-2.5"><a href="">
                        <i className="fa-solid fa-envelope mr-1.5"></i>
                        support@hero.com
                    </a></p>
                </div>
            </div>
            <hr className="text-[#5e5e5e] mt-2.5 md:mt-8" />
            <p className="text-[#A1A1AA] text-center text-[12px] mt-3">© 2025 HERO.io All rights reserved.</p>
        </div>
    );
};

export default Footer;