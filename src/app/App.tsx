import {
  AlertCircle,
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  Coins,
  Gift,
  ImageIcon,
  Quote,
  Truck,
} from "./icons";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24 selection:bg-black selection:text-white">
      {/* Header */}
      <header className="border-b-2 border-black sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-sm font-bold mb-0.5">女性自身定期購読</h1>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">女性自身プレミアム</div>
          </div>
          <nav className="flex gap-2 flex-wrap justify-center">
            <button className="px-3 py-1.5 md:px-4 md:py-2 border-2 border-black bg-white hover:bg-gray-100 font-bold text-sm transition-colors">所持ポイント</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 border-2 border-black bg-white hover:bg-gray-100 font-bold text-sm transition-colors">ポイントを使う</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 border-2 border-black bg-white hover:bg-gray-100 font-bold text-sm transition-colors">ログイン</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 border-2 border-black bg-black text-white hover:bg-gray-800 font-bold text-sm transition-colors">新規会員登録</button>
          </nav>
        </div>
      </header>

      <main>
        {/* FV / Hero Section */}
        <section className="w-full relative bg-gray-200 min-h-[600px] flex flex-col items-center justify-center border-b-4 border-black py-20 px-4">
          {/* FV Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="inline-block px-6 py-2 border-4 border-black bg-white font-bold text-sm md:text-xl mb-8 tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              雑誌 ＋ デジタルサービス ＋ 各種特典付き
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-tight text-black p-6 md:p-8 inline-block w-full sm:w-auto">
              女性自身<br className="md:hidden" />プレミアム
            </h2>
            
            <div className="w-full sm:w-auto text-lg md:text-3xl font-extrabold leading-relaxed py-4 px-6 md:px-10 bg-black text-white border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mt-4">
              毎号送料無料で「女性自身」をご自宅・オフィスにお届け！
            </div>
          </div>
        </section>

        {/* Section 1: Update Announcement */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto border-4 border-black p-6 md:p-12 relative mt-5 bg-white z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-8 py-2 font-bold text-xl md:text-2xl whitespace-nowrap border-2 border-white">
              UPDATE
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center leading-tight mt-4">
              6月2日（火）より女性自身定期購読<br />
              「女性自身プレミアム」がアップデート！
            </h3>
            <ul className="space-y-4 max-w-3xl mx-auto text-lg md:text-xl font-bold bg-gray-50 p-6 md:p-8 border-2 border-black">
              <li className="flex items-start md:items-center gap-3">
                <div className="bg-black text-white p-1 rounded-full flex-shrink-0 mt-1 md:mt-0"><Check size={20} /></div>
                <span>定期購読を新規・継続購入すると<span className="underline decoration-4 underline-offset-4">ポイントを付与</span></span>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <div className="bg-black text-white p-1 rounded-full flex-shrink-0 mt-1 md:mt-0"><Check size={20} /></div>
                <span>より気軽に始められる<span className="underline decoration-4 underline-offset-4">月額コース</span>がスタート</span>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <div className="bg-black text-white p-1 rounded-full flex-shrink-0 mt-1 md:mt-0"><Check size={20} /></div>
                <span>初回特典で<span className="underline decoration-4 underline-offset-4">2,000円分</span>のkokodeクーポンをプレゼント</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Course Options (Plans) */}
        <section className="py-20 px-4 bg-gray-100 border-y-2 border-black" id="plans">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">選べる2つの定期購読コース</h2>
              <p className="text-lg md:text-xl font-bold text-gray-700">女性自身プレミアムの定期購読なら、毎号送料無料で雑誌をご自宅・オフィスにお届けします</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-12 max-w-4xl mx-auto">
              {/* Annual Course */}
              <div className="border-4 border-black bg-white relative flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-2 font-bold text-lg w-max whitespace-nowrap h-10 flex items-center">
                  ＼ 1番お得！おすすめ ／
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-extrabold mb-6 text-center border-b-2 border-black pb-4 mt-2">年額コース</h3>
                  <div className="text-center mb-6">
                    <span className="text-5xl font-black tracking-tighter">16,920</span>
                    <span className="text-xl font-bold ml-1">円</span>
                    <p className="text-gray-600 font-bold mt-2">（税込）/ 36冊</p>
                  </div>
                  <div className="text-center font-bold border-2 border-black py-3 mb-8 bg-black text-white flex-1 flex flex-col items-center justify-center">
                    <p>「雑誌1年分」通常購入よりも</p>
                    <p><span className="text-2xl">2,460</span>&nbsp;円安い！</p>
                  </div>
                  <button className="mt-auto w-full py-4 bg-black text-white font-bold text-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black">
                    年額コースに申し込む
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Monthly Course */}
              <div className="border-4 border-black bg-white relative flex flex-col mt-4 md:mt-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border-2 border-black text-black px-8 py-2 font-bold text-lg w-max whitespace-nowrap h-10 flex items-center">
                  まずはお試し！
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-extrabold mb-6 text-center border-b-2 border-gray-300 pb-4 text-gray-800 mt-2">月額コース</h3>
                  <div className="text-center mb-6 text-gray-800">
                    <span className="text-5xl font-black tracking-tighter">1,500</span>
                    <span className="text-xl font-bold ml-1">円</span>
                    <p className="text-gray-500 font-bold mt-2">（税込）/ 3冊</p>
                  </div>
                  <div className="text-center font-bold border-2 border-gray-300 py-3 mb-8 bg-gray-50 text-gray-600 flex-1 flex flex-col items-center justify-center">
                    <p>お試しにぴったり！</p>
                    <p>気軽にスタートできるコース</p>
                  </div>
                  <button className="mt-auto w-full py-4 bg-white text-black font-bold text-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors border-2 border-black">
                    月額コースに申し込む
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Member Benefits */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-relaxed">
                女性自身プレミアム会員なら<br />限定特典が盛り沢山！
              </h2>
            </div>

            <div className="space-y-16">
              {/* Benefit 1 */}
              <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 border-b-4 border-black">
                  <div className="bg-black p-4 border-2 border-white rounded-full mb-4">
                    <BookOpen size={48} className="stroke-1" />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-lg font-bold mb-1 tracking-widest opacity-80 block">特典 1</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold">デジタルサービス『女性自身Premium』</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-8 pb-4 border-b-2 border-gray-200 text-center md:text-left">
                    たくさんのコンテンツがスマホでも読める！
                  </h4>
                  <ul className="space-y-8">
                    <li className="flex flex-col sm:flex-row gap-12 items-center">
                      <div className="w-full sm:w-2/5 aspect-video bg-gray-200 border-2 border-black flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
                        <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <div className="w-full sm:w-3/5">
                        <strong className="text-xl flex items-center gap-2 mb-3"><Check className="text-black flex-shrink-0" size={24}/> 過去2年分の『女性自身』がすべて読み放題</strong>
                        <p className="text-gray-700 font-medium leading-loose text-lg">見逃したニュース、振り返りたい健康記事、何度でも読み返したいレシピページなど。「ワード検索」で過去2年分がいつでも読めます！</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row-reverse gap-12 items-center border-t-2 border-gray-100 pt-8">
                      <div className="w-full sm:w-2/5 aspect-video bg-gray-200 border-2 border-black flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
                        <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <div className="w-full sm:w-3/5">
                        <strong className="text-xl flex items-center gap-2 mb-3"><Check className="text-black flex-shrink-0" size={24}/> ムック、マンガも読み放題</strong>
                        <p className="text-gray-700 font-medium leading-loose text-lg">・愛くるしいパンダの軌跡をたどれる『パンダ自身』<br />・スマホで見やすいレシピ集『女性自身お料理コレクション』<br />など注目コンテンツが目白押し！</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-4 items-center border-t-2 border-gray-100 pt-8">
                      <strong className="text-xl flex items-center gap-2"><Check className="text-black flex-shrink-0" size={24}/> 会員限定のオリジナル動画も続々アップ</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col md:flex-row-reverse border-4 border-black bg-white shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white text-black border-b-4 md:border-b-0 md:border-l-4 border-black p-8 md:w-1/3 flex flex-col items-center justify-center text-center" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 8px)' }}>
                  <div className="bg-white p-4 border-2 border-black rounded-full mb-4">
                    <Coins size={48} className="stroke-1" />
                  </div>
                  <span className="text-xl font-bold mb-2 tracking-widest">特典 2</span>
                  <h3 className="text-2xl font-extrabold bg-white px-2">ポイントが貯まる</h3>
                </div>
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <ul className="space-y-6">
                    <li className="border-l-4 border-black pl-4">
                      <strong className="text-xl block mb-2">定期購読の新規・継続購入でポイントを付与</strong>
                      <p className="text-gray-700 font-medium text-lg">次回の定期購読購入にも利用できます。</p>
                    </li>
                    <li className="border-l-4 border-black pl-4">
                      <strong className="text-xl block mb-2">キャンペーン期間中は購入金額の10％をポイント還元</strong>
                      <p className="text-gray-700 font-medium text-lg bg-gray-100 inline-block px-2 py-1 mt-1">キャンペーン期間：2026年6月2日～2027年5月31日</p>
                    </li>
                    <li className="border-l-4 border-black pl-4">
                      <strong className="text-xl block mb-2">kokodeクーポンのプレゼントや抽選プレゼントも！</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 border-b-4 border-black relative">
                  <div className="bg-black p-4 border-2 border-white rounded-full mb-4">
                    <Gift size={48} className="stroke-1" />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-lg font-bold mb-1 tracking-widest opacity-80 block">特典 3</span>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <h3 className="text-2xl md:text-3xl font-extrabold">季節のプレゼント</h3>
                      <span className="inline-block bg-white text-black px-4 py-1 font-bold text-sm border-2 border-white">全員プレゼント</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-10 pb-4 border-b-2 border-gray-200 text-center">
                    季節ごとにうれしいプレゼントをお届け！
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-4">
                      <div className="w-full aspect-[1/1] bg-gray-200 border-2 border-black flex items-center justify-center relative overflow-hidden group">
                        <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <div>
                        <strong className="text-xl md:text-2xl block mb-2">「お料理コレクション」ポストカード</strong>
                        <p className="text-gray-700 font-medium leading-relaxed text-lg">4号ごとに、編集部おすすめレシピをポストカードにしてお届け</p>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col gap-4">
                      <div className="w-full aspect-[1/1] bg-gray-200 border-2 border-black flex items-center justify-center relative overflow-hidden group">
                        <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <div>
                        <strong className="text-xl md:text-2xl block mb-2">皇室報道ダイジェスト（約32ページ予定）</strong>
                        <p className="text-gray-700 font-medium leading-relaxed text-lg">1年分の皇室報道をまとめた特別冊子を、12月発売号に同梱予定</p>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col gap-4">
                      <div className="w-full aspect-[1/1] bg-gray-200 border-2 border-black flex items-center justify-center relative overflow-hidden group">
                        <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                      </div>
                      <div>
                        <strong className="text-xl md:text-2xl block mb-2">2027年「皇室ご予定」丸わかりカレンダー</strong>
                        <p className="text-gray-700 font-medium leading-relaxed text-lg">皇室のご予定がひと目でわかるカレンダーを、3月発売号に同梱予定</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex flex-col md:flex-row-reverse border-4 border-black bg-white shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white text-black border-b-4 md:border-b-0 md:border-l-4 border-black p-8 md:w-1/3 flex flex-col items-center justify-center text-center" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 8px)' }}>
                  <div className="bg-white p-4 border-2 border-black rounded-full mb-4">
                    <Calendar size={48} className="stroke-1" />
                  </div>
                  <span className="text-xl font-bold mb-2 tracking-widest">特典 4</span>
                  <h3 className="text-2xl font-extrabold bg-white px-2">会員限定イベント</h3>
                </div>
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-xl md:text-2xl font-bold mb-8 pb-4 border-b-2 border-gray-200 text-center md:text-left">
                    会員限定イベントを続々企画中！
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-video bg-gray-200 border-2 border-black flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
                      <ImageIcon className="text-gray-400 group-hover:scale-110 transition-transform" size={32} />
                    </div>
                    <ul className="space-y-6 font-medium text-gray-700 w-full md:w-1/2">
                      <li className="flex items-start gap-3"><Check size={28} className="text-black flex-shrink-0 mt-0.5"/> <span className="text-xl">イベントやセミナーへのご招待</span></li>
                      <li className="flex items-start gap-3"><Check size={28} className="text-black flex-shrink-0 mt-0.5"/> <span className="text-xl">ここでしか体験できない特典をご用意</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white text-black border-b-4 md:border-b-0 md:border-r-4 border-black p-8 md:w-1/3 flex flex-col items-center justify-center text-center" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 8px)' }}>
                  <div className="bg-white p-4 border-2 border-black rounded-full mb-4">
                    <Truck size={48} className="stroke-1" />
                  </div>
                  <span className="text-xl font-bold mb-2 tracking-widest">特典 5</span>
                  <h3 className="text-2xl font-extrabold bg-white px-2">送料無料</h3>
                </div>
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">
                    送料は光文社が負担！
                  </h4>
                  <p className="font-medium text-gray-700 border-t-2 border-dashed border-gray-300 pt-4 text-xl w-full">
                    さらに特大号の差額も光文社が負担いたします。
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Summary */}
            <div className="mt-32 p-8 md:p-12 border-t-2 border-b-2 border-black text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4">
                <span className="text-2xl md:text-3xl font-black">and MORE...</span>
              </div>
              <p className="text-xl md:text-2xl font-bold leading-loose">
                女性自身Premiumは、これからがもっと充実。<br />
                人気占い師の連載（湊きよひろさん、蛯名里香さんなど）や<br className="hidden md:block" />
                皇室、動画など、新コンテンツが続々登場予定です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Notice */}
        <section className="mb-24 px-4">
          <div className="max-w-3xl mx-auto p-6 md:p-8 border-2 border-black bg-gray-100 flex items-start gap-4">
            <AlertCircle className="flex-shrink-0 text-black mt-1" size={24} />
            <div className="font-medium text-gray-800 leading-relaxed text-lg">
              <p className="mb-2 font-bold">「女性自身シンプル」の定期購読コースは終了いたしました。</p>
              <p>現在ご契約中のお客様には、更新時期が近づきましたら、あらためてご案内をお送りいたします。</p>
            </div>
          </div>
        </section>

        {/* Section 5: Editor's Message */}
        <section className="py-24 px-4 bg-black text-white border-y-2 border-black">
          <div className="max-w-5xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-widest">
              編集長からのコメント
            </h2>
            <div className="bg-white text-black p-8 md:p-12 md:px-16 relative border-4 border-black max-w-4xl mx-auto">
              <Quote className="absolute -top-6 -left-6 text-white bg-black border-4 border-white rounded-full p-3" size={64} />
              <div className="pt-4">
                <p className="mb-8 leading-loose text-lg md:text-xl font-medium">
                  仕事、子育て、体型や顔の変化（進化？）、夫婦関係、婚活のこと、老後や更年期のこと⋯。いつもご愛読いただきありがとうございます。<br/><br/>
                  女性自身は、「読者からの信頼性を大切に、読者の視点で記事を作成する！」といった情熱を持ち続け、日々コンテンツを作成しています。心も体も若々しく、これから「人生の後半戦」を楽しもうという意欲に満ちている読者を応援したい。あなたの明日に「ときめき」を届けたい。<br/><br/>
                  そんな思いを胸に「信頼できるニュース」と、人生を明るく楽しく生きるために必要な、「健康」「お金」という２大テーマを中心に、「使える」読み応えのある情報をこれからも『女性自身』は発信していきますので、ご期待ください。
                </p>
                <div className="text-right border-t-4 border-black pt-6">
                  <p className="font-bold text-gray-600 mb-1 text-lg">女性自身編集長</p>
                  <p className="text-3xl md:text-4xl font-black tracking-widest">江口岳志</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12">女性自身プレミアムに申し込む</h2>
            <button className="mb-8 px-6 py-3 border-2 border-black bg-white hover:bg-gray-100 font-bold transition-colors text-lg">
              定期購読のご購入方法はこちら
            </button>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="w-full sm:w-auto px-10 py-6 border-4 border-black bg-black text-white text-xl font-bold hover:bg-gray-800 transition-colors shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(200,200,200,1)]">
                年額コース
              </button>
              <button className="w-full sm:w-auto px-10 py-6 border-4 border-black bg-white text-black text-xl font-bold hover:bg-gray-50 transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                月額コース
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t-4 border-black py-4 z-50 transform translate-y-0 transition-transform">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="font-bold hidden md:block mr-4 text-lg">お申し込みはこちらから</span>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-black bg-black text-white font-bold hover:bg-gray-800 transition-colors text-lg flex items-center justify-center gap-2">
              女性自身プレミアム［年額コース］ <ChevronRight size={18}/>
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-black bg-white text-black font-bold hover:bg-gray-100 transition-colors text-lg flex items-center justify-center gap-2">
              女性自身プレミアム［月額コース］ <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
