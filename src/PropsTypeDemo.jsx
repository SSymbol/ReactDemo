import React from 'react';
import PropsTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component {
    render() {
        return (
            <div>
                Hello：{this.props.title}
            </div>
        );
    }
}

PropsTypeDemo.propsTypes = {
    title:PropsTypes.number.isRequired
}
