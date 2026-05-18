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

export default function AppDesign() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24 selection:bg-pink-600 selection:text-white">

      {/* Header */}
      <header className="border-b border-pink-200 sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-pink-500 font-bold mb-0.5 tracking-widest">kokode ブックス</p>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              <span className="text-pink-600">女性自身</span>プレミアム
            </div>
          </div>
          <nav className="flex gap-2 flex-wrap justify-center">
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 font-bold text-sm transition-colors text-gray-700">所持ポイント</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 font-bold text-sm transition-colors text-gray-700">ポイントを使う</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 font-bold text-sm transition-colors text-gray-700">ログイン</button>
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 font-bold text-sm transition-colors border border-pink-600">新規会員登録</button>
          </nav>
        </div>
      </header>

      <main>
        {/* FV / Hero Section */}
        <section className="w-full relative min-h-[580px] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #ffe4ee 50%, #ffd6e7 100%)' }}>
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-pink-100 opacity-60 pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-pink-200 opacity-40 pointer-events-none" />

          <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-300 text-pink-600 font-bold text-sm md:text-base mb-8 shadow-sm">
              雑誌 ＋ デジタルサービス ＋ 各種特典付き
            </div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight text-gray-900">
              <span className="text-pink-600">女性自身</span><br className="md:hidden" />プレミアム
            </h2>

            <p className="text-lg md:text-2xl font-bold text-gray-700 mb-10 leading-relaxed">
              毎号送料無料で「女性自身」を<br className="sm:hidden" />ご自宅・オフィスにお届け！
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200 flex items-center gap-2">
                年額コースに申し込む <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-pink-600 font-bold text-lg hover:bg-pink-50 transition-colors border-2 border-pink-300 flex items-center gap-2">
                月額コースに申し込む <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Section 1: Update Announcement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-pink-100 shadow-lg overflow-hidden">
            <div className="bg-pink-600 text-white px-8 py-4 flex items-center justify-center gap-3">
              <span className="text-sm font-bold tracking-widest bg-white text-pink-600 px-3 py-1 rounded-full">NEW</span>
              <span className="font-bold text-lg md:text-xl">6月2日（火）よりアップデート！</span>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800 leading-snug">
                女性自身定期購読「女性自身プレミアム」が<br />パワーアップしてリニューアル
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {[
                  { text: <>定期購読を新規・継続購入すると<strong className="text-pink-600">ポイントを付与</strong></> },
                  { text: <>より気軽に始められる<strong className="text-pink-600">月額コース</strong>がスタート</> },
                  { text: <>初回特典で<strong className="text-pink-600">2,000円分</strong>のkokodeクーポンをプレゼント</> },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-pink-50 border border-pink-100">
                    <div className="w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Course Options */}
        <section className="py-20 px-4 bg-pink-50" id="plans">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-pink-600 font-bold text-sm tracking-widest mb-3">SUBSCRIPTION PLAN</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">選べる2つの定期購読コース</h2>
              <p className="text-gray-600 font-medium">毎号送料無料でご自宅・オフィスにお届けします</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Annual Course */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-pink-400 relative">
                <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  おすすめ
                </div>
                <div className="bg-pink-600 text-white px-8 py-5 text-center">
                  <p className="text-sm font-bold opacity-80 mb-1">＼ 1番お得！ ／</p>
                  <h3 className="text-2xl font-extrabold">年額コース</h3>
                </div>
                <div className="p-8 flex flex-col">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">16,920</span>
                    <span className="text-xl font-bold text-gray-700 ml-1">円</span>
                    <p className="text-gray-500 font-medium mt-2">（税込）/ 36冊</p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-xl py-4 px-6 mb-8 text-center">
                    <p className="text-gray-700 font-medium mb-1">「雑誌1年分」通常購入よりも</p>
                    <p className="text-pink-600 font-black text-2xl">2,460円お得！</p>
                  </div>
                  <button className="w-full py-4 rounded-full bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-colors shadow-md shadow-pink-200 flex items-center justify-center gap-2">
                    年額コースに申し込む <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Monthly Course */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="bg-gray-100 text-gray-700 px-8 py-5 text-center">
                  <p className="text-sm font-bold opacity-70 mb-1">まずはお試し！</p>
                  <h3 className="text-2xl font-extrabold">月額コース</h3>
                </div>
                <div className="p-8 flex flex-col">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">1,500</span>
                    <span className="text-xl font-bold text-gray-700 ml-1">円</span>
                    <p className="text-gray-500 font-medium mt-2">（税込）/ 3冊</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 mb-8 text-center">
                    <p className="text-gray-600 font-medium mb-1">お試しにぴったり！</p>
                    <p className="text-gray-700 font-bold text-lg">気軽にスタートできるコース</p>
                  </div>
                  <button className="w-full py-4 rounded-full bg-white text-pink-600 font-bold text-lg hover:bg-pink-50 transition-colors border-2 border-pink-300 flex items-center justify-center gap-2">
                    月額コースに申し込む <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Member Benefits */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-pink-600 font-bold text-sm tracking-widest mb-3">MEMBER BENEFITS</p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900">
                女性自身プレミアム会員なら<br />限定特典が盛り沢山！
              </h2>
            </div>

            <div className="space-y-10">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100">
                <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={36} />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-xs font-bold tracking-widest opacity-80 block mb-1">特典 1</span>
                    <h3 className="text-xl md:text-2xl font-extrabold">デジタルサービス『女性自身Premium』</h3>
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <h4 className="text-lg md:text-xl font-bold mb-8 text-pink-600 text-center md:text-left">
                    たくさんのコンテンツがスマホでも読める！
                  </h4>
                  <ul className="space-y-8">
                    <li className="flex flex-col sm:flex-row gap-8 items-center">
                      <div className="w-full sm:w-2/5 aspect-video bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="text-pink-300" size={36} />
                      </div>
                      <div className="w-full sm:w-3/5">
                        <strong className="text-lg flex items-center gap-2 mb-3 text-gray-900">
                          <Check className="text-pink-600 flex-shrink-0" size={22} />
                          過去2年分の『女性自身』がすべて読み放題
                        </strong>
                        <p className="text-gray-600 leading-loose">見逃したニュース、振り返りたい健康記事、何度でも読み返したいレシピページなど。「ワード検索」で過去2年分がいつでも読めます！</p>
                      </div>
                    </li>
                    <li className="flex flex-col sm:flex-row-reverse gap-8 items-center border-t border-gray-100 pt-8">
                      <div className="w-full sm:w-2/5 aspect-video bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="text-pink-300" size={36} />
                      </div>
                      <div className="w-full sm:w-3/5">
                        <strong className="text-lg flex items-center gap-2 mb-3 text-gray-900">
                          <Check className="text-pink-600 flex-shrink-0" size={22} />
                          ムック、マンガも読み放題
                        </strong>
                        <p className="text-gray-600 leading-loose">・愛くるしいパンダの軌跡をたどれる『パンダ自身』<br />・スマホで見やすいレシピ集『女性自身お料理コレクション』<br />など注目コンテンツが目白押し！</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 border-t border-gray-100 pt-8">
                      <Check className="text-pink-600 flex-shrink-0" size={22} />
                      <strong className="text-lg text-gray-900">会員限定のオリジナル動画も続々アップ</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 flex flex-col md:flex-row">
                <div className="bg-pink-50 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-pink-100">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <Coins size={36} className="text-pink-600" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-pink-500 mb-2">特典 2</span>
                  <h3 className="text-xl font-extrabold text-gray-900">ポイントが貯まる</h3>
                </div>
                <div className="p-6 md:p-10 md:w-2/3 flex flex-col justify-center">
                  <ul className="space-y-5">
                    {[
                      { title: '定期購読の新規・継続購入でポイントを付与', desc: '次回の定期購読購入にも利用できます。' },
                      { title: 'キャンペーン期間中は購入金額の10％をポイント還元', desc: 'キャンペーン期間：2026年6月2日～2027年5月31日' },
                      { title: 'kokodeクーポンのプレゼントや抽選プレゼントも！', desc: '' },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} />
                        </div>
                        <div>
                          <strong className="block text-gray-900 font-bold mb-1">{item.title}</strong>
                          {item.desc && <p className="text-gray-500 text-sm">{item.desc}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100">
                <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Gift size={36} />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-xs font-bold tracking-widest opacity-80 block mb-1">特典 3</span>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-extrabold">季節のプレゼント</h3>
                      <span className="bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full">全員プレゼント</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <h4 className="text-lg font-bold mb-8 text-center text-pink-600">季節ごとにうれしいプレゼントをお届け！</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { title: '「お料理コレクション」ポストカード', desc: '4号ごとに、編集部おすすめレシピをポストカードにしてお届け' },
                      { title: '皇室報道ダイジェスト（約32ページ予定）', desc: '1年分の皇室報道をまとめた特別冊子を、12月発売号に同梱予定' },
                      { title: '2027年「皇室ご予定」丸わかりカレンダー', desc: '皇室のご予定がひと目でわかるカレンダーを、3月発売号に同梱予定' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-4">
                        <div className="w-full aspect-square bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center">
                          <ImageIcon className="text-pink-300" size={36} />
                        </div>
                        <div>
                          <strong className="block text-gray-900 font-bold mb-2">{item.title}</strong>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 flex flex-col md:flex-row">
                <div className="bg-pink-50 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-pink-100">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <Calendar size={36} className="text-pink-600" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-pink-500 mb-2">特典 4</span>
                  <h3 className="text-xl font-extrabold text-gray-900">会員限定イベント</h3>
                </div>
                <div className="p-6 md:p-10 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-lg font-bold mb-6 text-gray-900">会員限定イベントを続々企画中！</h4>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/2 aspect-video bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center">
                      <ImageIcon className="text-pink-300" size={36} />
                    </div>
                    <ul className="space-y-4 w-full md:w-1/2">
                      {['イベントやセミナーへのご招待', 'ここでしか体験できない特典をご用意'].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={22} className="text-pink-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 flex flex-col md:flex-row">
                <div className="bg-pink-50 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-pink-100">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <Truck size={36} className="text-pink-600" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-pink-500 mb-2">特典 5</span>
                  <h3 className="text-xl font-extrabold text-gray-900">送料無料</h3>
                </div>
                <div className="p-6 md:p-10 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">送料は光文社が負担！</h4>
                  <p className="text-gray-600 leading-relaxed border-t border-dashed border-gray-200 pt-4">
                    さらに特大号の差額も光文社が負担いたします。
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Summary */}
            <div className="mt-20 p-8 md:p-12 rounded-2xl bg-pink-50 border border-pink-100 text-center">
              <p className="text-pink-600 font-black text-2xl mb-4">and MORE...</p>
              <p className="text-gray-700 font-medium leading-loose">
                女性自身Premiumは、これからがもっと充実。<br />
                人気占い師の連載（湊きよひろさん、蛯名里香さんなど）や<br className="hidden md:block" />
                皇室、動画など、新コンテンツが続々登場予定です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Notice */}
        <section className="mb-24 px-4">
          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-4">
            <AlertCircle className="flex-shrink-0 text-gray-400 mt-0.5" size={22} />
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-1 font-bold text-gray-700">「女性自身シンプル」の定期購読コースは終了いたしました。</p>
              <p className="text-sm">現在ご契約中のお客様には、更新時期が近づきましたら、あらためてご案内をお送りいたします。</p>
            </div>
          </div>
        </section>

        {/* Section 5: Editor's Message */}
        <section className="py-24 px-4" style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #fce7f3 100%)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-pink-600 font-bold text-sm tracking-widest mb-3">EDITOR'S MESSAGE</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">編集長からのコメント</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-100 relative">
              <Quote className="absolute -top-5 -left-3 text-pink-600 bg-white rounded-full p-2 shadow-md" size={48} />
              <div className="pt-4">
                <p className="mb-8 leading-loose text-gray-700">
                  仕事、子育て、体型や顔の変化（進化？）、夫婦関係、婚活のこと、老後や更年期のこと⋯。いつもご愛読いただきありがとうございます。<br /><br />
                  女性自身は、「読者からの信頼性を大切に、読者の視点で記事を作成する！」といった情熱を持ち続け、日々コンテンツを作成しています。心も体も若々しく、これから「人生の後半戦」を楽しもうという意欲に満ちている読者を応援したい。あなたの明日に「ときめき」を届けたい。<br /><br />
                  そんな思いを胸に「信頼できるニュース」と、人生を明るく楽しく生きるために必要な、「健康」「お金」という２大テーマを中心に、「使える」読み応えのある情報をこれからも『女性自身』は発信していきますので、ご期待ください。
                </p>
                <div className="text-right border-t border-pink-100 pt-6">
                  <p className="text-gray-500 text-sm mb-1">女性自身編集長</p>
                  <p className="text-2xl md:text-3xl font-black text-gray-900">江口岳志</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-pink-600 font-bold text-sm tracking-widest mb-4">APPLY NOW</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">女性自身プレミアムに<br />申し込む</h2>
            <p className="text-gray-500 mb-10">
              <button className="underline underline-offset-4 hover:text-pink-600 transition-colors font-medium">
                定期購読のご購入方法はこちら
              </button>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-pink-600 text-white text-lg font-bold hover:bg-pink-700 transition-colors shadow-xl shadow-pink-200 flex items-center justify-center gap-2">
                年額コースに申し込む <ChevronRight />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-pink-600 text-lg font-bold hover:bg-pink-50 transition-colors border-2 border-pink-300 flex items-center justify-center gap-2">
                月額コースに申し込む <ChevronRight />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-pink-100 py-3 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <span className="font-bold hidden md:block mr-2 text-gray-700 text-sm">お申し込みはこちら</span>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 transition-colors text-sm flex items-center justify-center gap-2 shadow-md shadow-pink-200">
              女性自身プレミアム［年額コース］ <ChevronRight size={16} />
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-pink-600 font-bold hover:bg-pink-50 transition-colors border border-pink-300 text-sm flex items-center justify-center gap-2">
              女性自身プレミアム［月額コース］ <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
