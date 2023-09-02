const Section = ({title})=>{
  return(
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      <p>This is the about section of Instamart</p>
    </div>
    
  )
}


const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section title={"About Instamart"}/>
    </div>
  );
};
export default Instamart;
