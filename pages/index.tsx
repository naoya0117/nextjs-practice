import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section>
				<h1>
					Read <Link href="/posts/first-post">This page!</Link>
				</h1>
				<p>こんにちはnaoya0117です。</p>
			</section>
		</>
	);
}

