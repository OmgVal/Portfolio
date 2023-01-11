// import built in link from next
import Link from "next/link";
import React, {useState} from "react";


export default function NavBar(){
    // const [nav, setNav] = useState(false)

    // const handleNav = () => {
    //     setNav(!nav)
    // }

    return(
        <nav>
            <div className="left-0 top-0 w-full z-10 ease-in duration-300">
                <div className="max-w-[1240px] m-auto flex justify-between items center p-2">
                    <Link href='/about'>
                        <h1 className="font-bold text-4xl"> Val Zuniga</h1>
                    </Link>
                    <ul className="hidden md:flex">
                        <li className="p-4">
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="p-4">
                            <Link href='/about'>About Me</Link>
                        </li>
                        <li className="p-4 ">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>


                    {/* <div className="block sm:hidden z-10">
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
                    </div>

                    <div>
                    <ul className="hidden md:flex">
                        <li className="p-4">
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="p-4">
                            <Link href='/about'>About Me</Link>
                        </li>
                     <li className="p-4 ">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                    </div> */}
                </div>
            </div>            
        </nav>
    )
}