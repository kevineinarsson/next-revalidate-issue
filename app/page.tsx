import Link from "next/link";

async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
}

export default async function LandingPage() {
  const data = await fetchData("1");
  return (
    <main>
      <div>
        <h1>ID is: 1</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <ul>
          <li>
            <Link href="/1">Go to 1</Link>
          </li>
          <li>
            <Link href="/2">Go to 2</Link>
          </li>
          <li>
            <Link href="/3">Go to 3</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
