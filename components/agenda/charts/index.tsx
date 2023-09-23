"use client"
import useFoodStore from "@/hooks/useFoodStore";
import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from "recharts";

type Props = {};

const ChartComponent = (props: Props) => {
  const { foods,getFoods } = useFoodStore();
  useEffect(()=>{
    getFoods();
  },[getFoods])
  return (
    <div className="flex-1">
      <ResponsiveContainer width="100%"  aspect={6 / 3}>

      <BarChart  data={foods} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="calories" fill="#000" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
