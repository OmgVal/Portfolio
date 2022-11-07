import React from "react";

const Hero = () => {
    return (
        <div className="flex items-center justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img p-0">
            {/* overlay */}
            <div className="mx-40">
                <h2 className="text-4xl bg-black p-2">Hello, I am <span className="text-sky-400">Val</span>!</h2>
                <p className="text-xl bg-black flex px-2 pt-0 pb-2 justify-end">a Full-Stack Developer</p>          
                
            </div>
        </div>
    )
}

export default Hero