import React from "react";

function ContactItem({ imgUrl,link }){
    //const isDarkMode = document.documentElement.classList.contains("dark");
    
    return(
        <a href={link} 
  
        target="_blank"
        rel="noopener noreferrer" 
        className="hover:opacity-80">
            <img src={imgUrl} 
            alt="contact" 
            className="w-14 h-14 md:w-16 md:h-16 object-cover cursor-pointer rounded-full dark:filter dark:invert"
            />
        </a>
    )
}

export default ContactItem;