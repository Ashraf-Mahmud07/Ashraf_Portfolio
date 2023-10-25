import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-12 text-white">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <div className="my-2">
          <a href="#home"><h4 className="text-2xl uppercase font-bold">
            Ashraf<span className="text-cyan-600">Dev</span>Droid
          </h4></a>
        </div>
            <p className="text-gray-400 mb-6">I am Ashraf Mahmud, Working with MERN Stack Development</p>
            <div
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[2rem]  text-lg min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <MdOutlineMail />
                </div>
                <p className="md:text-base text-sm  break-words">
                  ashrafulashraf2521@gmail.com
                </p>
              </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Useful Links</h3>
            <div className='flex'>
            <ul className="space-y-2 ms-1">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            </ul>
            <ul className="space-y-2 ms-20">
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Me</a></li>
            </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Keep in touch</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.linkedin.com/in/ashraful-islam-258aa0286/" target='_blank' className="hover:text-gray-400 text-xl"><BsLinkedin /></a></li>
              <li><a href="https://twitter.com/" target='_blank' className="hover:text-gray-400 text-xl"><FaTwitter /></a></li>
              <li><a href="https://www.facebook.com/ashraf.mahmud.444/" className="hover:text-gray-400 text-xl"><FaFacebook /></a></li>
              <li><a href="https://github.com/Ashraf-Mahmud07" target='_blank' className="hover:text-gray-400 text-xl"><FaGithub /></a></li>
              <li><a href="https://www.instagram.com/_ashraf_mahmud_/" target='_blank' className="hover:text-gray-400 text-xl"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-slate-700" />
        <p className="text-sm text-center">© {new Date().getFullYear()} AshrafDevDroid All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;