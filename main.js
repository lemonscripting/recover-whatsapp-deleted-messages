// Function to create and insert the button with SVG
function addDeletedMessagesButton() {
    const metaAIElement = document.querySelector('[aria-label="Meta AI"]');
    const existingButton = document.querySelector('[aria-label="Deleted Messages"]');

    if (metaAIElement && !existingButton) {
        const newButton = document.createElement('div');
        newButton.setAttribute('role', 'button');
        newButton.setAttribute('tabindex', '0');
        newButton.setAttribute('aria-label', 'Deleted Messages');
        newButton.setAttribute('title', '');
        newButton.className = 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xxk0z11 xvy4d1p x78zum5 xl56j7k x6s0dn4';

        // SVG for "Deleted Messages"
        const svgIcon = `
            <svg aria-hidden="true" data-icon="delete" class="icon" viewBox="0 0 16 16" role="img" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M3.5 1.5a1 1 0 0 1 .832-.993L4.5 0h7l.168.507A1 1 0 0 1 12.5 1.5V2h1a1 1 0 0 1 0 2h-.2l-.5 9a1 1 0 0 1-.993.9H4.2a1 1 0 0 1-.993-.9L3.5 4H3a1 1 0 0 1 0-2h1V1.5zm-.5 3.5h9l.5 8.5a1 1 0 0 1-.9.993H4.2a1 1 0 0 1-.993-.9l-.5-8.5z"/>
                <path fill="currentColor" d="M5.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
            </svg>
        `;
        newButton.innerHTML = svgIcon;

        metaAIElement.parentElement.insertBefore(newButton, metaAIElement);
    }
}

// Run the function to add the button
addDeletedMessagesButton();
