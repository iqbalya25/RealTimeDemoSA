import AdvantageItem from "./AdvantaegItem";
import AdvantageList from "./AdvantageList";

const Advantage = () => {
  return (
    <div
      className="flex relative justify-center items-center"
      style={{
        background: "linear-gradient(90deg, #bdc3c7, #2c3e50)",
        minHeight: "70vh",
        height: "auto",
      }}
    >
      <AdvantageList Advantages={AdvantageItem} />
    </div>
  );
};
export default Advantage;
