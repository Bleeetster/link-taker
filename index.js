
const buttonURL = document.getElementById('buttonURL');

document.addEventListener('DOMContentLoaded', async () => {
	buttonURL.addEventListener('click', async () => {
		const message = await chrome.runtime.sendMessage({
			action: "SaveUrl"
		});
		alert(message.error)
	});
})
