import React from 'react';


export default function Home() {

    return (
        <div className='avo-wrapper'>
            <h1>Free Shavocado!</h1>
            <img className='img' src={require('../assets/jail.png')} alt='Avocado in jail'></img>
        </div>
    );
}