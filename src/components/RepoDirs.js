import Link from 'next/link';
import React from 'react';

const fetchData = async (name) => {
  await new Promise((r) => setTimeout(r, 5000));
  return (
    await fetch(`https://api.github.com/repos/megas-mdn/${name}/contents`)
  ).json();
};

const RepoDirs = async ({ name }) => {
  const content = await fetchData(name);
  const dirs = content.filter((el) => el.type === 'dir');
  return (
    <>
      <h3>Diretórios</h3>
      <ul>
        {dirs.map((el) => (
          <li key={el.path}>
            <Link href={`code/repos/${el.path}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
