import React, { Component } from 'react';
import moment from 'moment';
import { connect } from "react-redux"
import Input from './input'
import * as todoActions from '../../redux/actions/todosAction';

const mapStateToProps = state => {
    return {
        mappedTodoState: state
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMainGoal: (text) => dispatch(todoActions.addNewMainGoal(text)),
        addNewMainGoalRequest: (text) => dispatch(todoActions.addNewMainGoalRequest(text))
    }
}

class MainGoal extends Component {

    deleteMainGoal() {
        const now = moment()
        const currentHour = now.hour()
        if(this.props.mappedTodoState.mainGoal !== null &&  currentHour === 24) {
            setTimeout(() => {
                this.props.addNewMainGoal(null)
            }, 10000)
            
        }
        else {
            return
        }
        
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.mainGoalText !== ''){
            this.props.addNewMainGoal(this.props.mappedTodoState.mainGoalText);
        }
        else {
            return
        }
    }

    onChange = (e) => {        
        this.props.addNewMainGoalRequest(e.target.value);
    }

    render() { 
        this.deleteMainGoal()
        const {mainGoal, mainGoalText} = this.props.mappedTodoState;
        const style = {background: 'transparent', 
                        border: 'none',
                        boxShadow: 'none',
                        borderBottom: '2px solid #fff',
                        height: '30px',
                        borderRadius: 0,
                        fontSize: '22px',
                        color: '#fff'};

        if (mainGoal === null) return (
            <div className="row justify-content-center mt-5">
                <span className="h2 text-center col-12">What is your main focus for today?</span>
                <div className='col-lg-5 col-md-7 col-sm-9 col-10'>
                    <form onSubmit={this.onSubmit}>
                        <Input 
                            style={style}
                            value={mainGoalText}
                            onChange={this.onChange} 
                            name="title"/>
                    </form>
                </div>
            </div>
        );
        return ( 
           <div className="row justify-content-center mt-5">
               <span className="h4 text-center col-12">Today</span>
               <span className="h1 text-center col-12">{mainGoal}</span>
           </div>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainGoal);
