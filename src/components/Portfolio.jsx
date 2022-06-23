import React from 'react'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import babyNames from '../assets/portfolio/babyNames.jpg'
const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: babyNames,
            demo: 'https://colab.research.google.com/drive/15AhUdq96-cKBzEToAkDGNzEHXUQmrUk2?usp=sharing',
            code: 'https://github.com/Aweesam/data-exploration-and-analysis-baby-names/blob/main/Baby_Names.ipynb',
        },
        {
            id: 2,
            src: reactParallax,
            demo: ''
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        },
    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

              
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px12 sm:px-0">
            {
                portfolios.map(({id,src, demo, code}) => (
                    
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <button target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={demo} target="._blank">Demo</a></button>
                                <button href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{<a href={code} target="._blank">Code</a>}</button>
                            </div>
                        </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Portfolio