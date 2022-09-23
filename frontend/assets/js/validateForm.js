export default function ValidateForm(){
    this.form = document.getElementById("form-register");

    this.init = function() {
        this.event();
    };

    this.event = function() {
        this.form.addEventListener("submit", e => {
            this.preventDefault(e)
        })
    }

    this.preventDefault = function(e) {
        e.preventDefault();

        const isValid = this.checkInputValue();
        const isPasswordEqual = this.isPasswordEqual();

        if(isValid && isPasswordEqual) this.form.submit();
    };

    this.checkInputValue = function() {
        let valid = true;

        this.cleaned();

        for(let input of this.form.getElementsByTagName("input")) {
            let label = input.previousElementSibling.innerHTML;

            if(!input.value){
                this.makeErro(input, `Campo ${label} vazio!`);
                
                valid = false;
            }

            console.log(input.type);

            switch(input.type){
                case "text":
                    if(!this.validText(input, label, 2)) valid = false;
                break;
            }
        }
        return valid;
    };

    this.validText = function(input, label) {
        const value = input.value;
        let valid = true;

        if(value.length < 2) {
            this.makeErro(input, `Campo ${label} precisa ter mais que 2 caractere`);
            valid = false
        } else if(value.length > 20) {
            this.makeErro(input, `Campo ${label} precisa ter menos que 20 caractere`);
            valid = false;
        }
        
        if(value.match(/[0-9]+/g)) {
            this.makeErro(input, `${label} Precisa conter apenas letras`)
            valid = false;
        }

        return valid;
    };

    this.isPasswordEqual = function(){
        let valid = true;

        const pass = this.form.getElementsByTagName("input")[2];
        const rePass = this.form.getElementsByTagName("input")[3];

        if(pass.value != rePass.value) {
            this.makeErro(rePass, `Valor diferente`);
            valid = false;
        }

        if(pass.value.length < 9) {
            valid = false;
            this.makeErro(pass, `Campo senha precisa ter mais que 9 caractere`);
        } else if(pass.value.length > 20) {
            valid = false;
            this.makeErro(pass, `Campo Senha precisa ter menos que 20 caractere`);
        }

        return valid;
    };

    this.cleaned = function() {
        for(let erroMsg of this.form.querySelectorAll(".msg-erro")) {
            erroMsg.remove();
        }
    };

    this.makeErro = function(input, msg) {
        const formated = `<div class="msg-erro">
            <ul>
                <li>${msg}</li>
            </ul>
        </div>`

        input.insertAdjacentHTML('afterend', formated);
    };
}