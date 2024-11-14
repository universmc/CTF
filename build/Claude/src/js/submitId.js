document.getElementById('submitId').addEventListener('click', async () => {
  const promptId = document.getElementById('promptId').value;
  const message = await window.electronAPI.generateChatCompletion(promptId);
  document.getElementById('output').innerText = message;
});