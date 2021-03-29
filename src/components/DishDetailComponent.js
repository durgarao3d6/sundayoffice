import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';



function RenderComments({ comments }) {

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




function DishDetailComponent(props) {
    if (props.dish == null || props.comments == null) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <Card>
                            <CardImg src={props.dish.image}></CardImg>
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>Comments</h1>
                        <ul>
                            <RenderComments comments={props.comments} />
                        </ul>
                    </div>
                </div>

            </div>)
        }
}

export default DishDetailComponent;