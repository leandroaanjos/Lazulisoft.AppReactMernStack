import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CreateStudent from './students/createStudent';
import EditStudent from './students/editStudent';
import StudentList from './students/studentList';

export default class MainContent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Switch>
                            <Route exact path="/" component={StudentList} />
                            <Route path="/create-student" component={CreateStudent} />
                            <Route path="/edit-student/:id" component={EditStudent} />
                            <Route path="/student-list" component={StudentList} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        );
    }
}
