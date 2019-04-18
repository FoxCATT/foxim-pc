const {remote} = require('electron');
const ipc = require('electron').ipcRenderer;
let current_conversation_id = "";
let current_message_id = 0;

function conversation_click(col) {
    current_conversation_id = col.getAttribute('id');
    document.getElementById('chat-header').innerHTML = "<h3>" + col.getElementsByTagName('h5')[0].innerText + "</h3>";
    ipc.send('conversation-get', current_conversation_id, current_message_id);
}

//header
document.getElementById('logo').addEventListener('click', () => {

});
document.getElementById('search_bt').addEventListener('click', () => {

});
//info select
document.getElementById('con_bt').addEventListener('click', () => {

});
document.getElementById('users_bt').addEventListener('click', () => {

});
document.getElementById('other_bt').addEventListener('click', () => {

});
//menu button
document.getElementById('set_bt').addEventListener('click', () => {

});
document.getElementById('min_bt').addEventListener('click', () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
});
document.getElementById('max_bt').addEventListener('click', () => {
    let currentWindow = remote.BrowserWindow.getFocusedWindow();
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
});
document.getElementById('close_bt').addEventListener('click', () => {
    window.close();
});
//tools button
document.getElementById('font_bt').addEventListener('click', () => {

});
document.getElementById('emoji_bt').addEventListener('click', () => {

});
document.getElementById('voice_bt').addEventListener('click', () => {

});
document.getElementById('file_bt').addEventListener('click', () => {

});
document.getElementById('picture_bt').addEventListener('click', () => {

});
document.getElementById('message_bt').addEventListener('click', () => {

});
//send button
document.getElementById('talk_bt').addEventListener('click', () => {

});


ipc.send('conversation-list');
ipc.on('conversation-list-replay', (event, liItems) => {
    let conversation = document.getElementById("conversation");
    conversation.innerHTML = "";
    liItems.forEach(function (e) {
        conversation.appendChild(e)
    });
    conversation.childNodes[0].click();
});
ipc.on('conversation-get-replay', (event, messages) => {
    let chat = document.getElementById("conversation");
    chat.innerHTML = "";
    messages.forEach(function (e) {
        chat.appendChild(e)
    });
});




