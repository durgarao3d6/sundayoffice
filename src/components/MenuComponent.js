import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }

  }

  onDishSelect(dish) {
    this.setState(
      {
        selectedDish: dish
      }
    );
  }

  renderSelectedDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div class="container">
        <div class="row">
          <div className="col-12 col-md-9">
            <div className="container">
              <div className="row">
                {menu}
              </div>
            </div>           
          </div>
          <div className="col-12 col-md-3">
            <div className="container">
              <div className="row">
                <div className="col-12 mt-5">
                  {this.renderSelectedDish(this.state.selectedDish)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;