import React, { Component } from 'react';
import * as d3 from 'd3';

class Arc extends Component {
    constructor() {
        super();

        this.arc = d3.arc();
    }

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateD3(nextProps);
    }

    updateD3(newProps) {
        this.arc.innerRadius(newProps.innerRadius);
        this.arc.outerRadius(newProps.outerRadius);
    }

    render() {
        return (
            <path d={this.arc(this.props.data)}
                  style={{fill: this.props.color}}></path>
        );
    }
}

export default Arc;

class LabeldArc extends Arc {
    render() {
        let [labelX, labelY] = this.arc.centroid(this.props.data),
            labelTranslate = `translate(${labelX}, ${labelY})`;

        return (
            <g>
                {super.render()}
                <text transform={labelTranslate}
                      textAnchor="middle">
                    {this.props.data.data.name}
                </text>
            </g>
        );
    }
}

export { LabeldArc };