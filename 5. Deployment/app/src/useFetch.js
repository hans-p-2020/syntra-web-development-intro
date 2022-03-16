import { useEffect, useReducer } from 'react';

const initialState = {
	data: "",
	loading: false,
	error: null
}

function reducer(state, action) {
	switch (action.type) {
	  case 'updateResponse':
		return { ...state, ...action.payload };
	  default:
		throw new Error();
	}
  }

export const useFetch = ( url ) => {
    // 1. http request to lorum picsum
    // 2. useReducer gebruiken om loading, data en error states bij te houden
    // 3. caching mechanisme implementeren
    // 4. displayen van images in app.js
	
	const [state, dispatch] = useReducer(reducer, initialState);

	const set = (value) => {
		dispatch( {
			type: "updateResponse",
			payload: value
		} );
	}

	useEffect(() => {
		if(!url) return;
		set({ loading: true });
		fetch( url )
			.then( response => {
				set({ data: response.url, error: null })
			})
			.catch( err => {
				set({ data: "", error: err });
			})
			.finally( () => {
				set({ loading: false });
			});
	}, [url])

	return state;

}