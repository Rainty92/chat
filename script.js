
document.querySelector('.createNewUserName').onclick = createNewUser;

let chatUser = document.querySelector('.chatUser');
let inputNewUserName = document.querySelector('.inputNewUserName');

document.body.onkeydown = function(e) {
			if(e.keyCode === 13) {
				createNewUser();
				sendMessage ();
		}
}
function createNewUser () {
	if(inputNewUserName.value !== '') {
		let newUserName = document.createElement('span');
		newUserName.innerHTML = inputNewUserName.value;
		newUserName.classList.add('newUserName');
		chatUser.appendChild(newUserName);
		inputNewUserName.value = '';
		document.querySelector('.modalWrapper').classList.add('hide');
	}
}


document.querySelector('.send').onclick = sendMessage;

function sendMessage () {
		let messageText = document.querySelector('.messageText');

	if(messageText.value !== '') {
			let newMessageWrapper = document.createElement('li');
			newMessageWrapper.classList.add('newMessageWrapper');

			let dataMessage = document.createElement('span');
			dataMessage.classList.add('dataMessage');
			let Data = new Date();
				Hour = Data.getHours();
				Minutes = Data.getMinutes()<10?'0'+Data.getMinutes(): Data.getMinutes();
				Seconds = Data.getSeconds()<10?'0'+Data.getSeconds(): Data.getSeconds();

			dataMessage.innerHTML = (Hour + ":" + Minutes + ":" + Seconds);

			let message = document.createElement('span');
			message.classList.add('message');
			message.innerHTML = messageText.value;

			newMessageWrapper.appendChild(dataMessage);
			newMessageWrapper.appendChild(message);

			document.querySelector('.chat').appendChild(newMessageWrapper);
			messageText.value = '';
	}
}


