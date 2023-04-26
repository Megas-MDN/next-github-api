import React, { Suspense } from 'react';
import Repo from '@/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/components/RepoDirs';
import Loading from '@/app/loading';

const Project = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href={'code/repos'} className='btn btn-back'>
        {' '}
        Back Repos
      </Link>
      <h2>{name}</h2>
      <Suspense fallback={<div>Loading infos...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default Project;
