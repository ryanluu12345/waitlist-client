import React from 'react';
import { useParams } from 'react-router';

export default function CustomerWaitlist() {
  const { restaurant } = useParams();
  return (
    <div>
      Customer Waitlist for: {restaurant}
    </div>
  );
}
