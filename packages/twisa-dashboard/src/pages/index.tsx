import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import { tweets } from '../example/tweets';
import { settings } from '../example/settings';

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className="w-full h-full p-3 bg-slate-100">
        <nav>
          <ul>
            {settings.map((setting) => (
              <li key={setting.id} className="mb-1">
                <a
                  className={classNames('block w-full text-sm px-3 py-1 rounded-full', {
                    'bg-slate-700 text-slate-50': setting.id === '1',
                  })}
                  href=""
                >
                  {setting.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="p-8 overflow-auto">
        <h1 className="text-3xl tracking-wider">検索設定名</h1>
        <p className="inline-block rounded mt-3 px-3 py-1 text-sm tracking-tight bg-slate-100">
          <SearchIcon className="mr-1" fontSize="inherit" />
          検索キーワード
        </p>

        <section className="my-6">
          <h2 className="text-lg mb-3">ツイート</h2>
          <div className="border rounded">
            <table className="table-auto w-full">
              <thead>
                <tr className="border-b border-b-slate-300">
                  <th className="text-left p-2 pl-6 bg-slate-100 text-sm">ツイート本文</th>
                  <th className="text-left p-2 bg-slate-100 text-sm">ユーザー名</th>
                  <th className="text-left p-2 bg-slate-100 text-sm">ユーザーID</th>
                  <th className="text-left p-2 pr-6 bg-slate-100 text-sm">投稿日時</th>
                </tr>
              </thead>
              <tbody>
                {tweets.map((tweet) => (
                  <tr key={tweet.id} className="border-b border-b-slate-200">
                    <td className="p-2 pl-6 bg-slate-50 text-sm whitespace-pre-wrap">
                      <p className="overflow-hidden line-clamp-3">{tweet.body}</p>
                    </td>
                    <td className="p-2 bg-slate-50 text-sm align-top">{tweet.name}</td>
                    <td className="p-2 bg-slate-50 text-sm align-top">@{tweet.screenName}</td>
                    <td className="p-2 pr-6 bg-slate-50 text-sm align-top">
                      {tweet.date.toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
