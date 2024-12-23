function addSettingsButton() {
    // Find the parent container of the "Deleted Messages" button
    var deletedMessagesButton = document.querySelector(
        'div[role="button"][aria-label="Deleted Messages"]'
    );

    if (deletedMessagesButton) {
        // Check if the settings button already exists
        var existingSettingsButton = deletedMessagesButton.parentElement.querySelector(
            '[aria-label="Settings"]'
        );

        if (!existingSettingsButton) {
            // Create a new button element
            var newButton = document.createElement('div');
            newButton.setAttribute('role', 'button');
            newButton.setAttribute('tabindex', '0');
            newButton.setAttribute('aria-label', 'Settings');
            newButton.className = 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xxk0z11 xvy4d1p x78zum5 xl56j7k x6s0dn4';
            newButton.title = 'Settings';

            // Add the settings icon SVG
            newButton.innerHTML = `
                <svg aria-hidden="true" data-icon="settings" class="icon" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM4.694 4.694a1 1 0 0 1 1.414-1.414l2.121 2.121a1 1 0 1 1-1.414 1.414L4.694 4.694Zm12.727-1.414a1 1 0 0 1 1.414 1.414l-2.121 2.121a1 1 0 1 1-1.414-1.414l2.121-2.121Zm-13.14 9.435a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0Zm16.33-1.414a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0ZM12 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1Zm0 19a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1Z"/>
                </svg>
            `;

            // Add an event listener for the button
            newButton.addEventListener('click', function () {
                openSettingsMenu();
            });

            // Insert the new button after the "Deleted Messages" button
            deletedMessagesButton.parentElement.insertBefore(newButton, deletedMessagesButton.nextSibling);
        }
    } else {
        console.error('Deleted Messages button not found.');
    }
}

// Function to create and open the settings menu
function openSettingsMenu() {
    // Check if the menu already exists
    var existingMenu = document.querySelector('#settingsMenu');
    if (existingMenu) {
        existingMenu.style.display = 'flex';
        return;
    }

    // Create the menu container
    var menu = document.createElement('div');
    menu.id = 'settingsMenu';
    menu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        z-index: 1000;
        font-family: Arial, sans-serif;
        animation: fadeIn 0.3s ease-in-out;
    `;

    // Add close button
    var closeButton = document.createElement('button');
    closeButton.textContent = '[x]';
    closeButton.style.cssText = `
        align-self: flex-end;
        border: none;
        background: transparent;
        font-size: 16px;
        cursor: pointer;
        margin: 8px;
    `;
    closeButton.addEventListener('click', closeSettingsMenu);

    // Add checkboxes and labels
    var items = [
        'Log Messages Received',
        'Log Images Viewed',
        'Status Download',
        'Voice to Text',
        'Very Giselicious🥵',
    ];

    items.forEach((item) => {
        var checkboxContainer = document.createElement('div');
        checkboxContainer.style.cssText = 'display: flex; align-items: center; margin: 8px;';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item;
        checkbox.checked = JSON.parse(localStorage.getItem(item) || 'false');
        checkbox.style.cssText = 'margin-right: 8px;';
        checkbox.addEventListener('change', function () {
            localStorage.setItem(item, checkbox.checked);
        });

        var label = document.createElement('label');
        label.htmlFor = item;
        label.textContent = item;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        menu.appendChild(checkboxContainer);
    });

    // Append elements to the menu
    menu.appendChild(closeButton);

    // Add to the body
    document.body.appendChild(menu);
}

// Function to close the settings menu
function closeSettingsMenu() {
    var menu = document.querySelector('#settingsMenu');
    if (menu) {
        menu.style.display = 'none';
    }
}

// Run the function
addSettingsButton();
