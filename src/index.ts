import { email, highlightsParser, randomHighlightsSlice } from "./utils";
import { config } from "dotenv";

config();

const run = async () => {
  const allHighlights = await highlightsParser("./src/test/My Clippings.txt");
  const randomSlice = randomHighlightsSlice(allHighlights, 2);

  await email(randomSlice);
};

run();
