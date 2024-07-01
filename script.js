const form = document.getElementById("get-email-form");
const emailAddress = document.getElementById("email-address");
const subscribeButton = document.getElementById("subscribe-btn");

subscribeButton.addEventListener("click", (e) => {
    e.preventDefault();
    const emailAddressValue = emailAddress.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailAddressValue)) {
        sucessPage(emailAddressValue);
    } else {
        const form = document.getElementById("get-email-form");
        form.classList.add("error");

        emailAddress.addEventListener("focus", () => {
            form.classList.remove("error");
        });
    }
});

function sucessPage(email){
    const signUpContainer = document.querySelector(".sign-up__inner-container");
    const signUpContainerContent = `
    
            <div class="sign-up__sucess">
                <div class="sucess-image">
                    <img src="icon-list.svg" alt="Sucess icon">
                </div>
                <div class="sucess-typography-part">
                    <div class="sucess-typography-inner-part">
                        <h1>Thanks for subscribing!</h1>
                        <p>
                            A confirm emal has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.
                        </p>
                    </div>
                    <button id="sucess-btn">Dismiss message</button>
                </div>
            </div> 
    
    `

    signUpContainer.innerHTML = signUpContainerContent;
}