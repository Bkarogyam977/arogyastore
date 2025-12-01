'use client';
import React, { Suspense } from 'react';
import Login from '../doctor/Login';

export default function Loginpage() {
  return (
    <Suspense fallback={<div>.↻..Loading..↻.</div>}>
      <div><Login /></div>
    </Suspense>
  );
}