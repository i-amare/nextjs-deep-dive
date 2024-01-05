import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export function NavBar() {
  return (
    <nav className='mb-8 flex w-full items-center justify-between bg-slate-800 px-4 py-2'>
      <h1>
        <Link href='/' className='text-3xl font-bold'>
          Next Events
        </Link>
      </h1>
      <ul className='my-2 flex w-fit items-center justify-center overflow-hidden rounded-md text-xs font-semibold uppercase text-white'>
        <ListItem>
          <Link href='/'>Home</Link>
        </ListItem>
        <div className='h-6 w-[4px] rounded-md bg-neutral-300'></div>
        <ListItem>
          <Link href='/events'>Events</Link>
        </ListItem>
        <div className='h-6 w-[4px] rounded-md bg-neutral-300'></div>
        <ListItem>
          <div className='h-fit w-fit text-lg'>
            <FiSearch />
          </div>
          <input
            className='ml-2 pt-1 px-2 w-20 border-b-[1px] bg-transparent'
            type='text'
          />
        </ListItem>
      </ul>
    </nav>
  );
}

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className='flex h-full w-full items-center justify-center px-4 py-3 duration-200 hover:scale-110'>
      {children}
    </li>
  );
}
