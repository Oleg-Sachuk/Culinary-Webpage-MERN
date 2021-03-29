export const convertType = (item, unit) => {
    let options;
    switch (item.type) {
        case 'solid':
            options = unit.unit_arr_sol.map(sol => {
                if(item.unit !== sol) return <option value={sol} key={sol}>{sol}</option>
                else return null})
            break;
        case 'const':
            options = unit.unit_arr_const.map(con => {return null})
            break;
        case 'bulk':
            options = unit.unit_arr_blk.map(bulk => {
                if(item.unit !== bulk) return <option value={bulk} key={bulk}>{bulk}</option>
                else return null})
            break;
        case 'liquid':
            options = unit.unit_arr_liq.map(liquid => {
                if(item.unit !== liquid) return <option value={liquid} key={liquid}>{liquid}</option>
                else return null})
            break;
        default:
            break;
    }
    return options;
}

export const converter = (src,dst,val) => {
    var conv_arr = [
        ["","кг","г.","л.","дл.","мл.","стакан","ст.л.","дес.л.","ч.л."],
        ["ч.л.","0.0032","3.2","0.005","0.05","5","0.02","0.3333","0.5","1"],
        ["дес.л.","0.0064","6.4","0.01","0.1","10","0.04","0.6667","1","2"],
        ["ст.л.","0.0096","9.6","0.015","0.15","15","0.06","1","1.5","3"],
        ["стакан","0.16","160","0.25","2.5","250","1","16.67","25","50"],
        ["мл.","0.00064","0.64","0.001","0.01","1","0.004","0.06667","0.1","0.2"],
        ["дл.","0.064","64","0.1","1","100","0.4","6.667","10","20"],
        ["л.","0.64","640","1","10","1000","4","66.67","100","200"],
        ["г.","0.001","1","0.001563","0.01563","1.563","0.00625","0.1042","0.1563","0.1563"],
        ["кг","1","1000","1.563","15.63","1,563","6.252","104.2","156.3","312.6"],
        ["ч.л.","дес.л.","ст.л.","стакан","мл.","дл.","л.","г.","кг"]
    ],a=0,b=0;
    do{
        if(conv_arr[a][0] === src) break;
        a++
    }while(a<conv_arr.length)
    do{
        if(conv_arr[0][b]=== dst) break;
        b++
    }while(b<conv_arr[0].length)
return Math.round(Number(val) * Number(conv_arr[a][b]*100))/100;
}