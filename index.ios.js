import React, { Component } from 'react';
import { AppRegistry, View, Button, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';


class MainScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};

	constructor(props) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(0),
		};
		
	}

	componentDidMount() {
		this.state.bounceValue.setValue(1.5);
		Animated.spring(
			this.state.bounceValue,
			{
				toValue: 0.8,
				friction: 1
			}
		).start(
			result =>{
				console.log("done!", result.finished);
			}
		);
	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={{flex: 1}}>
				<Button
					title="Go to Jane's profile"
					onPress={
						() => navigate('Profile', { name: "Jane" })
					}
				/>
				<Animated.Image
					source={{uri: 'https://i.imgur.com/XMKOH81.jpg'}}
					style={{
						flex: 1,
						transform: [
							{scale: this.state.bounceValue},
						]
					}}
				/>
			</View>
		);
	}
}
class ProfileScreen extends Component {
	static navigationOptions = {
		title: 'Fuck you',
	};
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'powderblue'}} />
				<View style={{flex: 2, backgroundColor: 'skyblue'}} />
				<View style={{flex: 3, backgroundColor: 'steelblue'}} />
				
			</View>
		)
	}
}
const App = StackNavigator({
	Main: {screen: MainScreen},
	Profile: {screen: ProfileScreen},
});
AppRegistry.registerComponent('AwesomeProject', () => App);