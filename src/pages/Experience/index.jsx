import React from'react';
import InfoCard from '../../molecules/InfoCard';

class Experience extends React.Component {
    render() {
        return (
              <div className="list-group mt-4">
                <InfoCard title="Junior Web Developer" description="Tech Innovations Inc." address="Sukabumi, Jawa Barat, Indonesia" period="January 2023 - Present" />

                <InfoCard title="Web Developer Intern" description="Creative Digital Solutions" address="Cianjur, Jawa Barat, Indonesia" period="June 2022 - December 2022" />

                <InfoCard title="Freelance Web Developer" description="Self-Employed" address="Sukabumi, Jawa Barat, Indonesia" period="September 2021 - May 2022" />
              </div>
        )
    }
}

export default Experience;   