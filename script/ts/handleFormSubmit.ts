
class HandleFormSubmit {
    handleSubmit: any;
    constructor(private form: HTMLFormElement) {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleLoginForm(){
        // Implement login logic here
        // Example: document.querySelector('#login-form').reset();
        // Example: document.querySelector('#register-form').reset();
        // Example: document.querySelector('#reset-password-form').reset();
        // Example: document.querySelector('#forgot-password-form').reset();
        // Example: document.querySelector('#change-password-form').reset();
    }
    
    handleRegisterForm(){
        // Implement Register logic here        
    }

    handleResetForm(){
        // Implement Reset Password logic here
    }

    handleForgotPasswordForm(){
        // Implement Forgot Password logic here
    }
}