'use client';

import Select from '@/app/components/events/search/select';

export default function Search({ searchParams }: { searchParams: any }) {
  console.log(searchParams);

  return (
    <main className='flex min-h-screen w-screen justify-center'>
      <form className='mx-auto w-1/4'>
        <Select
          label='year'
          text='Year'
          options={[
            { text: '2024', val: '2024' },
            { text: '2023', val: '2023' },
            { text: '2022', val: '2022' },
            { text: '2021', val: '2021' },
            { text: '2020', val: '2020' },
          ]}
        />
        <Select
          label='month'
          text='Month'
          options={[
            { text: 'Jan', val: '1' },
            { text: 'Feb', val: '2' },
            { text: 'Mar', val: '3' },
            { text: 'Apr', val: '4' },
            { text: 'May', val: '5' },
            { text: 'Jun', val: '6' },
            { text: 'Jul', val: '7' },
            { text: 'Aug', val: '8' },
            { text: 'Sep', val: '9' },
            { text: 'Oct', val: '10' },
            { text: 'Nov', val: '11' },
            { text: 'Dec', val: '12' },
          ]}
        />
        <button className=''></button>
      </form>
    </main>
  );
}
