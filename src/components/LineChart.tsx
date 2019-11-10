import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Line, ComposedChart, Legend } from 'recharts';

const LineChart = () => {
  //表示させたいデータ群
  const dataGraph = [
    { date: '11/01', '理想': 50, '現実': 50 },
    { date: '11/04', '理想': 40, '現実': 42 },
    { date: '11/07', '理想': 30, '現実': 38 },
    { date: '11/10', '理想': 20, '現実': 31 },
    { date: '11/13', '理想': 10 },
    { date: '12/16', '理想': 0 }
  ];

  return (
    <div className='rechart'>
      <ComposedChart //グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
        width={1000}  //グラフ全体の幅を指定
        height={300}  //グラフ全体の高さを指定
        data={dataGraph} //ここにArray型のデータを指定
        margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
      >
        <XAxis
          dataKey="date"  //Array型のデータの、X軸に表示したい値のキーを指定
        />
        <YAxis
          domain={[0, 50]}
        />
        <Tooltip /> // hoverした時に各パラメーターの詳細を見れるように設定
        <Legend />  // 凡例を表示(図の【売上】【総売上】)
        <CartesianGrid //グラフのグリッドを指定
          stroke="#f5f5f5" //グリッド線の色を指定
        />
        <Line //面積を表すグラフ
          // type="monotone"  //グラフが曲線を描くように指定。default値は折れ線グラフ
          dataKey="理想" //Array型のデータの、Y軸に表示したい値のキーを指定
          stroke="#00aced" //グラフの線の色を指定
          fillOpacity={1}  //グラフの中身の薄さを指定
          fill="rgba(0, 172, 237, 0.2)"  //グラフの色を指定
        />
        <Line
          dataKey="現実"
          stroke="red"
          fillOpacity={1}
          fill="red"
        />
      </ComposedChart>
      <div className='App-text50'>チーム：ドリルししゃもアライアンス</div>
      <div className='App-text'>プロダクト名：ドリルししゃも</div>
      <div className='App-text'>Sprint3目標：モックサーバ上にてクライアント側が正常に動作する</div>
    </div>
  )
}

export default LineChart;

