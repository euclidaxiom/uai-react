import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Link href={"/top-bar"}>Click here</Link>
    </div>
  );
}
