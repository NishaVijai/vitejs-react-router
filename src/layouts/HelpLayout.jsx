import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
    <section className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        dolorum quidem, nobis et nihil expedita voluptate est magni laudantium
        at similique aliquam ea totam animi, tempora vero atque harum in!
        Voluptate quidem fuga quas id recusandae? Tempore modi, deserunt numquam
        aperiam, cumque repudiandae sed veritatis libero soluta asperiores
        quibusdam qui et. Quisquam nesciunt placeat, nam illo temporibus quidem
        voluptatum eveniet.
      </p>

      <nav>
        <NavLink to="faq">View FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </section>
  );
}
