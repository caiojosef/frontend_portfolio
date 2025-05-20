const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabClicked(tab);

        // Salva o ID da aba clicada no localStorage
        const contentId = tab.getAttribute('content-id');
        localStorage.setItem('activeTab', contentId);
    });
});

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    content.classList.add('show');
};

// Recupera o valor salvo no localStorage
const savedTabId = localStorage.getItem('activeTab');

// Se existir, ativa essa aba
if (savedTabId) {
    const savedTab = document.querySelector(`.tab-btn[content-id="${savedTabId}"]`);
    if (savedTab) tabClicked(savedTab);
} else {
    // Se não houver nada salvo, ativa a aba padrão (Home)
    const currentActiveTab = document.querySelector('.tab-btn.active');
    tabClicked(currentActiveTab);
}


class Calculadora {
    constructor() {
        this.num1 = document.getElementById('num1');
        this.num2 = document.getElementById('num2');
        this.selOperacao = document.getElementById('selOperacao')
        this.res = document.getElementById('resCalculo');
    }



    verificarCampos() {
        if (!this.num1.value || !this.num2.value) {
            return true;
        } else {
            return false;
        }
    }

    calcular = () => {

        if (this.verificarCampos() == true) {
            alert('Digite nos campos acima para continuar')
        } else {
            let n1 = Number(this.num1.value)
            let n2 = Number(this.num2.value)

            if (this.selOperacao.value == 'somar') {
                this.res.innerHTML = `<br>A Soma de ${n1} + ${n2} = <strong>${n1 + n2}</strong>`
            } else if (this.selOperacao.value == 'subtrair') {
                this.res.innerHTML = `<br>A Subtração de ${n1} - ${n2} = <strong>${n1 - n2}</strong>`
            } else if (this.selOperacao.value == 'multiplicar') {
                this.res.innerHTML = `<br>A Multiplicação de ${n1} * ${n2} = <strong>${n1 * n2}</strong>`
            } else if (this.selOperacao.value == 'dividir') {
                if (n2 == 0) {
                    this.res.innerHTML = 'Não pode ser divisivel por 0'
                } else {
                    this.res.innerHTML = `<br>A Divisão de ${n1} / ${n2} = <strong>${n1 / n2}</strong>`
                }
            }
        }
        this.num1.value = ''
        this.num2.value = ''
        this.num1.focus();
    }

}
const calc = new Calculadora();
document.querySelector('.btn-somar').addEventListener('click', () => {
    calc.calcular();
});

calc.num2.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calc.calcular();
});



//EXERCÍCIO DE CALCULAR
/*
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let selOperacao = document.getElementById('selOperacao')
let res = document.getElementById('resCalculo');

function verificarCampos() {
    if (!num1.value || !num2.value) {
        return true;
    } else {
        return false;
    }
}

num2.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcular();
  });

const calcular = () => {
    
    if (verificarCampos() == true) {
        alert('Digite nos campos acima para continuar')
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)

        if (selOperacao.value == 'somar') {
            res.innerHTML = `<br>A Soma de ${n1} + ${n2} = <strong>${n1 + n2}</strong>`
        } else if (selOperacao.value == 'subtrair') {
            res.innerHTML = `<br>A Subtração de ${n1} - ${n2} = <strong>${n1 - n2}</strong>`
        } else if (selOperacao.value == 'multiplicar') {
            res.innerHTML = `<br>A Multiplicação de ${n1} * ${n2} = <strong>${n1 * n2}</strong>`
        } else if (selOperacao.value == 'dividir') {
            if (n2 == 0){
                res.innerHTML = 'Não pode ser divisivel por 0'
            }else {
                res.innerHTML = `<br>A Divisão de ${n1} / ${n2} = <strong>${n1 / n2}</strong>`
            }
        }
    }
    num1.value = ''
    num2.value = ''
    num1.focus();
}*/


