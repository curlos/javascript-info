const showNotification = (options) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.style.top = `${Number(options.top)}px`;
    notificationDiv.style.right = `${Number(options.right)}px`;
    notificationDiv.textContent = options.html;
    notificationDiv.className = options.className;
    document.body.append(notificationDiv);

    let counter = 1;

    setInterval(() => {
        console.log(notificationDiv.style.display);
        if (notificationDiv.style.display === 'none') {
            notificationDiv.style.display = 'block';
            counter++;
        } else {
            notificationDiv.style.display = 'none';
        }
        notificationDiv.textContent = `${options.html} ${counter}`;
    }, 1500);
};

// shows an element with the text "Hello" near the right-top of the window
showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
});