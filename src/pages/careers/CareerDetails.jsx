import { useParams, useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <section className="career-details">
      <h2> Career details for {career.title} </h2>
      <p> Starting salary: {career.salary} </p>
      <p> Location: {career.location} </p>
      <section className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          eligendi laudantium! Distinctio sed sunt recusandae minus provident
          tenetur, pariatur, aspernatur earum vel praesentium soluta ex, odit
          laboriosam adipisci labore veniam? Nemo facilis ipsum ducimus amet
          fugit! Libero cumque modi dignissimos, quaerat illo ad deserunt dolor
          magni tempora consequuntur recusandae mollitia doloribus atque, itaque
          iusto omnis similique delectus cum necessitatibus id.
        </p>
      </section>
    </section>
  );
}

// Loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/careers/' + id);

  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
};
