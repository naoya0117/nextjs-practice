import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FirstPost: FC = () => {
    return (
        <>
            <h1>First Post</h1>
            <Image
				src="/images/Profile.jpg" // イメージファイルのルート
				height={144} // イメージサイズの設定
				width={144} // アスペクト比を正しく
				alt="Your Name"
			/>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </>
    )
};
export default FirstPost;