import React from 'react';

export default function No_bell(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ff5a79" />
      <circle cx={32} cy={32} r={24} fill="#333" />
      <g fill="#fff">
        <path d="m42 32c-1.8-3.1-1.5-5.9-1.5-8 0-4.4-2.5-7.1-6.1-8.2 0-1.4-.8-2.6-2.4-2.6-1.6 0-2.4 1.1-2.4 2.6-3.6 1.1-6.1 3.8-6.1 8.2 0 2.1.3 4.9-1.5 8-1.2 2.2-3.9 2.7-3.9 9.1h27.9c-.1-6.5-2.7-6.9-4-9.1" />
        <path d="m32.8 42.9c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4h8.8" />
      </g>
      <path transform="matrix(.7071-.7071.7071.7071-13.2556 32.0003)" fill="#ff5a79" d="m29 2.8h6v58.4h-6z" />
    </svg>
  );
}