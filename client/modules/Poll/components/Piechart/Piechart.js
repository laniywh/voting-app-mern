import React, { Component } from 'react';
import * as d3 from 'd3';

// import component
import { LabeldArc } from './Arc';


class Piechart extends Component {
    constructor(props) {
        super(props);

        this.pie = d3.pie()
            .value((d) => d.votes);

        this.colors = d3.scaleOrdinal(d3.schemeCategory20b);
    }

    arcGenerator(d, i) {
        return (
            <LabeldArc key={`arc-${i}`}
                       data={d}
                       innerRadius={this.props.innerRadius}
                       outerRadius={this.props.outerRadius}
                       color={this.colors(i)} />
        );
    }

    render() {
        let pie = this.pie(this.props.data),
            translate = `translate(${this.props.x}, ${this.props.y})`;

        return (
            <g transform={translate}>
                { pie.map((d, i) => this.arcGenerator(d, i)) }
            </g>
        );
    }
}

export default Piechart;