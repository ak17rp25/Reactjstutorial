import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-redux";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <Header className = 'shadow-bg-gray'>
        <Container>
            <nav className="flex">
                <div className="m-4">\
                    <Link to="/">
                    <Logo ></Logo>
                    </Link>
                </div>
                <ul className="flex m-auto">
                    {navItems.map((item)=>{
                        if(item.active){
                            return(
                                <li key={item.name}>
                                    <button onClick={()=>navigate(item.slug)}
                                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                        >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        }else{
                            return null;
                        }
                    })}
                    {authStatus &&(
                        <li><LogoutBtn></LogoutBtn></li>
                    )}
                </ul>
            </nav>
        </Container>

    </Header>
  );
};
export default Header;
