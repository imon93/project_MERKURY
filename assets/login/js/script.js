$(document).ready(function() {
    // Handle login form submission
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        let username = $('#username').val().trim();
        let password = $('#password').val().trim();
        let isValid = true;

        // Clear previous error messages
        $('.error-message').hide();

        // Validate username
        if (username === "") {
            $('#username-error').text('Username is required').show();
            isValid = false;
        }

        // Validate password
        if (password === "") {
            $('#password-error').text('Password is required').show();
            isValid = false;
        }

        // If form is valid, proceed with login
        if (isValid) {
            alert('Login successful!');  // Replace with actual login logic
        }
    });

    // Show the forgot password modal
    $('#forgot-password-link').click(function(event) {
        event.preventDefault();
        $('#forgot-password-modal').css('display', 'flex');
    });

    // Close modal when clicking on the close button
    $('.close-btn').click(function() {
        $('.modal').hide();
    });

    // Toggle password visibility
    $('#toggle-password').click(function() {
        let passwordField = $('#password');
        let type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);

        // Change the icon based on the visibility
        $(this).text(type === 'password' ? '👁️' : '🙈');
    });
});





// $(document).ready(function() {
//     // Handle form submission
//     $('#login-form').submit(function(event) {
//         event.preventDefault(); // Prevent form submission

//         let username = $('#username').val().trim();
//         let password = $('#password').val().trim();
//         let isValid = true;

//         // Clear previous error messages
//         $('.error-message').hide();

//         // Validate username
//         if (username === "") {
//             $('#username-error').text('Username is required').show();
//             isValid = false;
//         }

//         // Validate password
//         if (password === "") {
//             $('#password-error').text('Password is required').show();
//             isValid = false;
//         }

//         // If form is valid, proceed with login
//         if (isValid) {
//             alert('Login successful!');  // Replace this with actual login logic
//         }
//     });

//     // Show the forgot password modal
//     $('#forgot-password-link').click(function(event) {
//         event.preventDefault();
//         $('#forgot-password-modal').css('display', 'flex');
//     });

//     // Hide the modal when clicking on the close button
//     $('.close-btn').click(function() {
//         $('#forgot-password-modal').hide();
//     });

//     // Handle reset password submission
//     $('.reset-btn').click(function() {
//         let email = $('#reset-email').val().trim();
//         $('#reset-email-error').hide();

//         // Validate email
//         if (email === "") {
//             $('#reset-email-error').text('Email is required').show();
//         } else {
//             alert('Reset link sent!');  // Replace this with actual reset link logic
//             $('#forgot-password-modal').hide();
//         }
//     });
// });
