import React from "react";

const Hero = () => {
    return (
        <div className="flex items-center justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img p-0">
            {/* overlay */}
            <div className="mx-40 greetBox">
                <h2 className="text-5xl bg-white px-2 pt-2">Hello, I am <span className=" text-indigo-800">Val</span>!</h2>
                <p className="text-2xl text-gray-700 bg-white flex px-2 pt-0 pb-2 justify-end">a Full-Stack Developer</p> 
                <div className='titleDes'>
                    <h1> a Full-Stack Developer</h1>

                </div>         
                
            </div>
        </div>
    )
}

export default Hero