"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import { CiHeart, CiRepeat } from "react-icons/ci";
import { IoPauseCircleOutline, IoShuffle } from "react-icons/io5";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { siteConfig } from "@/config/site";

export default function HomepageAboutCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src={`${siteConfig.pictures.homepage}`}
              width={200}
            />
          </div>

          <div className="flex flex-col col-span-10 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{`Sheng's Mix`}</h3>
                <p className="text-small text-foreground/80">318 Tracks</p>
                <h1 className="text-large font-medium mt-2">{`Adventures of the Snake`}</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <CiHeart />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={10}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">2:30</p>
                <p className="text-small text-foreground/50">3:18:01</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <CiRepeat />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <GrFormPrevious />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <IoPauseCircleOutline />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <GrFormNext />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <IoShuffle />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
