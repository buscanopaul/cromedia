import {Link} from '@remix-run/react';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({children}: ButtonProps) {
  return (
    <Link to={'/collections/men'} className="!no-underline">
      <p className="bg-[#E8187A] uppercase font-extrabold px-7 py-[12px] text-center text-white rounded-sm text-xs">
        {children}
      </p>
    </Link>
  );
}

export default Button;
