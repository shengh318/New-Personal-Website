"use client";
import { Grid } from "@mui/material";

import HomepageInfo from "@/components/HomepageInfo";
import Computer1Comp from "@/components/Computer1Comp";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div> */}

      <div className="inline-block">
        <Grid container columns={16} spacing={2}>
          {/* <Grid item xs={16}>
            <Canvas>
              <Suspense>
                <ambientLight />
                <OrbitControls />
                <Computer1 />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </Grid>
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
        </Grid> */}
          <Grid item xs={8}>
            <Computer1Comp />
          </Grid>
          <Grid item xs={8}>
            <HomepageInfo />
          </Grid>
        </Grid>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
