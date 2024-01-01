import Link from 'next/link';

export function NavBar() {
  return (
    <nav className='mb-8 flex w-full items-center justify-between bg-slate-800 px-4 py-2'>
      <h1>
        <Link href='/' className='text-3xl font-bold'>
          Next Events
        </Link>
      </h1>
      <ul className='my-2 flex w-fit items-center justify-center overflow-hidden rounded-md text-xs font-semibold uppercase text-white'>
        <li className='h-full w-full px-4 py-3 hover:bg-slate-800'>
          <Link href='/'>Home</Link>
        </li>
        <div className='h-6 w-[4px] rounded-md bg-neutral-300'></div>
        <li className='h-full w-full px-4 py-3 hover:bg-slate-800'>
          <Link href='/events'>Events</Link>
        </li>
      </ul>
    </nav>
  );
}
