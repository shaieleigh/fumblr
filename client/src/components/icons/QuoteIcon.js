import React from 'react';
import { useDispatch } from 'react-redux';

import { setCreateQuoteModal } from '../../store/createModals';



export default function QuoteIcon() {
  const dispatch = useDispatch()

  const handleShowModal = (e) => {
    e.preventDefault();
    dispatch(setCreateQuoteModal(true));
  }



  return (
    <>
      <button className='dashNavButtons' onClick={handleShowModal}>
        <svg className='dashboardIcons' viewBox="0 0 17 13" width="40" height="35" fill="var(--orange)"><path d="M3.5 5.5C4 3.7 5.8 2.4 7.2 1.3L5.9 0C3 1.8 0 5 0 8.5 0 11 1.3 13 4 13c2 0 3.7-1.5 3.7-3.6C7.7 7 6 5.5 3.5 5.5zm9.3 0c.4-1.8 2.2-3.1 3.7-4.2L15.2 0c-2.8 1.8-5.9 5-5.9 8.5 0 2.4 1.3 4.5 4 4.5 2 0 3.7-1.5 3.7-3.6 0-2.4-1.7-3.9-4.2-3.9z"></path></svg>
      <p className='dashbIconFont'>Quote</p></button>
    </>
  )
}
