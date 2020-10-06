import React, { useEffect, useState } from 'react';

const Component = () => {
  const [name] = useState('Mary');

  if (name !== '') {
    useEffect(() => {
      localStorage.setItem('formData', name);
    }, [name]);
  }

  const [surname] = useState('Poppins');

  useEffect(() => {
    document.title = `${name} ${surname}`;
  }, [name, surname]);

  return (
    <div>
      Fullname:
      {name}
      {surname}
    </div>
  );
};

export default Component;
