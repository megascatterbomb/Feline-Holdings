import airStops from '../data/ui/stops/air.json';
import bahnStops from '../data/ui/stops/bahn.json';
import busStops from '../data/ui/stops/bus.json';
import omegaStops from '../data/ui/stops/omega.json';
import railStops from '../data/ui/stops/rail.json';
import railLumevaStops from '../data/ui/stops/railLumeva.json';
import railScarStops from '../data/ui/stops/railScar.json';
import sailStops from '../data/ui/stops/sail.json';

function createAllStopsForSearch(allStopsForSearch) {
    class stop {
        constructor(id, title, mode, keywords) {
            this.id = id;
            this.title = title;
            this.mode = mode;
            this.keywords = keywords;
        }
    }
    
    function removeFromArray(array, removeMe) {
        let newArray = array.filter((value) => value !== removeMe);
        return newArray;
    }
    
    function processStops(modeStops, mode, modeDisplay) {
        for (let i = 0; i < modeStops.length; i++) {
            for (let j = 0; j < modeStops[i].keywords.length; j++) {
                if (modeStops[i].keywords[j] === '\r' || modeStops[i].keywords[j] === 'null') {
                    modeStops[i].keywords = removeFromArray(modeStops[i].keywords, modeStops[i].keywords[j]);
                } else if (modeStops[i].keywords[j].includes('\r')) {
                    modeStops[i].keywords[j] = modeStops[i].keywords[j].replace('\r', '');
                }
            }
            let id = modeStops[i].id;
            let title = modeStops[i].city;
            if (modeStops[i].stopName !== 'null') {
                title = `${modeStops[i].city} ${modeStops[i].stopName}`;
            }
            title = `${title} (${modeStops[i].code}) (${modeDisplay})`;
            let keywords = '';
            for (let j = 0; j < modeStops[i].keywords.length; j++) {
                keywords = keywords + ` ${modeStops[i].keywords[j]}`
            }
            allStopsForSearch.push(new stop(id, title, mode, keywords))
        }
    }
    
    processStops(airStops, 'air', 'IntraAir');
    processStops(bahnStops, 'bahn', 'IntraBahn');
    processStops(busStops, 'bus', 'IntraBus');
    processStops(omegaStops, 'omega', 'OMEGAbus!');
    processStops(railStops, 'rail', 'IntraRail');
    processStops(railLumevaStops, 'railLumeva', 'MCR Urban Lumeva');
    processStops(railScarStops, 'railScar', 'MCR Urban Scarborough');
    processStops(sailStops, 'sail', 'IntraSail');
}

export default createAllStopsForSearch;