import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="text-background flex items-center gap-2">
            <MdOutlineSupervisedUserCircle className="text-4xl md:text-6xl" />
            <span className="text-lg md:text-xl">
              Us<span className="text-primary">er Ma</span>nager
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-background">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b border-primary text-primary"
                  : "hover:border-b hover:border-primary hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/add-user"
              className={({ isActive }) =>
                isActive
                  ? "border-b border-primary text-primary"
                  : "hover:border-b hover:border-primary hover:text-primary"
              }
            >
              Add User
            </NavLink>
            <NavLink
              to="/manage"
              className={({ isActive }) =>
                isActive
                  ? "border-b border-primary text-primary"
                  : "hover:border-b hover:border-primary hover:text-primary"
              }
            >
              Manage User
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-background p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-header pb-4">
            <div className="flex flex-col gap-4 text-background">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary pl-4 py-2"
                    : "pl-4 py-2 hover:border-l-4 hover:border-primary hover:text-primary"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/add-user"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary pl-4 py-2"
                    : "pl-4 py-2 hover:border-l-4 hover:border-primary hover:text-primary"
                }
              >
                Add User
              </NavLink>
              <NavLink
                to="/manage"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary pl-4 py-2"
                    : "pl-4 py-2 hover:border-l-4 hover:border-primary hover:text-primary"
                }
              >
                Manage User
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
