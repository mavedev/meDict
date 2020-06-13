import { existsSync } from 'fs';
import sqlite3 from 'sqlite3';

import { Word } from './DBObjects';

const defaultDBPath = './words.db';

interface ReadQueryResult {
  word: string;
  date: string;
}

export default class DAO {
  private connection: sqlite3.Database | null = null;

  constructor(private dbPath: string = defaultDBPath) {}

  public create(word: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `INSERT INTO words VALUES(
        '${word.value}',
        '${word.date}'
      )`
    );
  }

  public read(date: Date): Word[] {
    let result: Word[] = [];
    const query = `
      SELECT *
      FROM words
      WHERE words.date = ${date.toUTCString()}
      ORDER BY words.word`;
    /* eslint no-unused-expressions: off */
    this.connection?.all(query, (error, rows) => {
      result = error ? [] : DAO.getWordsFromQueryResult(rows);
    });
    return result;
  }

  public update(payload: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `UPDATE words
       SET word = ${payload.value},
       WHERE id = ${payload.id}`
    );
  }

  public delete(word: Word): void {
    /* eslint no-unused-expressions: off */
    this.connection?.run(
      `DELETE FROM words
       WHERE id = ${word.id}`
    );
  }

  public createDB(): void {
    if (!DAO.checkIfExists(this.dbPath)) {
      this.connection = new sqlite3.Database(this.dbPath, (error) => {
        throw error;
      });
      this.connection.run(
        `CREATE TABLE words (
          id INTEGER PRIMARY KEY,
          word TEXT
          date TEXT
        )`
      );
    }
  }

  private static checkIfExists(dbPath: string): boolean {
    return existsSync(dbPath);
  }

  private static getWordsFromQueryResult(rows: ReadQueryResult[]): Word[] {
    const result: Word[] = [];
    rows.forEach((value) => {
      result.push(new Word(null, value.word, value.date));
    });
    return result;
  }
}
