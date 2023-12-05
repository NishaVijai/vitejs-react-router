import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
  return (
    <section className="root-layout">
      <header>
        <nav>
          <h1>Job router</h1>
          {/* <Link to="/">Home</Link> */}
          {/* Use NavLink to get class="active" to style active link */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </section>
  );
}
