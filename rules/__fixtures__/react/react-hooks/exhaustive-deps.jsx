import React, { useEffect, useState } from 'react';

const Component = () => {
  const [name] = useState('Mary');

  useEffect(() => {
    localStorage.setItem('formData', name);
  }, [null]);

  const [surname] = useState('Poppins');

  useEffect(() => {
    document.title = `${name} ${surname}`;
  }, []);

  return (
    <div>
      Fullname:
      {name}
      {surname}
    </div>
  );
};

export default Component;
