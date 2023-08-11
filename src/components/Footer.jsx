import React from 'react';
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="flex justify-center flex-col py-4 bg-[#2c2e33] text-white flex-shrink-0">
            <div className='md:w-10/12 w-11/12 flex md:flex-row flex-col gap-4 sm:px-0 px-4 justify-around'>
                <div className="contact">
                    <h2 className='font-bold text-2xl py-3'>Contact Us</h2>
                    <p>Email: example@email.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>
                <div className="x">
                    <h2 className='font-bold text-2xl py-3'>Social</h2>
                    <div className='flex gap-2.5 items-center text-xl'>
                        <a target='_blank' href="https://www.linkedin.com/company/travelling-nerd/" className="icon">
                            <BsLinkedin />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/company/travelling-nerd/" className="icon">
                            <BsFacebook />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/company/travelling-nerd/" className="icon">
                            <BsInstagram />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/company/travelling-nerd/" className="icon">
                            <BsTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
