import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.154791180331!2d18.069856015475622!3d59.34706391664332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d402a3b8871%3A0xcc80b8bee19d7ff8!2sKTH+Entr%C3%A9!5e0!3m2!1sen!2sse!4v1555914363121!5m2!1sen!2sse" 
                width="100%" 
                height="500ox" 
                frameBorder="0"  
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                 <div>Location</div>
            </div>
        </div>
    );
};

export default Location;