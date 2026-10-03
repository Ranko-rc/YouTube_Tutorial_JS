import React from "react";
import {Divider, Card, CardBody, Chip  } from "@nextui-org/react";
import { useState } from "react";
import useSWR from "swr";

import { useCode, useRates } from "../hooks";

export default function Home() {
  const {baseCurrency, setBaseCurrency } = useCode("CZK");
  const [selectedCode, setSelectedCode] = useState(["EUR", "CZK", "USD"]);
  const { code } = useCode();
  const { rates } = useRates();


  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
     <h1 className="text-3xl">Test app</h1>
     <Divider className="my-4" />
     <div>
      <Card>
        <CardBody>
          <h2 className="text-xl font-bold">CZK</h2>
        </CardBody>
      </Card>
     </div>
    </section>
  );
}
