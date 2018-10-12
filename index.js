import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/playlist/components/playlist'; 
import data from './src/api.json';

const app = document.getElementById('app')

// ReactDOM.render(que voy renderizar, donde lo hare)
// const text = <h1>blablabla</h1>;
ReactDOM.render( <Playlist data={data} />, app);