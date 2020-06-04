import React from 'react'

class  About extends React.Component {
    render(){
        return (
            <section className="about">
                <div className="container">
                    <div className="card shadow">
                        <h2 className="text-center">About us </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="info">
                            <p><b>Website: </b>http://www.fashion.abc.com</p>
                            <p><b>Branches: </b>Jamal | Kumaripati | Bhaisipati</p>
                            <p><b>Comapny size: </b>50-60 Employees</p>
                            <p><b>Main Office: </b>Gwarko, Lalitpur</p>
                            <p><b>Founded: </b>2010</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="find-us"> Find us in the map </h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5822775368397!2d85.32972871506122!3d27.66839288280799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dda8bcff4d%3A0x10d7aa6670ae520d!2sAcademia%20International%20College!5e0!3m2!1sen!2snp!4v1591093791692!5m2!1sen!2snp"
                     frameborder="0" style={{border:'0', width:'100%', height:'480px'}} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
                </div>


            </section>
        )
    }
}

export default About;
