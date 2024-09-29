$(document).ready(function(){
    // Toggle show/hide password functionality with icons
    $(".toggle-password").on("click", function() {
        let input = $(this).siblings("input");
        let icon = $(this).find("i");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
            icon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            input.attr("type", "password");
            icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });

    // Form submission validation
    $("#getStartedForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        let name = $("#name").val();
        let email = $("#email").val();
        let country = $("#country").val();
        let countryCode = $("#countryCode").val();
        let phone = $("#phone").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        // Validation
        if (name !== "" && email !== "" && country !== "" && countryCode !== "" && phone !== "" && password !== "" && confirmPassword !== "") {
            if (password === confirmPassword) {
                $("#formMessage").text("Form submitted successfully!");
            } else {
                $("#formMessage").text("Passwords do not match.");
            }
        } else {
            $("#formMessage").text("Please fill in all fields.");
        }
    });
});