import { useMemo } from "react";
import "./styles.css";

export const MainComponent = () => {
  const period = useMemo(() => {
    return new Date().getFullYear() - 2018;
  }, []);

  return (
    <tr>
      <td>
        <h2>About Me</h2>
        <p>
          Frontend developer with over {period} years of expertise in building scalable
          web applications using modern technologies such as React, Vue.js, and
          TypeScript. Working in a team from 5 to 25 members, both remotely and
          on-site. Strong background in mentoring junior developers, developing
          complex user interfaces, and writing tests. Proficient in both
          front-end and back-end development, with a focus on creating
          high-quality, accessible user interfaces. Optimized page loading
          speed, worked on application accessibility, participated in SCRUM
          activities.
        </p>

        <h2>Skills</h2>
        <ul className="styled-list">
          <li>
            JavaScript, TypeScript, React, Redux, Zustand, React Query, Vue,
            Vuex, Pinia
          </li>
          <li>
            React Testing Library, Jest, Mocha, Vue Test Utils, Storybook
          </li>
          <li>Node, Nest.js, Fastify, Express, Prisma</li>
          <li>Russian (Native), English (B2), Japanese (N3)</li>
        </ul>
      </td>
    </tr>
  );
};
