const sortedArr = [...document.querySelectorAll('tbody tr')].sort((a, b) => {
    const firstAge = Number(a.children[2].innerText);
    const secondAge = Number(b.children[2].innerText);

    return firstAge - secondAge;
});

document.querySelector('tbody').innerHTML = '';

sortedArr.forEach((trElem) => {
    document.querySelector('tbody').append(trElem);
});

{/* <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>Smith</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Pete</td>
            <td>Brown</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Ann</td>
            <td>Lee</td>
            <td>5</td>
        </tr>
    </tbody>
</table>; */}