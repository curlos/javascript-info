const createCalendar = (elem, year, month) => {
    // new Date(2023, 1, 28);
    let currentDate = new Date(year, month - 1);
    const chosenMonth = currentDate.getMonth();
    let i = 1;

    const table = document.createElement('table');

    const dateNameRow = document.createElement('tr');
    const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    days.forEach((day) => {
        const tdElem = document.createElement('td');
        tdElem.textContent = day;
        dateNameRow.append(tdElem);
    });
    table.append(dateNameRow);

    let trElem = document.createElement('tr');
    table.append(trElem);

    console.log(currentDate.getDay());

    while (i < currentDate.getDay()) {
        let tdElem = document.createElement('td');
        trElem.append(tdElem);
        i++;
    }

    while (currentDate.getMonth() === chosenMonth) {
        console.log(currentDate);
        let tdElem = document.createElement('td');
        tdElem.textContent = currentDate.getDate();
        trElem.append(tdElem);

        if (i % 7 === 0) {
            trElem = document.createElement('tr');
            table.append(trElem);
        }

        currentDate.setDate(currentDate.getDate() + 1);
        i++;
    }

    elem.append(table);
};

const cal = document.getElementById('calendar');
createCalendar(cal, 2023, 3);