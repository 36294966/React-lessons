import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[blue]'>REACT</h1>
        <p>
          Mastering coding cultivates advanced problem-solving abilities and critical thinking,
          driving innovation and cooperative efforts across diverse fields.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div>
        <div className='lg:col-span-2 mt-6 flex justify-between'>
          <div>
            <h6 className='font-medium text-gray-400'>Coding</h6>
            <ul>
              <li className='py-2 text-sm'>React</li>
              <li className='py-2 text-sm'>Tailwind</li>
              <li className='py-2 text-sm'>Typescript</li>
              <li className='py-2 text-sm'>Next.js</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Styling</h6>
            <ul>
              <li className='py-2 text-sm'>Html</li>
              <li className='py-2 text-sm'>Css</li>
              <li className='py-2 text-sm'>Javascript</li>
              <li className='py-2 text-sm'>React Native</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Design</h6>
            <ul>
              <li className='py-2 text-sm'>Bootstrap</li>
              <li className='py-2 text-sm'>Figma</li>
              <li className='py-2 text-sm'>SQL</li>
              <li className='py-2 text-sm'>Next.js</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Web</h6>
            <ul>
              <li className='py-2 text-sm'>Tailwind</li>
              <li className='py-2 text-sm'>R</li>
              <li className='py-2 text-sm'>SQL</li>
              <li className='py-2 text-sm'>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
