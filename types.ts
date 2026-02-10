import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface ApprovedStudent {
  name: string;
  course: string;
  university: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}