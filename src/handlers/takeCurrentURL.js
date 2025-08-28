const URL = 'http://localhost';
const port = 5439;

export async function saveURL(sendResponse) {
	const tab = await chrome.tabs.query({ active: true });
	console.log(tab[0].url);
	const response = fetch(`${URL}:${port}/save-url`, {
		method: 'POST',
		headers: {
			'Content-type':	'application/json',
			'Connection': 'close'
		},
		bodyUsed: true,
		body: JSON.stringify({ url: tab[0].url })
	})
		.then( (res) => {
			console.log('url saved');
			sendResponse({ success: 'url saved' });
		})
		.catch( (err) => {
			console.error(err);
			sendResponse({ error: err.message });
		})
	console.log(response)
}
