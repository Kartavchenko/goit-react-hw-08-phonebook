import { useDispatch } from 'react-redux';
import { userRegister } from 'redax/operation';

const RegisterUser = () => {
  const dispatch = useDispatch();

  const handleSinghup = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { userName, email, password },
    } = e.target;
    dispatch(
      userRegister({
        name: userName.value,
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
      <form onSubmit={handleSinghup}>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="text"
              name="userName"
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
