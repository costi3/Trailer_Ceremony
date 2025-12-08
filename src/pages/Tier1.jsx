import ResultPage from "../components/ResultPage";
import logo from "../assets/tier1.png";

export default function Tier1() {
  return (
    <ResultPage
      tierLabel="TIER 1"
      borderColor="#f5b028"
      titleColor="#f5b028"
      logo={logo}
      list={[
        "Maximum efficiency",
        "Zero empathy",
        "Obsessed with power",
        "Takes extreme risks",
        "Ruthless decision-making",
      ]}
    />
  );
}
