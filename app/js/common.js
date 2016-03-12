let App  = {

  dispatcher: (() => {

		let actions = {},
				listen,
				emit,
				remove;

		listen = (action, callback) => {

			if (action in actions) {

				console.log(`Controller: Action already exists`);
			} else {

				actions[action] = callback;
			}

		};

		emit = (action) => {

			if (action in actions) {

				actions[action]();
			} else {

				console.log('Controller: There is no such action!');
			}
		};

		remove = (action) => {

			if (action in actions) {

				delete actions[action];
			} else {

				console.log('Controller: No such action to delete!');
			}
		};

		return {

			pub: emit,
			sub: listen,
			unsub: remove
		}

	})()
},	
		dispatcher = App.dispatcher;

//Usage example

//Subscribing custom function on 
//custom user event 'user-click'
dispatcher.sub('user-click', () => {

	console.log('User clicked on button!');
});


window.addEventListener('click', () => {

	//'Publishing' custom user event
	dispatcher.pub('user-click');
});










