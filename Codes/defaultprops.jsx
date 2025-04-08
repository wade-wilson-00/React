// defaultProps = default values for props in case they are not 
//                passed from the parent component
//                name: "Guest"

import PropTypes from 'prop-types'

function Studenttt (props) {

    return(
        <div className="proptypes">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Studenttt.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Studenttt.defaultProps = {
    name:"Guest",
    age: 0,
}
 
export default Studenttt 