import React from'react';
import InfoCard from '../../molecules/InfoCard';

class Education extends React.Component {
    render() {
        return (
            <div className="list-group mt-4">
              <InfoCard title="University of Techland" description="Bachelor of Science in Computer Science" address="Sukabumi, Jawa Barat, Indonesia" period="2018 - 2022" />

              <InfoCard title="Tech Masters Academy" description="Full-Stack Web Development Bootcamp" address="Sukabumi, Jawa Barat, Indonesia" period="March 2022 - August 2022" />

              <InfoCard title="DesignTech Institute" description="Advanced UX/UI Design Certification" address="Sukabumi, Jawa Barat, Indonesia" period="July 2021" />
          </div>
        )
    }
}

export default Education;   