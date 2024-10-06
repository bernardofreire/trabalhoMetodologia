import React from 'react';
import Image from 'next/image';

const Avatar: React.FC = () => (
  <div className="flex flex-col justify-center items-center space-y-20">
    <div>
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={180}
        height={180}
        draggable={false}
      />
    </div>
    <div className="flex flex-col justify-center items-center">
      <span className="text-gray-500 text-xs">Bem vindo,</span>
      <span className="text-sm">Taylor Swift</span>
    </div>
  </div>
);

export default Avatar;
