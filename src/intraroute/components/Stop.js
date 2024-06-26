import React from 'react';
import styles from './Stop.module.css';
import colorStyles from './Colors.module.css';

import StopBuffer from './StopBuffer';

import circleWhite from '../assets/circle-white.svg';
import Circle from './Circle';

function Stop(props) {
    let containerColor;
    let mainColor;
    let filterColor;
    let textColor = colorStyles.whiteColor;
    if (props.mode === 'bahn') {
        if (props.type === 'origin') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'mainline') {
            containerColor = colorStyles.bahnMainlineBackground;
            mainColor = colorStyles.bahnMainlineColor;
            filterColor = colorStyles.bahnMainlineFilter;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.bahnExpressBackground;
            mainColor = colorStyles.bahnExpressColor;
            filterColor = colorStyles.bahnExpressFilter;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.bahnBranchBackground;
            mainColor = colorStyles.bahnBranchColor;
            filterColor = colorStyles.bahnBranchFilter;
        }
        if (props.type === 'shuttle') {
            containerColor = colorStyles.bahnShuttleBackground;
            mainColor = colorStyles.bahnShuttleColor;
            filterColor = colorStyles.bahnShuttleFilter;
        }
    }
    if (props.mode === 'air') {
        if (props.type === 'origin' || props.type === 'mainline' || props.type === 'heli' || props.type === 'poseidon') {
            containerColor = colorStyles.grayBackground;
            mainColor = colorStyles.grayColor;
        }
        if (props.type === 'segville' || props.type === 'segHeli') {
            containerColor = colorStyles.airSegvilleBackground;
            mainColor = colorStyles.airSegvilleColor;
            filterColor = colorStyles.airSegvilleFilter;
        }
        if (props.type === 'waypoint' || props.type === 'waypointHopper') {
            containerColor = colorStyles.airWaypointBackground;
            mainColor = colorStyles.airWaypointColor;
            filterColor = colorStyles.airWaypointFilter;
        }
        if (props.type === 'volanti') {
            containerColor = colorStyles.airVolantiBackground;
            mainColor = colorStyles.airVolantiColor;
            filterColor = colorStyles.airVolantiFilter;
        }
        if (props.type === 'gemsEmerald') {
            containerColor = colorStyles.airGemsEmeraldBackground;
            mainColor = colorStyles.airGemsEmeraldColor;
            filterColor = colorStyles.airGemsEmeraldFilter;
        }
        if (props.type === 'gemsGold') {
            containerColor = colorStyles.airGemsGoldBackground;
            mainColor = colorStyles.blackColor;
            filterColor = colorStyles.airGemsGoldFilter;
            textColor = colorStyles.blackColor;
        }
        if (props.type === 'gemsDiamond') {
            containerColor = colorStyles.airGemsDiamondBackground;
            mainColor = colorStyles.airGemsDiamondColor;
            filterColor = colorStyles.airGemsDiamondFilter;
        }
        if (props.type === 'gemsLapis') {
            containerColor = colorStyles.airGemsLapisBackground;
            mainColor = colorStyles.airGemsLapisColor;
            filterColor = colorStyles.airGemsLapisFilter;
        }
        if (props.type === 'skywest') {
            containerColor = colorStyles.airSkywestBackground;
            mainColor = colorStyles.airSkywestColor;
            filterColor = colorStyles.airSkywestFilter;
        }
        if (props.type === 'heampstead') {
            containerColor = colorStyles.airHeampsteadBackground;
            mainColor = colorStyles.airHeampsteadColor;
            filterColor = colorStyles.airHeampsteadFilter;
        }
        if (props.type === 'eastern') {
            containerColor = colorStyles.airEasternBackground;
            mainColor = colorStyles.airEasternColor;
            filterColor = colorStyles.airEasternFilter;
        }
    }
    if (props.mode === 'rail') {
        if (props.type === 'origin') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'black') {
            containerColor = colorStyles.blackBackground;
            mainColor = colorStyles.blackColor;
        }
        if (props.type === 'pink') {
            containerColor = colorStyles.railPinkBackground;
            mainColor = colorStyles.railPinkColor;
            filterColor = colorStyles.railPinkFilter;
        }
        if (props.type === 'cyan') {
            containerColor = colorStyles.railCyanBackground;
            mainColor = colorStyles.railCyanColor;
            filterColor = colorStyles.railCyanFilter;
        }
        if (props.type === 'blue') {
            containerColor = colorStyles.railBlueBackground;
            mainColor = colorStyles.railBlueColor;
            filterColor = colorStyles.railBlueFilter;
        }
        if (props.type === 'yellow') {
            containerColor = colorStyles.railYellowBackground;
            mainColor = colorStyles.blackColor;
            filterColor = colorStyles.railYellowFilter;
            textColor = colorStyles.blackColor;
        }
        if (props.type === 'lime') {
            containerColor = colorStyles.railLimeBackground;
            mainColor = colorStyles.railLimeColor;
            filterColor = colorStyles.railLimeFilter;
        }
        if (props.type === 'orange') {
            containerColor = colorStyles.railOrangeBackground;
            mainColor = colorStyles.railOrangeColor;
            filterColor = colorStyles.railOrangeFilter;
        }
        if (props.type === 'darkRed') {
            containerColor = colorStyles.railDarkRedBackground;
            mainColor = colorStyles.railDarkRedColor;
            filterColor = colorStyles.railDarkRedFilter;
        }
        if (props.type === 'tan') {
            containerColor = colorStyles.railTanBackground;
            mainColor = colorStyles.railTanColor;
            filterColor = colorStyles.railTanFilter;
        }
        if (props.type === 'purple') {
            containerColor = colorStyles.railPurpleBackground;
            mainColor = colorStyles.railPurpleColor;
            filterColor = colorStyles.railPurpleFilter;
        }
        if (props.type === 'red') {
            containerColor = colorStyles.railRedBackground;
            mainColor = colorStyles.railRedColor;
            filterColor = colorStyles.railRedFilter;
        }
        if (props.type === 'brown') {
            containerColor = colorStyles.railBrownBackground;
            mainColor = colorStyles.railBrownColor;
            filterColor = colorStyles.railBrownFilter;
        }
        if (props.type === 'mcr') {
            containerColor = colorStyles.railMCRBackground;
            mainColor = colorStyles.railMCRColor;
            filterColor = colorStyles.railMCRFilter;
        }
    }
    if (props.mode === 'bus') {
        containerColor = colorStyles.grayBackground;
        mainColor = colorStyles.grayColor;
    }
    if (props.mode === 'omega') {
        if (props.type === 'origin') {
            containerColor = colorStyles.grayBackground;
        } else {
            containerColor = colorStyles.busOmegaBackground;
            mainColor = colorStyles.busOmegaColor;
            filterColor = colorStyles.busOmegaFilter;
        }
    }
    if (props.mode === 'sail') {
        if (props.type === 'origin') {
            containerColor = colorStyles.grayBackground;
        }
        if (props.type === 'mainline') {
            containerColor = colorStyles.sailMainlineBackground;
            mainColor = colorStyles.sailMainlineColor;
            filterColor = colorStyles.sailMainlineFilter;
        }
        if (props.type === 'express') {
            containerColor = colorStyles.sailExpressBackground;
            mainColor = colorStyles.sailExpressColor;
            filterColor = colorStyles.sailExpressFilter;
        }
        if (props.type === 'branch') {
            containerColor = colorStyles.sailBranchBackground;
            mainColor = colorStyles.sailBranchColor;
            filterColor = colorStyles.sailBranchFilter;
        }
    }
    if (props.mode === 'railScar' || props.mode === 'railLumeva') {
        if (props.type === 'origin') {
            containerColor = colorStyles.grayBackground;
        } else {
            containerColor = colorStyles.railLocalBackground;
            mainColor = colorStyles.railLocalColor;
            filterColor = colorStyles.railLocalFilter;
        }
    }
    if (props.mode === 'mrtYellowLine') {
        containerColor = colorStyles.yellowBackground;
        mainColor = colorStyles.yellowColor;
        filterColor = colorStyles.yellowFilter;
        textColor = colorStyles.blackColor;
    }
    let renderStopName = true;
    let dontRenderStopName = false;
    if (props.stopName === 'null') {
        renderStopName = false;
        dontRenderStopName = true;
    }
    let renderMeta1 = false;
    let renderMeta2 = false;
    if (props.meta1 !== 'null') {
        renderMeta1 = true;
    }
    if (props.meta2 !== 'null') {
        renderMeta2 = true;
    }
    return (
        <div>
            <div className={`${styles.stopContainer} ${containerColor}`}>
                <Circle mode={props.mode} type={props.type} />
                <div className={styles.stopInfo}>
                    {renderStopName ?
                        <div className={styles.cityCode}>
                            <p className={`${styles.city} ${textColor}`}>{props.city}</p>
                            <p className={`${styles.code} ${textColor}`}>({props.code})</p>
                        </div>
                        :
                        <div className={styles.cityCodeNoStopName}>
                            <p className={`${styles.city} ${textColor}`}>{props.city}</p>
                            <p className={`${styles.code} ${textColor}`}>({props.code})</p>
                        </div>
                    }
                    {renderStopName ? <p className={`${styles.stopName} ${textColor}`}>{props.stopName}</p> : ''}
                    {dontRenderStopName ? <p className={`${styles.stopName} ${colorStyles.hidden}`}>{props.stopName}</p> : ''}
                </div>
            </div>
            <div className={styles.metaContainer}>
                <div className={`${styles.meta1} ${renderMeta1 ? containerColor : colorStyles.whiteBackground}`}>
                    <p className={`${styles.meta} ${renderMeta1 ? textColor : colorStyles.whiteColor}`}>{props.meta1}</p>
                </div>
                {renderMeta2 ?
                    <div className={`${styles.meta2} ${containerColor}`}>
                        <p className={`${styles.meta} ${textColor}`}>{props.meta2}</p>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default Stop;