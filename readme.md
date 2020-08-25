## 注意点
- cssの圧縮・プレフィクサーはmain.cssを対象にしとるからファイル名を変える場合はnpm scriptsを書き換えましょ
- css圧縮 postcss.config.jsで設定変えて、css/postcssを実行
- pngの圧縮・v7以降引数の書き方が変わった。https://qiita.com/hibikikudo/items/2c82119ac5acf9cb3394
- 圧縮系はwatchしなくてええんやないの(模索中)
- 画像のonchangeとjsの処理は今のとこさせてない
- watchが遅いので今のとこnpm run ~script名で実行
