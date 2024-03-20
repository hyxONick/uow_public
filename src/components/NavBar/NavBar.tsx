import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='home'>
            <nav className="bg-gray-700 bg-opacity-0 py-8 px-12">
                <div className="container mx-auto flex justify-between items-center">

                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="text-white text-20 font-roboto mr-12">LOGO</Link>
                        {/* Navigation Links */}
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="text-white text-20 font-manrope hover:text-gray-300">Study at UOW</Link></li>
                            <li><span className="text-white">|</span></li>
                            <li><Link to="/" className="text-white text-20 font-manrope hover:text-gray-300">Accommodation</Link></li>
                            <li><span className="text-white">|</span></li>
                            <li><Link to="/" className="text-white text-20px font-manrope hover:text-gray-300">Live in Wollongong</Link></li>
                            <li><span className="text-white">|</span></li>
                            <li><Link to="/" className="text-white text-20 font-manrope hover:text-gray-300">Forum</Link></li>
                            <li><span className="text-white">|</span></li>
                            <li><Link to="/" className="text-white text-20 font-manrope hover:text-gray-300">About us</Link></li>
                            <li><span className="text-white">|</span></li>
                            <li><Link to="/" className="text-white text-20 font-manrope hover:text-gray-300">Search</Link></li>
                        </ul>
                    </div>

                    <button className="bg-red_primary hover:bg-red_secondary text-white font-poppins tracking-widest py-3 px-10 rounded-lg">
                        LOG IN
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
