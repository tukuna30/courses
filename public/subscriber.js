(function subscribe() {
    const id = 'my-channel'; // client ID
    const channelId = 'de5c865494456c71a085';

    const pusher = new window.Pusher(channelId, {
        cluster: 'ap2'
    });

    const channel = pusher.subscribe(id);
    channel.bind('my-event', (data) => {
        console.log('data,', data); // process data, feed it to editor
    });
})();
