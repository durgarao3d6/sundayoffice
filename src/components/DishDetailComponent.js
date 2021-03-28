import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


class DishDetailComponent extends Component {

    renderComments(comments) {

        return (
            comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <h3>{comment.author}</h3>
                        <p>{comment.comment}</p>
                    </li>
                );
            })
        )
    };


    render() {       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardImg src={this.props.dish.image}></CardImg>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>Comments</h1>
                        <ul>
                            {this.renderComments(this.props.dish.comments)}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default DishDetailComponent;