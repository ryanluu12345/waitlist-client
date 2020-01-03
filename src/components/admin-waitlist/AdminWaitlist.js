import React from 'react';
import { useParams } from 'react-router';

export default function AdminWaitlist() {
  const { restaurant } = useParams();
  return (
    <div>
      Manage your waitlist here for: {restaurant}
    </div>
  );
}
