const formatDate = (date) => {
    const now = new Date();
    const secondsAgo = ((now - date) / 1000);

    const lessThanOneSecond = (secondsAgo < 1);
    const lessThanOneMinute = (secondsAgo < 60);
    const lessThanOneHour = (secondsAgo < 60 * 60);

    if (lessThanOneSecond) {
        return "right now";
    } else if (lessThanOneMinute) {
        return `${secondsAgo} sec. ago`;
    } else if (lessThanOneHour) {
        return `${secondsAgo / 60} min. ago`;
    } else {
        const day = formatNumberWithZero(date.getDate());
        const month = formatNumberWithZero(date.getMonth() + 1);
        const year = formatNumberWithZero(date.getFullYear());
        const hours = formatNumberWithZero(date.getHours());
        const minute = formatNumberWithZero(date.getMinutes());

        return `${day}.${month}.${year} ${hours}:${minute}`;
    }
};

const formatNumberWithZero = (number) => {
    const stringNum = String(number).slice(-2,);
    return stringNum.length < 2 ? `0${stringNum}` : stringNum;
};

alert(formatDate(new Date(new Date - 1))); // "right now"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));