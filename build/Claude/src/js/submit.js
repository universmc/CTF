document.getElementById('submit2').addEventListener('click', async () => {
  const prompt2 = document.getElementById('prompt2').value;
  const message = await window.electronAPI.generateChatCompletion(prompt2);
  document.getElementById('output').innerText = message;
});