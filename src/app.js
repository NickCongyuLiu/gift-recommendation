import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './components/Gender';
import Age from './components/Age';
import Relationship from './components/Relationship';
import {updateGradient} from './style/background';
import amazon from 'amazon-product-api';

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
				rel: rel,
				renderRel:false,
			},
			()=>{
				this.startRequest();
			}
		);
	};

	startRequest(){
		var client = amazon.createClient({
			awsID: "351892172173",
			awsSecret: "Wa1X2E33bWbXRWIEHcv7f8o4uOp41AjC9A2v62wu"
		});

		client.itemLookup({
			idType: 'UPC',
			itemId: '884392579524'
		}).then(function(results) {
			console.log(JSON.stringify(results));
		}).catch(function(err) {
			console.log(err);
		});

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
						gender={this.state.gender}
						age={this.state.age}
						onClick={this.onRelClick}
					/>
					: null
				}

        	</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'));