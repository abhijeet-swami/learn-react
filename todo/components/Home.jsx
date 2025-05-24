import Card from "./Card";
import Input from "./Input";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[90vh]">
        <div className="m-5 flex flex-wrap">
          <Card />
        </div>
        <Input />
      </div>
    </>
  );
}

export default Home;
