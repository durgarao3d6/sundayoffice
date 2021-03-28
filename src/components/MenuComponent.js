import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent'

class Menu extends Component { 
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
        <div key={dish.id} className="col-12 col-md-3 mt-5 mb-5">
          <Card key={dish.id}  onClick={() => this.props.onClick(dish.id)}>
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
      </div>
    );
  }
}

export default Menu;