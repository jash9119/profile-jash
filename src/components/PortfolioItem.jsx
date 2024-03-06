import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }){
    return(
        <a href={link} target="_blank" 
        rel="noopener noreferrer" className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden 
        hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:bg-gray-800">
            <img src={imgUrl} 
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
        
            <div className="w-full p-4 ">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-700 dark:border-white 
                        rounded-md overflow-hidden">
                        {item}</span>
                    ))}
                </p>
            </div>
        </a>
        
        
    )
}

export default PortfolioItem;