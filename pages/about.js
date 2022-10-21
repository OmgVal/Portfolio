import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            <p className={styles.extraGreen}>Hello, front ennnddddd -- love yall!</p>

            {/* Load an image locally */}
            <Image
                src='/zoro.webp'
                alt='logo'
                width={500}
                height={400}
                // layout='fill'
            />

            {/* load image from another domain */}
            <Image
                src="https://media.giphy.com/media/gbmWwWm4sGMQvAYm1G/giphy.gif" 
                alt= 'dancing cat'
                width="452" 
                height="480"
            />
        </div>
    )
}