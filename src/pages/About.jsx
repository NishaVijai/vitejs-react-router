import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function About() {
  // frontend authentication check using useState and navigate
  const [user, setUser] = useState('mario');

  if (!user) {
    // to replace the page in history - to prevent the user navigating back to the previous page from the browser
    return <Navigate to="/" replace={true} />;
  }

  return (
    <section>
      <h2>About Us page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        quaerat at facilis natus reprehenderit? Laudantium et voluptate quo quam
        soluta atque omnis? Voluptatum ut commodi quis error minus ab incidunt?
        Voluptatum eveniet error nam, suscipit corporis numquam beatae.
        Voluptates nihil, iure accusantium alias, omnis nam architecto quas
        tempora deserunt eius unde culpa, dolorem repellat. Repudiandae eos
        dolores culpa explicabo repellendus! Delectus dolorem totam vitae fuga
        cumque tenetur. Commodi obcaecati architecto ab voluptatum sint totam
        illum, ad, quae quidem tempore consequatur aut error sit quaerat
        dolorum, quia quam iste perspiciatis enim. Maxime dolorem excepturi
        itaque sequi ad veritatis doloribus blanditiis quisquam illo facere
        aperiam enim rem labore mollitia maiores, ipsa voluptates magni
        praesentium alias quasi dolor minus? Sunt ea soluta aspernatur. Incidunt
        totam illo sit exercitationem libero ratione nulla iste impedit
        explicabo corrupti, dolores deleniti dignissimos ducimus maiores
        debitis? Velit, illum cupiditate veritatis sapiente error iure fugiat
        maxime repudiandae atque voluptate?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vel
        minima illo amet, facere laborum nulla similique rerum asperiores quas
        itaque eum eligendi pariatur maxime doloremque culpa dolorum nihil ex.
        Voluptatibus nisi placeat laudantium animi magni consectetur quibusdam
        aperiam, natus facilis praesentium ad minus. Ipsum veniam ratione, ab
        autem eligendi veritatis ex architecto nesciunt quisquam vel tenetur at,
        quibusdam culpa. Veniam, iste, possimus quae ut fugit explicabo illo
        provident consequatur quos vitae cupiditate. Nostrum vitae aliquam
        voluptatum? Veritatis minima placeat, optio distinctio, odio ducimus
        quae totam sint, minus excepturi nam. Sunt ipsum temporibus deserunt
        optio iste reiciendis blanditiis provident distinctio dolorum rem quos
        quibusdam aspernatur eligendi esse exercitationem sint ex, hic error
        incidunt in cum eos odio asperiores. Tenetur, sunt. At expedita beatae
        inventore, laudantium magni voluptate vero? Quis quam culpa, ab sequi
        numquam odio quaerat aliquid quasi unde consectetur totam excepturi
        deleniti voluptatum vero. Fugiat labore vero ducimus maiores! Sunt totam
        qui reiciendis nam illo corrupti voluptate tenetur, doloremque est
        praesentium a nesciunt cum fugit ad ratione nulla aliquid voluptas
        provident architecto maiores nihil fugiat dicta quos itaque! Vero.
        Dolores labore odit nemo, est saepe laboriosam, sapiente deserunt
        veritatis harum expedita quasi itaque. Odio, laboriosam reprehenderit
        consectetur non dolor quia fugiat provident nobis natus! Ipsum autem
        reiciendis accusamus dolorum. Labore perferendis assumenda quos incidunt
        quia iusto odio adipisci quibusdam exercitationem est nulla, enim vitae
        amet quas consequuntur fugiat ipsam necessitatibus corporis ipsum
        consequatur. Dolor aspernatur ullam dolore nostrum iste! Sed incidunt
        aspernatur modi repellendus quae doloribus illo voluptatum odio maiores
        veritatis neque porro omnis nisi cupiditate odit natus perspiciatis,
        illum, laborum facilis ducimus beatae enim iste. Ullam, voluptate saepe.
        Nesciunt sapiente reprehenderit deserunt assumenda hic error culpa.
        Reprehenderit voluptas, sequi quibusdam alias minima dolore ad
        recusandae error, omnis cum iure similique perspiciatis debitis rerum
        sit cupiditate porro! Veritatis, laudantium.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </section>
  );
}
