import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <p class={styles.anchor}>
          <span>sabdahtb</span>
          <span class={styles.spacer}>|</span>
          <span>{new Date(serverTime.value.date).getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
});
