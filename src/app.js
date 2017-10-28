import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './components/Gender';
import Age from './components/Age';
import Relationship from './components/Relationship';

export default class App extends React.Component{
	componentWillMount(){
		this.setState({
			gender: "",
			renderGender: true,
			age: "",
			renderAge: false,
			rel: "",
			renderRel:false,
			input:""
		})
	};

	onGenderChange = (event) => {
		this.setState(
			{
				input:event.target.value
			}
		)
	};

	onGenderSubmit = (event) => {
		event.preventDefault();
		this.setState((prevState)=>(
			{
				gender: prevState.input,
				renderGender:false,
				renderAge: true
			}
			)
		)
	};

	onAgeChange = (event) => {
		this.setState(
			{
				input:event.target.value
			}
		)
	};

	onAgeSubmit = (event) => {
		event.preventDefault();
		this.setState((prevState)=>(
			{
				age: prevState.input,
				renderAge:false,
				renderRel: true
			}
			)
		)
	};

	onRelChange = (event) => {
		this.setState(
			{
				input:event.target.value
			}
		)
	};

	onRelSubmit = (event) => {
		event.preventDefault();
		this.setState((prevState)=>(
			{
				relationship: prevState.input,
				renderRel:false,
			}
			)
		)
	};





	render(){
		return(
			<div>
				{ this.state.renderGender ?
					<Gender
					onChange={this.onGenderChange}
					onSubmit={this.onGenderSubmit}
					/>
					: null
				}


				{ this.state.renderAge ?
					<Age
						onChange={this.onAgeChange}
						onSubmit={this.onAgeSubmit}
					/>
					: null
				}

				{ this.state.renderRel ?
					<Relationship
						onChange={this.onRelChange}
						onSubmit={this.onRelSubmit}
					/>
					: null
				}
				{ !this.state.renderGender && !this.state.renderRel && !this.state.renderAge ?
					<h1> my {this.state.relationship} is a {this.state.age} year-old {this.state.gender}</h1>
					: null
				}
        	</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));