import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon }) => (
  <li>
    <Link href={href} className="hover:text-purple-800 transition-all flex items-center space-x-2">
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  </li>
);

export default MenuItem;
