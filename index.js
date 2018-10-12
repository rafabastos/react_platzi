import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media.js'; 

const app = document.getElementById('app')

// ReactDOM.render(que voy renderizar, donde lo hare)
// const text = <h1>blablabla</h1>;
ReactDOM.render(<Media title="Qué es responsive Design" author="rafabastos" image="./images/covers/responsive.jpg"/>, app);