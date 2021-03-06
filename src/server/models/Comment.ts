interface IComment {
  articleId: number;
  displayCount: () => number;
}

export class Comment implements IComment {
  private count: number;
  public articleId: number;

  constructor(count: number, articleId: number) {
    this.count = count;
    this.articleId = articleId;
  }

  displayCount(): number {
    return this.count;
  }
}
