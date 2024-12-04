import React from'react';
import CardNumber from '../../molecules/CardNumber';

class Awards extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4 border-0">
                <ol className="list-group list-group-numbered">
                    <CardNumber title="Web Developer of the Year" description="Awarded to web developers who have successfully developed web projects that are well-executed and world-class." />

                    <CardNumber title="Best Responsive Design" description="This award is given to the project with the most optimized web design for various devices, ensuring a consistent user experience across desktop, tablet, and mobile." />

                    <CardNumber title="Best E-commerce Website" description="This award is given to developers who have created an e-commerce site with an attractive design, efficient functionality, and a delightful shopping experience." />
                </ol>
            </div>
        )
    }
}

export default Awards;   