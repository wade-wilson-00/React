// Conditinal Rendering = allows you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, or change components)

import PropTypes from 'prop-types';

function UserGreeting(props) {

   return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> :
                             <h2 className="alert-msg">Please log in to Proceed</h2>);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting