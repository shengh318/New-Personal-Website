import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export default function DailyMixCard() {
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src={siteConfig.pictures.face_picture}
        width={300}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Engineer Ring</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          MIT 2024
        </Button>
      </CardFooter>
    </Card>
  );
}
