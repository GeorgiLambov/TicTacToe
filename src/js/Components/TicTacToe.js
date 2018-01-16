import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import Result from "./Result";

export default class TicTacToe extends React.Component {
    handleSelectBox(index) {
        this.props.makeMove(index);
    }

    handleRestart() {
        this.props.newGame();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.grid !== nextProps.grid;
    }

    render() {
        let gridContainer = this.props.grid.map((box, index) => {
            return (
                <Box key={index} value={box} onSelectBox={this.handleSelectBox.bind(this, index)} />
            );
        });

        return (
            <div className="box-wrapper">
                <Result outcome={this.props.outcome} onRestart={this.handleRestart.bind(this)} />
                <div className="box-container animated fadeIn">
                    {gridContainer}
                </div>
                <div className="footer">
                    Georgi Lambov(github/GeorgiLambov)
                </div>
            </div>
        );
    }
}

TicTacToe.propTypes = {
    grid: PropTypes.object.isRequired,
    outcome: PropTypes.any.isRequired,
    // actions
    newGame: PropTypes.func.isRequired,
    makeMove: PropTypes.func.isRequired
};
