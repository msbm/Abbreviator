// {state, abbreviation}
var states = [
	{s: 'Illinois', a: 'IL'},
	{s: 'Montana', a: 'MT'},
	{s: 'New Mexico', a: 'NM'},
	{s: 'Oklahoma', a: 'OK'},
	{s: 'Texas', a: 'TX'}
];

function stateToAbbr(s) {
	for (var i = 0; i < states.length; i++) {
        state = states[i];
		if(s.toLowerCase() == state.s.toLowerCase()) {
			return state.a;
		}
	}
	return s;
}