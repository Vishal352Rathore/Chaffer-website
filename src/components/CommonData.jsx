import React, { useState } from 'react';
import ServiceClass from './ServiceClass';
import Pickup from './Pickup';
import PaymentCard from './Payment';

const CommonData = () => {
    const [formData, setFormData] = useState({
        page1Data: {},
        page2Data: {},
        page3Data: {},
        page4Data: {}
      });
      const updateFormData = (page, data) => {
        setFormData(prevData => ({
          ...prevData,
          [page]: data
        }));
      };
      const handleSubmit = () => {
        // Submit formData to server
      };
  return (
    <div>
        <ServiceClass/>
        <Pickup/>
        <PaymentCard/>
    </div>
  )
}

export default CommonData

