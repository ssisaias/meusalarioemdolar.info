import Database from "better-sqlite3";

const db = new Database("database.db");
db.pragma("journal_mode = WAL");

interface ScrapedData {
  id: number;
  content: string;
}

export function insertScrapedData(content: string): void {
  const stmt = db.prepare("INSERT INTO scraped_data (content) VALUES (?)");
  stmt.run(content);
  console.log("Data saved");
}

export function getScrapedData(): ScrapedData[] {
  const stmt = db.prepare("SELECT * FROM scraped_data");
  const result = stmt.all() as ScrapedData[];
  console.log(result);
  return result;
}
