import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

const sprintf = require('sprintf-js').sprintf;

export default class NumberEnumerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || '0',
            label: this.props.label || '',
            number: 0
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.number >= this.props.value) return;
            this.setState(prevState => ({
                number: prevState.number + this.props.step
            }));
        }, this.props.interval);
    }
    render() {
        return React.createElement(Text, {
            style: this.props.style || {}
        }, sprintf(this.state.text, this.state.number));
    }
}

NumberEnumerator.propTypes = {
    value: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired
};