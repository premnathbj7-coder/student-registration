const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

```
event.preventDefault();

const mobile = document.getElementById("mobile").value;
const pincode = document.getElementById("pincode").value;

// Validate mobile number
if (!/^[6-9]\d{9}$/.test(mobile)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid 10-digit mobile number.";
    return;
}

// Validate PIN code
if (!/^\d{6}$/.test(pincode)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid 6-digit PIN code.";
    return;
}

message.style.color = "green";
message.textContent = "✓ Student registration successful!";

form.reset();
```

});
