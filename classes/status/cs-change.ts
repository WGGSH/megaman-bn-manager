import { StatusBaseString } from '@/classes/status/base/string';

export class StatusCsChange extends StatusBaseString {
  constructor(value: string) {
    super('cs-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'mega-cannon':
        return 'メガキャノン';

      case 'ice-cube':
        return 'アイスキューブ';

      case 'grass-seed':
        return 'クサムラシード';

      case 'panel-steal':
        return 'パネルスチール';

      case 'black-bomb':
        return 'ブラックボム';

      case 'fire-burner':
        return 'ヘルズバーナー';

      case 'flash-bomb':
        return 'フラッシュボム';

      case 'doll-thunder':
        return 'ドールサンダー';

      case 'spread-gun':
        return 'スプレッドガン';

      case 'ice-seed':
        return 'アイスシード';

      case 'long-sword':
        return 'ロングソード';

      case 'yo-yo':
        return 'ヨーヨー';

      case 'step-sword':
        return 'フミコミザン';

      case 'blizzard-ball':
        return 'ブリザードボール';

      case 'wide-sword':
        return 'ワイドソード';

      case 'drill-arm':
        return 'ドリルアーム';

      case 'count-bomb':
        return 'カウントボム';

      case 'bubble-spread':
        return 'バブルスプレッド';

      case 'invisible':
        return 'インビジブル';

      case 'bamboo-lance':
        return 'バンブーランス';

      case 'cannon':
        return 'キャノン';

      case 'machine-gun':
        return 'マシンガン';

      case 'elec-pulse':
        return 'エレキパルス';

      case 'corn-shot':
        return 'コーンショット';

      case 'sand-worm':
        return 'サンドワーム';

      case 'tornado':
        return 'トルネード';

      case 'elec-sword':
        return 'エレキソード';

      case 'big-bomb':
        return 'ビッグボム';

      case 'vulcan':
        return 'バルカン';

      case 'voodoo-dall':
        return 'ワラニンギョウ';

      case 'bamboo-sword':
        return 'バンブーソード';

      case 'circle-gun':
        return 'サークルガン';

      case 'thunder-ball':
        return 'サンダーボール';

      case 'wind-racket':
        return 'フウジンラケット';

      case 'wide-shot':
        return 'ワイドショット';

      case 'steal-punish':
        return 'スチールパニシュ';

      case 'dark-sword':
        return 'ダークソード';

      case 'super-vulcan':
        return 'スーパーバルカン';

      case 'shooting-buster':
        return 'シューティングバスター';

      case 'gun-del-sol':
        return 'ガンデルソル';

      case 'blood-rain':
        return 'ブラッドレイン';

      case 'z-saber':
        return 'Zセイバー';

      case 'hells-rolling':
        return 'ヘルズローリング';

      default:
        return '不明';
    }
  }

  public apply(value: string): void {
    this._value = value;
  }

  public toString(): string {
    return `CS変更: ${this.valueToString()}`;
  }
}
