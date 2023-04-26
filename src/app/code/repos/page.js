import Link from 'next/link';
import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fechData = async () => {
  const URL_BASE = 'https://api.github.com/users/megas-mdn/repos';
  const data = await fetch(URL_BASE, {
    next: {
      revalidate: 10,
    },
  });
  return data.json();
};

const page = async () => {
  const repos = await fechData();
  return (
    <div className='repos-container'>
      <h2>Repositórios</h2>
      <ul className='repo-list'>
        {repos.map((el) => (
          <li key={el.id}>
            <Link href={`/code/repos/${el.name}`}>
              <h3>{el.name}</h3>
              <p>{el.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span>
                  <FaCodeBranch />
                  {el.forks_count}
                </span>
                <span>
                  <FaEye />
                  {el.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
