import Logo from "../assets/img/foodvilla.png"

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="log"
        src={Logo}
     />
    </a>
  );
};
export default Title;