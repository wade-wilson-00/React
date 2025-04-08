// propTypes = a mechanism that ensures that the passed value 
//             is of the correct datatype.
//             age: PropTypes.number

import PropTypes from 'prop-types'

function Studentt (props) {

    return(
        <div className="proptypes">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Studentt.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
 
export default Studentt