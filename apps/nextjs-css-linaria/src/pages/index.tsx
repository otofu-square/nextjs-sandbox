import Link from "next/link";

const IndexPage = () => (
  <div>
    <h2>Welcome to Next.js App!</h2>
    <div>
      <Link href="/ssg">SSG Page</Link>
    </div>
    <div>
      <Link href="/ssr">SSR Page</Link>
    </div>
  </div>
);

export default IndexPage;
