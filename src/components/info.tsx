import "./styles.css";

export const InfoComponent = () => {
  return (
    <>
      <tr>
        <td colSpan={2} align="center">
          <p>
            <b className="blink">🔥🔥 Invent.us 🔥🔥</b>
          </p>
        </td>
      </tr>
      <tr style={{ verticalAlign: "baseline" }}>
        <td>
          <ul className="styled-list">
            <li>
              Developed a universal scalable microfrontend platform using React,
              TypeScript, and Effector, resulting in a 54% reduction in
              development time for new features.
            </li>
            <li>
              Mentored a team of 5 junior developers by conducting code reviews
              and providing technical guidance, leading to a 33% improvement in
              code quality and team productivity.
            </li>
            <li>
              Created a UI-kit with Storybook and styled-components to
              standardize design components across projects, reducing UI
              development time by 56%.
            </li>
            <li>
              Automated CI/CD pipelines with GitLab and Docker, enabling
              seamless deployment processes and reducing deployment errors by
              42%.
            </li>
            Developed a customizable graph-based navigation system using React
            and React Flow, reducing user journey time by 35%.
            <li>
              Enhanced application accessibility by implementing ARIA roles,
              semantic HTML, and keyboard navigation in UI-kit components,
              achieving an 86% Lighthouse accessibility score.
            </li>
            <li>
              Designed and implemented a Backend-for-Frontend (BFF) layer using
              Node.js (TypeScript + Express) for API orchestration reducing
              latency by 35% and decoupling frontend/backend release cycles.
            </li>
          </ul>
        </td>
        <td>
          <p style={{ whiteSpace: "nowrap" }}>Sep 2020 - Nov 2024</p>
          <p>Dubai, UAE</p>
        </td>
      </tr>

      <tr>
        <td colSpan={2} align="center">
          <p>
            <b className="blink">🔥🔥 Upride 🔥🔥</b>
          </p>
        </td>
      </tr>
      <tr style={{ verticalAlign: "baseline" }}>
        <td>
          <ul className="styled-list">
            <li>
              Set up a project from scratch using Vue, TypeScript, and Nest.js,
              enabling the team to deliver the first MVP within 3 months.
            </li>
            <li>
              Configured Docker containers and docker-compose to streamline
              local development, cutting setup time for new developers by 54%.
            </li>
          </ul>
        </td>
        <td>
          <p style={{ whiteSpace: "nowrap" }}>Sep 2019 - Sep 2020</p>
          <p>Remote</p>
        </td>
      </tr>

      <tr>
        <td colSpan={2} align="center">
          <p>
            <b className="blink">🔥🔥 Hearst Shkulev Media 🔥🔥</b>
          </p>
        </td>
      </tr>
      <tr style={{ verticalAlign: "baseline" }}>
        <td>
          <ul className="styled-list">
            <li>Developed UI-kit with Storybook</li>
            <li>Build Vue components with Typescript</li>
            <li>Integrated BEM methodology</li>
            <li>Refactored and fix bugs in a legacy project </li>
          </ul>
        </td>
        <td>
          <p style={{ whiteSpace: "nowrap" }}>Oct 2018 - Sep 2019</p>
          <p>Remote</p>
        </td>
      </tr>

      <tr>
        <td colSpan={2} align="center">
          <p>
            <b className="blink">🔥🔥 E2E4 🔥🔥</b>
          </p>
        </td>
      </tr>
      <tr style={{ verticalAlign: "baseline" }}>
        <td>
          <ul className="styled-list">
            <li>Developed client-side of ecom shop</li>
            <li>Implemented Vuex, Vue-router</li>
            <li>
              Build custom UI-kit with on top of 3rd party libs in Storybook
            </li>
            <li>
              Performed code review. Wrote unit test with Chai, Mocha, Jasmine,
              Vue-test-utils
            </li>
            <li>
              Worked according to SCRUM with 2 weeks sprints, PBR, demo, and
              retrospection Work in Docker
            </li>
          </ul>
        </td>
        <td>
          <p style={{ whiteSpace: "nowrap" }}>Nov 2017 - Oct 2018</p>
          <p>Remote</p>
        </td>
      </tr>
    </>
  );
};
