import React from 'react';

function SortBar({ onSortClick }) {
  return (
    <div className='sort-bar'>
      <button onClick={() => onSortClick('health')}>Sort by Health</button>
      <button onClick={() => onSortClick('damage')}>Sort by Damage</button>
      <button onClick={() => onSortClick('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
