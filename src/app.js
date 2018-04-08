import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './components/Gender';
import Age from './components/Age';
import Relationship from './components/Relationship';
import {updateGradient} from './style/background';
import Budget from './components/Budget';
import Result from './components/Result';
import ebay from 'ebay-api';
import request from 'request';


export default class App extends React.Component{
	componentWillMount(){
		this.setState({
			gender: "",
			renderGender: true,
			age: "",
			renderAge: false,
			rel: "",
			renderRel:false,
            budget:"",
            renderBudget:false,
			result:"",
			renderResult:false
		})
	};

	onGenderClick = (gender) => {
		event.preventDefault();
		this.setState(
			{
				gender: gender,
				renderGender:false,
				renderAge: true
			}
		)
	};



	onAgeClick = (age) => {
		event.preventDefault();
		this.setState(
			{
				age: age,
				renderAge:false,
				renderRel: true
			}
		)
	};



	onRelClick = (rel) => {
		event.preventDefault();

		this.setState(
			{
				rel: rel,
				renderRel:false,
                renderBudget:true
			}
		);
	};

    onBudgetClick = (budget) => {
        event.preventDefault();
        this.setState(
            {
                budget: budget,
                renderBudget:false,
				renderResult:true
            }
        )
    };



	// startRequest=(budget)=>{
	// 	event.preventDefault();
	// 	this.setState(
	// 		{
	// 			budget:budget,
	// 			renderResult:true
	// 		}
    //
	// 	);
    //
    //
    //
	// };
	startRequest(budget){
		console.log(budget);
		console.log(this.state.rel);
	}





	render(){

		setInterval(updateGradient,10);

		return(
			<div>
				{ this.state.renderGender ?
					<Gender
					onClick={this.onGenderClick}
					/>
					: null
				}


				{ this.state.renderAge ?
					<Age
						onClick={this.onAgeClick}
					/>
					: null
				}

				{ this.state.renderRel ?
					<Relationship
						gender={this.state.gender}
						age={this.state.age}
						onClick={this.onRelClick}
					/>
					: null
				}

                { this.state.renderBudget ?
                    <Budget
						budget={this.state.budget}
                        onClick={this.onBudgetClick}
                    />
                    : null
                }

                {this.state.renderResult ?

					<Result
                        budget={this.state.budget}
                        relationship = {this.state.rel}
					/>
                    : null

                }
        	</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));