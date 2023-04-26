import React from 'react';

export const metadata = {
  title: 'Team Tuffy',
  description: 'Usando next e travessuras',
  keywords: 'tuffy, play, any, tey',
};

const Team = () => {
  return (
    <section>
      <h2>Team</h2>
      <p>
        The job opening at MerX is a great opportunity for those looking to work
        in an innovative and constantly evolving environment. The professional
        will have the chance to develop software with applications in both web
        and mobile, systems analysis, and technical support, as well as work
        with technologies such as{' '}
      </p>
      <p>
        Java, Maven, SQL, Postgres, Redis, Messaging Services, Docker, AWS, and
        Kubernetes. The company also values soft skills such as proactivity,
        organization, analysis, and good teamwork. With a 40-hour weekly
        contract, the professional will have the chance to work creatively and
        collaboratively.
      </p>
    </section>
  );
};

export default Team;
