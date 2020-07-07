import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { APP_TITLE } from '../../appConstants';
import PropTypes from 'prop-types';

export default class BasicModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.props.onClose(e);
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
                </Modal.Footer>
            </Modal>
        )
    }
}

BasicModal.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};
