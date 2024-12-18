import React from "react";

class NextArrow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        const { onClick } = this.props;
        onClick();
    }
    render() {
        return (
            <div onClick={this.handleOnClick} className="button_next">
                <button>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        );
    }
}

export default NextArrow;
