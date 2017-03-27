import React, { Component, PropTypes } from 'react';
import { AppRegistry, NavigatorIOS, View, TouchableHighlight, Text } from 'react-native';


class MyScene extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		navigator: PropTypes.object.isRequired,
	};
	static nextIndex = 0;
	static previousTime = 0;
	constructor(props, context) {
		super(props, context);
		this._onForward = this._onForward.bind(this);
	}


	_onForward() {
		this.props.navigator.push({
			component: MyScene,
			title: 'Scene ' + ++MyScene.nextIndex ,
			passProps: { title: 'bar' },
			barTintColor: '#996699',
			leftButtonTitle: '< Back',
			onLeftButtonPress: (e) => {
				const currentTime = Date.now();
				if (currentTime - MyScene.previousTime > 1000) {
					MyScene.previousTime = currentTime;
					this.props.navigator.pop();
					--MyScene.nextIndex;
				}
				
			}
		})
	}

	

	render() {
		return (
			<View style={{marginTop:100}}>
				<Text>Current Scene: { this.props.title }</Text>
				<TouchableHighlight onPress={this._onForward}>
					<Text>Tap me to load the next scene</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const App = () => <NavigatorIOS 
										initialRoute={{
											component: MyScene,
											title: 'My Initial Scene',
											passProps: { title: 'foo' },
										}}
										style={{flex:1}}
										barTintColor='#ffffcc'
									/>
AppRegistry.registerComponent('AwesomeProject', () => App);