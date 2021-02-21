import React, {Component} from 'react'
import {deleteCategory, listCategory} from './api/api-category'
import { TableCategory } from './CategoryComponent';
import AddEditForm from './AddEditForm'



export default class Category extends Component {

    // 1. declarasikan category[] state
    state = {
        category : [],
        dataEditRow : null,
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



    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
    }

    onEditRow = (value)=>{

        this.setState({
            dataEditRow : value
        })
        this.onShowModal(true);
        this.onRefreshTable();
    }

    onDeleteRow = (value)=>{
        deleteCategory(value).then(response => {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.showListCategory();
    }




    render() {
  
            const { category , isModalShow, dataEditRow } = this.state;
            return (
                <div>
                    <TableCategory category = {category}
                        setShowModal = {this.onShowModal}
                        setDelete = {this.onDeleteRow}
                        setEdit = {this.onEditRow}
                    ></TableCategory>
                    {
                        (isModalShow ? (
                            <AddEditForm
                            setShowModal = {this.onShowModal}
                            setRefreshTable = {this.onRefreshTable}
                            category = {dataEditRow}
                            />) : null)
                    }
                </div>
            )
    }
}
