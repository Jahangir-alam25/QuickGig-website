import { Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-black text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
                <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                    <div className="flex items-center justify-center   ">
                    <img src="https://i.ibb.co/DPDHTfhW/anywhere.png" alt="logo" className="h-8 w-8" />
                    </div>
                     <span className="text-green-600 font-bold text-2xl"><a >Quick<span className="text-pink-300">G</span>ig</a></span>
                </a>
                <div className='flex flex-col gap-2 mt-2 sm:pl-16'>
                    <p className='border-b pb-1 border-dashed w-fit'>Email: support@quickgig.com</p>
                    <p className='border-b pb-1 border-dashed w-fit'>Phone: +1 234 567 890</p>
                    <p className='border-b pb-1 border-dashed w-fit'>Address: 123 Main St, Anytown, USA</p>   
                </div>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-white">
                <div className="space-y-3">
                    <h3 className="tracking-wide uppercase">Product</h3>
                    <ul className="space-y-1">
                        <li><a rel="noopener noreferrer" href="#">Features</a></li>
                        <li><a rel="noopener noreferrer" href="#">Integrations</a></li>
                        <li><a rel="noopener noreferrer" href="#">Pricing</a></li>
                        <li><a rel="noopener noreferrer" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="tracking-wide uppercase">Company</h3>
                    <ul className="space-y-1">
                        <li><a rel="noopener noreferrer" href="#">Privacy</a></li>
                        <li><a rel="noopener noreferrer" href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="uppercase">Developers</h3>
                    <ul className="space-y-1">
                        <li><a rel="noopener noreferrer" href="#">Public API</a></li>
                        <li><a rel="noopener noreferrer" href="#">Documentation</a></li>
                        <li><a rel="noopener noreferrer" href="#">Guides</a></li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <div className="uppercase">Social media</div>
                    <div className="flex justify-start space-x-3">
                        <Link rel="noopener noreferrer" to="https://web.facebook.com/?_rdc=1&_rdr#" title="Facebook" className="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white">
                                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"/>
                            </svg>
                        </Link>
                        <Link rel="noopener noreferrer" to="https://x.com/home" title="Twitter" className="flex items-center p-1">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-white">
                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                            </svg>
                        </Link>
                        <Link to="https://www.youtube.com/" rel="noopener noreferrer"  title="Instagram" className="flex items-center p-1">
                           <Youtube></Youtube>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6 text-sm text-center text-white">© 2025 Company Co. All rights reserved.</div>
    </footer>
    
      
    );
};

export default Footer;