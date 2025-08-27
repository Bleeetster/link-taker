export async function takeCurrentURL() {
	const tab = await chrome.tabs.query({ active: true });
	fetch('http://localhost:5439/save-url', {
		method: 'POST',
		headers: {
			'Content-type':	'application/json'
		},
		bodyUsed: true,
		body: JSON.stringify({ url: tab[0].url })
	})
		.then( (res) => console.log('url saved',res))
		.catch( (err) => {
			alert(err);
			console.error(err);
		})
}
