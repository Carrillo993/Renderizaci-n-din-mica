const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                aria-label="Home"
              >
                🍕 Home
              </button>
  
              {token ? (
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                    aria-label="Profile"
                  >
                    🔓 Profile
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-red-300 text-red-700 rounded-md text-sm font-medium hover:bg-red-50"
                    aria-label="Logout"
                  >
                    🔒 Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-green-200 text-green-700 rounded-md text-sm font-medium hover:bg-green-50"
                    aria-label="Login"
                  >
                    🔐 Login
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-blue-200 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-50"
                    aria-label="Register"
                  >
                    🔐 Register
                  </button>
                </>
              )}
            </div>
  
            <div className="ml-auto">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-800 bg-gray-50 hover:bg-gray-100"
                aria-label="Carrito"
              >
                🛒 Total: $ {total.toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;