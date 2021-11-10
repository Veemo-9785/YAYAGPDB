module.exports = (client) => {
    const statusOptions = [
        "https://woomy.xyz.",
        "around with discord.js.",
        "with you.",
    ];
    let counter = 0;

    const updateStatus = () => {
        client.user?.setPresence({
            status: "online",
            activities: [
                {
                    name: statusOptions[counter],
                }
            ]
        })

        if (++counter >= statusOptions.length) {
            counter = 0
        }
        setTimeout(updateStatus, 1000 * 60 * 5);
    }
    updateStatus()
};

module.exports.config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'Status Changer',
};

// module.exports.config = {};