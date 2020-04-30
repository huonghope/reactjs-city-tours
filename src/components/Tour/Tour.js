import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tour.scss'
export default class Tour extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        showInfo : false
    }
    handleInfo = () => {
        this.setState({
            showInfo : !this.state.showInfo
        })
    }
    render() {
        const {city, img, name, info, id} = this.props.tour;
        const {handleRemove} = this.props;
        const {showInfo} = this.state;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src = {img} alt = "img-tour" />
                    <span className="close-btn" onClick = {() => handleRemove(id)}>
                        <i className="fa fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info  {" "}
                        <span onClick = {this.handleInfo}>
                            <i className="fa fa-caret-square-o-down" />
                        </span>
                    </h5>
                    <p>{
                        showInfo ? info : ""    
                    }</p>
                </div>
            </article>
        )
    }
}
