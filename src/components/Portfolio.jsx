import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio(){
    return(
        <div className="flex flex-col items-center justify-center gap-3">
        <Title>Some projects</Title>  
        <div className="flex flex-col md:flex-row px-10 md:px-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {portfolio.map(project => (
                <PortfolioItem 
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                />
            )

            )}
        </div>
       
        </div>
        </div>
   
    )
}

export default Portfolio;