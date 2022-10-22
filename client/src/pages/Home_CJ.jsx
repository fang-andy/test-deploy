import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

export default function Home_CJ () {
  // const { modules } = useSelector(state => state.user)
  const [searchParams, setSearchParams] = useSearchParams();
  let module = searchParams.get('module');

  return (
    <iframe src={module} width="100%" height='100%'/>
  )
} 