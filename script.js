//to add the new question from user into the div 
function Add(){

    const x = document.getElementById('input-question').value

    const parent = document.getElementById('new-question')
    parent.classList.add('faq')

    h3 = document.createElement('h3')
    h3.textContent = x
    h3.classList.add('faq-title')
    parent.appendChild(h3)

    const button = document.createElement('button')
    button.classList.add('faq-toggle')

    const i1 = document.createElement('i');
    i1.classList.add('fas', 'fa-chevron-down');
    button.appendChild(i1);

  
    const i2 = document.createElement('i');
    i2.classList.add('fas', 'fa-times');
    button.appendChild(i2);

    parent.appendChild(button);
   
}

//to submit the answer of question
function AddAnswer() {
    const x = document.getElementById('input-answer').value;

    const parent = document.getElementById('new-question');
    const p = document.createElement('p');
    p.textContent = x; 
    p.classList.add('faq-text');
    parent.appendChild(p);
}


//to make the dropdown icon functional
const faqtoggle = document.querySelectorAll('.faq-toggle');

faqtoggle.forEach(faqtoggle => {
    let clickCount = 0;   //to delete the div after viewing the answer

    faqtoggle.addEventListener('click', () => {
        faqtoggle.parentNode.classList.toggle('active');
        clickCount++;
        if (clickCount === 2) {
            const parent = faqtoggle.parentNode;
            parent.parentNode.removeChild(parent);
        }
    });
});







