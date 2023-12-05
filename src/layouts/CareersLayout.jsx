import { Outlet } from 'react-router-dom';

export default function CareersLayout() {
  return (
    <section className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <Outlet />
    </section>
  );
}
