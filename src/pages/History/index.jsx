import styles from "./index.module.css";

function History({ isVisible }) {
  return (
    <div className={`${isVisible && styles.visible} ${styles.history}`}>
      <p>
        <p>
          laborum nulla quae tempore at repudiandae quasi. Aliquam magni
          cupiditate vel dicta, minus, eveniet quisquam repudiandae accusamus
          atque debitis consectetur voluptatum omnis ducimus provident nobis
          veniam beatae quis facere vitae? Cumque, perspiciatis reiciendis!
          Porro libero ad facere dolore voluptate aliquam adipisci, iste magni
          eveniet, asperiores voluptatibus rerum illo provident nesciunt
          perferendis assumenda dolor possimus rem? Ipsum, alias officia.
          Quibusdam eaque sunt ipsam id a, repudiandae quisquam illum sequi amet
          officiis doloremque nostrum explicabo, delectus maxime commodi atque,
          repellat quia at ratione possimus illo tenetur corrupti ab! Excepturi
          mollitia quod error delectus totam ex quisquam, sapiente cupiditate
          officia obcaecati perferendis ipsa, quaerat incidunt illo officiis quo
          tenetur voluptatibus assumenda rem provident. Voluptatem, assumenda.
        </p>
      </p>
    </div>
  );
}

export default History;
