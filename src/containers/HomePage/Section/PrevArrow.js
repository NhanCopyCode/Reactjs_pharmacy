import React from "react";

class PrevArrow extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleOnClick = () => {
        const { onClick } = this.props;
        onClick();
    }
    render() {
        return (
            <div onClick={this.handleOnClick} className="button_prev">
                <button>
                    <i className="fas fa-chevron-left"></i>
                </button>
            </div>
        );
    }
}

export default PrevArrow;