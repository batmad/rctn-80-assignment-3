import React from'react';
import ItemList from '../../atoms/ItemList';

class Skills extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4 border-0">
                <div className="card-body">
                    <h5 className="card-title">Skills that a have learned</h5>
                    <ul className="list-group list-group-flush">
                        <ItemList item='HTML, CSS, JavaScript'/>
                        <ItemList item='React.js'/>
                        <ItemList item='Node.js'/>
                        <ItemList item='SQL, MongoDB'/>
                        <ItemList item='UI/UX Design'/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;   