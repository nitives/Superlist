function openModal() {
    document.getElementById('modal').classList.remove('hidden');
    console.log('Open Popup');
  }
  
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    console.log('Closed Popup');
  }
  
  // Event listener for the clickable box to open the modal
  document.getElementById('clickable-box').addEventListener('click', function(event){
    event.preventDefault();
    openModal();
  });

  document.getElementById('ModalClose').addEventListener('click', function(event){
    event.preventDefault();
    closeModal();
  });