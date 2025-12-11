import React from "react";
import { notFound } from "next/navigation";
import { packageLists } from "@/constants";
import PackageDetailsClient from "@/components/services/PackageDetailsClient";

const PackageDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const packageItem = packageLists.find((p) => p.slug === slug);

  if (!packageItem) return notFound();

  return <PackageDetailsClient packageItem={packageItem} />;
};

export default PackageDetailsPage;
