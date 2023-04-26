import Link from 'next/link';
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <ul className='courses' style={{ listStyle: 'none' }}>
      {projects.reverse().map((el) => (
        <li key={el._id} className='card'>
          <h2>{el.title}</h2>
          <p>{el.text}</p>
          <img
            alt={el.text}
            src={el.imgsrc}
            style={{ maxWidth: '90%', display: 'block' }}
          />
          <Link href={el.view} className='btn' target='_blank'>
            Go View
          </Link>
          <Link href={el.source} className='btn' target='_blank'>
            GitHub
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
