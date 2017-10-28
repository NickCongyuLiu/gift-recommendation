import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './components/Gender';
import Age from './components/Age';
import Relationship from './components/Relationship';
import {updateGradient} from './style/background'

export default class App extends React.Component{
	componentWillMount(){
		this.setState({
			gender: "",
			renderGender: true,
			age: "",
			renderAge: false,
			rel: "",
			renderRel:false
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
				relationship: rel,
				renderRel:false,
			}
		)
	};



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
						onClick={this.onRelClick}
					/>
					: null
				}

				{ !this.state.renderGender && !this.state.renderRel && !this.state.renderAge ?
					<h1> my {this.state.relationship} is a {this.state.age} {this.state.gender}</h1>
					: null
				}
        	</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));