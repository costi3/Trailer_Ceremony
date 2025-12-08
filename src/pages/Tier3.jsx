import ResultPage from "../components/ResultPage";
import logo from "../assets/tier3.png";

export default function Tier3() {
  return (
    <ResultPage
      tierLabel="TIER 3"
      borderColor="#30b6c8"
      titleColor="#30b6c8"
      logo={logo}
      list={[
        "Low performance",
        "Unreliable output",
        "Slow to adapt",
        "Often disconnected",
        "Limited utility",
      ]}
    />
  );
}
