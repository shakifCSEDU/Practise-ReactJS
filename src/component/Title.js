import Logo from "../assets/img/foodvilla.png"

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        alt="log"
        src={Logo}
     />
    </a>
  );
};
export default Title;