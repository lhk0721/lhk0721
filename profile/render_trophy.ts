// Renders the trophy card as an SVG with the options the README used to pass to the
// trophy server: four columns, no frame, trophies of unknown rank hidden. The script
// runs from inside a checkout of ryo-ma/github-profile-trophy (pinned to one commit in
// .github/workflows/grs.yml), so the relative imports resolve there. The token comes
// from the GITHUB_TOKEN1 environment variable, as in that project.
//
//   deno run --allow-net --allow-env --allow-read --allow-write render_trophy.ts <user> [out.svg]

import { GithubApiService } from "./src/Services/GithubApiService.ts";
import { Card } from "./src/card.ts";
import { COLORS } from "./src/theme.ts";
import { CONSTANTS } from "./src/utils.ts";
import type { UserInfo } from "./src/user_info.ts";

const [username, outputPath = "trophy.svg"] = Deno.args;
if (!username) {
  console.error("usage: render_trophy.ts <username> [output.svg]");
  Deno.exit(1);
}

const info = await new GithubApiService().requestUserInfo(username);
if (!info || (info as { totalCommits?: number }).totalCommits === undefined) {
  console.error("user info not fetched: check GITHUB_TOKEN1, the username and the rate limit");
  Deno.exit(2);
}

const card = new Card(
  [], // every title
  ["-?"], // hide the trophies whose rank is unknown
  4, // column=4
  CONSTANTS.DEFAULT_MAX_ROW,
  CONSTANTS.DEFAULT_PANEL_SIZE,
  CONSTANTS.DEFAULT_MARGIN_W,
  CONSTANTS.DEFAULT_MARGIN_H,
  CONSTANTS.DEFAULT_NO_BACKGROUND,
  true, // no-frame=true
);
await Deno.writeTextFile(outputPath, card.render(info as UserInfo, COLORS.default));
console.log(`wrote ${outputPath}`);
