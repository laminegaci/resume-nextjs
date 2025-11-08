import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2019",
            title: "Stagaire Web Developer",
            company: "Edisoft Chéraga",
            type: "Parttime",
            description: "Creation of a web application for customer management using PHP."
        },
        {
            year: "2020 - 2021",
            title: "ICT help desk agent",
            company: "Amnal Staoueli",
            type: "Fulltime",
            description: "Regular technical assistance to users, resolving hardware and software issues, Technical support with the server and interact with the database."
        },
        {
            year: "2021 - 2023",
            title: "Web Developer",
            company: "FB-Technologies Ouled fayet",
            type: "Remote",
            description: "Design and development of new websites/webapps and maintenance of existing ones, Creates PHP scripts to process large data volumes."
        },
        {
            year: "2023+",
            title: "Backend Developer",
            company: "Whitebay limited Sidi abdellah zeralda",
            type: "Fulltime",
            description: "Designed, developed, and maintained scalable web applications using Laravel, Livewire, and Inertia.js. Collaborated with the front-end team and Built and optimized RESTful APIs to connect web platforms. Integrated third-party APIs (Stripe, PrestaShop, etc.) to synchronize data and automate business workflows."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h4 className="font-bold mb-2 text-black">{exp.year}</h4>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 3 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 3 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;