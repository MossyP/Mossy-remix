export function About() {
  return (
    <div className="min-h-screen flex items-center -mt-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-7xl font-bold mb-16">About</h2>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <img
              src="/icon_trans.png"
              alt="Mossy Icon"
              className="w-96 h-96 object-contain"
            />
          </div>

          <div className="w-1/2 space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-7xl font-bold">Mossy</h2>
              <a
                href="https://twitter.com/Mossy_tw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DA5A5A]"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-12 h-12" />
              </a>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-2">音楽、映像クリエイター</h3>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">スキル:</h3>
              <ul className="space-y-2 text-xl">
                <li>作曲/編曲</li>
                <li>映像制作</li>
                <li>3DCGモデリング</li>
                <li>コーディング</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
