import React, {Component} from 'react'
import Student from './Student'
import {StudentData} from './StudentData'
import './ListStudent.css'

export default class ListStudent extends Component {

    state = {
        students: [],
        search  : "",
        select  : "",
        isSelected : false
    }

    componentDidMount() {
        this.setState({
            students : StudentData
        })
    }


    //setiap kali user input keyword, maka value akan disimpan di state search
    onHandleChange= (e) => {
        this.setState({
            search : e.target.value,
            isSelected : false

        })
        console.log(this.state.search);
    }

    onHandleSelect = (e) => {
        // ternary operation
        const value = e.target.selectedIndex !== 0 ?  e.target.options[e.target.selectedIndex].value : null;
        console.log(value);

        if (value !== null ) {
            this.setState({
                select : value,
                isSelected : true
            })
        }
    }


    render() {
        const {students, search, select, isSelected} = this.state
        return (
            <>
            <div className="search">
                <input placeholder="search student..." value={search} onChange={this.onHandleChange}/>
                <select value={select} onChange={this.onHandleSelect}>
                    <option value="">Filter By</option>
                    <option value="NIM">NIM</option>
                    <option value="NAMA">Nama</option>
                    <option value="IPK">IPK</option>
                    <option value="KOTA">Kota</option>
                </select>
            </div>
            <div className="student">


                { 
                    //jika filter, maka false
                    !isSelected ? (

                    students
                    .filter( f => f.NAMA.toLowerCase().includes(search.toLowerCase()))
                    .map(value => {
                        return (
                            <Student
                                NIM={value.NIM}
                                NAMA={value.NAMA}
                                KOTA={value.KOTA}
                                IPK={value.IPK}
                                VOTE={value.VOTE}
                                foto={value.foto}
                            />
                        )
                    }
                    )
                    )

                    //jika select, maka true
                    :
                    
                    (
                    students
                    .sort((a,b) => {
                        if(select === 'NAMA'){
                            return ('' + a.NAMA).localeCompare(b.NAMA);
                        }
                        if(select === 'NIM'){
                            return b.NIM - a.NIM;
                        }
                        if(select === 'IPK'){
                            return b.IPK - a.IPK;
                        }
                        if(select === 'KOTA'){
                            return ('' + a.KOTA).localeCompare(b.KOTA);
                        }
                    })
                    .map(value => {
                            return (
                                <Student
                                    NIM={value.NIM}
                                    NAMA={value.NAMA}
                                    KOTA={value.KOTA}
                                    IPK={value.IPK}
                                    foto={value.foto}
                                />
                            )
                        })
                        

                    )
                }
            </div>
            </>
        )
        // return <div className="movies">{students}</div>
    }
}
