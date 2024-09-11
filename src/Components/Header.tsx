import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Header = observer(() => {
  const {
    rootStore: { loginStore, cartStore },
  } = useStore();

  const navigate = useNavigate();

  const onLogout = () => {
    loginStore.logout();
    navigate("/login");
  };

  return (
    <div className="container text-bg-dark text-white">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/products"
            className="text-white d-inline-flex link-body-emphasis text-decoration-none"
          >
            React Project With MobX
          </Link>
        </div>

        <div className="col-md-3 text-end">
          {!loginStore.getUserToken && (
            <>
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <button type="button" className="btn btn-primary me-2">
                Sign-up
              </button>
            </>
          )}
          {loginStore.getUserDetails?.username && (
            <>
              <span className="me-2">
                Welcome {loginStore.getUserDetails?.username}
              </span>
              <Link to="/checkout" className="btn btn-primary me-2">
                Cart ({cartStore.getCartCount || 0})
              </Link>
              <button
                onClick={onLogout}
                type="button"
                className="btn btn-primary me-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
});

export default Header;
