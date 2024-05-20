import itemList from "./itemList";
import SolutionList from "./SolutionList";

const Solution = () => {
  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className="text-center text-4xl font-bold">
          Automation & Energy Management Solutions
        </h1>
        <SolutionList solutions={itemList} />
      </div>
    </div>
  );
};

export default Solution;
