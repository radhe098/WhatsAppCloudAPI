const chat = document.getElementsByClassName('chats')[0]; 
const btn = document.getElementsByClassName('btn')[0];
var userInputDiv = document.querySelector(".user-input");

btn.addEventListener('click', async () => {
    
    var inputElement = userInputDiv.querySelector("input[type='text']").value;
    if (inputElement == ""){
        alert("please enter something in chat");
    }else{

    const newDiv = document.createElement('div');
    newDiv.className = "msg"; 
    newDiv.textContent = inputElement;
    chat.appendChild(newDiv);  
    try {
        const response = await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inputElement })
        });

        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.error('Failed to send message');
        }
    } catch (err) {
        console.error('Error:', err);
    }
    userInputDiv.querySelector("input[type='text']").value = "";
}
});
