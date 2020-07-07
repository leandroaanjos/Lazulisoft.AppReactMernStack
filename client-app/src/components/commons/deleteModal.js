import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { APP_TITLE } from '../../appConstants';
import PropTypes from 'prop-types';

export default class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.props.onClose(e);
    }

    handleDelete() {
        const id = this.props.modelId;
        this.props.onDelete(id);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title || APP_TITLE}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

DeleteModal.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
