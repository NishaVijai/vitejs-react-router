import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <section key={crumb} className="crumb">
          <Link to={currentLink}>{crumb}</Link>
        </section>
      );
    });

  return <section className="breadcrumbs">{crumbs}</section>;
}
