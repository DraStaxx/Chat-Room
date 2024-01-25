function solve() {
	const messagesList = document.getElementById("chat_messages");
	const messageInput = document.getElementById("chat_input");
	const sendButton = document.getElementById("send");

	sendButton.addEventListener("click",() => {
		const message = messageInput.value.trim();
		if (message !== "") {
			const div = document.createElement("div");
			// div.classList.add('message');
			// div.classList.add('my-message');
			div.className= 'message my-message';
			div.innerText = message;
			messagesList.appendChild(div);
		}

		messageInput.value = "";
	});
}
