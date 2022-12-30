const getSecondsToTomorrow = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    return Math.round((tomorrow - now) / 1000);
};

console.log(getSecondsToTomorrow());