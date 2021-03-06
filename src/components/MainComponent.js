import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route ,Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactUsComponent';
import AboutUs from './AboutUsComponents';
import { connect} from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

class Main extends Component {

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    
    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
          }

          const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        return (
            <div>           
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> }></Route>                    
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path="/contactus" component={Contact}></Route>
                    <Route path="/aboutus" component={()=><AboutUs leaders={this.props.leaders}></AboutUs>}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>                                     
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));