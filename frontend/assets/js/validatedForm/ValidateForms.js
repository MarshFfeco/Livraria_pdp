export default class ValidateForms {

    constructor(formulario){
        this.form = formulario;
    };

    event() {
        this.form.addEventListener("submit", e => {
            this.preventDefault(e)
        })
    }

    preventDefault(e) {
        e.preventDefault();

        const isValid = this.checkInputValue();
        const isPassword = this.isPassword();

        if(isValid && isPassword) this.form.submit();
    };

    checkInputValue() {
        let valid = true;

        this.cleaned();

        for(let input of this.form.getElementsByTagName("input")) {

            if(input.type == "hidden" || input.name == "_csrf") continue;

            let label = input.previousElementSibling.innerHTML;

            switch(input.type) {
                case "text":
                    if(!this.validText(input, label)) valid = false;
                break;
                case "email":
                    if(!this.validEmail(input, label)) valid = false;
                break;
            }
        }
        return valid;
    };

    validText(input, label) {
        const value = input.value;
        let valid = true;

        if(value.length < 3) {
            this.makeErro(input, `Campo ${label} precisa ter mais que 3 caractere`);
            valid = false
        } else if(value.length > 50) {
            this.makeErro(input, `Campo ${label} precisa ter menos que 20 caractere`);
            valid = false;
        }
        
        if(value.match(/[0-9]+/g)) {
            this.makeErro(input, `${label} Precisa conter apenas letras`)
            valid = false;
        }

        if(valid) this.changeInputColor(input, "var(--main-color)");

        return valid;
    };

    validEmail(input, label) {
        const value = input.value;
        let valid = true;
        const rfc_2822 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

        if(!value.match(rfc_2822)) {
            this.makeErro(input, `${label} Precisa conter email@email.com`);
            valid = false;
        }

        if(valid) this.changeInputColor(input, "var(--main-color)");

        return valid;
    };

    isPassword() {
        let valid = true;

        const pass = this.form.getElementsByTagName("input")[2];

        if(pass.value.length < 9) {
            valid = false;
            this.makeErro(pass, `Campo senha precisa ter mais que 9 caractere`);
        } else if(pass.value.length > 20) {
            valid = false;
            this.makeErro(pass, `Campo Senha precisa ter menos que 20 caractere`);
        }

        if(valid) {
            this.changeInputColor(pass, "var(--main-color)");
       }

        return valid;
    };

    cleaned() {
        for(let erroMsg of this.form.querySelectorAll(".msg-erro")) {
            erroMsg.remove();
        }
    };

    makeErro(input, msg) {
        const formated = `<div class="msg-erro">
            <ul>
                <li>${msg}</li>
            </ul>
        </div>`

        input.insertAdjacentHTML('afterend', formated);

        this.changeInputColor(input, "var(--erro-color)")       
    };

    changeInputColor(input, color) {
        input.style.border = `2px solid ${color}`; 
    };
}