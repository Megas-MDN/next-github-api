'use client';
import React, { useState, useEffect } from 'react';
import Projects from '@/components/Projects';
import Loading from './loading';
import Search from '@/components/Search';

const page = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data.projects.reverse());
      setLoading(false);
    };
    fetchData();
  }, []);

  const getSearch = (data) => {
    setProjects(data);
  };

  if (loading) return <Loading />;
  return (
    <>
      <h1>Next JS</h1>
      <Search {...{ getSearch }} />
      <Projects {...{ projects }} />
    </>
  );
};

export default page;
