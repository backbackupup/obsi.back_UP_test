 /*module.exports = async function (f, tp) {
    
    if (f != 0) {
        //var b = "";
        //let l = 0;
        
         //b = tp.system.prompt("введи сколько в часах делал");
         let g;
         var i = await tp.system.multi_suggester(["zad1", "zad2", "zad3", "zad4", "zad5", "zad6", "zad7", "zad8", "zad9", "zad10", "zad11", "zad12", "zad13", "zad14", "zad15", "zad16", "zad17", "zad18", "zad19"], ["zad1", "zad2", "zad3", "zad4", "zad5", "zad6", "zad7", "zad8", "zad9", "zad10", "zad11", "zad12", "zad13", "zad14", "zad15", "zad16", "zad17", "zad18", "zad19"], true, "введи какие задания делал") ;
         arr =[];
         for (let j = 0; j < i.length; j++) {
            let p = await tp.system.prompt("введи сколько в часах делал");
            o = Number(p); 
            arr.push(o);  
            g = g+1;
            }
         //i =  12;
        //a = toString(i);

           return i[0] + ": " +  arr[0] +  "\n" + i[1] + ": " +  arr[1] +  "\n" + i[2] + ": " +  arr[2] +  "\n" + i[3] + ": " +  arr[3] +  "\n" + i[4] + ": " +  arr[4] +  "\n" + i[5] + ": " +  arr[5] +  "\n" + i[6] + ": " +  arr[6] +  "\n" + i[7] + ": " +  arr[7] +  "\n" + i[8] + ": " +  arr[8] +  "\n" + i[9] + ": " +  arr[9] +  "\n" + i[10] + ": " +  arr[10] +  "\n" + i[11] + ": " +  arr[11] +  "\n" + i[12] + ": " +  arr[12] +  "\n" + i[13] + ": " +  arr[13] +  "\n" + i[14] + ": " +  arr[14] +  "\n" + i[15] + ": " +  arr[15] +  "\n" + i[16] + ": " +  arr[16] +  "\n" + i[17] + ": " +  arr[17] +  "\n" + i[18] + ": " +  arr[18] +  "\n" + i[19] + ": " +  arr[19];
            
        //tp.frontmatter[i] = b;
       //var i = i + b;
        //tp.file.create_new(i, "shab", false, tp.app.vault.getAbstractFileByPath("cash"))
        
    } 
}
    

var h = `\n|день:|`;
    

    
    h += `день недели:|`;
    h += `счетчик часов в этот день:|`;
    h += `серия:|`;
    h += `количество часов после последнего рима:|`;
    h += `количество дней после последнего рима:|`;
    h += `часов потрачено на день:|`;
    h += `флаг [математике](mat_stat):|`;
    h += `флаг [русского](russ_stat):|`;
    h += `флаг [информатике](infa_stat):|`;
    for (let i = 1; i <20; i++)
    {
        h += `[часов на задание№${i}](m_zad${i}) по [матеметике](mat_stat)|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `[часов на задание№${i}](r_zad${i}) по [русскому](russ_stat)|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `[часов на задание№${i}](i_zad${i}) по [информатике](infa_stat)|`;
    }
    h += `флаг РИМ:|`;
    h += `Все задания по РИМу:|`;
    h += `Все правильные задания по РИМу:|`;
    h += `процент выполненых заданий РИМа:|`;
    h += `флаг [математики](mat_stat) РИМ:|`;
    h += `Все задания по [математике](mat_stat) в РИМе:|`;
    h += `Все правильные задания по [математике](mat_stat) в РИМе:|`;
    h += `процент выполненых заданий [математики](mat_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    h += `флаг [русского](russ_stat) РИМ:|`;
    h += `Все задания по [русскому](russ_stat) в РИМе:|`;
    h += `Все правильные задания по [русскому](russ_stat) в РИМе:|`;
    h += `процент выполненых заданий [русского](russ_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    h += `флаг [информатики](infa_stat) РИМ:|`;
    h += `Все задания по [информатики](infa_stat) в РИМе:|`;
    h += `Все правильные задания по [информатике](infa_stat) в РИМе:|`;
    h += `процент выполненых заданий [информатики](infa_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }



    const file = tp.file.find_tfile(tp.file.path(true));
    if (!file) {
        return "❌ Файл не найден";
    }

    let content = await tp.app.vault.read(file);

    // 2. Строим новую строку (можно заменить на свои данные или prompt'ы)
    const newRow = `| ${tp.date.now("YYYY-MM-DD")} | ESP32 | ✅ | 3.5ч |\n`;

    // 3. Находим последнюю строку таблицы и вставляем ПЕРЕД ней новую
    // Регекс: находит последнюю строку таблицы (последнюю строку, начинающуюся с `|`)
    const lastRowRegex = /^(\|.*\n)(?![\s\S]*^\|)/m;

    if (!lastRowRegex.test(content)) {
        return "❌ Таблица не найдена";
    }

    // Заменяем последнюю строку: вставляем newRow перед старой последней
    content = content.replace(lastRowRegex, match => newRow + match);

    // 4. Сохраняем файл
    await tp.app.vault.modify(file, content);

    return "";

    */


/* module.exports = async function (tp) {
    const file = tp.file.find_tfile(tp.file.path(true));
    var h = ``;
    h += `|день:|`;
    

    
    h += `день недели:|`;
    h += `счетчик часов в этот день:|`;
    h += `серия:|`;
    h += `количество часов после последнего рима:|`;
    h += `количество дней после последнего рима:|`;
    h += `часов потрачено на день:|`;
    h += `флаг [математике](mat_stat):|`;
    h += `флаг [русского](russ_stat):|`;
    h += `флаг [информатике](infa_stat):|`;
    for (let i = 1; i <20; i++)
    {
        h += `[часов на задание№${i}](m_zad${i}) по [матеметике](mat_stat)|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `[часов на задание№${i}](r_zad${i}) по [русскому](russ_stat)|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `[часов на задание№${i}](i_zad${i}) по [информатике](infa_stat)|`;
    }
    h += `флаг РИМ:|`;
    h += `Все задания по РИМу:|`;
    h += `Все правильные задания по РИМу:|`;
    h += `процент выполненых заданий РИМа:|`;
    h += `флаг [математики](mat_stat) РИМ:|`;
    h += `Все задания по [математике](mat_stat) в РИМе:|`;
    h += `Все правильные задания по [математике](mat_stat) в РИМе:|`;
    h += `процент выполненых заданий [математики](mat_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [матеметике](mat_stat) в РИМе|`;
    }
    h += `флаг [русского](russ_stat) РИМ:|`;
    h += `Все задания по [русскому](russ_stat) в РИМе:|`;
    h += `Все правильные задания по [русскому](russ_stat) в РИМе:|`;
    h += `процент выполненых заданий [русского](russ_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [русскому](russ_stat) в РИМе|`;
    }
    h += `флаг [информатики](infa_stat) РИМ:|`;
    h += `Все задания по [информатики](infa_stat) в РИМе:|`;
    h += `Все правильные задания по [информатике](infa_stat) в РИМе:|`;
    h += `процент выполненых заданий [информатики](infa_stat) РИМа:|`;
    for (let i = 1; i <20; i++)
    {
        h += `всех [заданий№${i}](m_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `правильных [заданий№${i}](r_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }
    for (let i = 1; i <28; i++)
    {
        h += `процент выполнения [заданий№${i}](i_zad${i}) по [информатике](infa_stat) в РИМе|`;
    }
    var rerke = await tp.app.vault.read(file);
    let r = rerke.slice(0, 40735) + h + rerke.slice(40735);
    //await tp.app.vault.modify(file, r);
    return h;
    //h += "\n|---|"
    







const file = tp.file.find_tfile(tp.file.path(true));
    var h = [];
    h.push(`\n|день:|`);
    

    
    h.push(`день недели:|`);
    h.push(`счетчик часов в этот день:|`);
    h.push(`серия:|`);
    h.push(`количество часов после последнего рима:|`);
    h.push(`количество дней после последнего рима:|`);
    h.push(`часов потрачено на день:|`);
    h.push(`флаг [математике](mat_stat):|`);
    h.push(`флаг [русского](russ_stat):|`);
    h.push(`флаг [информатике](infa_stat):|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`[часов на задание№${i}](m_zad${i}) по [матеметике](mat_stat)|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`[часов на задание№${i}](r_zad${i}) по [русскому](russ_stat)|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`[часов на задание№${i}](i_zad${i}) по [информатике](infa_stat)|`);
    }
    h.push(`флаг РИМ:|`);
    h.push(`Все задания по РИМу:|`);
    h.push(`Все правильные задания по РИМу:|`);
    h.push(`процент выполненых заданий РИМа:|`);
    h.push(`флаг [математики](mat_stat) РИМ:|`);
    h.push(`Все задания по [математике](mat_stat) в РИМе:|`);
    h.push(`Все правильные задания по [математике](mat_stat) в РИМе:|`);
    h.push(`процент выполненых заданий [математики](mat_stat) РИМа:|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`всех [заданий№${i}](m_zad${i}) по [матеметике](mat_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`правильных [заданий№${i}](r_zad${i}) по [матеметике](mat_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`процент выполнения [заданий№${i}](i_zad${i}) по [матеметике](mat_stat) в РИМе|`);
    }
    h.push(`флаг [русского](russ_stat) РИМ:|`);
    h.push(`Все задания по [русскому](russ_stat) в РИМе:|`);
    h.push(`Все правильные задания по [русскому](russ_stat) в РИМе:|`);
    h.push(`процент выполненых заданий [русского](russ_stat) РИМа:|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`всех [заданий№${i}](m_zad${i}) по [русскому](russ_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`правильных [заданий№${i}](r_zad${i}) по [русскому](russ_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`процент выполнения [заданий№${i}](i_zad${i}) по [русскому](russ_stat) в РИМе|`);
    }
    h.push(`флаг [информатики](infa_stat) РИМ:|`);
    h.push(`Все задания по [информатики](infa_stat) в РИМе:|`);
    h.push(`Все правильные задания по [информатике](infa_stat) в РИМе:|`);
    h.push(`процент выполненых заданий [информатики](infa_stat) РИМа:|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`всех [заданий№${i}](m_zad${i}) по [информатике](infa_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`правильных [заданий№${i}](r_zad${i}) по [информатике](infa_stat) в РИМе|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`процент выполнения [заданий№${i}](i_zad${i}) по [информатике](infa_stat) в РИМе|`);
    }
    var str = h.join('');
    var rerke = await tp.app.vault.read(file);
    for(let i = rerke.length; i > 1; i--)
    {
        var index1 = rerke.charAt(i);
        if(index1 == "|")
        {
            var chisl = i; 
            break;
        }
    }
    let r = rerke.slice(0, chisl) + str + rerke.slice(chisl); 
    await tp.app.vault.modify(file, r);
    return "";




        for (let j = 2; j <6; j++)
    {
        for (let i = 1; i <20; i++)
            {
            
        var inf_baz = tp.file.find_tfile(tp.file.path(true));
        var stolb = i+1 ;
        var strok = j * 21;
        var ya = stolb + strok;

        var krop = 0;
        var num = 8;

        var chisl = -1;
        var chisl2 = -1;
        
        var rerke = await tp.app.vault.read(inf_baz);
        for(let i = 1; i < rerke.length; i++)
        {
            var index1 = rerke.charAt(i);
            if(index1 == "|")
            {
                krop += 1;
            }
            if(krop == ya)
            {
                chisl = i; 
                break;
            }
        }

        for(let i = chisl+1; i < rerke.length; i++)
        {
            var index2 = rerke.charAt(i);
            if(index2 == "|")
            {
                chisl2 = i; 
                break;
            }
        }

        let cellValue = rerke.slice(chisl + 1, chisl2).trim(); 
        let numberValue = parseFloat(cellValue);

        var str = numberValue + num;
        let r = rerke.slice(0, chisl + 1) + '0' + rerke.slice(chisl2); 
        await tp.app.vault.modify(inf_baz, r);
            }
        }
return '';
};













        for (let i = 1; i <28; i++)
    {
    const file = tp.file.find_tfile(`ЕГЭ/subjects/russ/r_zad${i}`);
    await tp.app.vault.modify(file, `| дни | часы | рим всего | рим правильно | рим процент |     |\n| --- | ---- | --------- | ------------- | ----------- | --- |\n|     |      |           |               |             |     |`);
    }

*/
module.exports = async function(tp) {


 for (let i = 1; i <28; i++)
    {
    const file = tp.file.find_tfile(`ЕГЭ/subjects/infa/i_zad${i}`);
    await tp.app.vault.modify(file, `| дни | часы | рим всего | рим правильно | рим процент |     |
| --- | ---- | --------- | ------------- | ----------- | --- |
|     |      |           |               |             |     |
^table

\`\`\`chart
type: line
id: table
layout: columns
width: 100%
beginAtZero: true
\`\`\``);
    }
    return"";


     /* for (let i = 1; i <20; i++)
    {
    const file = tp.file.find_tfile(`ЕГЭ/subjects/mat 1/m_zad${i}`);

        var rerke = await tp.app.vault.read(file);

            var chisl = -1;
            var chisl2 = -1;

            var krop = 0;

        for(let i = rerke.length; i > 1 ; i--)
        {
        var index1 = rerke.charAt(i);
        if(index1 == "|")
        {
            krop += 1;
        }
        if(krop == 7)
        {
            chisl = i; 
            break;
        }
        }

        for(let i = chisl+1; i < rerke.length; i++)
    {
            var index2 = rerke.charAt(i);
        if(index2 == "|")
        {
             chisl2 = i; 
            break;
        }
    }

    var cellValue = rerke.slice(chisl + 1, chisl2)
    if(cellValue == " [[2026_11_06]] ")
        {
           
             for(let j = 1; j < 4 ; j++)
        {
             var rerke = await tp.app.vault.read(file);
            var ya = ((rerke.split("|").length - 1) - 5) + j;
            

            var chisl = -1;
           var  chisl2 = -1;

            var krop = 0;

        for(let i = 0; i < rerke.length ; i++)
        {
        var index1 = rerke.charAt(i);
        if(index1 == "|")
        {
            krop += 1;
        }
        if(krop == ya)
        {
            chisl = i; 
            break;
        }
        }

        for(let i = chisl+1; i < rerke.length; i++)
    {
            var index2 = rerke.charAt(i);
        if(index2 == "|")
        {
             chisl2 = i; 
            break;
        }
    }
    let r = rerke.slice(0, chisl + 1) + '0' + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    
        }

        }
        else
        {
        const file = tp.file.find_tfile(`ЕГЭ/subjects/mat 1/m_zad${i}`);
    var h = [];
    h.push(`\n| [[2026_11_06]] |`);
    h.push(`0|`);
    h.push(`0|`);
    h.push(`0|`);
    h.push(`0|`);

    var str = h.join('');
    var rerke = await tp.app.vault.read(file);
    for(let i = rerke.length; i > 1; i--)
    {
        var index1 = rerke.charAt(i);
        if(index1 == "|")
        {
            var chisl = i; 
            break;
        }
    }
    let r = rerke.slice(0, chisl) + str + rerke.slice(chisl); 
    await tp.app.vault.modify(file, r);
        }
    
    
}





    return `()`;  */
/* 
    var conf_file = tp.file.find_tfile('ЕГЭ/sluj/Config.md');
    var cache = tp.app.metadataCache.getFileCache(conf_file);
    var frontmatter = cache.frontmatter;
    var keys = Object.keys(frontmatter);

    var date_do = frontmatter[keys[3]];
    var     dateStr = '2026 01 28';

    var ost_dnei = Math.floor((new Date(date_do.replace(/_/g, " ")) - new Date(dateStr)) / (1000 * 60 * 60 * 24));
return ost_dnei;    
 */    //h += "\n|---|"
    
    // Генерируем заголовок таблицы (ОДНА строка через |)
    /* const headers = [
        "день", "день недели", "счетчик часов в этот день", "серия",
        "количество часов после последнего рима", "количество дней после последнего рима",
        "часов потрачено на день",
        "флаг математике(mat_stat)", "флаг русского(russ_stat)", "флаг информатике(infa_stat)"
    ];
    let index1 = string.charAt(1);
    // Добавляем задания по предметам (циклы)
    for (let i = 1; i <= 19; i++) headers.push(`часов на задание№${i}(m_zad${i}) по математике(mat_stat)`);
    for (let i = 1; i <= 27; i++) headers.push(`часов на задание№${i}(r_zad${i}) по русскому(russ_stat)`);
    for (let i = 1; i <= 27; i++) headers.push(`часов на задание№${i}(i_zad${i}) по информатике(infa_stat)`);
    
    // РИМ статистика
    headers.push("флаг РИМ");
    headers.push("Все задания по РИМу", "Все правильные задания по РИМу", "процент выполненых заданий РИМа");
    
    // РИМ по математике
    headers.push("флаг математики(mat_stat) РИМ");
    headers.push("Все задания по математике(mat_stat) в РИМе", "Все правильные задания по математике(mat_stat) в РИМе", "процент выполненых заданий математики(mat_stat) РИМа");
    for (let i = 1; i <= 19; i++) headers.push(`всех заданий№${i}(m_zad${i}) по математике(mat_stat) в РИМе`);
    
    // РИМ по русскому
    headers.push("флаг русского(russ_stat) РИМ");
    headers.push("Все задания по русскому(russ_stat) в РИМе", "Все правильные задания по русскому(russ_stat) в РИМе", "процент выполненых заданий русского(russ_stat) РИМа");
    for (let i = 1; i <= 27; i++) headers.push(`правильных заданий№${i}(r_zad${i}) по русскому(russ_stat) в РИМе`);
    
    // РИМ по информатике
    headers.push("флаг информатики(infa_stat) РИМ");
    headers.push("Все задания по информатике(infa_stat) в РИМе", "Все правильные задания по информатике(infa_stat) в РИМе", "процент выполненых заданий информатики(infa_stat) РИМа");
    for (let i = 1; i <= 27; i++) headers.push(`процент выполнения заданий№${i}(i_zad${i}) по информатике(infa_stat) в РИМе`);
    
    // Собираем в ОДНУ строку
    const headerRow = "|" + headers.join("|") + "|\n";
    
    // Вставляем по индексу 40735 (заменяем весь файл правильно)
    const newContent = content.slice(0, 40735) + headerRow + content.slice(40735);
    
    // СОХРАНЯЕМ через modify (НЕ append!)
    await tp.app.vault.modify(file, newContent);
    
    return ""; */
};

/*     //await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`den№`] = based_data});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_nedel`] = ned});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_shet_chass`] = shet_chass2 + sumarI + sumarR + sumarM});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_shet_dnei`] = shet_dnei2 + 1});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_shet_chass_pos_rim`] = shet_chass_pos_rim2 + sumarI + sumarR + sumarM});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_shet_day_pos_rim`] = shet_day_pos_rim2 + 1});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_cassi`] = sumarI + sumarR + sumarM});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_matflag `] = matflag});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rusflag`] = rusflag});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_infflag`] = infflag});
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_m_zad${i}`] = m_zad[i-1]});
        }    
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_r_zad${i}`] = r_zad[i-1]});
        } 
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_i_zad${i}`] = i_zad[i-1]});
        }
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag`] = rimflag});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_sumar_obsh`] = RIM_sumar_obsh});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_sumar_obshN`] = RIM_sumar_obshN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_sumar_obsh_proc`] = RIM_sumar_obsh_proc});

        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag_m`] = rimflag_m});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_matem_obsh`] = RIM_sumarM});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_matem_obsh_prav`] = RIM_sumarMN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_matem_obsh_proc`] = RIM_matem_obsh_proc});
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_m_zad_obsh${i}`] = RIM_m_zad_obsh[i-1]});
        }
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_m_zad_prav${i}`] = RIM_m_zad_prav[i-1]});
        }
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_m_zad_proc${i}`] = RIM_m_zad_proc[i-1]});
        }
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag_r`] = rimflag_r})        
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh`] = RIM_sumarR});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh_prav`] = RIM_sumarRN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh_proc`] = RIM_russ_obsh_proc});
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_obsh${i}`] = RIM_r_zad_obsh[i-1]});
        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_prav${i}`] = RIM_r_zad_prav[i-1]});
        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_proc${i}`] = RIM_r_zad_proc[i-1]});
        }  
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag_i`] = rimflag_i})
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh`] = RIM_sumarI});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh_prav`] = RIM_sumarIN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh_proc`] = RIM_infa_obsh_proc});
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_obsh${i}`] = RIM_i_zad_obsh[i-1]});
        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_prav${i}`] = RIM_i_zad_prav[i-1]});
        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_proc${i}`] = RIM_i_zad_proc[i-1]});
        }  
    
for (let i = 1; i <28; i++)
{
h +=` [задание№${i}](i_zad${i}) |`
}     */


/*module.exports = async function(tp) {
    const otherFile = tp.file.find_tfile("sluj/Config.md");

    
    // 4. Все ключи свойства
    const keys = Object.keys(frontmatter);
    console.log("Ключи:", keys);  // Developer Console Ctrl+Shift+I
    
    // 5. status или первый ключ
    const status = frontmatter.status || frontmatter[keys[0]] || "ключей нет";
    
    return `✅ Status: "${status}"\nКлючи: ${keys.join(", ")}`;
}
/** 
 * def(x, osn):
 * while x > 0:
 * ost = 'x % osn'
 * s = str(ost) + s
 * x = x // osn
 * return s
 * 
 * 
 * 
 *     var m_zad1 = 0;
    var m_zad2 = 0;
    var m_zad3 = 0;
    var m_zad4 = 0;
    var m_zad5 = 0;
    var m_zad6 = 0;
    var m_zad7 = 0;
    var m_zad8 = 0;
    var m_zad9 = 0;
    var m_zad10 = 0;
    var m_zad11 = 0;
    var m_zad12 = 0;
    var m_zad13 = 0;
    var m_zad14 = 0;
    var m_zad15 = 0;
    var m_zad16 = 0;
    var m_zad17 = 0;
    var m_zad18 = 0;
    var m_zad19 = 0;

    var r_zad1 = 0;
    var r_zad2 = 0;
    var r_zad3 = 0;
    var r_zad4 = 0;
    var r_zad5 = 0;
    var r_zad6 = 0;
    var r_zad7 = 0;
    var r_zad8 = 0;
    var r_zad9 = 0;
    var r_zad10 = 0;
    var r_zad11 = 0;
    var r_zad12 = 0;
    var r_zad13 = 0;
    var r_zad14 = 0;
    var r_zad15 = 0;
    var r_zad16 = 0;
    var r_zad17 = 0;
    var r_zad18 = 0;
    var r_zad19 = 0;
    var r_zad20 = 0;
    var r_zad21 = 0;
    var r_zad22 = 0;
    var r_zad23 = 0;
    var r_zad24 = 0;
    var r_zad25 = 0;
    var r_zad26 = 0;
    var r_zad27 = 0;
    
    var i_zad1 = 0;
    var i_zad2 = 0;
    var i_zad3 = 0;
    var i_zad4 = 0;
    var i_zad5 = 0;
    var i_zad6 = 0;
    var i_zad7 = 0;
    var i_zad8 = 0;
    var i_zad9 = 0;
    var i_zad10 = 0;
    var i_zad11 = 0;
    var i_zad12 = 0;
    var i_zad13 = 0;
    var i_zad14 = 0;
    var i_zad15 = 0;
    var i_zad16 = 0;
    var i_zad17 = 0;
    var i_zad18 = 0;
    var i_zad19 = 0;
    var i_zad20 = 0;
    var i_zad21 = 0;
    var i_zad22 = 0;
    var i_zad23 = 0;
    var i_zad24 = 0;
    var i_zad25 = 0;
    var i_zad26 = 0;
    var i_zad27 = 0;



    

    var RIM_m_prav_zad1 = 0;
    var RIM_m_prav_zad2 = 0;
    var RIM_m_prav_zad3 = 0;
    var RIM_m_prav_zad4 = 0;
    var RIM_m_prav_zad5 = 0;
    var RIM_m_prav_zad6 = 0;
    var RIM_m_prav_zad7 = 0;
    var RIM_m_prav_zad8 = 0;
    var RIM_m_prav_zad9 = 0;
    var RIM_m_prav_zad10 = 0;
    var RIM_m_prav_zad11 = 0;
    var RIM_m_prav_zad12 = 0;
    var RIM_m_prav_zad13 = 0;
    var RIM_m_prav_zad14 = 0;
    var RIM_m_prav_zad15 = 0;
    var RIM_m_prav_zad16 = 0;
    var RIM_m_prav_zad17 = 0;
    var RIM_m_prav_zad18 = 0;
    var RIM_m_prav_zad19 = 0;

    var RIM_r_prav_zad1 = 0;
    var RIM_r_prav_zad2 = 0;
    var RIM_r_prav_zad3 = 0;
    var RIM_r_prav_zad4 = 0;
    var RIM_r_prav_zad5 = 0;
    var RIM_r_prav_zad6 = 0;
    var RIM_r_prav_zad7 = 0;
    var RIM_r_prav_zad8 = 0;
    var RIM_r_prav_zad9 = 0;
    var RIM_r_prav_zad10 = 0;
    var RIM_r_prav_zad11 = 0;
    var RIM_r_prav_zad12 = 0;
    var RIM_r_prav_zad13 = 0;
    var RIM_r_prav_zad14 = 0;
    var RIM_r_prav_zad15 = 0;
    var RIM_r_prav_zad16 = 0;
    var RIM_r_prav_zad17 = 0;
    var RIM_r_prav_zad18 = 0;
    var RIM_r_prav_zad19 = 0;
    var RIM_r_prav_zad20 = 0;
    var RIM_r_prav_zad21 = 0;
    var RIM_r_prav_zad22 = 0;
    var RIM_r_prav_zad23 = 0;
    var RIM_r_prav_zad24 = 0;
    var RIM_r_prav_zad25 = 0;
    var RIM_r_prav_zad26 = 0;
    var RIM_r_prav_zad27 = 0;
    
    var RIM_i_prav_zad1 = 0;
    var RIM_i_prav_zad2 = 0;
    var RIM_i_prav_zad3 = 0;
    var RIM_i_prav_zad4 = 0;
    var RIM_i_prav_zad5 = 0;
    var RIM_i_prav_zad6 = 0;
    var RIM_i_prav_zad7 = 0;
    var RIM_i_prav_zad8 = 0;
    var RIM_i_prav_zad9 = 0;
    var RIM_i_prav_zad10 = 0;
    var RIM_i_prav_zad11 = 0;
    var RIM_i_prav_zad12 = 0;
    var RIM_i_prav_zad13 = 0;
    var RIM_i_prav_zad14 = 0;
    var RIM_i_prav_zad15 = 0;
    var RIM_i_prav_zad16 = 0;
    var RIM_i_prav_zad17 = 0;
    var RIM_i_prav_zad18 = 0;
    var RIM_i_prav_zad19 = 0;
    var RIM_i_prav_zad20 = 0;
    var RIM_i_prav_zad21 = 0;
    var RIM_i_prav_zad22 = 0;
    var RIM_i_prav_zad23 = 0;
    var RIM_i_prav_zad24 = 0;
    var RIM_i_prav_zad25 = 0;
    var RIM_i_prav_zad26 = 0;
    var RIM_i_prav_zad27 = 0;





    var RIM_m_proc_zad1 = 0;
    var RIM_m_proc_zad2 = 0;
    var RIM_m_proc_zad3 = 0;
    var RIM_m_proc_zad4 = 0;
    var RIM_m_proc_zad5 = 0;
    var RIM_m_proc_zad6 = 0;
    var RIM_m_proc_zad7 = 0;
    var RIM_m_proc_zad8 = 0;
    var RIM_m_proc_zad9 = 0;
    var RIM_m_proc_zad10 = 0;
    var RIM_m_proc_zad11 = 0;
    var RIM_m_proc_zad12 = 0;
    var RIM_m_proc_zad13 = 0;
    var RIM_m_proc_zad14 = 0;
    var RIM_m_proc_zad15 = 0;
    var RIM_m_proc_zad16 = 0;
    var RIM_m_proc_zad17 = 0;
    var RIM_m_proc_zad18 = 0;
    var RIM_m_proc_zad19 = 0;

    var RIM_r_proc_zad1 = 0;
    var RIM_r_proc_zad2 = 0;
    var RIM_r_proc_zad3 = 0;
    var RIM_r_proc_zad4 = 0;
    var RIM_r_proc_zad5 = 0;
    var RIM_r_proc_zad6 = 0;
    var RIM_r_proc_zad7 = 0;
    var RIM_r_proc_zad8 = 0;
    var RIM_r_proc_zad9 = 0;
    var RIM_r_proc_zad10 = 0;
    var RIM_r_proc_zad11 = 0;
    var RIM_r_proc_zad12 = 0;
    var RIM_r_proc_zad13 = 0;
    var RIM_r_proc_zad14 = 0;
    var RIM_r_proc_zad15 = 0;
    var RIM_r_proc_zad16 = 0;
    var RIM_r_proc_zad17 = 0;
    var RIM_r_proc_zad18 = 0;
    var RIM_r_proc_zad19 = 0;
    var RIM_r_proc_zad20 = 0;
    var RIM_r_proc_zad21 = 0;
    var RIM_r_proc_zad22 = 0;
    var RIM_r_proc_zad23 = 0;
    var RIM_r_proc_zad24 = 0;
    var RIM_r_proc_zad25 = 0;
    var RIM_r_proc_zad26 = 0;
    var RIM_r_proc_zad27 = 0;
    
    var RIM_i_proc_zad1 = 0;
    var RIM_i_proc_zad2 = 0;
    var RIM_i_proc_zad3 = 0;
    var RIM_i_proc_zad4 = 0;
    var RIM_i_proc_zad5 = 0;
    var RIM_i_proc_zad6 = 0;
    var RIM_i_proc_zad7 = 0;
    var RIM_i_proc_zad8 = 0;
    var RIM_i_proc_zad9 = 0;
    var RIM_i_proc_zad10 = 0;
    var RIM_i_proc_zad11 = 0;
    var RIM_i_proc_zad12 = 0;
    var RIM_i_proc_zad13 = 0;
    var RIM_i_proc_zad14 = 0;
    var RIM_i_proc_zad15 = 0;
    var RIM_i_proc_zad16 = 0;
    var RIM_i_proc_zad17 = 0;
    var RIM_i_proc_zad18 = 0;
    var RIM_i_proc_zad19 = 0;
    var RIM_i_proc_zad20 = 0;
    var RIM_i_proc_zad21 = 0;
    var RIM_i_proc_zad22 = 0;
    var RIM_i_proc_zad23 = 0;
    var RIM_i_proc_zad24 = 0;
    var RIM_i_proc_zad25 = 0;
    var RIM_i_proc_zad26 = 0;
    var RIM_i_proc_zad27 = 0;



    var RIM_m_obsh_zad1 = 0;
    var RIM_m_obsh_zad2 = 0;
    var RIM_m_obsh_zad3 = 0;
    var RIM_m_obsh_zad4 = 0;
    var RIM_m_obsh_zad5 = 0;
    var RIM_m_obsh_zad6 = 0;
    var RIM_m_obsh_zad7 = 0;
    var RIM_m_obsh_zad8 = 0;
    var RIM_m_obsh_zad9 = 0;
    var RIM_m_obsh_zad10 = 0;
    var RIM_m_obsh_zad11 = 0;
    var RIM_m_obsh_zad12 = 0;
    var RIM_m_obsh_zad13 = 0;
    var RIM_m_obsh_zad14 = 0;
    var RIM_m_obsh_zad15 = 0;
    var RIM_m_obsh_zad16 = 0;
    var RIM_m_obsh_zad17 = 0;
    var RIM_m_obsh_zad18 = 0;
    var RIM_m_obsh_zad19 = 0;

    var RIM_r_obsh_zad1 = 0;
    var RIM_r_obsh_zad2 = 0;
    var RIM_r_obsh_zad3 = 0;
    var RIM_r_obsh_zad4 = 0;
    var RIM_r_obsh_zad5 = 0;
    var RIM_r_obsh_zad6 = 0;
    var RIM_r_obsh_zad7 = 0;
    var RIM_r_obsh_zad8 = 0;
    var RIM_r_obsh_zad9 = 0;
    var RIM_r_obsh_zad10 = 0;
    var RIM_r_obsh_zad11 = 0;
    var RIM_r_obsh_zad12 = 0;
    var RIM_r_obsh_zad13 = 0;
    var RIM_r_obsh_zad14 = 0;
    var RIM_r_obsh_zad15 = 0;
    var RIM_r_obsh_zad16 = 0;
    var RIM_r_obsh_zad17 = 0;
    var RIM_r_obsh_zad18 = 0;
    var RIM_r_obsh_zad19 = 0;
    var RIM_r_obsh_zad20 = 0;
    var RIM_r_obsh_zad21 = 0;
    var RIM_r_obsh_zad22 = 0;
    var RIM_r_obsh_zad23 = 0;
    var RIM_r_obsh_zad24 = 0;
    var RIM_r_obsh_zad25 = 0;
    var RIM_r_obsh_zad26 = 0;
    var RIM_r_obsh_zad27 = 0;
    
    var RIM_i_obsh_zad1 = 0;
    var RIM_i_obsh_zad2 = 0;
    var RIM_i_obsh_zad3 = 0;
    var RIM_i_obsh_zad4 = 0;
    var RIM_i_obsh_zad5 = 0;
    var RIM_i_obsh_zad6 = 0;
    var RIM_i_obsh_zad7 = 0;
    var RIM_i_obsh_zad8 = 0;
    var RIM_i_obsh_zad9 = 0;
    var RIM_i_obsh_zad10 = 0;
    var RIM_i_obsh_zad11 = 0;
    var RIM_i_obsh_zad12 = 0;
    var RIM_i_obsh_zad13 = 0;
    var RIM_i_obsh_zad14 = 0;
    var RIM_i_obsh_zad15 = 0;
    var RIM_i_obsh_zad16 = 0;
    var RIM_i_obsh_zad17 = 0;
    var RIM_i_obsh_zad18 = 0;
    var RIM_i_obsh_zad19 = 0;
    var RIM_i_obsh_zad20 = 0;
    var RIM_i_obsh_zad21 = 0;
    var RIM_i_obsh_zad22 = 0;
    var RIM_i_obsh_zad23 = 0;
    var RIM_i_obsh_zad24 = 0;
    var RIM_i_obsh_zad25 = 0;
    var RIM_i_obsh_zad26 = 0;
    var RIM_i_obsh_zad27 = 0;
 * 









    var based_put = tp.file.find_tfile('ЕГЭ/sluj/cash/BASED');
        const dan_based = tp.app.metadataCache.getFileCache(based_put);
        const zag_based = dan_based.frontmatter;
        const keys_based = Object.keys(zag_based);
        
        

        var shet_dnei2 = zag_based?.shet_den;
        var shet_chass2 = zag_based?.shet_chass;
        var shet_propush2 = zag_based?.shet_propush;
        var shet_rim2 = zag_based?.shet_rim;
        var shet_chass_pos_rim2 = zag_based?.shet_chass_pos_rim;
        var shet_day_pos_rim2 = zag_based?.shet_day_pos_rim;

        var rel = shet_dnei2 + 1;
        return rel;
*/
