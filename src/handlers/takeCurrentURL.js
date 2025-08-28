const URL = 'http://localhost';
const port = 5439;

export async function saveURL(url, sendResponse) {
	fetch(`${URL}:${port}/save-url`, {
		method: 'POST',
		headers: {
			'Content-type':	'application/json'
		},
		bodyUsed: true,
		body: JSON.stringify({ url: url })
	})
		.then( (res) => {
			console.log('url saved',res);
			sendResponse({ success: 'url saved' });
		})
		.catch( (err) => {
			sendResponse({ error: err.message });
			console.error(err);
		})
}
