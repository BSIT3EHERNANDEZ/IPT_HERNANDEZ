<!-- Include this script at the bottom of your HTML or in a separate JS file -->
<script>
    // Get the nav icon and navigation part
    const navIcon = document.querySelector('.nav-icon');
    const navPart = document.querySelector('.navpart');

    // Toggle the "show" class on the navpart when the nav icon is clicked
    navIcon.addEventListener('click', function() {
        navPart.classList.toggle('show'); // Toggle the menu visibility
    });
</script>
