import itemList from "./itemList";
import SolutionList from "./SolutionList";

const Solution = () => {
  return (
    <div>
      <div className="mt-20 mb-20">
        <SolutionList solutions={itemList} />
      </div>
    </div>
  );
};

export default Solution;
