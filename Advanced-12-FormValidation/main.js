"use strict";

// check all forms in index
console.log(document.forms);

// Validating
class formValidation {
    __error = false;

    constructor(formElem , autoFocusElem){
        this.__formElem = formElem;
        this.focusHandler();
        this.submitHandler();
        this.resetHandler();
        // autoFocusElem.focus();
        // this.setFocus(formElem.elements);
    }

    submitHandler(){
        this.__formElem.onsubmit = event => {
            event.preventDefault();
            if(this.__formElem.elements.family.value.length !== 0 , this.__formElem.elements.email.value.length !== 0){
                if(this.__error == false){
                    this.__formElem.submit();
                }
            }
        };
    }

    resetHandler(){
        this.__formElem.onreset = event => {
            let errors = document.querySelectorAll(".error");
            for(let e of errors){
                e.classList.remove("error");
            }
        }
    }

    notEmpty(elem){
        let span = elem.nextElementSibling;
        if(elem.value.length === 0){
            span.textContent = " input is Empty ! please enter your first and last name ";
            span.classList.add("error");
            console.log(span.style.display);
            this.__error = true;
        }else{
            span.textContent = "";
            span.classList.remove("error");
            console.log(span.style.display);
            this.__error = false;
        }
    }

    emailVerify(elem){
        if(elem.value.length === 0){
            return;
        }

        let span = elem.nextElementSibling;
        if(elem.value.search("@gmail.com" , "@yahoo.com") == -1){
            span.textContent = "your Email is Wrong. Enter Your Emal Correctly";
            span.classList.add("error");
            this.__error = true;
        }else{
            span.textContent = "";
            span.classList.remove("error");
            this.__error = false;
        }
    }

    focusHandler(){ 
        this.__formElem.addEventListener("focusin" , event => {
            if(event.target.tagName == "BUTTON"){
                return;
            }
            console.log("focus in :")
            console.log(event.target);
        });
        this.__formElem.addEventListener("focusout" , event => {
            if(event.target.tagName == "BUTTON"){
                return;
            }

            console.log("focus out :")
            console.log(event.target);
            if(event.target.dataset.empty){
                this[event.target.dataset.empty](event.target);
            }
            if(event.target.dataset.validation){
                this[event.target.dataset.validation](event.target);
            }
        });
    }

    // setFocus(elems){
    //     for(let e of elems){
    //         e.onfocus = event => {
    //             console.log("onFocus :");
    //             console.log(event.target);
    //         }
    //         e.onblur = event => {
    //             console.log("onBlur : ");
    //             console.log(event.target);;
    //         }
    //     }
    // }
}
new formValidation(document.forms.firstForm , document.firstForm.family);