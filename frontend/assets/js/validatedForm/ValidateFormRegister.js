import ValidateForm from "./ValidateForms"

export default class ValidateFormRegister extends ValidateForm {
    constructor(formulario){
        super(formulario);
        this.form = formulario;

        const validateFormRegister = new ValidateForm(this.form);
        validateFormRegister;
    };

    preventDefault(e) {
        e.preventDefault();

        const isValid = this.checkInputValue();
        const isPassword = this.isPassword();

        if(isValid && isPassword) this.form.submit();
    };

    isPassword() {
        let valid = true;

        const pass = this.form.getElementsByTagName("input")[2];
        const rePass = this.form.getElementsByTagName("input")[3];

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

        if(pass.value != rePass.value) {
            this.makeErro(rePass, `Valor diferente`);
            valid = false;
        }

        if(valid) {
             this.changeInputColor(rePass, "var(--main-color)"); 
        }

        return valid;
    };
}