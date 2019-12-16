import React, {Component} from 'react';
import './Guide.css';

import {Link} from 'react-router-dom';
let book = "hoge";
export class History extends Component {



    componentWillMount() {
        const { cookies } = this.props;
        book = cookies.get("userId");
        console.log(book)
    }

    render(){
        return(
            book
        );
    }
}






