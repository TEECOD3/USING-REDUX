import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authAction } from "../store/AuthSlice";
const Auth = () => {
  // const login = useSelector((state) => state.auth.authenticated);
  const { login } = authAction;
  const dispatch = useDispatch();
  const submithandler = (event) => {
    event.preventDefault();
    dispatch(login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submithandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
