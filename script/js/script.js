// document.addEventListener('DOMContentLoaded', () =>{
// Select all elements with the class 'stop__propogation'
var stopPropagations = document.querySelectorAll('.stop__propogation');
// Check if any elements were found
console.log(stopPropagations);
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
console.log(preventDefaults);
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
var sidebarTogglers = document.querySelectorAll('.toggle__sidebar a,.sidebar__overlay');
console.log(sidebarTogglers);
// Check if any sidebarTogglers were found
if (sidebarTogglers.length > 0) {
    // Loop through each element and add a click event listener
    sidebarTogglers.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default action
            // Toggle the 'show' class on the sidebar element
            var sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.toggle('show');
            }
        });
    });
}
// Select all elements with the class 'toggle__sidebar'
// let sidebarTogglers = document.querySelectorAll('.toggle__sidebar');
// console.log(sidebarTogglers)
// // Check if sidebarTogglers were found
// if (sidebarTogglers) {
//     // Loop through each element and add a click event listener
//     sidebarTogglers.forEach(function(element) {
//         element.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default action
//             event.stopPropagation(); // Prevent event from bubbling up
//             document.getElementById('sidebar')?.classList.toggle('show');
//         });
//     });
// }
// });
//# sourceMappingURL=script.js.map