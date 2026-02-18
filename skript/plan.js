module.exports = async function (tp) {
    // дата
    var dateStr =  await tp.system.prompt("введи день до которого тебе нужно что то сделать по примеру 2026 02 08 обязательно через один пробел!");
    const mat = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19"],  
            ["m_zad1", "m_zad2", "m_zad3", "m_zad4", "m_zad5", "m_zad6", "m_zad7", "m_zad8", "m_zad9", "m_zad10", "m_zad11", "m_zad12", "m_zad13", "m_zad14", "m_zad15", "m_zad16", "m_zad17", "m_zad18", "m_zad19"],
            true, 
            "введи какие задания нужно научиться делать по математике"
        );
        const russ = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["r_zad1", "r_zad2", "r_zad3", "r_zad4", "r_zad5", "r_zad6", "r_zad7", "r_zad8", "r_zad9", "r_zad10", "r_zad11", "r_zad12", "r_zad13", "r_zad14", "r_zad15", "r_zad16", "r_zad17", "r_zad18", "r_zad19", "r_zad20", "r_zad21", "r_zad22", "r_zad23", "r_zad24", "r_zad25", "r_zad26", "r_zad27"],
            true, 
            "введи какие задания нужно научиться делать по Русскому"
        );
            const infa = await tp.system.multi_suggester(
            ["задание 1", "задание 2", "задание 3", "задание 4", "задание 5", "задание 6", "задание 7", "задание 8", "задание 9", "задание 10", "задание 11", "задание 12", "задание 13", "задание 14", "задание 15", "задание 16", "задание 17", "задание 18", "задание 19", "задание 20", "задание 21", "задание 22", "задание 23", "задание 24", "задание 25", "задание 26", "задание 27"],  
            ["i_zad1", "i_zad2", "i_zad3", "i_zad4", "i_zad5", "i_zad6", "i_zad7", "i_zad8", "i_zad9", "i_zad10", "i_zad11", "i_zad12", "i_zad13", "i_zad14", "i_zad15", "i_zad16", "i_zad17", "i_zad18", "i_zad19", "i_zad20", "i_zad21", "i_zad22", "i_zad23", "i_zad24", "i_zad25", "i_zad26", "i_zad27"],
            true, 
            "введи какие задания нужно научиться делать по инфе"
        );
    const conf_file = tp.file.find_tfile('ЕГЭ/sluj/Config.md');
    await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => { frontmatter["data_do"] = dateStr.replace(" ", "_").replace(" ","_") });
    
        var kalen_put = tp.file.find_tfile(`ЕГЭ/календарь.md`);
    //for (let k = 0; k < mat.length; k++) {
            await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => { frontmatter[`mat_zad_plan`] = mat });
            await tp.app.fileManager.processFrontMatter(kalen_put, (frontmatter) => { frontmatter[`mat_zad_plan`] = mat });
            //result += `${i[k]}: ${arr[k]}\n`;
      //  }
    //for (let k = 0; k < russ.length; k++) {
            await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => { frontmatter[`russ_zad_plan`] = russ });
            await tp.app.fileManager.processFrontMatter(kalen_put, (frontmatter) => { frontmatter[`russ_zad_plan`] = russ });
            //result += `${i[k]}: ${arr[k]}\n`;
      //  }
    //for (let k = 0; k < infa.length; k++) {
            await tp.app.fileManager.processFrontMatter(conf_file, (frontmatter) => { frontmatter[`infa_zad_plan`] = infa });
            await tp.app.fileManager.processFrontMatter(kalen_put, (frontmatter) => { frontmatter[`infa_zad_plan`] = infa });
            
            //result += `${i[k]}: ${arr[k]}\n`;
      //  }
return"";
}