import React from 'react';
import '../../assets/css/modals.css'
import CreateImageForm from '../forms/CreateImageForm';

export default function CameraFormIcon() {
  return (
    <>
      <div className='imgFormIconFlex'>
        <svg className='imgFormIcon' viewBox="0 0 24 24" width="50" height="50" fill="rgba(var(--black), 0.40)"><g fillRule="evenodd" className='imgFormIcon'><path d="M15.891 5.055l-.639-.998H9.724l-.644.998H7.996v1.943h-2v2H2.98l.004 8.752c0 1.496 1.197 3.247 2.623 3.247H19.37c1.426 0 2.639-1.751 2.639-3.247V7.277c0-1.496-1.213-2.222-2.639-2.222h-3.478zm-3.349 13.764c-3.11 0-5.631-2.648-5.631-5.915 0-3.265 2.521-5.914 5.631-5.914 3.11 0 5.632 2.649 5.632 5.914 0 3.267-2.522 5.915-5.632 5.915zM18.871 9c-.678 0-1.227-.577-1.227-1.288 0-.711.549-1.288 1.227-1.288.676 0 1.227.577 1.227 1.288 0 .711-.551 1.288-1.227 1.288z" className='imgFormIcon2'></path><path d="M4.984 6.02h2v-2h-2v-2h-2l-.01 2H.983v2h1.98l-.01 2h2.03v-2z" className='imgFormIcon2'></path><path d="M12.559 8.523a4.417 4.417 0 00-4.418 4.416c0 1.281.549 2.43 1.419 3.237a4.364 4.364 0 01-.056-.66 4.417 4.417 0 014.418-4.418c1.158 0 2.21.45 2.998 1.18a4.413 4.413 0 00-4.361-3.755" className='imgFormIcon2'></path></g></svg>
        <p className='imgFormIconInst'>Upload photos</p>
      </div>
    </>
  )
}
// imgFormIcon svg
// path imgFormIcon2
