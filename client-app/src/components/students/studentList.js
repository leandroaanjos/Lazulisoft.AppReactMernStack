import React, { Component } from 'react';
import axios from 'axios';
import { BACKEND_API } from '../../appConstants';
import StudentTable from './studentTable';
import { Link } from 'react-router-dom';

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };

        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        axios.get(`${BACKEND_API}/students`)
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteStudent(id) {
        axios.delete(`${BACKEND_API}/students/${id}`)
            .then((res) => {
                console.log('Student successfully deleted!');                
                const students = this.state.students.filter(x => x._id !== id);
                this.setState(state => state.students = students);
            })
            .catch(error => {
                console.log(error);
            });        
    }

    render() {
        return (            
            <div>
                <h2>Students</h2>                
                <div>
                    <Link to={"/create-student"} className="btn btn-primary">Create Student</Link>
                </div>                
                <hr />
                <StudentTable students={this.state.students} onDelete={this.deleteStudent} />                
            </div>
        );
    }
}
