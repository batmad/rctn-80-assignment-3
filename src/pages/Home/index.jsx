import React from'react';
import Quote from '../../molecules/Quote';
import Paragraph from '../../atoms/Paragraph';
class Home extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4 border-0">
                <div className="card-body">
                    <h5 className="card-title">Hi, i&apos;m Boby!</h5>
                    <Paragraph>
                        A passionate Web Developer | UI/UX Designer | Problem Solver
                    </Paragraph>
                    <Paragraph>
                        Welcome to my online portfolio! I specialize in building sleek, responsive, and user-friendly websites with a focus on front-end development. Explore my work and feel free to get in touch!
                    </Paragraph>

                    <h5 className="card-title mt-5">What Clients Say:</h5>
                    <Quote text="Boby is a top-notch web developer! His designs are clean, and the user experienceis outstanding." author="John Doe, Client"/>
                    <Quote text="A pleasure to work with! Boby always delivers on time and with great attention to detail." author="Sarah Smith, Client"/>
                </div>
            </div>
        )
    }
}

export default Home;   