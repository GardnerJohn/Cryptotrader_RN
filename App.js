import React from 'react';
import Main from './components/MainComponent';
import { CONTENT, State } from './state/state';

export default function App() {
	return (
		<State.Provider value={CONTENT}>
			<Main />
		</State.Provider>
	);
}
