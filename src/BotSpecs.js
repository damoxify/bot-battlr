import React from 'react';

function BotSpecs({ bot, onBackClick }) {
  function handleEnlistClick() {
    // Implement enlistment logic here
  }

  return (
    <div>
      <button onClick={onBackClick}>Back to List</button>
      <div className='botCard'>
        {/* Display bot details here */}
        <button onClick={handleEnlistClick}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
