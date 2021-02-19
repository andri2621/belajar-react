import React, {Component} from 'react'
import {listCategory} from './api/api-category'
import { TableCategory } from './CategoryComponent';



export default class Category extends Component {

    // 1. declarasikan category[] state
    state = {
        category : [],
        isModalShow : false
    }



    // 3. call showListCategory to fill category[] on first time render
    componentDidMount() {
        this.showListCategory();
    }



    // 2.panggil listCategory dari api-category, kemudian isi category[] state dengan data dari listCategory
    showListCategory = () => {
        listCategory().then(data => {
            this.setState({
                category: data
            })
        })
    }


    render() {
  
            const { category } = this.state;
            return (
                <div>
                    <TableCategory category = {category}></TableCategory>
                    {/* {
                        (isModalShow ? (<AddEditForm setShowModal={this.onShowModal}/>) : null)
                    } */}
                </div>
            )
    }
}
