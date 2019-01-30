import React from 'react';

const withHighOrderMakeBorderRed = (Component) => {
    return class HighOrderMakeBorderRed extends React.Component{
        render(){
            return (
                <div style={{borderStyle: "dashed", borderColor: "red"}}>
                    <Component></Component>
                </div>
            )
        }
    }
}

export default withHighOrderMakeBorderRed;