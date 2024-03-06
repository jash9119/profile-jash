import React from "react";
import contact from "../data/contact";
import ContactItem from "./ContactItem";

function Contact(){
    //const isDarkMode = document.documentElement.classList.contains("dark");

    return(
        <div className="flex flex-col items-center justify-center gap-3">
        <div className="align-center">
            <h5 className="flex justify-center text-lg font-semibold text-gray-900 dark:text-white">
            Like my vibe?</h5>
            <p className="flex justify-center text-sm max-w-xl font-light mb-0">
                You can reach out to me here, I would love to have a conversation!
            </p>
            
        </div>
            <div className="flex flex-row items-center justify-center gap-4">
            {contact.map((item) => (
          <ContactItem
            imgUrl={item.imgUrl}
            link={item.link}
            // key={item.id} // Add a unique key for each item
          />
        ))}
        
        </div>
        </div>
        
    )
}

export default Contact;