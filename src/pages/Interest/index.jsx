import React from'react';
import CardNumber from '../../molecules/CardNumber';

class Interest extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4 border-0">
                <ol className="list-group list-group-numbered">
                    <CardNumber title="Web Development and Digital Design" description="I am deeply interested in web development and user interface design. I always stay up-to-date with the latest trends in frameworks, tools, and technologies like React, Vue.js, and Tailwind CSS to create outstanding user experiences." />

                    <CardNumber title="UX/UI Design" description="My interest in user experience and user interface design drives me to continually learn about how design can influence the way users interact with applications or websites." />

                    <CardNumber title="Coding and Problem-Solving" description="I truly enjoy the challenges of programming, especially those involving problem-solving and code optimization to make applications more efficient and faster." />
                </ol>
            </div>
        )
    }
}

export default Interest;   