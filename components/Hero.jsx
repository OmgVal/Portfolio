import React from "react";

const Hero = () => {
    return (
        <div className="flex items-center justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img p-0">
            {/* overlay */}
            <div className="mx-40 bg-white rounded-lg greetBox">
                <h2 className="text-4xl rounded-full px-2 pt-2">Hello, I am <span className="text-4xl text-gray-500">Val</span>!</h2>
                <p className="text-xl text-gray-700 flex px-2 pt-0 pb-2 justify-end">a Full-Stack Developer</p>             
            </div>
        </div>
    )
}

export default Hero