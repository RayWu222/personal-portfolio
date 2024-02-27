import React from 'react';

function Intro(){
    return (
        <div className = "flex items-center justify-center flex-col text-center pt-20 pb-6">
            
            <h1 className = "text-4xl md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold ">Raymond Wu</h1>
            <img
                className = "border-4 border-black dark:border-white size-1/6 " 
                src = '/assets/RW.jpg'>

                </img>
            <p className = "text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className = "text-sm max-w-xl mb-6 font-bold">Hello, I'm Raymond, a passionate software engineer and web developer. I hold a Bachelor of Applied Science in Application Development degree from North Seattle College. My educational background encompasses a diverse range of skills, with a focus on various types of application development. I specialize in Fullstack Web Development using React, Mobile Development with React Native, and Data Science, particularly in Data Analysis. Additionally, I have expertise in Cloud Computing with proficiency in both Amazon Web Services and Microsoft Azure. I am driven by a desire to continuously learn and innovate in the ever-evolving field of technology</p>
        </div>
    )
}

export default Intro;