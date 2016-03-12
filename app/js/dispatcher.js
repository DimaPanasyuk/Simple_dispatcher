let App  = {

  dispatcher: (() => {

		let actions = {},
				listen,
				emit,
				remove;

		listen = (action, callback) => {

			if (!(action in actions)) {
				
				actions[action] = callback;
		};

		emit = (action) => {

			if (action in actions) {

				actions[action]();
			}
		};

		remove = (action) => {

			if (action in actions) {

				delete actions[action];
			}
		};

		return {

			pub: emit,
			sub: listen,
			unsub: remove
		}

	})()
};

export default App.dispatcher;









