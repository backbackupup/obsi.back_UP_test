module.exports = async function(tp, dateStr) {
    const [year, month, day] = dateStr.split(" ").map(Number);
    
    const date = new Date(year, month - 1, day);  
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентебря", "Октября", "Ноября", "Декобря"];

    return days[date.getDay()];  
}
/*| пн  | вт  | ср  | чт  | пт  | сб  | вс  |
| --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     | */

