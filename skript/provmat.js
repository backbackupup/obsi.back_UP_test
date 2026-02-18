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
}*/




module.exports = async function (tp) {
    // дата
    var dateStr =  await tp.system.prompt("введи день по примеру 2026 02 08 обязательно через один пробел!");
    const [year, month, day] = dateStr.split(" ").map(Number);
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентебря", "Октября", "Ноября", "Декабря"];
    const date = new Date(year, month - 1, day);  
    const days = ["в воскресенье", "в понедельник", " во вторник", "в среду", "в четверг", "в пятницу", "в субботу"];
    const file = tp.file.find_tfile(tp.file.path(true));
    var ned = await tp.user.nedel(tp, dateStr);
    await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["nedel"] = ned });
    await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["data"] = dateStr});
    //запрос пользователю
    var bilo =  await tp.system.multi_suggester(["Шаблон", "Ниче не делал","Делал не по шаблону"], ["true", "false", "hz"], true, "Делал что то?\n Шаблон? или что то интереснее?))");

    // обработка запроса и еще несколько запросов на базе прошлого запроса это вообще кто то читает?
    if(bilo == "hz")
    {
    var f = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "математикой ЗаНиМалСя??");
    var fr = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "Русскым ЗаНиМалСя??");
    var fi = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "инфой мб ЗаНиМалСя??"); 
    var frim = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "рим был? тока честно"); 
    }
    if(bilo == "false")
    {
    var f = "false";
    var fr = "false";
    var fi = "false"; 
    var frim = "false";
    }
    if (bilo == "true")
    {
    var f = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["trueh", "false"], true, "математикой ЗаНиМалСя??");
    var fr = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["trueh", "false"], true, "Русскым ЗаНиМалСя??");
    var fi = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["trueh", "false"], true, "инфой мб ЗаНиМалСя??"); 
    var frim = "false";  
    }
 
    

        //переменные

    // принять данные из конфига
    var conf_file = tp.file.find_tfile('ЕГЭ/sluj/Config.md');
    var cache = tp.app.metadataCache.getFileCache(conf_file);
    var frontmatter = cache.frontmatter;
    var keys = Object.keys(frontmatter);
    var shab_edin = frontmatter[keys[0]];
    var shab_mnoj = frontmatter[keys[1]];
    var name_base = frontmatter[keys[2]].toString();



    var RIM_sumarI = 0;
    var RIM_sumarIN = 0;
    var RIM_sumarM = 0;
    var RIM_sumarMN = 0;
    var RIM_sumarR = 0;
    var RIM_sumarRN = 0;

    var based_data = dateStr.replace(" ", "_").replace(" ","_");
    await tp.file.move(`ЕГЭ/Дни/${based_data}`)
    // в ретурн
    var vr_obsh =``;
    
    var vr_matt =``;
    var vr_russ =``;
    var vr_Infa =``;

    var vr_matt_zad =``;
    var vr_russ_zad =``;
    var vr_Infa_zad =``;

    var vr_RIM = ``;
    var vr_RIM_matt = ``;
    var vr_RIM_russ = ``;
    var vr_RIM_Infa = ``;
    var vr_RIM_matt_zad = ``;
    var vr_RIM_russ_zad = ``;
    var vr_RIM_Infa_zad = ``;
    var out_put = `\n# ${date.getDate()} ${months[date.getMonth()]} ${days[date.getDay()]} для ЕГЭ было сделано:\n\n`;


    //запросы в базу данных переменные
    
    //отправка значений
    var RIM_matem_obsh_proc = 0;
    var RIM_russ_obsh_proc = 0;
    var RIM_infa_obsh_proc = 0;

    var m_zad = new Array(19).fill(0);
    var r_zad = new Array(27).fill(0);
    var i_zad = new Array(27).fill(0);
    
    var RIM_m_zad_obsh = new Array(19).fill(0);
    var RIM_r_zad_obsh = new Array(27).fill(0);
    var RIM_i_zad_obsh = new Array(27).fill(0);

    var RIM_m_zad_prav = new Array(19).fill(0);
    var RIM_r_zad_prav = new Array(27).fill(0);
    var RIM_i_zad_prav = new Array(27).fill(0);

    var RIM_m_zad_proc = new Array(19).fill(0);
    var RIM_r_zad_proc = new Array(27).fill(0);
    var RIM_i_zad_proc = new Array(27).fill(0);


    var mat_zad_plan_summ = new Array(0);
    var russ_zad_plan_summ = new Array(0);
    var inf_zad_plan_summ = new Array(0);

    var sumarI = 0;
    var sumarM = 0;
    var sumarR = 0;
        
    var rimflag = false;
    var rimflag_m = false;
    var rimflag_r = false;
    var rimflag_i = false;
    
    var matflag  = false;
    var rusflag = false;
    var infflag = false;

    var RIM_sumar_obsh = 0;
    var RIM_sumar_obshN = 0;
    var RIM_sumar_obsh_proc = 0;

    var mat_obsh = new Array(0);
    var mat_prav = new Array(0);

    var russ_obsh = new Array(0);
    var russ_prav = new Array(0);

    var infa_obsh = new Array(0);
    var infa_prav = new Array(0);

    // получение значений
    var shet_dnei2 = 0;
    var shet_chass2 = 0;
    var shet_propush2 = 0;
    var shet_rim2 = 0;
    var shet_chass_pos_rim2 = 0;
    var shet_day_pos_rim2 = 0;


    //const file = tp.file.find_tfile(tp.file.path(true));
     if (f == "true") {
        
        const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19"],  
            ["m_zad1", "m_zad2", "m_zad3", "m_zad4", "m_zad5", "m_zad6", "m_zad7", "m_zad8", "m_zad9", "m_zad10", "m_zad11", "m_zad12", "m_zad13", "m_zad14", "m_zad15", "m_zad16", "m_zad17", "m_zad18", "m_zad19"],
            true, 
            "введи какие задания делал по математике"
        );
        const arr = [];  
        for (let j = 0; j < i.length; j++) {
            var strok =  i[j];
            const p = await tp.system.prompt(`введи сколько в часах делал задание №${ strok.replace('m_zad', '')}`);
            const o = Number(p); 
            arr.push(o);
            sumarM = sumarM + o; 
        }

        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Matem"] = sumarM });
        for (let k = 0; k < i.length; k++) {
            let strok =  i[k];
            vr_matt_zad += `  на [задание №${strok.replace('m_zad', '')}](${strok}) ушло: ${arr[k]} часов\n`;
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[k]] = arr[k] });
            //result += `${i[k]}: ${arr[k]}\n`;
        }      
        vr_matt = `На [математику](mat_stat) в общем: ${sumarM} часов из которых:\n` + vr_matt_zad + `\n`;

        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('m_zad', ''));  
            m_zad[taskNum - 1] = arr[j];  
        }
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["matflag"] = true});
        matflag =true;
    
     for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/mat/${i[k]}`);
              const h = [];
    h.push(`\n|[[${based_data}]]|`);
    h.push(`${arr[k]}|`);
    h.push(` 0|`);
    h.push(` 0|`);
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
    
    if (f == "trueh") {
    const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19"],  
            ["m_zad1", "m_zad2", "m_zad3", "m_zad4", "m_zad5", "m_zad6", "m_zad7", "m_zad8", "m_zad9", "m_zad10", "m_zad11", "m_zad12", "m_zad13", "m_zad14", "m_zad15", "m_zad16", "m_zad17", "m_zad18", "m_zad19"],
            true, 
            "введи какие задания делал по математике"
        );
        if (fr == "false" && fi == "false")
        {
            var vrem = shab_edin / 2;
            sumarM = shab_edin;
            if (i.length != 1)
            {
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
            vr_matt = `На [математику](mat_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('m_zad', '')}](${i[0]}) ушло: ${shab_edin/2} часов\n  на задание №${i[1].replace('m_zad', '')} ушло: ${shab_edin/2} часов\n\n`;
            var arr = new Array(2).fill(shab_edin / 2);    
        }
            else
            {
                var vrem = shab_edin;
                const file = tp.file.find_tfile(tp.file.path(true));
               await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin });
               vr_matt = `На [математику](mat_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('m_zad', '')}](${i[0]}) ушло: ${shab_edin} часов\n\n`;
               var arr = new Array(1).fill(shab_edin);
            }
            

            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Matem"] = shab_edin });
        }
        else
        {
            var vrem = shab_mnoj;
            sumarM = shab_mnoj;
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Matem"] = shab_mnoj });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_mnoj });
            var arr = new Array(1).fill(shab_mnoj); 
            vr_matt = `На [математику](mat_stat) в общем: ${shab_mnoj} часов из которых:\n  на [задание №${i[0].replace('m_zad', '')}](${i[0]}) ушло: ${shab_mnoj} часов\n\n`;
        }
        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('m_zad', ''));  
            m_zad[taskNum - 1] = arr[j];  
        }

        for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/mat/${i[k]}`);
              const h = [];

        h.push(`\n|[[${based_data}]]|`);
        h.push(`${vrem}|`);
        h.push(` 0|`);
        h.push(` 0|`);
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

        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["matflag"] = true});
        matflag =true;
    }

    if (fr == 'true') {
        
        const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["r_zad1", "r_zad2", "r_zad3", "r_zad4", "r_zad5", "r_zad6", "r_zad7", "r_zad8", "r_zad9", "r_zad10", "r_zad11", "r_zad12", "r_zad13", "r_zad14", "r_zad15", "r_zad16", "r_zad17", "r_zad18", "r_zad19", "r_zad20", "r_zad21", "r_zad22", "r_zad23", "r_zad24", "r_zad25", "r_zad26", "r_zad27"],
            true, 
            "введи какие задания делал по Русскому"
        );
        
        const arr = [];  
        for (let j = 0; j < i.length; j++) {
            var strok =  i[j];
            const p = await tp.system.prompt(`введи сколько в часах делал задание №${ strok.replace('r_zad', '')}`);
            const o = Number(p); 
            arr.push(o);
            sumarR = sumarR + o; 
        }
        
        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Russ"] = sumarR });
        for (let k = 0; k < i.length; k++) {
            let strok =  i[k];
            vr_russ_zad += `  на [задание №${strok.replace('r_zad', '')}](${strok}) ушло: ${arr[k]} часов\n`;
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[k]] = arr[k] });
            //result += `${i[k]}: ${arr[k]}\n`;
        }
        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('r_zad', ''));  
            r_zad[taskNum - 1] = arr[j];  
        }      
        vr_russ = ` На [русский](russ_stat) в общем: ${sumarR} часов из которых:\n` + vr_russ_zad + `\n`;
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rusflag"] = true});
        rusflag = true;
        
             for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/russ/${i[k]}`);
              const h = [];
    h.push(`\n|[[${based_data}]]|`);
    h.push(`${arr[k]}|`);
    h.push(` 0|`);
    h.push(` 0|`);
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

    else if (fr == "trueh") {
        const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["r_zad1", "r_zad2", "r_zad3", "r_zad4", "r_zad5", "r_zad6", "r_zad7", "r_zad8", "r_zad9", "r_zad10", "r_zad11", "r_zad12", "r_zad13", "r_zad14", "r_zad15", "r_zad16", "r_zad17", "r_zad18", "r_zad19", "r_zad20", "r_zad21", "r_zad22", "r_zad23", "r_zad24", "r_zad25", "r_zad26", "r_zad27"],
            true, 
            "введи какие задания делал по Русскому"
        );
        if (f == "false" && fi == "false")
        {
            sumarR = shab_edin;
            if (i.length != 1)
            {
                var vrem = shab_edin / 2;
                const file = tp.file.find_tfile(tp.file.path(true));
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
                var arr = new Array(2).fill(shab_edin / 2);
                vr_russ = `На [русский](russ_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('r_zad', '')}](${i[0]}) ушло: ${shab_edin/2} часов\n  на [задание №${i[1].replace('r_zad', '')}](${i[0]}) ушло: ${shab_edin/2} часов\n\n`;
            }
            else
            {
                var vrem = shab_edin;
                const file = tp.file.find_tfile(tp.file.path(true));
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin});
                var arr = new Array(1).fill(shab_edin);
                vr_russ = `На [русский](russ_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('r_zad', '')}](${i[0]}) ушло: ${shab_edin} часов\n\n`
            }

            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Russ"] = shab_edin });
        }
        else
        {
            var vrem = shab_mnoj;
            sumarR = shab_mnoj;
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Russ"] = shab_mnoj });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_mnoj });
            var arr = new Array(1).fill(shab_mnoj);
            vr_russ = `На [русский](russ_stat) в общем: ${shab_mnoj} часов из которых:\n  на [задание №${i[0].replace('r_zad', '')}](${i[0]}) ушло: ${shab_mnoj} часов\n\n`;
        }

        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('m_zad', ''));  
            m_zad[taskNum - 1] = arr[j];  
        }


        for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/russ/${i[k]}`);
              const h = [];

        h.push(`\n|[[${based_data}]]|`);
        h.push(`${vrem}|`);
        h.push(` 0|`);
        h.push(` 0|`);
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


        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('r_zad', ''));  
            r_zad[taskNum - 1] = arr[j];  
        }   
        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rusflag"] = true});
        rusflag = true;



    }

        if (fi == 'true') {
        
        const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["i_zad1", "i_zad2", "i_zad3", "i_zad4", "i_zad5", "i_zad6", "i_zad7", "i_zad8", "i_zad9", "i_zad10", "i_zad11", "i_zad12", "i_zad13", "i_zad14", "i_zad15", "i_zad16", "i_zad17", "i_zad18", "i_zad19", "i_zad20", "i_zad21", "i_zad22", "i_zad23", "i_zad24", "i_zad25", "i_zad26", "i_zad27"],
            true, 
            "введи какие задания делал по инфе"
        );
        
        const arr = [];  
        for (let j = 0; j < i.length; j++) {
            var strok =  i[j];
            const p = await tp.system.prompt(`введи сколько в часах делал задание №${ strok.replace('i_zad', '')}`);
            const o = Number(p); 
            arr.push(o);
            sumarI = sumarI + o; 
        }
        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Infa"] = sumarI });
        for (let k = 0; k < i.length; k++) {
            let strok =  i[k];
            vr_Infa_zad += `  на [задание №${strok.replace('i_zad', '')}](${strok}) ушло: ${arr[k]} часов\n`;
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[k]] = arr[k] });
            //result += `${i[k]}: ${arr[k]}\n`;
        }
        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('i_zad', ''));  
            i_zad[taskNum - 1] = arr[j];  
        }        
        vr_Infa = ` На [информатику](infa_stat) в общем: ${sumarI} часов из которых:\n` + vr_Infa_zad + `\n`;
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["infflag"] = true});
        infflag = true;

         for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/infa/${i[k]}`);
              const h = [];
    h.push(`\n|[[${based_data}]]|`);
    h.push(`${arr[k]}|`);
    h.push(` 0|`);
    h.push(` 0|`);
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
    else if (fi == "trueh") {
        const i = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["i_zad1", "i_zad2", "i_zad3", "i_zad4", "i_zad5", "i_zad6", "i_zad7", "i_zad8", "i_zad9", "i_zad10", "i_zad11", "i_zad12", "i_zad13", "i_zad14", "i_zad15", "i_zad16", "i_zad17", "i_zad18", "i_zad19", "i_zad20", "i_zad21", "i_zad22", "i_zad23", "i_zad24", "i_zad25", "i_zad26", "i_zad27"],
            true, 
            "введи какие задания делал по инфе"
        );

        if (f == "false" && fr == "false")
        {
            sumarI = shab_edin;
            if (i.length != 1)
            {
            var vrem = shab_edin / 2;
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin / 2 });
            var arr = new Array(2).fill(shab_edin / 2);
            vr_Infa = `На [информатику](infa_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('i_zad', '')}](${i[0]}) ушло: ${shab_edin/2} часов\n  на [задание №${i[1].replace('i_zad', '')}](${i[0]}) ушло: ${shab_edin/2} часов\n\n`;
            }
            else
            {
                var vrem = shab_edin;
                const file = tp.file.find_tfile(tp.file.path(true));
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_edin});
                var arr = new Array(1).fill(shab_edin);
                vr_Infa = `На [информатику](infa_stat) в общем: ${shab_edin} часов из которых:\n  на [задание №${i[0].replace('i_zad', '')}](${i[0]}) ушло: ${shab_edin} часов\n\n`
            }
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Infa"] = shab_edin });
        }
        else
        {
            var vrem = shab_mnoj;
            sumarI = shab_mnoj;
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["Infa"] = shab_mnoj });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[i[0]] = shab_mnoj });
            var arr = new Array(1).fill(shab_mnoj);
            vr_Infa = `На [информатику](infa_stat) в общем: ${shab_mnoj} часов из которых:\n  на [задание №${i[0].replace('i_zad', '')}](${i[0]}) ушло: ${shab_mnoj} часов\n\n`;
        }


        for (let k = 0; k < i.length; k++) {
            const file = tp.file.find_tfile(`ЕГЭ/subjects/infa/${i[k]}`);
              const h = [];

        h.push(`\n|[[${based_data}]]|`);
        h.push(`${vrem}|`);
        h.push(` 0|`);
        h.push(` 0|`);
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


        for (let j = 0; j < i.length; j++)
        {
            const taskNum = parseInt(i[j].replace('i_zad', ''));  
            i_zad[taskNum - 1] = arr[j];  
        }   
        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["infflag"] = true});
        infflag = true;
    }





 if (frim == 'true') {
        var f1, fr1, fi1 = 0; 
        f1 = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "математикой ЗаНиМалСя в риме??");
        fr1 = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "русским ЗаНиМалСя в риме??");
        fi1 = await tp.system.multi_suggester(["КоНеЧнО", "НЕТ(", ], ["true", "false"], true, "инфой ЗаНиМалСя в риме??");
        
 
        const file = tp.file.find_tfile(tp.file.path(true));
        if (f1 == 'true') {
            
            const i = await tp.system.multi_suggester(
                ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19"],  
                ["m_zad1", "m_zad2", "m_zad3", "m_zad4", "m_zad5", "m_zad6", "m_zad7", "m_zad8", "m_zad9", "m_zad10", "m_zad11", "m_zad12", "m_zad13", "m_zad14", "m_zad15", "m_zad16", "m_zad17", "m_zad18", "m_zad19"],
                true, 
                "введи какие задания делал по математике"
            );
            
            const arr = [];
            const arrn = [];  
            for (let j = 0; j < i.length; j++) {
                var strok =  i[j];
                const p = await tp.system.prompt(`введи сколько сделал заданий всего по математике №${ strok.replace('m_zad', '')}`);
                const o = Number(p); 
                arr.push(o);
                RIM_sumarM = RIM_sumarM + o; 
                
                const np = await tp.system.prompt(`введи сколько сделал правильных заданий по математике №${ strok.replace('m_zad', '')}`);
                const on = Number(np); 
                arrn.push(on);
                RIM_sumarMN = RIM_sumarMN + on; 
            }
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh"] = RIM_sumarM });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh_prav"] = RIM_sumarMN });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh_proc"] = Math.round((RIM_sumarMN / RIM_sumarM) * 100 )});
            RIM_matem_obsh_proc = (RIM_sumarMN / RIM_sumarM) * 100;
            for (let k = 0; k < i.length; k++) {
                var osh =  i[k];
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('m_zad', 'RIM_m_obsh_zad')] = arr[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('m_zad', 'RIM_m_prav_zad')] = arrn[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('m_zad', 'RIM_m_proc_zad')] = Math.round((arrn[k] / arr[k])*100 )});
                vr_RIM_matt_zad +=`  [Задание${osh.replace('m_zad', '')}](${osh}) было выполнено правильно ${arrn[k]} из ${arr[k]}. Это ${Math.round((arrn[k] / arr[k])*100)}%\n`;
                //result += `${i[k]}: ${arr[k]}\n`;
            }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('m_zad', ''));  
                    RIM_m_zad_obsh[taskNum - 1] = arr[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('m_zad', ''));  
                    RIM_m_zad_prav[taskNum - 1] = arrn[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('m_zad', ''));  
                    RIM_m_zad_proc[taskNum - 1] = arrn[j] / arr[j] * 100;  
                }
                vr_RIM_matt = `По [математике](mat_stat) количество выполненных задач составило ${RIM_sumarM} из ${RIM_sumarMN}. Это ${Math.round((RIM_sumarMN / RIM_sumarM) * 100 )}%. При этом:\n\n` + vr_RIM_matt_zad + "\n";   
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag"] = true});
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag_m"] = true});
        rimflag = true;
        rimflag_m = true;
            

        for (let k = 0; k < i.length; k++)
    {
        
    const file = tp.file.find_tfile(`ЕГЭ/subjects/mat/${i[k]}`);

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
    //return cellValue;
    if(cellValue.toString() == `[[${based_data.toString()}]]`)
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
    if(j == 1)
    {
    let r = rerke.slice(0, chisl + 1) + arr[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 2)
    {
    let r = rerke.slice(0, chisl + 1) + arrn[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 3)
    {
    let r = rerke.slice(0, chisl + 1) + ((arrn[k] / arr[k]) * 100).toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
        }
    //flager = 0;
        }
        else
        {
        const file = tp.file.find_tfile(`ЕГЭ/subjects/mat/${i[k]}`);
    var h = [];
    h.push(`\n| [[${based_data}]] |`);
    h.push(`0|`);
    h.push(`${arr[k]}|`);
    h.push(`${arrn[k]}|`);
    h.push(`${(arrn[k] / arr[k]) * 100}|`);

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


        }

         if (fr1 == 'true') {
            
            const i = await tp.system.multi_suggester(
                ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
                ["r_zad1", "r_zad2", "r_zad3", "r_zad4", "r_zad5", "r_zad6", "r_zad7", "r_zad8", "r_zad9", "r_zad10", "r_zad11", "r_zad12", "r_zad13", "r_zad14", "r_zad15", "r_zad16", "r_zad17", "r_zad18", "r_zad19", "r_zad20", "r_zad21", "r_zad22", "r_zad23", "r_zad24", "r_zad25", "r_zad26", "r_zad27"],
                true, 
                "введи какие задания делал по Русскому"
            );
            
            const arr = [];
            const arrn = [];  
            for (let j = 0; j < i.length; j++) {
                var strok =  i[j];
                const p = await tp.system.prompt(`введи сколько сделал заданий всего по русскому №${ strok.replace('r_zad', '')}`);
                const o = Number(p); 
                arr.push(o);
                RIM_sumarR = RIM_sumarR + o; 
                
                const np = await tp.system.prompt(`введи сколько сделал правильных заданий по русскому №${ strok.replace('r_zad', '')}`);
                const on = Number(np); 
                arrn.push(on);
                RIM_sumarRN = RIM_sumarRN + on; 
            }
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_russ_obsh"] = RIM_sumarR });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_russ_obsh_prav"] = RIM_sumarRN });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_russ_obsh_proc"] = Math.round((RIM_sumarRN / RIM_sumarR) * 100 )});
            RIM_russ_obsh_proc =  (RIM_sumarRN / RIM_sumarR) * 100;
            for (let k = 0; k < i.length; k++) {
                var osh =  i[k];
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('r_zad', 'RIM_r_obsh_zad')] = arr[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('r_zad', 'RIM_r_prav_zad')] = arrn[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('r_zad', 'RIM_r_proc_zad')] = Math.round((arrn[k] / arr[k])*100 )});
                vr_RIM_russ_zad +=`  [Задание${osh.replace('r_zad', '')}](${osh}) было выполнено правильно ${arrn[k]} из ${arr[k]}. Это ${Math.round((arrn[k] / arr[k])*100) }%\n`;
                //result += `${i[k]}: ${arr[k]}\n`;
            }      
            vr_RIM_russ = `По [русскому](russ_stat) количество выполненных задач составило ${RIM_sumarR} из ${RIM_sumarRN}. Это ${Math.round((RIM_sumarRN / RIM_sumarR) * 100 )}%. При этом:\n\n` + vr_RIM_russ_zad + "\n";   
            
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('r_zad', ''));  
                    RIM_r_zad_obsh[taskNum - 1] = arr[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('r_zad', ''));  
                    RIM_r_zad_prav[taskNum - 1] = arrn[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('r_zad', ''));  
                    RIM_r_zad_proc[taskNum - 1] = arrn[j] / arr[j] * 100;  
                }
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag"] = true});
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag_r"] = true});
        rimflag = true;
        rimflag_r = true;
        
     for (let k = 0; k < i.length; k++)
    {
        
    const file = tp.file.find_tfile(`ЕГЭ/subjects/russ/${i[k]}`);

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
    //return cellValue;
    if(cellValue.toString() == `[[${based_data.toString()}]]`)
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
    if(j == 1)
    {
    let r = rerke.slice(0, chisl + 1) + arr[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 2)
    {
    let r = rerke.slice(0, chisl + 1) + arrn[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 3)
    {
    let r = rerke.slice(0, chisl + 1) + ((arrn[k] / arr[k]) * 100).toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
        }
    //flager = 0;
        }
        else
        {
        const file = tp.file.find_tfile(`ЕГЭ/subjects/russ/${i[k]}`);
    var h = [];
    h.push(`\n| [[${based_data}]] |`);
    h.push(`0|`);
    h.push(`${arr[k]}|`);
    h.push(`${arrn[k]}|`);
    h.push(`${(arrn[k] / arr[k]) * 100}|`);

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
    
    }


            if (fi1 == 'true') {
            
            const i = await tp.system.multi_suggester(
                ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
                ["i_zad1", "i_zad2", "i_zad3", "i_zad4", "i_zad5", "i_zad6", "i_zad7", "i_zad8", "i_zad9", "i_zad10", "i_zad11", "i_zad12", "i_zad13", "i_zad14", "i_zad15", "i_zad16", "i_zad17", "i_zad18", "i_zad19", "i_zad20", "i_zad21", "i_zad22", "i_zad23", "i_zad24", "i_zad25", "i_zad26", "i_zad27"],
                true, 
                "введи какие задания делал по инфе"
            );
            
            const arr = [];
            const arrn = [];  
            for (let j = 0; j < i.length; j++) {
                var strok =  i[j];
                const p = await tp.system.prompt(`введи сколько сделал заданий всего по инфе №${ strok.replace('i_zad', '')}`);
                const o = Number(p); 
                arr.push(o);
                RIM_sumarI = RIM_sumarI + o; 
                
                const np = await tp.system.prompt(`введи сколько сделал правильных заданий по инфе №${ strok.replace('i_zad', '')}`);
                const on = Number(np); 
                arrn.push(on);
                RIM_sumarIN = RIM_sumarIN + on; 
            }
            const file = tp.file.find_tfile(tp.file.path(true));
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_infa_obsh"] = RIM_sumarI });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_infa_obsh_prav"] = RIM_sumarIN });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_infa_obsh_proc"] = Math.round((RIM_sumarIN / RIM_sumarI) * 100 )});
            RIM_infa_obsh_proc = (RIM_sumarIN / RIM_sumarI) * 100 ;
            for (let k = 0; k < i.length; k++) {
                var osh =  i[k];
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('i_zad', 'RIM_i_obsh_zad')] = arr[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('i_zad', 'RIM_i_prav_zad')] = arrn[k] });
                await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[osh.replace('i_zad', 'RIM_i_proc_zad')] = Math.round((arrn[k] / arr[k])*100)});
                vr_RIM_Infa_zad+=`  [Задание${osh.replace('i_zad', '')}](${osh}) было выполнено правильно ${arrn[k]} из  ${arr[k]}. Это ${Math.round((arrn[k] / arr[k])*100)}%\n`;
                //result += `${i[k]}: ${arr[k]}\n`;
            }     
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('i_zad', ''));  
                    RIM_i_zad_obsh[taskNum - 1] = arr[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('i_zad', ''));  
                    RIM_i_zad_prav[taskNum - 1] = arrn[j];  
                }
            for (let j = 0; j < i.length; j++)
                {
                    const taskNum = parseInt(i[j].replace('i_zad', ''));  
                    RIM_i_zad_proc[taskNum - 1] = arrn[j] / arr[j] * 100;  
                } 
            vr_RIM_Infa = `По [информатике](infa_stat) количество выполненных задач составило ${RIM_sumarI} из  ${RIM_sumarIN}. Это ${Math.round((RIM_sumarIN / RIM_sumarI) * 100 )}%. При этом:\n\n` + vr_RIM_Infa_zad + "\n";   
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag"] = true});
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["rimflag_i"] = true});
        rimflag = true;
        rimflag_i = true;
            
     for (let k = 0; k < i.length; k++)
    {
        
    const file = tp.file.find_tfile(`ЕГЭ/subjects/infa/${i[k]}`);

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
    //return cellValue;
    if(cellValue.toString() == `[[${based_data.toString()}]]`)
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
    if(j == 1)
    {
    let r = rerke.slice(0, chisl + 1) + arr[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 2)
    {
    let r = rerke.slice(0, chisl + 1) + arrn[k].toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
    else if(j == 3)
    {
    let r = rerke.slice(0, chisl + 1) + ((arrn[k] / arr[k]) * 100).toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(file, r);
    }
    
        }
    //flager = 0;
        }
        else
        {
        const file = tp.file.find_tfile(`ЕГЭ/subjects/infa/${i[k]}`);
    var h = [];
    h.push(`\n| [[${based_data}]] |`);
    h.push(`0|`);
    h.push(`${arr[k]}|`);
    h.push(`${arrn[k]}|`);
    h.push(`${(arrn[k] / arr[k]) * 100}|`);

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
    
    }
        RIM_sumar_obsh = RIM_sumarI + RIM_sumarR + RIM_sumarM;
        RIM_sumar_obshN = RIM_sumarIN + RIM_sumarRN + RIM_sumarMN;
        RIM_sumar_obsh_proc = (RIM_sumarIN + RIM_sumarRN + RIM_sumarMN) / (RIM_sumarI + RIM_sumarR + RIM_sumarM) * 100;
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["RIM_obsh"] = RIM_sumar_obsh});
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["RIM_obsh_prav"] = RIM_sumar_obshN});
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["RIM_obsh_proc"] = Math.round(RIM_sumar_obsh_proc)});
        vr_RIM = `## Выполнено ${RIM_sumarI + RIM_sumarR + RIM_sumarM} заданий РИМ, из которых ${RIM_sumarIN + RIM_sumarRN + RIM_sumarMN} выполнено правильно. Это ${Math.round((RIM_sumarIN + RIM_sumarRN + RIM_sumarMN) / (RIM_sumarI + RIM_sumarR + RIM_sumarM) * 100)}%. При этом:\n\n` + vr_RIM_matt + vr_RIM_russ + vr_RIM_Infa;
} 
        var based_put = tp.file.find_tfile(`ЕГЭ/sluj/cash/${name_base}.md`);
        const dan_based = tp.app.metadataCache.getFileCache(based_put);
        const zag_based = dan_based.frontmatter;      

        var seria = zag_based?.seria;
        var shet_dnei2 = zag_based?.shet_dnei;
        var shet_chass2 = zag_based?.shet_chass;
        var shet_propush2 = zag_based?.shet_propush;
        var shet_rim2 = zag_based?.shet_rim;
        var shet_chass_pos_rim2 = zag_based?.shet_chass_pos_rim;
        var shet_day_pos_rim2 = zag_based?.shet_day_pos_rim;

        var shet_RIM_matem_obsh = zag_based?.shet_RIM_matem_obsh;
        var shet_RIM_matem_obsh_prav = zag_based?.shet_RIM_matem_obsh_prav;
        //var shet_RIM_matem_obsh_proc = zag_based?.shet_RIM_matem_obsh_proc;

        var shet_RIM_russ_obsh = zag_based?.shet_RIM_russ_obsh;
        var shet_RIM_russ_obsh_prav = zag_based?.shet_RIM_russ_obsh_prav;
        //var shet_RIM_russ_obsh_proc = zag_based?.shet_RIM_russ_obsh_proc;

        var shet_RIM_infa_obsh = zag_based?.shet_RIM_infa_obsh;
        var shet_RIM_infa_obsh_prav = zag_based?.shet_RIM_infa_obsh_prav;
        //var shet_RIM_infa_obsh_proc = zag_based?.shet_RIM_infa_obsh_proc;
        if(shet_dnei2 % 7 == 0)
        {
            await tp.file.create_new(`---
schet_cass: 0
seria: 0
shet_propush: 0
shet_rim: 0
shet_chass_pos_rim: 0
shet_day_pos_rim: 0
shet_chass: 0
shet_dnei: 0
shet_RIM_matem_obsh: 0
shet_RIM_matem_obsh_prav: 0
shet_RIM_matem_obsh_proc: 0
shet_RIM_russ_obsh: 0
shet_RIM_russ_obsh_prav: 0
shet_RIM_russ_obsh_proc: 0
shet_RIM_infa_obsh: 0
shet_RIM_infa_obsh_prav: 0
shet_RIM_infa_obsh_proc: 0
---

| день: | день недели: | счетчик часов в этот день: | серия: | количество часов после последнего рима: | количество дней после последнего рима: | часов потрачено на день: | флаг [математике](mat_stat): | флаг [русского](russ_stat): | флаг [информатике](infa_stat): | [часов на задание№1](m_zad1) по [матеметике](mat_stat) | [часов на задание№2](m_zad2) по [матеметике](mat_stat) | [часов на задание№3](m_zad3) по [матеметике](mat_stat) | [часов на задание№4](m_zad4) по [матеметике](mat_stat) | [часов на задание№5](m_zad5) по [матеметике](mat_stat) | [часов на задание№6](m_zad6) по [матеметике](mat_stat) | [часов на задание№7](m_zad7) по [матеметике](mat_stat) | [часов на задание№8](m_zad8) по [матеметике](mat_stat) | [часов на задание№9](m_zad9) по [матеметике](mat_stat) | [часов на задание№10](m_zad10) по [матеметике](mat_stat) | [часов на задание№11](m_zad11) по [матеметике](mat_stat) | [часов на задание№12](m_zad12) по [матеметике](mat_stat) | [часов на задание№13](m_zad13) по [матеметике](mat_stat) | [часов на задание№14](m_zad14) по [матеметике](mat_stat) | [часов на задание№15](m_zad15) по [матеметике](mat_stat) | [часов на задание№16](m_zad16) по [матеметике](mat_stat) | [часов на задание№17](m_zad17) по [матеметике](mat_stat) | [часов на задание№18](m_zad18) по [матеметике](mat_stat) | [часов на задание№19](m_zad19) по [матеметике](mat_stat) | [часов на задание№1](r_zad1) по [русскому](russ_stat) | [часов на задание№2](r_zad2) по [русскому](russ_stat) | [часов на задание№3](r_zad3) по [русскому](russ_stat) | [часов на задание№4](r_zad4) по [русскому](russ_stat) | [часов на задание№5](r_zad5) по [русскому](russ_stat) | [часов на задание№6](r_zad6) по [русскому](russ_stat) | [часов на задание№7](r_zad7) по [русскому](russ_stat) | [часов на задание№8](r_zad8) по [русскому](russ_stat) | [часов на задание№9](r_zad9) по [русскому](russ_stat) | [часов на задание№10](r_zad10) по [русскому](russ_stat) | [часов на задание№11](r_zad11) по [русскому](russ_stat) | [часов на задание№12](r_zad12) по [русскому](russ_stat) | [часов на задание№13](r_zad13) по [русскому](russ_stat) | [часов на задание№14](r_zad14) по [русскому](russ_stat) | [часов на задание№15](r_zad15) по [русскому](russ_stat) | [часов на задание№16](r_zad16) по [русскому](russ_stat) | [часов на задание№17](r_zad17) по [русскому](russ_stat) | [часов на задание№18](r_zad18) по [русскому](russ_stat) | [часов на задание№19](r_zad19) по [русскому](russ_stat) | [часов на задание№20](r_zad20) по [русскому](russ_stat) | [часов на задание№21](r_zad21) по [русскому](russ_stat) | [часов на задание№22](r_zad22) по [русскому](russ_stat) | [часов на задание№23](r_zad23) по [русскому](russ_stat) | [часов на задание№24](r_zad24) по [русскому](russ_stat) | [часов на задание№25](r_zad25) по [русскому](russ_stat) | [часов на задание№26](r_zad26) по [русскому](russ_stat) | [часов на задание№27](r_zad27) по [русскому](russ_stat) | [часов на задание№1](i_zad1) по [информатике](infa_stat) | [часов на задание№2](i_zad2) по [информатике](infa_stat) | [часов на задание№3](i_zad3) по [информатике](infa_stat) | [часов на задание№4](i_zad4) по [информатике](infa_stat) | [часов на задание№5](i_zad5) по [информатике](infa_stat) | [часов на задание№6](i_zad6) по [информатике](infa_stat) | [часов на задание№7](i_zad7) по [информатике](infa_stat) | [часов на задание№8](i_zad8) по [информатике](infa_stat) | [часов на задание№9](i_zad9) по [информатике](infa_stat) | [часов на задание№10](i_zad10) по [информатике](infa_stat) | [часов на задание№11](i_zad11) по [информатике](infa_stat) | [часов на задание№12](i_zad12) по [информатике](infa_stat) | [часов на задание№13](i_zad13) по [информатике](infa_stat) | [часов на задание№14](i_zad14) по [информатике](infa_stat) | [часов на задание№15](i_zad15) по [информатике](infa_stat) | [часов на задание№16](i_zad16) по [информатике](infa_stat) | [часов на задание№17](i_zad17) по [информатике](infa_stat) | [часов на задание№18](i_zad18) по [информатике](infa_stat) | [часов на задание№19](i_zad19) по [информатике](infa_stat) | [часов на задание№20](i_zad20) по [информатике](infa_stat) | [часов на задание№21](i_zad21) по [информатике](infa_stat) | [часов на задание№22](i_zad22) по [информатике](infa_stat) | [часов на задание№23](i_zad23) по [информатике](infa_stat) | [часов на задание№24](i_zad24) по [информатике](infa_stat) | [часов на задание№25](i_zad25) по [информатике](infa_stat) | [часов на задание№26](i_zad26) по [информатике](infa_stat) | [часов на задание№27](i_zad27) по [информатике](infa_stat) | флаг РИМ: | Все задания по РИМу: | Все правильные задания по РИМу: | процент выполненых заданий РИМа: | флаг [математики](mat_stat) РИМ: | Все задания по [математике](mat_stat) в РИМе: | Все правильные задания по [математике](mat_stat) в РИМе: | процент выполненых заданий [математики](mat_stat) РИМа: | всех [заданий№1](m_zad1) по [матеметике](mat_stat) в РИМе | всех [заданий№2](m_zad2) по [матеметике](mat_stat) в РИМе | всех [заданий№3](m_zad3) по [матеметике](mat_stat) в РИМе | всех [заданий№4](m_zad4) по [матеметике](mat_stat) в РИМе | всех [заданий№5](m_zad5) по [матеметике](mat_stat) в РИМе | всех [заданий№6](m_zad6) по [матеметике](mat_stat) в РИМе | всех [заданий№7](m_zad7) по [матеметике](mat_stat) в РИМе | всех [заданий№8](m_zad8) по [матеметике](mat_stat) в РИМе | всех [заданий№9](m_zad9) по [матеметике](mat_stat) в РИМе | всех [заданий№10](m_zad10) по [матеметике](mat_stat) в РИМе | всех [заданий№11](m_zad11) по [матеметике](mat_stat) в РИМе | всех [заданий№12](m_zad12) по [матеметике](mat_stat) в РИМе | всех [заданий№13](m_zad13) по [матеметике](mat_stat) в РИМе | всех [заданий№14](m_zad14) по [матеметике](mat_stat) в РИМе | всех [заданий№15](m_zad15) по [матеметике](mat_stat) в РИМе | всех [заданий№16](m_zad16) по [матеметике](mat_stat) в РИМе | всех [заданий№17](m_zad17) по [матеметике](mat_stat) в РИМе | всех [заданий№18](m_zad18) по [матеметике](mat_stat) в РИМе | всех [заданий№19](m_zad19) по [матеметике](mat_stat) в РИМе | правильных [заданий№1](r_zad1) по [матеметике](mat_stat) в РИМе | правильных [заданий№2](r_zad2) по [матеметике](mat_stat) в РИМе | правильных [заданий№3](r_zad3) по [матеметике](mat_stat) в РИМе | правильных [заданий№4](r_zad4) по [матеметике](mat_stat) в РИМе | правильных [заданий№5](r_zad5) по [матеметике](mat_stat) в РИМе | правильных [заданий№6](r_zad6) по [матеметике](mat_stat) в РИМе | правильных [заданий№7](r_zad7) по [матеметике](mat_stat) в РИМе | правильных [заданий№8](r_zad8) по [матеметике](mat_stat) в РИМе | правильных [заданий№9](r_zad9) по [матеметике](mat_stat) в РИМе | правильных [заданий№10](r_zad10) по [матеметике](mat_stat) в РИМе | правильных [заданий№11](r_zad11) по [матеметике](mat_stat) в РИМе | правильных [заданий№12](r_zad12) по [матеметике](mat_stat) в РИМе | правильных [заданий№13](r_zad13) по [матеметике](mat_stat) в РИМе | правильных [заданий№14](r_zad14) по [матеметике](mat_stat) в РИМе | правильных [заданий№15](r_zad15) по [матеметике](mat_stat) в РИМе | правильных [заданий№16](r_zad16) по [матеметике](mat_stat) в РИМе | правильных [заданий№17](r_zad17) по [матеметике](mat_stat) в РИМе | правильных [заданий№18](r_zad18) по [матеметике](mat_stat) в РИМе | правильных [заданий№19](r_zad19) по [матеметике](mat_stat) в РИМе | правильных [заданий№20](r_zad20) по [матеметике](mat_stat) в РИМе | правильных [заданий№21](r_zad21) по [матеметике](mat_stat) в РИМе | правильных [заданий№22](r_zad22) по [матеметике](mat_stat) в РИМе | правильных [заданий№23](r_zad23) по [матеметике](mat_stat) в РИМе | правильных [заданий№24](r_zad24) по [матеметике](mat_stat) в РИМе | правильных [заданий№25](r_zad25) по [матеметике](mat_stat) в РИМе | правильных [заданий№26](r_zad26) по [матеметике](mat_stat) в РИМе | правильных [заданий№27](r_zad27) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№1](i_zad1) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№2](i_zad2) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№3](i_zad3) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№4](i_zad4) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№5](i_zad5) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№6](i_zad6) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№7](i_zad7) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№8](i_zad8) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№9](i_zad9) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№10](i_zad10) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№11](i_zad11) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№12](i_zad12) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№13](i_zad13) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№14](i_zad14) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№15](i_zad15) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№16](i_zad16) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№17](i_zad17) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№18](i_zad18) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№19](i_zad19) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№20](i_zad20) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№21](i_zad21) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№22](i_zad22) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№23](i_zad23) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№24](i_zad24) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№25](i_zad25) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№26](i_zad26) по [матеметике](mat_stat) в РИМе | процент выполнения [заданий№27](i_zad27) по [матеметике](mat_stat) в РИМе | флаг [русского](russ_stat) РИМ: | Все задания по [русскому](russ_stat) в РИМе: | Все правильные задания по [русскому](russ_stat) в РИМе: | процент выполненых заданий [русского](russ_stat) РИМа: | всех [заданий№1](m_zad1) по [русскому](russ_stat) в РИМе | всех [заданий№2](m_zad2) по [русскому](russ_stat) в РИМе | всех [заданий№3](m_zad3) по [русскому](russ_stat) в РИМе | всех [заданий№4](m_zad4) по [русскому](russ_stat) в РИМе | всех [заданий№5](m_zad5) по [русскому](russ_stat) в РИМе | всех [заданий№6](m_zad6) по [русскому](russ_stat) в РИМе | всех [заданий№7](m_zad7) по [русскому](russ_stat) в РИМе | всех [заданий№8](m_zad8) по [русскому](russ_stat) в РИМе | всех [заданий№9](m_zad9) по [русскому](russ_stat) в РИМе | всех [заданий№10](m_zad10) по [русскому](russ_stat) в РИМе | всех [заданий№11](m_zad11) по [русскому](russ_stat) в РИМе | всех [заданий№12](m_zad12) по [русскому](russ_stat) в РИМе | всех [заданий№13](m_zad13) по [русскому](russ_stat) в РИМе | всех [заданий№14](m_zad14) по [русскому](russ_stat) в РИМе | всех [заданий№15](m_zad15) по [русскому](russ_stat) в РИМе | всех [заданий№16](m_zad16) по [русскому](russ_stat) в РИМе | всех [заданий№17](m_zad17) по [русскому](russ_stat) в РИМе | всех [заданий№18](m_zad18) по [русскому](russ_stat) в РИМе | всех [заданий№19](m_zad19) по [русскому](russ_stat) в РИМе | правильных [заданий№1](r_zad1) по [русскому](russ_stat) в РИМе | правильных [заданий№2](r_zad2) по [русскому](russ_stat) в РИМе | правильных [заданий№3](r_zad3) по [русскому](russ_stat) в РИМе | правильных [заданий№4](r_zad4) по [русскому](russ_stat) в РИМе | правильных [заданий№5](r_zad5) по [русскому](russ_stat) в РИМе | правильных [заданий№6](r_zad6) по [русскому](russ_stat) в РИМе | правильных [заданий№7](r_zad7) по [русскому](russ_stat) в РИМе | правильных [заданий№8](r_zad8) по [русскому](russ_stat) в РИМе | правильных [заданий№9](r_zad9) по [русскому](russ_stat) в РИМе | правильных [заданий№10](r_zad10) по [русскому](russ_stat) в РИМе | правильных [заданий№11](r_zad11) по [русскому](russ_stat) в РИМе | правильных [заданий№12](r_zad12) по [русскому](russ_stat) в РИМе | правильных [заданий№13](r_zad13) по [русскому](russ_stat) в РИМе | правильных [заданий№14](r_zad14) по [русскому](russ_stat) в РИМе | правильных [заданий№15](r_zad15) по [русскому](russ_stat) в РИМе | правильных [заданий№16](r_zad16) по [русскому](russ_stat) в РИМе | правильных [заданий№17](r_zad17) по [русскому](russ_stat) в РИМе | правильных [заданий№18](r_zad18) по [русскому](russ_stat) в РИМе | правильных [заданий№19](r_zad19) по [русскому](russ_stat) в РИМе | правильных [заданий№20](r_zad20) по [русскому](russ_stat) в РИМе | правильных [заданий№21](r_zad21) по [русскому](russ_stat) в РИМе | правильных [заданий№22](r_zad22) по [русскому](russ_stat) в РИМе | правильных [заданий№23](r_zad23) по [русскому](russ_stat) в РИМе | правильных [заданий№24](r_zad24) по [русскому](russ_stat) в РИМе | правильных [заданий№25](r_zad25) по [русскому](russ_stat) в РИМе | правильных [заданий№26](r_zad26) по [русскому](russ_stat) в РИМе | правильных [заданий№27](r_zad27) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№1](i_zad1) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№2](i_zad2) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№3](i_zad3) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№4](i_zad4) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№5](i_zad5) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№6](i_zad6) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№7](i_zad7) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№8](i_zad8) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№9](i_zad9) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№10](i_zad10) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№11](i_zad11) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№12](i_zad12) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№13](i_zad13) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№14](i_zad14) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№15](i_zad15) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№16](i_zad16) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№17](i_zad17) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№18](i_zad18) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№19](i_zad19) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№20](i_zad20) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№21](i_zad21) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№22](i_zad22) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№23](i_zad23) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№24](i_zad24) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№25](i_zad25) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№26](i_zad26) по [русскому](russ_stat) в РИМе | процент выполнения [заданий№27](i_zad27) по [русскому](russ_stat) в РИМе | флаг [информатики](infa_stat) РИМ: | Все задания по [информатики](infa_stat) в РИМе: | Все правильные задания по [информатике](infa_stat) в РИМе: | процент выполненых заданий [информатики](infa_stat) РИМа: | всех [заданий№1](m_zad1) по [информатике](infa_stat) в РИМе | всех [заданий№2](m_zad2) по [информатике](infa_stat) в РИМе | всех [заданий№3](m_zad3) по [информатике](infa_stat) в РИМе | всех [заданий№4](m_zad4) по [информатике](infa_stat) в РИМе | всех [заданий№5](m_zad5) по [информатике](infa_stat) в РИМе | всех [заданий№6](m_zad6) по [информатике](infa_stat) в РИМе | всех [заданий№7](m_zad7) по [информатике](infa_stat) в РИМе | всех [заданий№8](m_zad8) по [информатике](infa_stat) в РИМе | всех [заданий№9](m_zad9) по [информатике](infa_stat) в РИМе | всех [заданий№10](m_zad10) по [информатике](infa_stat) в РИМе | всех [заданий№11](m_zad11) по [информатике](infa_stat) в РИМе | всех [заданий№12](m_zad12) по [информатике](infa_stat) в РИМе | всех [заданий№13](m_zad13) по [информатике](infa_stat) в РИМе | всех [заданий№14](m_zad14) по [информатике](infa_stat) в РИМе | всех [заданий№15](m_zad15) по [информатике](infa_stat) в РИМе | всех [заданий№16](m_zad16) по [информатике](infa_stat) в РИМе | всех [заданий№17](m_zad17) по [информатике](infa_stat) в РИМе | всех [заданий№18](m_zad18) по [информатике](infa_stat) в РИМе | всех [заданий№19](m_zad19) по [информатике](infa_stat) в РИМе | правильных [заданий№1](r_zad1) по [информатике](infa_stat) в РИМе | правильных [заданий№2](r_zad2) по [информатике](infa_stat) в РИМе | правильных [заданий№3](r_zad3) по [информатике](infa_stat) в РИМе | правильных [заданий№4](r_zad4) по [информатике](infa_stat) в РИМе | правильных [заданий№5](r_zad5) по [информатике](infa_stat) в РИМе | правильных [заданий№6](r_zad6) по [информатике](infa_stat) в РИМе | правильных [заданий№7](r_zad7) по [информатике](infa_stat) в РИМе | правильных [заданий№8](r_zad8) по [информатике](infa_stat) в РИМе | правильных [заданий№9](r_zad9) по [информатике](infa_stat) в РИМе | правильных [заданий№10](r_zad10) по [информатике](infa_stat) в РИМе | правильных [заданий№11](r_zad11) по [информатике](infa_stat) в РИМе | правильных [заданий№12](r_zad12) по [информатике](infa_stat) в РИМе | правильных [заданий№13](r_zad13) по [информатике](infa_stat) в РИМе | правильных [заданий№14](r_zad14) по [информатике](infa_stat) в РИМе | правильных [заданий№15](r_zad15) по [информатике](infa_stat) в РИМе | правильных [заданий№16](r_zad16) по [информатике](infa_stat) в РИМе | правильных [заданий№17](r_zad17) по [информатике](infa_stat) в РИМе | правильных [заданий№18](r_zad18) по [информатике](infa_stat) в РИМе | правильных [заданий№19](r_zad19) по [информатике](infa_stat) в РИМе | правильных [заданий№20](r_zad20) по [информатике](infa_stat) в РИМе | правильных [заданий№21](r_zad21) по [информатике](infa_stat) в РИМе | правильных [заданий№22](r_zad22) по [информатике](infa_stat) в РИМе | правильных [заданий№23](r_zad23) по [информатике](infa_stat) в РИМе | правильных [заданий№24](r_zad24) по [информатике](infa_stat) в РИМе | правильных [заданий№25](r_zad25) по [информатике](infa_stat) в РИМе | правильных [заданий№26](r_zad26) по [информатике](infa_stat) в РИМе | правильных [заданий№27](r_zad27) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№1](i_zad1) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№2](i_zad2) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№3](i_zad3) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№4](i_zad4) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№5](i_zad5) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№6](i_zad6) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№7](i_zad7) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№8](i_zad8) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№9](i_zad9) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№10](i_zad10) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№11](i_zad11) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№12](i_zad12) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№13](i_zad13) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№14](i_zad14) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№15](i_zad15) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№16](i_zad16) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№17](i_zad17) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№18](i_zad18) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№19](i_zad19) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№20](i_zad20) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№21](i_zad21) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№22](i_zad22) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№23](i_zad23) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№24](i_zad24) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№25](i_zad25) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№26](i_zad26) по [информатике](infa_stat) в РИМе | процент выполнения [заданий№27](i_zad27) по [информатике](infa_stat) в РИМе |
| ----- | ------------ | -------------------------- | ------ | --------------------------------------- | -------------------------------------- | ------------------------ | ---------------------------- | --------------------------- | ------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | --------- | -------------------- | ------------------------------- | -------------------------------- | -------------------------------- | --------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ---------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | 
 
`, `BASED${shet_dnei2 / 7}`, false, "ЕГЭ/sluj/cash")
            await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => {frontmatter["name_base"] = `BASED${shet_dnei2 / 7}`});
            name_base = `BASED${shet_dnei2 / 7}`;
            var based_put = tp.file.find_tfile(`ЕГЭ/sluj/cash/${name_base}.md`);
                

        }

        var based_put = tp.file.find_tfile(`ЕГЭ/sluj/cash/${name_base}.md`);
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_chass"] = shet_chass2 + sumarI + sumarR + sumarM});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_dnei"] = shet_dnei2 + 1});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_chass_pos_rim"] = shet_chass_pos_rim2 + sumarI + sumarR + sumarM});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_day_pos_rim"] = shet_day_pos_rim2 + 1});

            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh`] = RIM_sumarM + shet_RIM_matem_obsh});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh_prav`] = RIM_sumarMN + shet_RIM_matem_obsh_prav});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh_proc`] = Math.round(((RIM_sumarMN + shet_RIM_matem_obsh_prav) / (RIM_sumarM + shet_RIM_matem_obsh)) * 100)});                 

            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh`] = RIM_sumarR + shet_RIM_russ_obsh});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh_prav`] = RIM_sumarRN + shet_RIM_russ_obsh_prav});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh_proc`] = Math.round(((RIM_sumarRN + shet_RIM_russ_obsh_prav) / (RIM_sumarR + shet_RIM_russ_obsh)) * 100 )});

            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh`] = RIM_sumarI + shet_RIM_infa_obsh});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh_prav`] = RIM_sumarIN + shet_RIM_infa_obsh_prav});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh_proc`] = Math.round(((RIM_sumarIN + shet_RIM_infa_obsh_prav) / (RIM_sumarI + shet_RIM_infa_obsh)) * 100)});




            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_chass"] = shet_chass2 + sumarI + sumarR + sumarM});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_dnei"] = shet_dnei2 + 1});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_chass_pos_rim"] = shet_chass_pos_rim2 + sumarI + sumarR + sumarM});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_day_pos_rim"] = shet_day_pos_rim2 + 1});

            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh`] = RIM_sumarM + shet_RIM_matem_obsh});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh_prav`] = RIM_sumarMN + shet_RIM_matem_obsh_prav});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_matem_obsh_proc`] = Math.round(((RIM_sumarMN + shet_RIM_matem_obsh_prav) / (RIM_sumarM + shet_RIM_matem_obsh)) * 100)});                 

            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh`] = RIM_sumarR + shet_RIM_russ_obsh});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh_prav`] = RIM_sumarRN + shet_RIM_russ_obsh_prav});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_russ_obsh_proc`] = Math.round(((RIM_sumarRN + shet_RIM_russ_obsh_prav) / (RIM_sumarR + shet_RIM_russ_obsh)) * 100 )});

            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh`] = RIM_sumarI + shet_RIM_infa_obsh});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh_prav`] = RIM_sumarIN + shet_RIM_infa_obsh_prav});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[`shet_RIM_infa_obsh_proc`] = Math.round(((RIM_sumarIN + shet_RIM_infa_obsh_prav) / (RIM_sumarI + shet_RIM_infa_obsh)) * 100)});

            if((f == 'false' && fr== 'false' && fi == 'false' && frim == 'false') && ned != "Сб" && ned != "Вс"){
                var kalen_put = tp.file.find_tfile(`ЕГЭ/календарь.md`);
            await tp.app.fileManager.processFrontMatter(kalen_put, (frontmatter) => { frontmatter["seria"] = 0});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_propush"] = shet_propush2 + 1});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["seria"] = 0});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["seria"] = 0});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_propush"] = shet_propush2 + 1});
        }
        else{
            var kalen_put = tp.file.find_tfile(`ЕГЭ/календарь.md`);
            await tp.app.fileManager.processFrontMatter(kalen_put, (frontmatter) => { frontmatter["seria"] = seria + 1});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["seria"] = seria + 1});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["seria"] = seria + 1});
        }
        if(frim == 'true')
        {
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_chass_pos_rim"] = 0 });
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_rim"] = shet_rim2 + 1});
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter["shet_day_pos_rim"] = 0});

            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_chass_pos_rim"] = 0 });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_rim"] = shet_rim2 + 1});
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["shet_day_pos_rim"] = 0});

    var conf_file = tp.file.find_tfile('ЕГЭ/sluj/Config.md');
    var cache = tp.app.metadataCache.getFileCache(conf_file);
    var frontmatter = cache.frontmatter;
    var keys = Object.keys(frontmatter);

    var date_do = frontmatter[keys[3]];

    

            var kalen_put = tp.file.find_tfile(`ЕГЭ/календарь.md`);
            
            var inf_baz = kalen_put;
            
            var rerke = await tp.app.vault.read(inf_baz);
            
            let r = rerke ;
            
            //var ost_dnei = Math.floor((new Date(date_do.replace(/_/g, " ")) - new Date(dateStr)) / (1000 * 60 * 60 * 24));
    //await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter['date_do'] = ost_dnei });

/*     r+= `процент выполнения [математики](mat_stat) составил${(RIM_sumarMN / RIM_sumarM) * 100 }%\n\n`;
    r+= `процент выполнения [русского](russ_stat) составил${(RIM_sumarRN / RIM_sumarR) * 100 }%\n\n`;
    r+= `процент выполнения [информатики](infa_stat) составил${(RIM_sumarIN / RIM_sumarI) * 100 }%\n\n`; */
            //r += `\n${ost_dnei} дней до запланированого рима `
r += `\n${vr_RIM}`;
        await tp.app.vault.modify(inf_baz, r);
        
        
        }
        /* if(f == 'true' || f == 'trueh')
        {
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_shet_chass_pos_rim`] = true});
        } */
/*RIM_sumar_obsh = RIM_sumarI + RIM_sumarR + RIM_sumarM;
        RIM_sumar_obshN = RIM_sumarIN + RIM_sumarRN + RIM_sumarMN;
        RIM_sumar_obsh_proc = (RIM_sumarIN + RIM_sumarRN + RIM_sumarMN) / (RIM_sumarI + RIM_sumarR + RIM_sumarM) * 100; */
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`den№${shet_dnei2 + 1}`] = based_data});
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

              var mat_baz = tp.file.find_tfile("ЕГЭ/subjects/mat/mat_stat");
    var stolb = i+1;
    var strok = 2 * 21;
    var ya = stolb + strok;

    var krop = 0;
    var num = m_zad[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(mat_baz);
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
    mat_zad_plan_summ.push(numberValue + num)
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(mat_baz, r);


        }    
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_r_zad${i}`] = r_zad[i-1]});

             
              var russ_baz = tp.file.find_tfile("ЕГЭ/subjects/russ/russ_stat");
    var stolb = i+1;
    var strok = 2 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = r_zad[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(russ_baz);
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
    russ_zad_plan_summ.push(numberValue + num)
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(russ_baz, r);


        }

        
        for (let i = 1; i <28; i++)
        {
            
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_i_zad${i}`] = i_zad[i-1]});

                var inf_baz = tp.file.find_tfile("ЕГЭ/subjects/infa/infa_stat");
    var stolb = i;
    var strok = 2 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = i_zad[i-1];

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
    inf_zad_plan_summ.push(numberValue + num)
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(inf_baz, r);

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
          
             var mat_baz = tp.file.find_tfile("ЕГЭ/subjects/mat/mat_stat");
    var stolb = i+1;
    var strok = 3 * 21;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_m_zad_obsh[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(mat_baz);
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
    mat_obsh.push(numberValue + num);

    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(mat_baz, r);



        }
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_m_zad_prav${i}`] = RIM_m_zad_prav[i-1]});
             var mat_baz = tp.file.find_tfile("ЕГЭ/subjects/mat/mat_stat");
    var stolb = i+1;
    var strok = 4 * 21;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_m_zad_prav[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(mat_baz);
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

    mat_prav.push(numberValue + num);
    
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(mat_baz, r);
        

}
        for (let i = 1; i <20; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_m_zad_proc${i}`] = RIM_m_zad_proc[i-1]});

             var mat_baz = tp.file.find_tfile("ЕГЭ/subjects/mat/mat_stat");
            var stolb = i+1;
            var strok = 5 * 21;
            var ya = stolb + strok;

            var krop = 0;
            var num = mat_prav[i-1] / mat_obsh[i-1] * 100;

            var chisl = -1;
            var chisl2 = -1;
            
            var rerke = await tp.app.vault.read(mat_baz);
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

            let r = rerke.slice(0, chisl + 1) + num.toString() + rerke.slice(chisl2); 
            await tp.app.vault.modify(mat_baz, r);

        }
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag_r`] = rimflag_r})        
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh`] = RIM_sumarR});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh_prav`] = RIM_sumarRN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_russ_obsh_proc`] = RIM_russ_obsh_proc});
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_obsh${i}`] = RIM_r_zad_obsh[i-1]});

             var russ_baz = tp.file.find_tfile("ЕГЭ/subjects/russ/russ_stat");
    var stolb = i+1;
    var strok = 3 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_r_zad_obsh[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(russ_baz);
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
    russ_obsh.push(numberValue + num);

    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(russ_baz, r);

        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_prav${i}`] = RIM_r_zad_prav[i-1]});
             
             var russ_baz = tp.file.find_tfile("ЕГЭ/subjects/russ/russ_stat");
    var stolb = i+1;
    var strok = 4 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_r_zad_prav[i-1];

    var chisl = -1;
    var chisl2 = -1;
    
    var rerke = await tp.app.vault.read(russ_baz);
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

    russ_prav.push(numberValue + num);
    
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(russ_baz, r);
        }
        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_r_zad_proc${i}`] = RIM_r_zad_proc[i-1]});

             var russ_baz = tp.file.find_tfile("ЕГЭ/subjects/russ/russ_stat");
            var stolb = i+1;
            var strok = 5 * 29;
            var ya = stolb + strok;

            var krop = 0;
            var num = russ_prav[i-1] / russ_obsh[i-1] * 100;

            var chisl = -1;
            var chisl2 = -1;
            
            var rerke = await tp.app.vault.read(russ_baz);
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

            let r = rerke.slice(0, chisl + 1) + num.toString() + rerke.slice(chisl2); 
            await tp.app.vault.modify(russ_baz, r);

        }  
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_rimflag_i`] = rimflag_i})
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh`] = RIM_sumarI});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh_prav`] = RIM_sumarIN});
        await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_infa_obsh_proc`] = RIM_infa_obsh_proc});
        for (let i = 1; i <28; i++)
        {


             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_obsh${i}`] = RIM_i_zad_obsh[i-1]});

    var inf_baz = tp.file.find_tfile("ЕГЭ/subjects/infa/infa_stat");
    var stolb = i;
    var strok = 3 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_i_zad_obsh[i-1];

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
    infa_obsh.push(numberValue + num);
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(inf_baz, r);
}




        for (let i = 1; i <28; i++)
        {
             await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_prav${i}`] = RIM_i_zad_prav[i-1]});

                var inf_baz = tp.file.find_tfile("ЕГЭ/subjects/infa/infa_stat");
    var stolb = i;
    var strok = 4 * 29;
    var ya = stolb + strok;

    var krop = 0;
    var num = RIM_i_zad_prav[i-1];

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
    infa_prav.push(numberValue + RIM_i_zad_prav[i-1]);
    let r = rerke.slice(0, chisl + 1) + str.toString() + rerke.slice(chisl2); 
    await tp.app.vault.modify(inf_baz, r);


        }
        for (let i = 1; i <28; i++)
        {
            await tp.app.fileManager.processFrontMatter(based_put, (frontmatter) => { frontmatter[`${based_data}_RIM_i_zad_proc${i}`] = RIM_i_zad_proc[i-1]});


            var inf_baz = tp.file.find_tfile("ЕГЭ/subjects/infa/infa_stat");
            var stolb = i;
            var strok = 5 * 29;
            var ya = stolb + strok;

            var krop = 0;
            var num = infa_prav[i-1] / infa_obsh[i-1] * 100;

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

            let r = rerke.slice(0, chisl + 1) + num.toString() + rerke.slice(chisl2); 
            await tp.app.vault.modify(inf_baz, r);
        }  

        var h = [];
    h.push(`|\n|${shet_dnei2 + 1} ${based_data}|`);
    
    h.push(`${ned}|`);
    h.push(`${shet_chass2 + sumarI + sumarR + sumarM}|`);
    h.push(`${seria + 1}|`);
    h.push(`${shet_chass_pos_rim2 + sumarI + sumarR + sumarM}|`);
    h.push(`${shet_day_pos_rim2 + 1}|`);
    h.push(`${sumarI + sumarR + sumarM}|`);
    h.push(`${matflag}|`);
    h.push(`${rusflag}|`);
    h.push(`${infflag}|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`${m_zad[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${r_zad[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${i_zad[i-1]}|`);
    }
    h.push(`${rimflag}|`);
    h.push(`${RIM_sumar_obsh}|`);
    h.push(`${RIM_sumar_obshN}|`);
    h.push(`${RIM_sumar_obsh_proc}|`);
    h.push(`${rimflag_m}|`);
    h.push(`${RIM_sumarM}|`);
    h.push(`${RIM_sumarMN}|`);
    h.push(`${RIM_matem_obsh_proc}|`);
    for (let i = 1; i <20; i++)
    {
        h.push(`${RIM_m_zad_obsh[i-1]}|`);
    }
    for (let i = 1; i <20; i++)
    {
        h.push(`${RIM_m_zad_prav[i-1]}|`);
    }
    for (let i = 1; i <20; i++)
    {
        h.push(`${RIM_m_zad_proc[i-1]}|`);
    }
    h.push(`${rimflag_r}|`);
    h.push(`${RIM_sumarR}|`);
    h.push(`${RIM_sumarRN}|`);
    h.push(`${RIM_russ_obsh_proc}|`);
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_r_zad_obsh[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_r_zad_prav[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_r_zad_proc[i-1]}|`);
    }
    h.push(`${rimflag_i}|`);
    h.push(`${RIM_sumarI}|`);
    h.push(`${RIM_sumarIN}|`);
    h.push(`${RIM_infa_obsh_proc}|`);
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_i_zad_obsh[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_i_zad_prav[i-1]}|`);
    }
    for (let i = 1; i <28; i++)
    {
        h.push(`${RIM_i_zad_proc[i-1]}|`);
    }

    var str1 = h.join('');
    var rerke1 = await tp.app.vault.read(based_put);
    for(let i = rerke1.length; i > 1; i--)
    {
        var index11 = rerke1.charAt(i);
        if(index11 == "|")
        {
            var chisl11 = i; 
            break;
        }
    }
    let r11 = rerke1.slice(0, chisl11) + str1 + rerke1.slice(chisl11); 
    await tp.app.vault.modify(based_put, r11);


    var kalen_put = tp.file.find_tfile(`ЕГЭ/календарь.md`);


    const [year1, month1, day1] = dateStr.split(" ").map(Number);
    const endDate = new Date(year1, month1 - 1, day1 - 1);
    const startDate = new Date(year, month1 - 1, 1);  // 1 января
    
    let sundays = 0;
    let current = new Date(startDate);
    
    while (current <= endDate) {
        if (current.getDay() === 0) {  // 0 = воскресенье
            sundays++;
        }
        current.setDate(current.getDate() + 1);
    }
        
    
    var shet_mess = frontmatter[keys[4]];

    if (startDate.getDay() === 0)

        {
            var st_date = 6;
        }
    else
    {
        var st_date = startDate.getDay() - 1;
    }
    //await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["00"] = 0});
    var vs_shet = sundays;

    await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[vs_shet] = 0});
    var inf_baz = kalen_put;
    if(sundays == 1)
    {
        var ya = date.getDate() + 17 + st_date + shet_mess;
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[vs_shet] = 322});
    }
    if(sundays == 2)
    {
        var ya = date.getDate() + 18 + st_date + shet_mess;
    }
    if(sundays == 3)
    {
        var ya = date.getDate() + 19 + st_date + shet_mess;
    }
    if(sundays == 4)
    {
        var ya = date.getDate() + 20 + st_date + shet_mess;
    }
    if(sundays == 5)
    {
        var ya = date.getDate() + 21 + st_date + shet_mess;
    }
    if(sundays == 0)    
    {
        var ya = date.getDate() + 16 + st_date + shet_mess;
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter[shet_mess] = 1});
    }
    
    /* if(ned == "Пн")
    {
        ya++
    } */
var tek_mess = 0;
var rerke = await tp.app.vault.read(inf_baz);
r = rerke;
     if(date.getDate() == 1)
    {
        tek_mess = 64;
        await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => { frontmatter["shet_mess"] = shet_mess + tek_mess });
        var rerke = await tp.app.vault.read(inf_baz);
        r += `\n\n\n${months[date.getMonth()]} ${date.getFullYear()} года

| пн  | вт  | ср  | чт  | пт  | сб  | вс  |
| --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |`;

        //await tp.app.vault.modify(inf_baz, r);
    } 

    var krop = 0;

    var chisl = -1;
    var chisl2 = -1;
    
    //var rerke = await tp.app.vault.read(inf_baz);
    var shab_edin = frontmatter[keys[0]];
    var shab_mnoj = frontmatter[keys[1]];
    var name_base = frontmatter[keys[2]].toString();
    var date_do = frontmatter[keys[3]];

    ya += tek_mess;
    for(let i = 1; i < r.length; i++)
    {
        var index1 = r.charAt(i);
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

    for(let i = chisl+1; i < r.length; i++)
    {
        var index2 = r.charAt(i);
        if(index2 == "|")
        {
             chisl2 = i; 
            break;
        }
    }
    var ost_dnei = (new Date(date_do.replace(/_/g, " ")) - new Date(dateStr)) / (1000 * 60 * 60 * 24);  
    let t = r.slice(0, chisl + 1) + `[${date.getDate()}](${based_data})` + r.slice(chisl2); 
    await tp.app.vault.modify(inf_baz, t);



        await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter["ostalos_date_do"] = ost_dnei });
        await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter["date_do"] = date_do });
    /* for(let i = 0; i < mat_zad_do.length; i++){
    await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter[mat_zad_do[i]] = mat_zad_plan_summ[Number(mat_zad_do[i].replace("m_zad", ""))]});
    }
        for(let i = 0; i < russ_zad_do.length; i++){
    await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter[russ_zad_do[i]] = russ_zad_plan_summ[Number(russ_zad_do[i].replace("r_zad", ""))]});
    }
        for(let i = 0; i < infa_zad_do.length; i++){
    await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter[infa_zad_do[i]] = inf_zad_plan_summ[Number(infa_zad_do[i].replace("i_zad", ""))]});
    } */
            await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter["shet_chass"] = shet_chass2 + sumarI + sumarR + sumarM});
            await tp.app.fileManager.processFrontMatter(inf_baz, (frontmatter) => { frontmatter["shet_dnei"] = shet_dnei2 + 1});
    
        
/*             await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh"] = RIM_sumarM });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh_prav"] = RIM_sumarMN });
            await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM_matem_obsh_proc"] = Math.round((RIM_sumarMN / RIM_sumarM) * 100 )}); 
            

    *//*
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
        }*/
            /*
    var RIM_m_zad_obsh = new Array(19).fill(0);
    var RIM_r_zad_obsh = new Array(27).fill(0);
    var RIM_i_zad_obsh = new Array(27).fill(0);

    var RIM_m_zad_prav = new Array(19).fill(0);
    var RIM_r_zad_prav = new Array(27).fill(0);
    var RIM_i_zad_prav = new Array(27).fill(0);

    var RIM_m_zad_proc = new Array(19).fill(0);
    var RIM_r_zad_proc = new Array(27).fill(0);
    var RIM_i_zad_proc = new Array(27).fill(0);
            */

        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {frontmatter["cassi"] = sumarI + sumarR + sumarM});
        if (f == 'true' || fr== 'true' || fi== 'true' || f == 'trueh' || fr== 'trueh' || fi== 'trueh')
        {
            vr_obsh =`## Времени потрачено на подготовку ${sumarI + sumarR + sumarM} часов, из которых было потрачено:\n\n`
        }
        if(f == 'false' && fr== 'false' && fi == 'false' && frim == 'false'){
            vr_obsh =`# НИЧЕГО`
            out_put += vr_obsh;
        }
        else{
            out_put += vr_obsh + vr_matt + vr_russ + vr_Infa + vr_RIM;
        }
        await tp.file.create_new(" ", "Новый день", false, "/");
        
        //await tp.app.fileManager.processFrontMatter(file, (frontmatter) => { frontmatter["RIM"] = ned });
        // текст
        return out_put;
}

/** `${m_zad} \n ${r_zad} \n ${i_zad} ${RIM_m_zad_obsh} \n ${RIM_m_zad_prav} \n ${RIM_m_zad_proc} ${RIM_r_zad_obsh} \n ${RIM_r_zad_prav} \n ${RIM_r_zad_proc} ${RIM_i_zad_obsh} \n ${RIM_i_zad_prav} \n ${RIM_i_zad_proc}`;
 * def(x, osn):
 * while x > 0:
 * ost = 'x % osn'
 * s = str(ost) + s
 * x = x // osn
 * return s
 * 
 * 
 * 
 * 
 * 
*/
