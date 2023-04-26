import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fechRepo = async (name) =>
  (await fetch(`https://api.github.com/repos/megas-mdn/${name}`)).json();

const Repo = async ({ name }) => {
  const repo = await fechRepo(name);
  return (
    <>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
