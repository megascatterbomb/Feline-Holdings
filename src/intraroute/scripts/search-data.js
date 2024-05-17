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
        for (let modeStop of modeStops) {
            modeStop.keywords = modeStop.keywords.filter(keyword => {
                return keyword !== '\r';
            }).map(keyword => {
                return keyword.replace('\r', '')
            });
            let title = modeStop.city;
            if (modeStop.stopName !== 'null') {
                title = `${modeStop.city} ${modeStop.stopName}`;
            }
            title = `${title} (${modeStop.code}) (${modeDisplay})`;
            let keywords = modeStop.keywords.join(' ');
            allStopsForSearch.push(new stop(modeStop.id, title, mode, keywords))
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