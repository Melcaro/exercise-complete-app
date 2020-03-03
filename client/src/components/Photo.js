import React from 'react';

export const Photo = ({ photoID, url }) => {
  return (
    <div key={photoID}>
      <img src={url} alt="sun pic" />
    </div>
  );
};
