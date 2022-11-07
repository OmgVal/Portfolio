import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div className='flex justify-center mb-20  mt-40'>
                <h1 className='text-3xl text-sky-400 animate animate-pulse'>About Me</h1>
            </div>
            <div className='text-2xl flex justify-evenly mx-8'>
                <p> Hello, I am from Arizona. ☀️ <br/>
                I love playing video games on my down time and long to have a cat. <br/>
                My current favorite game is Rocket league and have been playing it for about<br/> 4yrs now.
                I would say that my passion for playing video games has led me down <br/>
                this career path and I hope to one day create a video game of my own.</p>
                <Image 
                    src="https://media.giphy.com/media/CoXkUOATtnaYeBmHyJ/giphy.gif" 
                    alt= 'Rocket League Gif'
                    width="400" 
                    height="200"
                />
            </div>

           

        





            {/* 
            {/* Load an image locally 
            <Image
                src='/zoro.webp'
                alt='logo'
                width={500}
                height={400}
                // layout='fill'
            />

            {/* load image from another domain 
            <Image
                src="https://media.giphy.com/media/gbmWwWm4sGMQvAYm1G/giphy.gif" 
                alt= 'dancing cat'
                width="452" 
                height="480"
            /> */}
        </div>
    )
}