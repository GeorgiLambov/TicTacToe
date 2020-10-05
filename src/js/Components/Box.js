import React from "react";
import PropTypes from "prop-types";
import Constants from "../Utility/Constants";

export default class Box extends React.Component {
    handleClick() {
        this.props.onSelectBox();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }

    render() {
        let boxSymbol = <i />;
        let boxClass = "empty-box";

        if (this.props.value === Constants.PLAYER.X) {
            boxSymbol = <i className="fa fa-times" />;
            boxClass = "red-box";
        }

        if (this.props.value === Constants.PLAYER.O) {
            boxSymbol = <i className="fa fa-circle-o" />;
            boxClass = "blue-box";
        }

        return (
            <div className={"box " + boxClass} onClick={this.handleClick.bind(this)}>
                {boxSymbol}
            </div>
        )
    }
}

Box.propTypes = {
    value: PropTypes.oneOf([Constants.PLAYER._, Constants.PLAYER.X, Constants.PLAYER.O]).isRequired
};
