import Link from "next/link";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };
  return (
    <main className="dark-bg flex min-h-screen flex-col items-center justify-between p-24">
      {/* <input id="inputTag" name="InputTag" type="text" />
      <Link href = "/dashboard" className="p-3 rounded-xl border-2">View Report</Link> */}

      <input
        type="text"
        placeholder="Enter the link"
        className="p-2 border rounded"
      />
      <Link
        href="/dashboard"
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        View Report
      </Link>
    </main>
  );
}
