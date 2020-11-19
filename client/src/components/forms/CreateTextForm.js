import React from 'react';

export default function CreateTextForm() {
  return (
    <div>
      <form>
      <input className='titleCreateText' type='text' placeholder='Title' />
      <div className='textCreateText' contentEditable='true'></div>
      </form>
    </div>
  )
}
