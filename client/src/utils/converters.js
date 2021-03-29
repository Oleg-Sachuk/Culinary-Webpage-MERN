export const convertType = (item, unit) => {
    let options;
    switch (item.type) {
        case 'solid':
            options = unit.unit_arr_sol.map(sol => {
                if(item.unit !== sol) return <option value={sol} key={sol}>{sol}</option>
                else return null})
            break;
        case 'const':
            options = unit.unit_arr_const.map(con => {
                if(item.unit !== con) return <option value={con} key={con}>{con}</option>
                else return null})
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