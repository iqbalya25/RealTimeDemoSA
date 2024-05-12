import AdvantageItem from "./AdvantaegItem";
import AdvantageList from "./AdvantageList";

const Advantage = () => {
  return (
    <div
      className="flex relative justify-center items-center"
      style={{
        background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB)",
        minHeight: "70vh",
        height: "auto",
      }}
    >
      <AdvantageList Advantages={AdvantageItem} />
    </div>
  );
};
export default Advantage;
