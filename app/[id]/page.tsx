import Link from "next/link";

async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
}

export function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  return {
    title: `Page ${id}`,
  };
}

export default async function TestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await fetchData(id);
  return (
    <main>
      <div>
        <h1>ID is: {id}</h1>
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
