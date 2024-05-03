import React from 'react';
import styles from './Route.module.css';
import colorStyles from './Colors.module.css';
import Mode from './Mode';
import Bullet from './Bullet';

import circle from '../assets/circle-white.svg';

function Route(props) {
    let containerColor;
    let routeNameColor = colorStyles.whiteColor;
    if (props.mode === 'bahn') {
        if (props.type === 'mainline') {
            containerColor = colorStyles.bahnMainlineBackground;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.bahnExpressBackground;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.bahnBranchBackground;
        }
        if (props.type === 'shuttle') {
            containerColor = colorStyles.bahnShuttleBackground;
        }
    }
    if (props.mode === 'air') {
        if (props.type === 'mainline' || props.type === 'heli' || props.type === 'poseidon') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'segville' || props.type === 'segHeli') {
            containerColor = colorStyles.airSegvilleBackground;
        }
        if (props.type === 'waypoint' || props.type === 'waypointHopper') {
            containerColor = colorStyles.airWaypointBackground;
        }
        if (props.type === 'volanti') {
            containerColor = colorStyles.airVolantiBackground;
        }
        if (props.type === 'gemsEmerald') {
            containerColor = colorStyles.airGemsEmeraldBackground;
        }
        if (props.type === 'gemsGold') {
            containerColor = colorStyles.airGemsGoldBackground;
            routeNameColor = colorStyles.blackColor;
        }
        if (props.type === 'gemsDiamond') {
            containerColor = colorStyles.airGemsDiamondBackground;
        }
        if (props.type === 'gemsLapis') {
            containerColor = colorStyles.airGemsLapisBackground;
        }
        if (props.type === 'skywest') {
            containerColor = colorStyles.airSkywestBackground;
        }
        if (props.type === 'heampstead') {
            containerColor = colorStyles.airHeampsteadBackground;
        }
        if (props.type === 'eastern') {
            containerColor = colorStyles.airEasternBackground;
        }
    }
    if (props.mode === 'rail') {
        if (props.type === 'black') {
            containerColor = colorStyles.blackBackground;
        }
        if (props.type === 'pink') {
            containerColor = colorStyles.railPinkBackground;
        }
        if (props.type === 'cyan') {
            containerColor = colorStyles.railCyanBackground;
        }
        if (props.type === 'blue') {
            containerColor = colorStyles.railBlueBackground;
        }
        if (props.type === 'yellow') {
            containerColor = colorStyles.railYellowBackground;
            routeNameColor = colorStyles.blackColor;
        }
        if (props.type === 'lime') {
            containerColor = colorStyles.railLimeBackground;
        }
        if (props.type === 'orange') {
            containerColor = colorStyles.railOrangeBackground;
        }
        if (props.type === 'darkRed') {
            containerColor = colorStyles.railDarkRedBackground;
        }
        if (props.type === 'tan') {
            containerColor = colorStyles.railTanBackground;
        }
        if (props.type === 'purple') {
            containerColor = colorStyles.railPurpleBackground;
        }
        if (props.type === 'red') {
            containerColor = colorStyles.railRedBackground;
        }
        if (props.type === 'brown') {
            containerColor = colorStyles.railBrownBackground;
        }
        if (props.type === 'mcr') {
            containerColor = colorStyles.railMCRBackground;
        }
    }
    if (props.mode === 'bus') {
        containerColor = colorStyles.grayBackground;
    }
    if (props.mode === 'omega') {
        containerColor = colorStyles.busOmegaBackground;
    }
    if (props.mode === 'sail') {
        if (props.type === 'mainline') {
            containerColor = colorStyles.sailMainlineBackground;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.sailExpressBackground;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.sailBranchBackground;
        }
    }
    if (props.mode === 'railScar' || props.mode === 'railLumeva') {
        containerColor = colorStyles.railLocalBackground;
    }
    return (
        <div>
            <div className={styles.modeBox}>
                <Mode mode={props.mode} type={props.type} />
            </div>
            <div className={`${styles.routeContainer} ${containerColor}`}>
                <Bullet mode={props.mode} type={props.type} route={props.route} />
                <p className={`${styles.routeName} ${routeNameColor}`}>{props.routeName}</p>
            </div>
        </div>
    )
}

export default Route;