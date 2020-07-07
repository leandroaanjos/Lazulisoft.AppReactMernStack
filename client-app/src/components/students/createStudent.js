import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BACKEND_API } from '../../appConstants';
import BasicModal from '../commons/basicModal';

export default class CreateStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            enrollNr: '',
            showModal: false,
            returnToList: false,
            titleModal: '',
            bodyModal: '',
            validated: false
        };

        this.onChangeField = this.onChangeField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    onChangeField(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        if (e.target.checkValidity() === false) {
            this.setState({ validated: true });
            return;
        }

        const student = {
            name: this.state.name,
            email: this.state.email,
            enrollNr: this.state.enrollNr
        };

        axios.post(`${BACKEND_API}/students`, student)
            .then(res => {
                this.setState({ showModal: true, returnToList: true, bodyModal: 'Student successfully created!' });
            })
            .catch(error => {
                this.setState({ showModal: true, returnToList: false, bodyModal: 'Error: ' + error });
            });
    }

    handleCloseModal() {
        this.setState({ showModal: false });

        if (this.state.returnToList) {
            this.props.history.push('/student-list');
        }
    }

    render() {
        return (
            <div className="form-wrapper">
                <h1>Create Student</h1>
                <Form onSubmit={this.onSubmit} noValidate validated={this.state.validated}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChangeField}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeField}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="EnrollNr">
                        <Form.Label>Enroll Number</Form.Label>
                        <Form.Control type="number"
                            name="enrollNr"
                            value={this.state.enrollNr}
                            onChange={this.onChangeField}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Enroll Number is required.</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" size="lg" block="block" type="submit">Submit</Button>
                </Form>

                <BasicModal show={this.state.showModal} onClose={this.handleCloseModal} title={this.state.titleModal} body={this.state.bodyModal} />
            </div>
        );
    }
}
