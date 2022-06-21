import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, unde doloribus facilis eum eligendi molestias animi magni quidem vitae expedita ab doloremque nesciunt, optio sed? Necessitatibus tempora quo, delectus ratione aut saepe cum omnis aliquid, at ipsa repudiandae temporibus tempore distinctio accusamus numquam nisi odio, voluptate eaque alias exercitationem sed.
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