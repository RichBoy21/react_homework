import styles from "./index.module.css";

function Contacts({ isVisible }) {
  return (
    <div
      className={`${isVisible && styles.visible} ${styles.contacts_container}`}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        similique, perferendis ex odit recusandae, dolore necessitatibus
        cupiditate dicta sunt aliquam non, dolores consequuntur dolorem nihil id
        tempora officia eaque tempore quo itaque aspernatur rem. Debitis
        asperiores architecto ut ipsa nulla quas eligendi tenetur facilis,
        possimus, atque labore. Quis, facilis. Ducimus vitae corporis, hic
        laudantium nihil dolorum nulla quia nobis ipsam nisi velit cum aperiam
        inventore necessitatibus architecto quae impedit placeat dicta id earum
        excepturi eius facere quam odio? Numquam quibusdam mollitia blanditiis
        deserunt ratione quidem nemo reprehenderit nostrum, laborum nulla quae
        tempore at repudiandae quasi. Aliquam magni cupiditate vel dicta, minus,
        eveniet quisquam repudiandae accusamus atque debitis consectetur
        voluptatum omnis ducimus provident nobis veniam beatae quis facere
        vitae? Cumque, perspiciatis reiciendis! Porro libero ad facere dolore
        voluptate aliquam adipisci, iste magni eveniet, asperiores voluptatibus
        rerum illo provident nesciunt perferendis assumenda dolor possimus rem?
        Ipsum, alias officia. Quibusdam eaque sunt ipsam id a, repudiandae
        quisquam illum sequi amet officiis doloremque nostrum explicabo,
        delectus maxime commodi atque, repellat quia at ratione possimus illo
        tenetur corrupti ab! Excepturi mollitia quod error delectus totam ex
        quisquam, sapiente cupiditate officia obcaecati perferendis ipsa,
        quaerat incidunt illo officiis quo tenetur voluptatibus assumenda rem
        provident. Voluptatem, assumenda.
      </p>
    </div>
  );
}

export default Contacts;
