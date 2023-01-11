import { DiGithubBadge  } from "react-icons/di"
import {AiFillLinkedin} from 'react-icons/ai'

export default function Contact() {
    return (
        <>
        <div className="flex justify-center align-middle text-3xl mt-40">
            <h1 className="text-sky-400 animate-bounce">Reach Me Via:</h1>
        </div>
            <div className='flex justify-center'>
          <ul className='inline-flex justify-center'>
            <li className='text-8xl p-2'>
                <a href='https://github.com/OmgVal'>
                    <DiGithubBadge />
                </a>
                    <p className='text-xl p-1 flex justify-center'>Github</p>
            </li>
            <li className='text-8xl p-2'>
                <a href='https://www.linkedin.com/in/valeria--zuniga/'>
                    <AiFillLinkedin />
                </a>
                    <p className='text-xl p-1 flex justify-center'>Linkedin</p>
            </li>
            {/* <li className='text-8xl p-2'>
              <DiHtml5 />
              <p className='text-xl p-1 flex justify-center'>HTML 5</p>
            </li>
            <li className='text-8xl p-2'>
              <DiMongodb />
              <p className='text-xl p-1 flex justify-center'>Mongodb</p>
            </li>  */}
          </ul>
        </div>

        </>
    )
}