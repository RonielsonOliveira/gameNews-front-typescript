import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loading } from "@/components/Loading";
import { LoadingContainer, Spinner } from "./styled";

export const RouteLoading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  if (!loading) {
    return null;
  }

  return <Loading />;
};
