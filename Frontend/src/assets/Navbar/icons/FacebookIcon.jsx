import React from 'react';

const FacebookIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#5890FF">
          <path d="M24,0 C10.745166,0 0,10.745166 0,24 C0,35.2049444 8.77526667,44.4713667 20.1216667,47.5 L20.1216667,30.7506667 L14.5853333,30.7506667 L14.5853333,24 L20.1216667,24 L20.1216667,19.1666667 C20.1216667,13.7451667 23.4535,10.6666667 28.4478333,10.6666667 C30.8143333,10.6666667 32.5951667,10.9148333 33.1656667,11.0086667 L33.1656667,16 L29.8351667,16 C27.3968333,16 26.8788333,17.3331667 26.8788333,19.1915 L26.8788333,24 L32.9561667,24 L32.1351667,30.7506667 L26.8788333,30.7506667 L26.8788333,47.5 C38.2247333,44.4713667 48,35.2049444 48,24 C48,10.745166 37.254834,0 24,0 Z" />
        </g>
      </g>
    </svg>
  );
};

export default FacebookIcon;
