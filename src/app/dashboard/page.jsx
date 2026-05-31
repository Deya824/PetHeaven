import { redirect } from 'next/navigation';

export default function DashboardHome() {
  // Automatically redirect the root dashboard route to the My Listings page
  redirect('/dashboard/my-listings');
}