import { Grid } from "@mui/material";
import { Spacer } from "@nextui-org/react";

import HomepageAboutCard from "./homepageAboutCard";

import DailyMixCard from "@/components/DailyMixCard";
import HomepageTweets from "@/components/HomepageTweets";
export default function HomepageInfo() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <Grid container columns={16} spacing={2}>
        <Grid item xs={7}>
          <DailyMixCard />
        </Grid>
        <Grid item xs={9}>
          <HomepageTweets
            hashtag="#Welcome!!"
            message="Welcome to my personal site!"
          />
          <Spacer y={3} />
          <HomepageTweets
            hashtag="#MeetSheng2024"
            message="MIT 2024 B.S. and 2025 M.Eng in CS. Python and Java enthusiast!"
          />
        </Grid>
        <Grid item xs={16}>
          <HomepageAboutCard />
        </Grid>
      </Grid>
    </div>
  );
}
