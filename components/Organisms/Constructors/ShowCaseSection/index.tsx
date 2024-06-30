"use client";

import { useEffect, useState } from "react";

import FeatureShowCaseItem from "@/components/Organisms/FeatureShowCaseItem";

import { get } from "lodash";

import axios from "axios";

import apiDataShowcases from "@/apiData/showcases.json";

const RightHandSection = () => {
  const [showCases, setShowCases] = useState<any[]>([]);

  const fetchShowCases = async () => {
    try {
      // let api = await axios.get("/api/showcases");
      // setShowCases(get(api, "data.items", []));

      setShowCases([...apiDataShowcases]);
    } catch (e) {
      console.error(e);
      setShowCases([]);
    }
  };

  useEffect(() => {
    fetchShowCases();
  }, []);

  return (
    <div className="w-1/5 sticky top-0 right-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pl-8 pb-16">
      <div className="flex flex-col gap-16">
        {showCases.map((showCase: any, index: number) => (
          <FeatureShowCaseItem key={index} {...showCase} />
        ))}
      </div>
    </div>
  );
};

export default RightHandSection;
