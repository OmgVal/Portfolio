import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import { DiDjango, DiJsBadge, DiHtml5, DiMongodb, DiNodejs, DiReact, DiPostgresql, DiPython } from "react-icons/di";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Val's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Hero />
      <div className='m-5'>
        <div className='flex justify-center text-4xl'>Projects:</div>
        <div className="flex text-gray-600">
          <div className="container flex row px-5 py-7 mx-auto">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="/Giftastic.png" alt="PROJECT 2" style={{width: 'fit'}} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">FULL-STACK APPLICATION </h2>
                    <h1 className="text-2xl font-semibold mb-3">GIF-TASTIC: TECH USED WAS NODE.JS, EJS, JAVASCRIPT, BOOTSTRAP, POSTGRESQL, AXIOS, ETC.</h1>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-cyan-300 inline-flex items-center md:mb-2 lg:mb-0" href='https://github.com/OmgValicious/Project-2'>GitHub
                        <svg className="w-4 h-4 ml-2 animate-pulse" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="/petspace.png" alt="PROJECT 3" style={{width: 'fit'}} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">MERN-STACK APPLICATION (COLLAB)</h2>
                    <h1 className="text-2xl font-semibold mb-3">PETSPACE: TECH USED WAS NODE.JS, REACT, JAVASCRIPT, BOOTSTRAP, CLOUDINARY, MONGODB, ETC.</h1>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-cyan-300 inline-flex items-center md:mb-2 lg:mb-0" href='https://github.com/OmgValicious/petspace-p3-client'>GitHub
                        <svg className="w-4 h-4 ml-2 animate-pulse" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="/rockettiers.png" alt="PROJECT 4" style={{width: 'fit'}} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">MERN-STACK APPLICATION </h2>
                    <h1 className="text-2xl font-semibold mb-3">ROCKET TIERS: TECH USED WAS NODE.JS, EJS, JAVASCRIPT, TAILWIND, CLOUNDINARY, MONGODB, BYCRYPT, ETC.</h1>
                    <div className="flex items-center flex-wrap">
                      <a className="text-cyan-300 inline-flex items-center md:mb-2 lg:mb-0" href='https://github.com/OmgValicious/rocket-tiers-client'>GitHub
                        <svg className="w-4 h-4 ml-2 animate-pulse" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
      <div className='mt-5 mb-12 text-black'>
        <h1 className='flex justify-center text-4xl font-bolder text-gray-600 p-8' >
          Skills:
        </h1>
        
        
        <div className='flex justify-center'>
          <ul className='inline-flex justify-center'>
            <li className='text-8xl p-2'>
              <DiDjango />
            </li>
            <li className='text-8xl p-2'>
              <DiJsBadge />
              <p className='text-xl p-1 flex justify-center'>JavaScript</p>
            </li>
            <li className='text-8xl p-2'>
              <DiHtml5 />
              <p className='text-xl p-1 flex justify-center'>HTML 5</p>
            </li>
            <li className='text-8xl p-2'>
              <DiMongodb />
              <p className='text-xl p-1 flex justify-center'>Mongodb</p>
            </li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='inline-flex justify-center'>
            <li className='text-9xl p-2'> 
              <DiNodejs />
            </li>
            <li className='text-9xl p-2'>
              <DiReact />
              <p className='text-xl p-1 flex justify-center'>React</p>
            </li>
            <li className='text-9xl p-2'>
              <DiPostgresql />
              <p className='text-xl p-1 flex justify-center'>Postgresql</p>
            </li>
            <li className='text-9xl p-2'>
              <DiPython />
              <p className='text-xl p-1 flex justify-center'>Python</p>
            </li>

          </ul>
        </div>
      </div>
    </div>


  )
}
