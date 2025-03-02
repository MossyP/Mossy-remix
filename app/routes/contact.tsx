export function Contact() {
    return (
        <div className="h-screen flex items-center relative">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <h2 className="text-7xl font-bold mb-16">Contact</h2>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-4xl font-bold mb-4">SNS</h3>
                        <div className="flex gap-8">
                            <a
                                href="https://twitter.com/Mossy_tw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xl hover:text-[#DA5A5A] transition-colors"
                            >
                                <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                                Twitter
                            </a>
                            {/* 他のSNSリンクも同様に追加可能 */}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold mb-4">Email</h3>
                        <a
                            href="mailto:contact@example.com"
                            className="text-xl hover:text-[#DA5A5A] transition-colors"
                        >
                            contact@example.com
                        </a>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold mb-4">お仕事のご依頼</h3>
                        <p className="text-xl">
                            お仕事のご依頼は上記のSNSまたはEmailにてお願いいたします。
                            <br />
                            内容を確認次第、ご返信させていただきます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
