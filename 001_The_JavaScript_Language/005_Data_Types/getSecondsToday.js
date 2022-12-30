const getSecondsToday = () => {
    const beginningOfTheDay = new Date();
    beginningOfTheDay.setHours(0, 0, 0, 0);

    const now = new Date();

    return Math.round((now - beginningOfTheDay) / 1000);
};

console.log(getSecondsToday());