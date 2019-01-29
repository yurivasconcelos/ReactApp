import React from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Proptypes, {this.props.name}</h1>
            </div>
        );
    }
}

PropTypesComponent.propTypes = {
    name: PropTypes.number
};

/*  PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 
    In this example, we’re using PropTypes.number. 
    When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 
    For performance reasons, propTypes is only checked in development mode.
    
    Warning: Failed prop type: Invalid prop `name` of type `string` supplied to `PropTypesComponent`, expected `number`.
*/

export default PropTypesComponent