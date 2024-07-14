"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@mui/material";

import { siteConfig } from "@/config/site";

interface HomepageTweetCardProps {
  message: string;
  hashtag: string;
}

export default function HomepageTweetCard({
  message,
  hashtag,
}: HomepageTweetCardProps) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={siteConfig.pictures.tweet_pic}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Sheng Huang
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @shengh318
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <Divider color="grey" orientation="horizontal" />
      <CardBody className="px-3 py-3 text-small text-default-400">
        <p>{message}</p>
        <span className="pt-2">{hashtag}</span>
      </CardBody>
      {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter> */}
    </Card>
  );
}
