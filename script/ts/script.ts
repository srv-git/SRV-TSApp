
    // Select all elements with the class 'stop__propagation'
    var stopPropagations = document.querySelectorAll('.stop__propagation');

    // Check if any elements were found
    console.log(stopPropagations)
    if (stopPropagations.length > 0) {
        // Loop through each element and add a click event listener
        stopPropagations.forEach(function (element) {
            element.addEventListener('click', function (event) {
                // Prevent the default action of the event
                event.stopPropagation(); // This will prevent the default behavior
            });
        });
    }


    // Select all elements with the class 'prevent__Default'
    var preventDefaults = document.querySelectorAll('.prevent__Default');

    // Check if any elements were found
    console.log(preventDefaults)
    if (preventDefaults.length > 0) {
        // Loop through each element and add a click event listener
        preventDefaults.forEach(function (element) {
            element.addEventListener('click', function (event) {
                // Prevent the default action of the event
                event.preventDefault(); // This will prevent the default behavior
            });
        });
    }

    // Select all elements with the class 'toggle__sidebar'
    const sidebarTogglers = document.querySelectorAll('.toggle__sidebar a,.sidebar__overlay');
    console.log(sidebarTogglers);

    // Check if any sidebarTogglers were found
    if (sidebarTogglers.length > 0) {
        // Loop through each element and add a click event listener
        sidebarTogglers.forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default action
                
                // Toggle the 'show' class on the sidebar element
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.toggle('show');
                }
            });
        });
    }
