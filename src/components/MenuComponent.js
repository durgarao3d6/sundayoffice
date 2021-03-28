import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent'

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
        <DishDetailComponent dish={dish} />
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
        <div key={dish.id} className="col-12 col-md-5 mt-5">
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
      <div className="container">
        <div className="row">        
            {menu}         
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            {this.renderSelectedDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;