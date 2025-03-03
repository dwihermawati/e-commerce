import { BarLoader } from 'react-spinners';
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BarLoader
        color='#DB4444'
        width={100}
        height={4}
        loading={true}
        speedMultiplier={1}
      />
    </div>
  );
};
