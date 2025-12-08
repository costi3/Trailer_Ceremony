import ResultPage from "../components/ResultPage";
import logo from "../assets/tier2.png";

export default function Tier2() {
  return (
    <ResultPage
      tierLabel="TIER 2"
      borderColor="#78c257"
      titleColor="#78c257"
      logo={logo}
      list={[
        "Easily influenced",
        "Addicted to data",
        "Needs constant supervision",
        "Emotionally unstable",
        "Follows orders blindly",
      ]}
    />
  );
}
