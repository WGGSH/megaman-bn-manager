export class NaviCustomizer {
  public static readonly rows = 7;

  public static readonly cols = 7;

  private cells: number[][];

  constructor() {
    this.cells = [];
    for (let i = 0; i < NaviCustomizer.rows; i += 1) {
      this.cells[i] = [];
      for (let j = 0; j < NaviCustomizer.cols; j += 1) {
        this.cells[i][j] = 0;
      }
    }
  }
}
