import  './testimonial.scss'

export default function Testomonial() {
    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src="assets/dr.jpeg" alt="" className="user"/>
                        <img src="assets/twitter.png" alt="" className="right"/>
                    </div>
                    <div className="center" >Gursher was one of my best student this semester and I supervised his final project. From the day one, He demonstrated his great passion and willingness toward learning new technologies and embracing the challenge toward delivering the outcome of his project. We had weekly session to review the project progress and Gursher managed to learn backend and front end development all by doing self study ! He managed to deliver a mobile app to our client which was a Canadian based company by carefully going through the requirements following the guidelines of the scrum methodology he learned. ITECH 7415 Industry project is different. Students are dealing with a real client and they have to apply all IT project management aspects and not just the programming parts to successfully deliver the project and Gursher Singh was one of my best students this semester who has always been listening carefully to our feedback and showing us constant improvements the week after. Well done to you Gursher and happy to recommend you to any potential employer in Australia. keep up the good work and never stop learning.</div>
                    <div className="bottom">
                        <h3>Dr. Mohammad Motahar </h3>
                        <h4>Principal Consultant & Inventor | Virtual CTO for startups | Uni Lecturer of ERP</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
