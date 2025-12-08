import ResultPage from "../components/ResultPage";

export default function Undiagnosed() {
  return (
    <ResultPage
      tierLabel="UNDIAGNOSED"
      borderColor="#bbb"
      titleColor="#bbb"
      list={[
        "Hard to manipulate",
        "No desire for status",
        "Refuses to stay connected",
        "Hides personal data",
        "Too independent",
      ]}
    />
  );
}
