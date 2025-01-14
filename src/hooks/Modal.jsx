import React, { useState } from 'react';
import LiabilityModal from './LiabilityModal';

const ClientForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiabilityChecked, setIsLiabilityChecked] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleCheckboxChange = (e) => setIsLiabilityChecked(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLiabilityChecked) {
      setFormMessage('You must accept the liability terms to proceed.');
      return;
    }
    // Handle form submission logic here
    setFormMessage('Form submitted successfully!');
  };

  return (
    <div className='mt-8'>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="liability" className="flex items-center">
            <input
              type="checkbox"
              id="liability"
              checked={isLiabilityChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <p>I accept the <button type="button" className="text-blue-500 underline" onClick={handleModalOpen}> liability terms</button></p>
            
          </label>
        </div>
       
      </form>
      {formMessage && <p>{formMessage}</p>}
      <LiabilityModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default ClientForm;