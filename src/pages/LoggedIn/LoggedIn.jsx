import { useDispatch } from 'react-redux';
import { userLoggedIn } from 'redax/operation';

const LoggedIn = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { email, password },
    } = e.target;
    dispatch(
      userLoggedIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <div
      style={{
        marginLeft: '50px',
        marginTop: '50px',
      }}
    >
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Email
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="email"
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Password
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="password"
            />
          </label>
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>
          Login In
        </button>
      </form>
    </div>
  );
};

export default LoggedIn;
