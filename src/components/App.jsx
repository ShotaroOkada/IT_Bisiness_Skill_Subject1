import React, { useState } from 'react';
import '../styles/App.css';
import Speech from 'speak-tts'
import LineChart from './LineChart';
import Image from './Image';
import backlog from '../images/backlog.png';
import backlog2 from '../images/backlog2.png';
import backlog3 from '../images/backlog3.png';

const App = () => {
  const [status, setStatus] = useState(0);
  const texts = [
    '戸澤さんおはようございます',
    '確認したい業務を教えてください',
    'バイト先の進捗状況です。現在、想定よりも11時間ほど遅れています。頑張りましょう。',
    '現在のスプリントバックログです。現在はapiの仕様変更に伴った修正を行なっています。前回の勤務にてコンポーネント部分の修正が終了しました。次回データをフロント用に整形するところから。というコメントがありますがどうしますか。',
    'わかりました。それに伴い、スプリントバックログも更新しました。',
    'お疲れ様でした。退勤時間です。次回の勤務内容についてはどうしますか。',
    'わかりました。お疲れ様でした。'
  ]

  const speechText = (text, e) => {
    e.preventDefault();
    const speech = new Speech();
    speech.init().then((data) => { }).catch(e => { console.log('error init') });
    speech.speak({ text: text, }).then(() => { }).catch(e => { console.log('error speak') });
    setStatus(status => status + 1);
  }

  return (
    <div className="App">
      {(status === 1 || status === 2) && <div className='App-text'>戸澤さんおはようございます</div>}
      {status === 2 && <div className='App-text'>1.研究 2.バイト 3.個人開発 4.演習 5.トレーニング</div>}
      {status === 3 && <LineChart />}
      {status === 4 && (
        <div>
          <Image imgPath={backlog} />
          <div className='App-text'>
            現在やっていること：apiの仕様変更に伴った修正
      </div>
          <div className='App-text'>
            前回の勤務内容：コンポーネント部分の修正完了
      </div>
          <div className='App-text'>
            前回のコメント：次回データをフロント用に整形するところから
      </div>
        </div>
      )}
      {status === 5 && (
        <div>
          <Image imgPath={backlog2} />
          <div className='App-text'>
            現在やっていること：apiの仕様変更に伴った修正
      </div>
          <div className='App-text'>
            前回の勤務内容：コンポーネント部分の修正完了
      </div>
          <div className='App-text'>
            今回やること：次回データをフロント用に整形する
      </div>
        </div>
      )}
      {status >= 6 && (
        <div>
          <Image imgPath={backlog3} />
          <div className='App-text'>
            お疲れ様でした。退勤時間です。
      </div>
        </div>
      )}
      <button className='button' onClick={(e) => speechText(texts[status], e)}></button>
      {console.log(status)}
    </div>
  );
}

export default App;
