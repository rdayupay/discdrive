import React from 'react';
import Link from 'next/link';

const Logo = (props) => {
  return (
    <h1 className="text-2xl font-extrabold">
      <Link href="/" className='"no-underline"'>
        DiscDrive
      </Link>
    </h1>
  );
};

export default Logo;
