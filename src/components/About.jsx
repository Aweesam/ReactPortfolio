import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white sm:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-1 md:pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Deep learning is the future. After studying artificial intelligence, natural language processing, data science with machine learning, and the fundamentals of deep learning, a blazing passion to work on bleeding edge artificial intelligence has emerged within me. Alongside my understanding of IoT, it’s clear the world is on the cusp of a data revolution where the ever growing number of sensors will have their data consumed, continuously and in real-time, at a low cost, to create real and practical solutions to today’s problems.
            </p>

            <br />

            <p className="text-xl">
                Let's build a better world!
            </p>
        </div>
    </div>
  )
}

export default About