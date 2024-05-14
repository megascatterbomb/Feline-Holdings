import React from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import styles from './SearchBar.module.css';

import allStopsForSearch from '../scripts/search-data';

function SearchBar(props) {
    const setStart = props.setStart;
    const setEnd = props.setEnd;

    const handleOnSelect = (item) => {
        console.log(item);
        if (props.startOrEnd === 'start') {
            setStart(item.id);
        }
        if (props.startOrEnd === 'end') {
            setEnd(item.id);
        }
    }

    const formatResult = (item) => {
        return (
            <>
                <div style={{
                    display: 'block',
                    textAlign: 'left',
                    textWrap: 'wrap',
                }}>{item.title}</div>
            </>
        )
    }

    let setMaxResults = props.setMaxResults;

    return (
        <div className={styles.container}>
            <ReactSearchAutocomplete
                items={allStopsForSearch}
                onSelect={handleOnSelect}
                onSearch={() => {setMaxResults(10)}}
                autoFocus
                formatResult={formatResult}
                maxResults={props.maxResults}
                placeholder={props.placeholder}
                showIcon={false}
                className={styles.search}
                showNoResults={true}
                inputSearchString={props.manualStop}
                fuseOptions={{
                    keys: [
                        'keywords', 'mode', 'title'
                    ]
                }}
                resultStringKeyName='title'
                styling={{
                    height: '67px',
                    backgroundColor: '#f2f2f2',
                    border: '0px solid black',
                    color: '#4d4d4d',
                    fontFamily: 'Poppins',
                    borderRadius: '15px',
                    showNoResults: false,
                    boxShadow: 'none',
                }}
            />
        </div>
    )
}

export default SearchBar;