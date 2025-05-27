'use client';

import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const decryptOptions = {
  chars: [
    '-', '.', '/', '*', '!', '?', '#', '%', '&', '@', '$', '€',
    '(', ')', '[', ']', '{', '}', '<', '>', '~',
    ...'0123456789',
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ...'abcdefghijklmnopqrstuvwxyz'
  ]
};

export default function TextDecrypt({ text, interval = 30, className = '' }) {
  const [result, dencrypt] = useDencrypt(decryptOptions);

  useEffect(() => {
    let i = 0;
    const run = () => {
      dencrypt(text.slice(0, i));
      if (i <= text.length) {
        i += 1;
        setTimeout(run, interval);
      }
    };
    run();
  }, [text, interval, dencrypt]);

  return (
    <span
      className={className}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <span
        style={{
          opacity: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {text}
      </span>

      <span
        style={{
          position: 'absolute',
          inset: 0,
          whiteSpace: 'nowrap'
        }}
      >
        {result}&nbsp;
      </span>
    </span>
  );
}
