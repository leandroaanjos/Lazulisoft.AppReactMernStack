import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import DeleteModal from '../commons/deleteModal';

export default class StudentTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeleteModal: false,
            modelIdToDelete: '',
            titleModal: '',
            bodyModal: '',
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
        this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    }

    handleDelete(id) {
        this.setState({ showDeleteModal: false, modelIdToDelete: '' });
        this.props.onDelete(id);
    }

    handleOpenDeleteModal(id, name) {
        this.setState({ showDeleteModal: true, modelIdToDelete: id, bodyModal: `Do you want to delete the student '${name}'?` });
    }

    handleCloseDeleteModal() {
        this.setState({ showDeleteModal: false, modelIdToDelete: '', bodyModal: '' });

        if (this.state.returnToList) {
            this.props.history.push('/student-list');
        }
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Enroll Nr</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((student, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.enrollNr}</td>
                                        <td>
                                            <Link to={"/edit-student/" + student._id} className="btn btn-sm btn-info mr-2">Edit</Link>
                                            <Button onClick={() => this.handleOpenDeleteModal(student._id, student.name)} size="sm" variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <DeleteModal show={this.state.showDeleteModal}
                    onClose={this.handleCloseDeleteModal}
                    onDelete={this.handleDelete}
                    modelId={this.state.modelIdToDelete}
                    title={this.state.titleModal}
                    body={this.state.bodyModal} />
            </div>
        );
    }
}
