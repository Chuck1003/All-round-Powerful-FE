/**
 * 列表 & Keys
 */
import React from 'react';
import PropTypes from 'prop-types';     //PropsTypes检查类型

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [2,3,4,5,6,7,8]
        };
    }

    render(){
        const ListItem = this.state.data.map((num) =>
            <li key={num.toString()}>{num}</li>
        )
        return (
            <ul className="ulStyle" data-name={this.props.listName}>{ListItem}</ul>
        )
    }
}

// 属性默认值
List.defaultProps = {
    listName: 'defaultName'
}
// 属性检查
List.propTypes = {
    listName: PropTypes.string
};

export default List;