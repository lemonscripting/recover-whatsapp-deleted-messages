// intercepting notifications
(function() {
    'use strict';
    const originalNotification = Notification;

    Notification = class extends originalNotification {
        constructor(...args) {
            super(...args);
            const notificationData = {
                title: args[0],
                options: args[1] || {},
                timestamp: new Date().toISOString() // Adding timestamp
            };
            let notifications = JSON.parse(localStorage.getItem('web.whatsapp.notifications')) || [];
            notifications.push(notificationData);
            localStorage.setItem('web.whatsapp.notifications', JSON.stringify(notifications));
        }
    };

    const storedNotifications = JSON.parse(localStorage.getItem('web.whatsapp.notifications')) || [];
    console.log('Stored Notifications:', storedNotifications);
})();
//end of hook

function showBanner() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.borderRadius = '8px';
    modal.style.zIndex = '99999999999';
    modal.style.width = '400px';
    modal.style.maxWidth = '90%';
    modal.style.padding = '20px';
    modal.style.textAlign = 'center';
    modal.style.fontFamily = 'Arial, sans-serif';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';

    const title = document.createElement('h2');
    title.textContent = 'giselicious pro [V-Beta-1.0]';
    header.appendChild(title);

    const closeButton = document.createElement('div');
    closeButton.style.cursor = 'pointer';
    closeButton.textContent = '[x]';
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    header.appendChild(closeButton);
    modal.appendChild(header);

    const notificationsData = JSON.parse(localStorage.getItem('web.whatsapp.notifications')) || [];
    notificationsData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const maxVisibleRows = 6;
    const scrollableHeight = 50 * maxVisibleRows;  // Each row is approximately 50px in height

    const scrollableArea = document.createElement('div');
    scrollableArea.style.height = `${scrollableHeight}px`;  // Adjust height for scrollable area
    scrollableArea.style.overflowY = 'auto';  // Enable vertical scrolling
    scrollableArea.style.padding = '10px';

    notificationsData.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.textContent = `${notification.title}: ${notification.options.body} (${new Date(notification.timestamp).toLocaleString()})`;
        notificationDiv.style.marginBottom = '10px';
        scrollableArea.appendChild(notificationDiv);
    });

    modal.appendChild(scrollableArea);
    document.body.appendChild(modal);
}

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

        const svgIcon = `
            <svg aria-hidden="true" data-icon="delete" class="icon" viewBox="0 0 16 16" role="img" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M3.5 1.5a1 1 0 0 1 .832-.993L4.5 0h7l.168.507A1 1 0 0 1 12.5 1.5V2h1a1 1 0 0 1 0 2h-.2l-.5 9a1 1 0 0 1-.993.9H4.2a1 1 0 0 1-.993-.9L3.5 4H3a1 1 0 0 1 0-2h1V1.5zm-.5 3.5h9l.5 8.5a1 1 0 0 1-.9.993H4.2a1 1 0 0 1-.993-.9l-.5-8.5z"/>
            </svg>
        `;
        newButton.innerHTML = svgIcon;

        newButton.addEventListener('click', showBanner);

        metaAIElement.parentElement.insertBefore(newButton, metaAIElement);
    }
}

addDeletedMessagesButton();
