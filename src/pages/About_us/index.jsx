import styles from "./index.module.css";

function AboutUs({ isVisible }) {
  return (
    <div
      className={`${isVisible && styles.visible} ${styles.about_us_container}`}
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
      </p>
    </div>
  );
}

export default AboutUs;
