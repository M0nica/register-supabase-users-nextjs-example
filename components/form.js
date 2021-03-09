import styles from "./form.module.css";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { user } = await res.json();
    if (user) router.push(`/welcome?email${user.email}`);
    // console.log(`Just registered ${user.email} to DB.`);
  };

  return (
    <form className={styles.form} onSubmit={registerUser}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className={styles.input}
      />
      <label htmlFor="password">Password</label>

      <input
        type="password"
        id="password"
        name="password"
        required
        className={styles.input}
      />
      <button type="submit">Register</button>
    </form>
  );
}
