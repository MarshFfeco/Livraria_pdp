import ValidateForm from "./ValidateForms"

export default class ValidateFormLogin extends ValidateForm {
    constructor(formulario){
        super(formulario);
        this.form = formulario;
    };
}