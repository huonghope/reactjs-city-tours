import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TourList.scss'
import Tour from '../Tour/Tour'
import { tourData } from './tourData'

export default class TourList extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state={
        tours: tourData
    }
    removeTour = id => {
        const {tours} = this.state;
        const filter = tours.filter(tour => tour.id != id)
        this.setState({
            tours : filter
        })
    }
    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
                {
                    tours.map(tour => 
                        <Tour key = {tour.id} tour = {tour}
                        handleRemove = {this.removeTour}
                        />
                    )
                }
            </section>
        )
    }
}
