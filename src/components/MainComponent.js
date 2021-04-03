import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route ,Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactUsComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import AboutUs from './AboutUsComponents';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    
    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
          }

          const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        return (
            <div>           
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> }></Route>                    
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path="/contactus" component={Contact}></Route>
                    <Route path="/aboutus" component={()=><AboutUs leaders={this.state.leaders}></AboutUs>}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>                                     
                <Footer/>
            </div>
        );
    }
}

export default Main;