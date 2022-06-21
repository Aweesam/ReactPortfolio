import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Deep learning is the future. After studying artificial intelligence, natural language processing, data science with machine learning, and the fundamentals of deep learning, a blazing passion to work on bleeding edge artificial intelligence has emerged within me. Alongside my understanding of IoT, it’s clear the world is on the cusp of a data revolution where the ever growing number of sensors will have their data consumed, continuously in real-time and at a low cost, to create real and practical solutions to today’s problems.
            </p>

            <br />

            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus, pariatur aliquid dolore esse accusamus nam assumenda suscipit ullam nisi illum, sed harum quis omnis incidunt exercitationem praesentium atque aperiam, vitae quia placeat. Placeat maiores quos, minima aut enim ea non dolore numquam nemo, a vero animi doloremque quidem inventore.
            </p>
        </div>
    </div>
  )
}

export default About