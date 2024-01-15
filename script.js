// Função para atualizar o estilo do #subject com base nos valores dos campos de entrada

document.querySelectorAll('.style-input').forEach(function(input) {
  input.addEventListener('input', updateSubject);
});


function updateSubject(){
  var subject = document.getElementById('subject');
  
  subject.style.width = document.getElementById('width').value + 'px';
  subject.style.height = document.getElementById('height').value + 'px';
  subject.style.borderWidth = document.getElementById('border-width').value + 'px';
  subject.style.borderStyle = document.getElementById('border-style').value;
  subject.style.borderColor = document.getElementById('border-color').value;
  subject.style.borderRadius = document.getElementById('border-radius').value + 'px';
  subject.style.color = document.getElementById('color').value;
  subject.style.backgroundColor = document.getElementById('background-color').value;
  subject.style.opacity = document.getElementById('opacity').value + '%';
  subject.style.boxShadow = `${document.getElementById('horizontal-effect').value}px ${document.getElementById('vertical-offset').value}px ${document.getElementById('blur-radius').value}px ${document.getElementById('spread-radius').value}px ${document.getElementById('shadow-color').value}`;
}

// Funcão para adicionar a propriedade tabindex para todos inputs
document.addEventListener('DOMContentLoaded', adicionarTabindex);
function adicionarTabindex(){
  var inputs = document.querySelectorAll('.style-input');
  var tabindex = 1;

  inputs.forEach(function(input) {
      input.setAttribute('tabindex', tabindex);
      tabindex++;
  });
}
